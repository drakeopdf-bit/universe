"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Proposal() {
  const [answered, setAnswered] = useState(false);

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020205] px-6 py-32 text-white">

      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

        {!answered ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            {/* Small heading */}

            <p className="text-xs uppercase tracking-[8px] text-violet-400">
              ONE LAST QUESTION
            </p>

            {/* Main heading */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mt-8 text-5xl font-bold leading-tight md:text-7xl"
            >
              Nidhu...
            </motion.h2>

            {/* Message */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl"
            >

              <p>
                Look at me.
              </p>

              <p className="mt-5">
                We've already beaten distance.
                <br />
                We've beaten time.
                <br />
                We've survived the fights,
                <br />
                the misunderstandings,
                <br />
                and even those boring phases
                <br />
                when our spark almost disappeared.
              </p>

              <p className="mt-8 text-gray-300">
                But somehow...
                <br />
                every time we found our way back,
                <br />
                the spark came back brighter.
              </p>

            </motion.div>

            {/* Heart */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-12 text-5xl"
            >
              ❤️
            </motion.div>

            {/* Question */}

            <motion.h3
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 text-4xl font-bold md:text-6xl"
            >
              Would you marry me?
            </motion.h3>

            <p className="mx-auto mt-6 max-w-xl text-gray-500">
              I don't want just another chapter with you.
              <br />
              I want the whole book.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <motion.button
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={handleYes}
                className="rounded-full bg-violet-600 px-10 py-4 text-lg font-medium shadow-lg shadow-violet-900/30 transition hover:bg-violet-500"
              >
                YES, MOHIT ❤️
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={handleYes}
                className="rounded-full border border-white/10 bg-white/[0.04] px-10 py-4 text-lg text-gray-300 backdrop-blur-md transition hover:border-violet-400/40 hover:bg-violet-500/10"
              >
                Obviously 😂
              </motion.button>

            </div>

            <p className="mt-8 text-xs text-gray-600">
              There is only one correct answer. 😌
            </p>

          </motion.div>

        ) : (

          /* AFTER YES */

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
          >

            {/* Celebration */}

            <div className="flex justify-center gap-5 text-4xl">
              <motion.span
                animate={{
                  y: [0, -15, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                💜
              </motion.span>

              <motion.span
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}
              >
                ❤️
              </motion.span>

              <motion.span
                animate={{
                  y: [0, -15, 0],
                  rotate: [5, -5, 5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                💍
              </motion.span>
            </div>

            <p className="mt-10 text-xs uppercase tracking-[8px] text-violet-400">
              I KNEW IT
            </p>

            <h2 className="mt-7 text-5xl font-bold md:text-7xl">
              Forever starts here.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
              So it's you and me.
              <br />
              Through all the good days.
              <br />
              Through all the difficult ones.
              <br />
              Through every laugh, every fight,
              <br />
              every hug and every little moment.
            </p>

            <p className="mt-10 text-xl text-gray-300">
              I choose you.
            </p>

            <p className="mt-4 text-2xl font-semibold text-violet-300">
              Today. Tomorrow. Always. ❤️
            </p>

            {/* Signature */}

            <div className="mt-16">

              <p className="text-sm text-gray-500">
                Forever yours,
              </p>

              <p className="mt-2 text-2xl font-semibold">
                Your Mohit
              </p>

            </div>

          </motion.div>

        )}

      </div>

    </section>
  );
}