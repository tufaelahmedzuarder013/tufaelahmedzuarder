"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function MusicWaveToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      oscillatorsRef.current.forEach((osc) => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {}
      });
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      // Fade out and stop
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(
          0.0001,
          audioCtxRef.current.currentTime,
          0.3
        );
        setTimeout(() => {
          oscillatorsRef.current.forEach((osc) => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          });
          oscillatorsRef.current = [];
        }, 400);
      }
      setIsPlaying(false);
    } else {
      // Start ambient audio synthesis
      try {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioCtx) return;

        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        // Very gentle soft volume
        masterGain.gain.setTargetAtTime(0.04, ctx.currentTime, 1.2);

        // Warm lowpass filter for ethereal lo-fi tone
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(420, ctx.currentTime);

        masterGain.connect(filter);
        filter.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Ambient chord frequencies (C major 7th ethereal ambient drone)
        const notes = [130.81, 196.0, 246.94, 329.63]; // C3, G3, B3, E4
        const oscs: OscillatorNode[] = [];

        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, ctx.currentTime);

          // Subtle LFO detune for natural warmth
          const lfo = ctx.createOscillator();
          const lfoGain = ctx.createGain();
          lfo.frequency.setValueAtTime(0.08 + idx * 0.03, ctx.currentTime);
          lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
          lfo.connect(lfoGain);
          lfoGain.connect(osc.frequency);
          lfo.start();

          const noteGain = ctx.createGain();
          noteGain.gain.setValueAtTime(1 / notes.length, ctx.currentTime);

          osc.connect(noteGain);
          noteGain.connect(masterGain);
          osc.start();
          oscs.push(osc);
        });

        oscillatorsRef.current = oscs;
        setIsPlaying(true);
      } catch (err) {
        console.error("Audio playback error:", err);
      }
    }
  };

  return (
    <button
      type="button"
      onClick={toggleMusic}
      aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
      title={isPlaying ? "Mute ambient music" : "Play ambient music"}
      className={cn(
        "relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer group",
        "border-brand-ink/20 hover:border-brand-violet hover:bg-brand-ink/5",
        "dark:border-white/30 dark:hover:border-white/60 dark:hover:bg-white/10",
        isPlaying
          ? "border-brand-violet dark:border-brand-violet shadow-[0_0_12px_rgba(124,58,237,0.45)] bg-brand-violet/5 dark:bg-brand-violet/15"
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
            ? "text-brand-violet dark:text-brand-pink animate-pulse scale-110"
            : "text-brand-ink/75 dark:text-zinc-300 group-hover:text-brand-violet dark:group-hover:text-white"
        )}
      >
        <path d="M4 12c2.5-4.5 5.5-4.5 8 0s5.5 4.5 8 0" />
      </svg>
    </button>
  );
}
