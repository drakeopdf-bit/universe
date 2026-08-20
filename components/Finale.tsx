"use client";

import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020205] px-6 py-32 text-center text-white">
      
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl"
      >
        <p className="text-xs uppercase tracking-[8px] text-violet-400">
          OUR STORY
        </p>

        <h2 className="mt-8 text-5xl font-bold md:text-7xl">
          This isn't the end.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Fourteen months gave us memories.
          <br />
          Distance gave us patience.
          <br />
          The difficult days gave us strength.
          <br />
          And every time we met,
          <br />
          we remembered why it was worth it.
        </p>

        <div className="my-12 text-5xl">
          ❤️
        </div>

        <p className="text-xl text-gray-300 md:text-2xl">
          Our universe is still expanding.
        </p>

        <p className="mt-6 text-2xl font-semibold text-violet-300 md:text-3xl">
          And I want every next chapter with you.
        </p>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[6px] text-gray-600">
            Forever yours
          </p>

          <p className="mt-4 text-3xl font-semibold">
            Mohit ❤️
          </p>
        </div>

        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="mt-16 text-xl text-violet-400"
        >
          ✦
        </motion.div>
      </motion.div>
    </section>
  );
}