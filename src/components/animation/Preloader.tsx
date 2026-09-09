"use client";

import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [typedCount, setTypedCount] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const voiceSpokenRef = useRef(false);
  const activeNodesRef = useRef<{ stop: () => void }[]>([]);

  // The phrase broken down by words
  const phraseWords = useMemo(
    () => [
      { text: "Welcome", isHollow: false },
      { text: "to", isHollow: false },
      { text: "New", isHollow: true },
      { text: "World", isHollow: false },
    ],
    []
  );

  // Total characters count including spaces
  const totalCharacters = useMemo(() => {
    let count = 0;
    phraseWords.forEach((word, idx) => {
      count += word.text.length;
      if (idx < phraseWords.length - 1) count += 1; // space
    });
    return count;
  }, [phraseWords]);

  // Cleanup helper for preloader exit
  const finishPreloader = useCallback(() => {
    setIsFinished(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("hasSeenPreloader", "true");
      // Remove is-preloading so website is visible behind the opening doors
      document.documentElement.classList.remove("is-preloading");
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
    // Fade out / stop synth audio
    activeNodesRef.current.forEach((item) => {
      try {
        item.stop();
      } catch {}
    });
    activeNodesRef.current = [];
  }, []);

  // Futuristic, deep chill ambient music synthesized via Web Audio API
  const startAmbientMusic = useCallback(() => {
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
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + 0.8);
      masterGain.connect(ctx.destination);

      // Low-pass filter for warm analog ambient sound
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(850, ctx.currentTime);
      filter.Q.setValueAtTime(2.5, ctx.currentTime);
      filter.connect(masterGain);

      // Chord: Cmaj9 / Am9 chill dreamy notes (C3, G3, B3, E4)
      const chordFrequencies = [130.81, 196.0, 246.94, 329.63];

      chordFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        osc.type = idx % 2 === 0 ? "sawtooth" : "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.detune.setValueAtTime((idx - 1.5) * 8, ctx.currentTime);

        oscGain.gain.setValueAtTime(0.001, ctx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 1.0);

        osc.connect(oscGain);
        oscGain.connect(filter);
        osc.start();

        activeNodesRef.current.push({
          stop: () => {
            try {
              oscGain.gain.exponentialRampToValueAtTime(
                0.0001,
                ctx.currentTime + 0.4
              );
              osc.stop(ctx.currentTime + 0.45);
            } catch {}
          },
        });
      });

      // Warm Sub-bass drone (65.4 Hz - C2)
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = "triangle";
      subOsc.frequency.setValueAtTime(65.41, ctx.currentTime);
      subGain.gain.setValueAtTime(0.001, ctx.currentTime);
      subGain.gain.exponentialRampToValueAtTime(0.16, ctx.currentTime + 0.6);

      subOsc.connect(subGain);
      subGain.connect(masterGain);
      subOsc.start();

      activeNodesRef.current.push({
        stop: () => {
          try {
            subGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
            subOsc.stop(ctx.currentTime + 0.45);
          } catch {}
        },
      });

      // Shimmering crystalline arpeggio droplets
      const shimmerNotes = [523.25, 659.25, 783.99, 987.77, 1046.5];
      shimmerNotes.forEach((freq, i) => {
        const delay = 0.5 + i * 0.45;
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();

        chimeOsc.type = "sine";
        chimeOsc.frequency.setValueAtTime(freq, ctx.currentTime + delay);

        chimeGain.gain.setValueAtTime(0.0001, ctx.currentTime + delay);
        chimeGain.gain.linearRampToValueAtTime(
          0.04,
          ctx.currentTime + delay + 0.05
        );
        chimeGain.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + delay + 0.7
        );

        chimeOsc.connect(chimeGain);
        chimeGain.connect(masterGain);

        chimeOsc.start(ctx.currentTime + delay);
        chimeOsc.stop(ctx.currentTime + delay + 0.75);
      });
    } catch {}
  }, []);

  // Completion chime at 100%
  const playFinalChime = useCallback(() => {
    try {
      const ctx = audioCtxRef.current;
      if (!ctx) return;
      if (ctx.state === "suspended") ctx.resume();

      const finaleNotes = [523.25, 659.25, 783.99, 1046.5, 1318.51];
      finaleNotes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.06);

        gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.06);
        gain.gain.linearRampToValueAtTime(
          0.09,
          ctx.currentTime + idx * 0.06 + 0.04
        );
        gain.gain.exponentialRampToValueAtTime(
          0.0001,
          ctx.currentTime + idx * 0.06 + 1.2
        );

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(ctx.currentTime + idx * 0.06);
        osc.stop(ctx.currentTime + idx * 0.06 + 1.3);
      });
    } catch {}
  }, []);

  // Text-to-speech voice narration (fully automated & unmuted)
  const speakVoice = useCallback((text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    try {
      window.speechSynthesis.cancel();
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.92;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const pickVoice = () => {
        const voices = window.speechSynthesis.getVoices();
        if (voices.length > 0) {
          const natural = voices.find(
            (v) =>
              (v.lang.startsWith("en") &&
                (v.name.includes("Google") ||
                  v.name.includes("Natural") ||
                  v.name.includes("Samantha") ||
                  v.name.includes("Daniel") ||
                  v.name.includes("Karen") ||
                  v.name.includes("Serena") ||
                  v.name.includes("Jenny"))) ||
              v.lang === "en-US"
          );
          if (natural) utterance.voice = natural;
        }
      };

      pickVoice();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = () => {
          pickVoice();
          if (!voiceSpokenRef.current) {
            voiceSpokenRef.current = true;
            window.speechSynthesis.speak(utterance);
          }
        };
      }

      window.speechSynthesis.speak(utterance);
    } catch {}
  }, []);

  // Main lifecycle
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenPreloader");
    if (hasSeen) {
      document.documentElement.classList.remove("is-preloading");
      setIsFinished(true);
      setShouldRender(false);
      return;
    }

    document.documentElement.classList.add("is-preloading");
    setShouldRender(true);
    setIsFinished(false);

    // Start background ambient music immediately
    startAmbientMusic();

    // Voice narration triggers automatically in sync with typing
    const voiceTimer = setTimeout(() => {
      if (!voiceSpokenRef.current) {
        voiceSpokenRef.current = true;
        speakVoice("Welcome to New World");
      }
    }, 400);

    // Browser interaction listener fallback
    const unlockAudio = () => {
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      if ("speechSynthesis" in window) {
        if (window.speechSynthesis.paused) {
          window.speechSynthesis.resume();
        }
        if (!voiceSpokenRef.current) {
          voiceSpokenRef.current = true;
          speakVoice("Welcome to New World");
        }
      }
    };
    window.addEventListener("pointerdown", unlockAudio, { once: true });
    window.addEventListener("keydown", unlockAudio, { once: true });

    // Typing animation starts at ~300ms and reveals letter-by-letter left to right
    let typingTimer: NodeJS.Timeout | null = null;
    const startTypingTimeout = setTimeout(() => {
      let currentCount = 0;
      typingTimer = setInterval(() => {
        currentCount += 1;
        setTypedCount(currentCount);
        if (currentCount >= totalCharacters) {
          if (typingTimer) clearInterval(typingTimer);
        }
      }, 68);
    }, 300);

    // Progress counter 0 -> 100
    const startTime = Date.now();
    const duration = 2800;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      const eased = Math.round((1 - Math.pow(1 - progressRatio, 3)) * 100);
      setProgress(eased);

      if (progressRatio >= 1) {
        clearInterval(interval);
        playFinalChime();
        setTimeout(() => {
          finishPreloader();
        }, 380);
      }
    }, 28);

    return () => {
      clearInterval(interval);
      clearTimeout(voiceTimer);
      clearTimeout(startTypingTimeout);
      window.removeEventListener("pointerdown", unlockAudio);
      window.removeEventListener("keydown", unlockAudio);
      if (typingTimer) clearInterval(typingTimer);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, [startAmbientMusic, speakVoice, playFinalChime, finishPreloader, totalCharacters]);

  if (!shouldRender) return null;

  let globalCharIndex = 0;

  // Door transition animation easing curve (heavy luxury cinematic feel)
  const doorTransition = {
    duration: 1.1,
    ease: [0.76, 0, 0.24, 1],
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <div className="fixed inset-0 z-[99999] pointer-events-auto overflow-hidden select-none">
          {/* ================= LEFT DOOR PANEL ================= */}
          <motion.div
            key="preloader-left-door"
            initial={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={doorTransition}
            className="absolute top-0 bottom-0 left-0 w-[calc(50%+1px)] bg-[#FAFAFD] dark:bg-[#0B0B12] overflow-hidden z-10"
          >
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1414280a_1px,transparent_1px),linear-gradient(to_bottom,#1414280a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-400/20 dark:bg-violet-600/15 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-80 aspect-square rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[110px] pointer-events-none" />
          </motion.div>

          {/* ================= RIGHT DOOR PANEL ================= */}
          <motion.div
            key="preloader-right-door"
            initial={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={doorTransition}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#FAFAFD] dark:bg-[#0B0B12] overflow-hidden z-10"
          >
            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1414280a_1px,transparent_1px),linear-gradient(to_bottom,#1414280a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-400/15 dark:bg-pink-600/15 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-80 aspect-square rounded-full bg-cyan-400/10 dark:bg-cyan-600/10 blur-[110px] pointer-events-none" />
          </motion.div>

          {/* ================= PRELOADER CONTENT (Center) ================= */}
          <motion.div
            key="preloader-content-center"
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.94,
              transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] },
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Top Skip Button */}
            <div className="absolute top-6 right-8 text-xs font-mono text-brand-muted">
              <button
                onClick={finishPreloader}
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-brand-ink/10 bg-brand-surface/80 backdrop-blur-md hover:border-brand-violet hover:text-brand-violet transition-all cursor-pointer group shadow-sm"
              >
                <span>Skip</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Main Content Center */}
            <div className="flex flex-col items-center justify-center px-4 max-w-5xl mx-auto w-full">
              {/* Eyebrow */}
              <motion.div
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center justify-center gap-3 font-mono text-[11px] sm:text-xs text-brand-muted tracking-[0.3em] uppercase mb-6"
              >
                <span className="w-6 h-[1px] bg-brand-ink/20" />
                <span>TAZ • STUDIO</span>
                <span className="w-6 h-[1px] bg-brand-ink/20" />
              </motion.div>

              {/* Main Headline with Left-to-Right Typing Animation */}
              <div className="relative min-h-[50px] sm:min-h-[75px] md:min-h-[95px] lg:min-h-[110px] flex items-center justify-center mb-10 w-full">
                <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[88px] tracking-[0.02em] text-brand-ink text-center leading-[1.1] select-none flex flex-wrap items-center justify-center">
                  {phraseWords.map((wordObj, wIdx) => {
                    const letters = wordObj.text.split("");
                    return (
                      <span
                        key={`word-${wIdx}`}
                        className={`inline-flex items-center ${
                          wordObj.isHollow ? "relative px-1 font-extrabold" : ""
                        }`}
                        style={
                          wordObj.isHollow
                            ? {
                                WebkitTextStroke: "1.8px currentColor",
                                WebkitTextFillColor: "transparent",
                                color: "inherit",
                              }
                            : undefined
                        }
                      >
                        {letters.map((char, cIdx) => {
                          const charIdx = globalCharIndex++;
                          const isVisible = charIdx < typedCount;
                          const isCurrentActive = charIdx === typedCount - 1;

                          return (
                            <motion.span
                              key={`char-${wIdx}-${cIdx}`}
                              initial={false}
                              animate={{
                                opacity: isVisible ? 1 : 0,
                                y: isVisible ? 0 : 8,
                                scale: isVisible ? (isCurrentActive ? 1.05 : 1) : 0.85,
                              }}
                              transition={{
                                duration: 0.16,
                                ease: "easeOut",
                              }}
                              className="inline-block"
                            >
                              {char}
                            </motion.span>
                          );
                        })}
                        {/* Space between words */}
                        {wIdx < phraseWords.length - 1 && (() => {
                          const spaceIdx = globalCharIndex++;
                          const isSpaceVisible = spaceIdx < typedCount;
                          return (
                            <span
                              key={`space-${wIdx}`}
                              className="inline-block w-[0.28em]"
                              style={{ opacity: isSpaceVisible ? 1 : 0 }}
                            >
                              &nbsp;
                            </span>
                          );
                        })()}
                      </span>
                    );
                  })}
                </h1>
              </div>

              {/* Progress Bar with Numbers */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="flex items-center justify-center gap-4 sm:gap-6 mb-7 w-full max-w-sm sm:max-w-md px-6"
              >
                <span className="font-mono text-xs text-brand-muted tabular-nums w-8 text-right font-medium">
                  {String(progress).padStart(3, "0")}
                </span>
                <div className="flex-1 h-[2px] bg-brand-ink/15 rounded-full overflow-hidden relative">
                  <motion.div
                    className="h-full bg-brand-gradient rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-brand-muted w-8 text-left font-medium">
                  100
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="font-mono text-[10px] sm:text-xs text-brand-muted2 uppercase tracking-[0.45em] text-center font-medium"
              >
                CRAFTING YOUR EXPERIENCE
              </motion.p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
