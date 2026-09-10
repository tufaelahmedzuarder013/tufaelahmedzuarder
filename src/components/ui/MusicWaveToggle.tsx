"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export function MusicWaveToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = false;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.warn("Play blocked:", err));
  }, []);

  const pauseAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.85;

    // Reset previous mute storage so autoplay always engages
    try {
      localStorage.removeItem("nature_music_enabled");
    } catch {}

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    // Fallback if filename variant is requested
    audio.onerror = () => {
      if (audio.src.includes("naturemuic.mp3")) {
        audio.src = "/naturemusic.mp3";
        audio.play().catch(() => {});
      }
    };

    // 1. First attempt: Direct unmuted play
    audio.muted = false;
    const directPlayPromise = audio.play();

    if (directPlayPromise !== undefined) {
      directPlayPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // 2. Browser policy blocked unmuted autoplay:
          // Start playing muted immediately so it buffers and plays in background
          audio.muted = true;
          audio.play().catch(() => {});

          // 3. Unmute the moment user interacts (moves mouse, scrolls, touches, or clicks)
          const unlockEvents = [
            "pointerdown",
            "mousedown",
            "mousemove",
            "pointermove",
            "touchstart",
            "touchmove",
            "scroll",
            "wheel",
            "keydown",
            "click",
          ];

          const unlockAudio = () => {
            if (audio) {
              audio.muted = false;
              audio
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => {});
            }
            unlockEvents.forEach((evt) => {
              window.removeEventListener(evt, unlockAudio);
              document.removeEventListener(evt, unlockAudio);
            });
          };

          unlockEvents.forEach((evt) => {
            window.addEventListener(evt, unlockAudio, { once: true, passive: true });
            document.addEventListener(evt, unlockAudio, { once: true, passive: true });
          });
        });
    }

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <>
      {/* Hidden audio element with autoplay and loop */}
      <audio
        ref={audioRef}
        src="/naturemuic.mp3"
        loop
        preload="auto"
        playsInline
        autoPlay
      />

      <button
        type="button"
        onClick={toggleMusic}
        aria-label={
          isPlaying
            ? "Nature music playing (Click to pause)"
            : "Nature music paused (Click to play)"
        }
        title={
          isPlaying
            ? "Nature Music: Playing (Click to mute)"
            : "Nature Music: Muted (Click to play)"
        }
        className={cn(
          "relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer group",
          "border-brand-ink/20 hover:border-brand-violet hover:bg-brand-ink/5",
          "dark:border-white/30 dark:hover:border-white/60 dark:hover:bg-white/10",
          isPlaying
            ? "border-emerald-500/70 dark:border-emerald-400/80 shadow-[0_0_12px_rgba(16,185,129,0.35)] bg-emerald-500/5 dark:bg-emerald-400/10"
            : "bg-transparent"
        )}
      >
        {/* Sine wave icon matching reference image */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "w-3.5 h-3.5 transition-all duration-300",
            isPlaying
              ? "text-emerald-600 dark:text-emerald-400 animate-pulse scale-110"
              : "text-brand-ink/75 dark:text-zinc-300 group-hover:text-brand-violet dark:group-hover:text-white"
          )}
        >
          <path d="M4 12c2.5-4.5 5.5-4.5 8 0s5.5 4.5 8 0" />
        </svg>

        {/* Subtle pulsating aura when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-emerald-400 pointer-events-none" />
        )}
      </button>
    </>
  );
}



