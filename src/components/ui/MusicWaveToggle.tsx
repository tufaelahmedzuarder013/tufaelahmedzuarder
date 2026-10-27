"use client";

import React, { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface MusicWaveToggleProps {
  className?: string;
}

// Global shared audio manager to keep all music toggles synced and avoid duplicate audio tracks
let sharedAudio: HTMLAudioElement | null = null;
const listeners = new Set<(playing: boolean) => void>();

function getSharedAudio(): HTMLAudioElement | null {
  if (typeof window === "undefined") return null;
  if (!sharedAudio) {
    const audio = new Audio("/naturemusic.mp3");
    audio.loop = true;
    audio.volume = 0.85;
    audio.preload = "none";
    audio.addEventListener("play", () => {
      listeners.forEach((listener) => listener(true));
    });
    audio.addEventListener("pause", () => {
      listeners.forEach((listener) => listener(false));
    });
    audio.addEventListener("ended", () => {
      listeners.forEach((listener) => listener(false));
    });
    sharedAudio = audio;
  }
  return sharedAudio;
}

export function MusicWaveToggle({ className }: MusicWaveToggleProps = {}) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Keep this component's isPlaying state in sync with the shared audio
    const listener = (playing: boolean) => {
      setIsPlaying(playing);
    };
    listeners.add(listener);

    // Initial check without auto-playing
    if (sharedAudio) {
      setIsPlaying(!sharedAudio.paused);
    }

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = getSharedAudio();
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, []);

  return (
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
          : "bg-transparent",
        className
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
            : "text-brand-ink/75 dark:text-zinc-300 group-hover:text-[#F75B00] dark:group-hover:text-white"
        )}
      >
        <path d="M4 12c2.5-4.5 5.5-4.5 8 0s5.5 4.5 8 0" />
      </svg>

      {/* Subtle pulsating aura when playing */}
      {isPlaying && (
        <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-emerald-400 pointer-events-none" />
      )}
    </button>
  );
}
