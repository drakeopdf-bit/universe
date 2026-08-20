"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Background from "./Background";
import MusicButton from "./MusicButton";
import Intro from "./Intro";
import Universe from "./Universe";
import Timeline from "./Timeline";
import { AudioProvider, useAudio } from "./AudioPlayer";

function HeroContent() {
  const [started, setStarted] = useState(false);
  const { play } = useAudio();

  const beginJourney = () => {
    const universe = document.getElementById("our-universe");

    if (universe) {
      universe.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {!started && (
          <Intro
            onBegin={() => {
              play();
              setStarted(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* HERO */}

      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: started ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="relative min-h-screen overflow-hidden text-white"
      >
        <Background />

        <MusicButton />

        <section className="relative z-10 flex min-h-screen items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: started ? 1 : 0,
              y: started ? 0 : 40,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            className="px-6 text-center"
          >
            <p className="tracking-[10px] uppercase text-violet-400">
              FOURTEEN MONTHS
            </p>

            <h1 className="mt-6 text-7xl font-bold md:text-8xl">
              Mohit
            </h1>

            <div className="my-4 text-4xl">
              ❤️
            </div>

            <h2 className="text-7xl font-bold md:text-8xl">
              Nidhi
            </h2>

            <p className="mt-10 text-xl leading-relaxed text-gray-300 md:text-2xl">
              Every love story has a beginning.
              <br />
              Ours keeps getting more beautiful every day.
            </p>

            <motion.button
              onClick={beginJourney}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="
                mt-12
                rounded-full
                bg-violet-600
                px-10
                py-4
                text-lg
                shadow-lg
                shadow-violet-900/30
              "
            >
              Begin Our Story
            </motion.button>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-16 text-sm text-gray-500"
            >
              ↓ scroll to explore
            </motion.div>
          </motion.div>
        </section>
      </motion.main>

      {/* OUR UNIVERSE */}

      <div id="our-universe">
        <Universe />
      </div>

      {/* TIMELINE */}

      <Timeline />
    </>
  );
}

export default function Hero() {
  return (
    <AudioProvider>
      <HeroContent />
    </AudioProvider>
  );
}