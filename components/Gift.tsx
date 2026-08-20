"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Gift() {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020205] px-6 py-32 text-white">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[170px]" />

      <div className="relative z-10 w-full max-w-3xl text-center">

        {!opened ? (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-[8px] text-violet-400">
              ONE LITTLE THING
            </p>

            <h2 className="mt-7 text-4xl font-bold md:text-6xl">
              I have one more gift for you.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
              It's not something I can wrap in a box.
              <br />
              It's something I've been carrying in my heart.
            </p>

            {/* Envelope */}
            <motion.button
              onClick={() => setOpened(true)}
              whileHover={{ scale: 1.04, y: -8 }}
              whileTap={{ scale: 0.97 }}
              className="group mx-auto mt-16 block"
            >
              <div className="relative mx-auto h-48 w-72 md:h-56 md:w-96">

                {/* Glow */}
                <div className="absolute inset-0 rounded-3xl bg-violet-500/20 blur-3xl transition duration-700 group-hover:bg-violet-500/30" />

                {/* Envelope */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-[#15131d] shadow-2xl">

                  {/* Envelope bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-br from-[#211d2d] to-[#0d0c12]" />

                  {/* Left fold */}
                  <div className="absolute bottom-0 left-0 h-full w-1/2">
                    <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[120px] border-r-[145px] border-b-[#282332] border-r-transparent md:border-b-[140px] md:border-r-[195px]" />
                  </div>

                  {/* Right fold */}
                  <div className="absolute bottom-0 right-0 h-full w-1/2">
                    <div className="absolute bottom-0 right-0 h-0 w-0 border-b-[120px] border-l-[145px] border-b-[#1c1925] border-l-transparent md:border-b-[140px] md:border-l-[195px]" />
                  </div>

                  {/* Flap */}
                  <div className="absolute left-0 top-0 h-0 w-0 border-l-[144px] border-r-[144px] border-t-[105px] border-l-transparent border-r-transparent border-t-[#332b42] md:border-l-[193px] md:border-r-[193px] md:border-t-[130px]" />

                  {/* Heart seal */}
                  <div className="absolute left-1/2 top-[43%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-300/20 bg-violet-600/80 text-2xl shadow-lg shadow-violet-900/40">
                    ❤️
                  </div>

                </div>
              </div>

              <p className="mt-8 text-sm uppercase tracking-[4px] text-violet-300 transition group-hover:text-violet-200">
                Click to open
              </p>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs uppercase tracking-[8px] text-violet-400">
              FOR MY CHIIKU
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mx-auto mt-10 rounded-[32px] border border-white/10 bg-white/[0.035] p-8 text-left shadow-2xl backdrop-blur-xl md:p-14"
            >
              <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
                If I could give you one thing in this world,
                it would be the ability to see yourself through
                my eyes.
              </p>

              <p className="mt-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
                Then you would finally understand just how
                incredibly special you are to me.
              </p>

              <p className="mt-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
                You aren't just someone who became a part of my
                life.
              </p>

              <p className="mt-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
                You became one of the reasons I look forward to
                tomorrow.
              </p>

              <div className="my-10 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

              <p className="text-xl leading-relaxed text-gray-300 md:text-2xl">
                So wherever life takes us...
              </p>

              <p className="mt-5 text-xl leading-relaxed text-gray-300 md:text-2xl">
                I hope I get to keep walking there with you.
              </p>

              <div className="mt-12 text-center">
                <div className="text-4xl">
                  ❤️
                </div>

                <p className="mt-5 text-sm uppercase tracking-[5px] text-violet-400">
                  Always
                </p>

                <p className="mt-3 text-2xl font-semibold">
                  Your Mohit
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 text-gray-600"
            >
              And this little universe will always have a place
              for you. ✦
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
}