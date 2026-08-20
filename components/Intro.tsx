"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type IntroProps = {
  onBegin: () => void;
};

export default function Intro({ onBegin }: IntroProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 1000),
      setTimeout(() => setStep(2), 4000),
      setTimeout(() => setStep(3), 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white">

      <AnimatePresence mode="wait">

        {step === 0 && (
          <motion.div
            key="one"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-3xl md:text-5xl font-semibold text-violet-400">
              I made something for you...
            </p>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="two"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-relaxed">
              I couldn't fit everything
              <br />
              I wanted to tell you
              <br />
              into a message.
            </h1>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="three"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-semibold leading-relaxed">
              So I built you
              <br />
              a little world instead.
            </h2>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="four"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button
              onClick={onBegin}
              className="rounded-full bg-violet-600 px-10 py-4 text-xl transition hover:scale-105 hover:bg-violet-500"
            >
              ❤️ Begin ❤️
            </button>
          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}