"use client";

import { motion } from "framer-motion";

type Month = {
  date: string;
  title: string;
  memory: string;
  meetup?: boolean;
};

const months: Month[] = [
  {
    date: "JUNE 2025",
    title: "Where It All Began",
    memory:
      "A lot of talking, countless conversations, and slowly becoming a part of each other's world.",
  },
  {
    date: "JULY 2025",
    title: "The Day We Finally Met",
    memory:
      "04 July 2025 — after two months of distance, we finally got one day together.",
    meetup: true,
  },
  {
    date: "AUGUST 2025",
    title: "Falling Deeper",
    memory:
      "Somewhere along the way, the feelings became deeper, stronger and harder to explain.",
  },
  {
    date: "SEPTEMBER 2025",
    title: "Chikku's Angry Era",
    memory:
      "The angry mode of Chikku arrived. 😂 Somehow, even those moments became part of our story.",
  },
  {
    date: "OCTOBER 2025",
    title: "And Then We Met Again",
    memory:
      "30 October 2025 — another day together, another memory that distance couldn't take away.",
    meetup: true,
  },
  {
    date: "NOVEMBER 2025",
    title: "Nidhu's Birthday",
    memory:
      "27 November — Nidhu's birthday. A day that deserved its own little place in our universe.",
  },
  {
    date: "DECEMBER 2025",
    title: "Our Cutest Phase",
    memory:
      "Somewhere in this chapter, we entered our cutest phase. Just us being us. ❤️",
  },
  {
    date: "JANUARY 2026",
    title: "My Best Birthday",
    memory:
      "03 January — my best birthday. Not because of the date, but because of who made it special.",
  },
  {
    date: "FEBRUARY 2026",
    title: "Third Time, Same Spark",
    memory:
      "21 February — our third meetup. Somehow, every time we met, the spark felt just as strong.",
    meetup: true,
  },
  {
    date: "MARCH 2026",
    title: "Nidhu Goes Mad",
    memory:
      "Nidhu getting mad. 😂 Another chaotic little chapter that somehow still belonged to us.",
  },
  {
    date: "APRIL 2026",
    title: "The Hardest Chapter",
    memory:
      "Things became difficult. It wasn't our easiest chapter, but it was still part of our story.",
  },
  {
    date: "MAY 2026",
    title: "The Spark Lights Up Again",
    memory:
      "We met again, and somehow the moment we were together, that spark came alive again.",
    meetup: true,
  },
  {
    date: "JUNE 2026",
    title: "Deeper Than Ever",
    memory:
      "Through everything, we became deeply connected. Some bonds don't need distance to disappear.",
  },
  {
    date: "JULY 2026",
    title: "Still Us",
    memory:
      "Busy schedules, busy days, different places — but somehow, still together.",
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden bg-[#050509] px-6 py-32 text-white">

      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[800px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-700/10
          blur-[180px]
        "
      />

      {/* Heading */}

      <div className="relative z-10 mx-auto mb-24 max-w-3xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-sm uppercase tracking-[8px] text-violet-400"
        >
          OUR STORY
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-5 text-5xl font-bold md:text-7xl"
        >
          Fourteen chapters.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg text-gray-400"
        >
          From the first conversation to where we are today.
        </motion.p>

      </div>

      {/* Timeline */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Center line */}

        <div
          className="
            absolute
            left-4
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-violet-500/50
            to-transparent
            md:left-1/2
            md:-translate-x-1/2
          "
        />

        <div className="space-y-24 md:space-y-32">

          {months.map((month, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={month.date}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                className="relative md:grid md:grid-cols-2 md:gap-16"
              >

                {/* Timeline dot */}

                <div
                  className="
                    absolute
                    left-[9px]
                    top-2
                    z-20
                    h-3
                    w-3
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_18px_rgba(167,139,250,0.9)]
                    md:left-1/2
                    md:-translate-x-1/2
                  "
                />

                {/* Empty side on desktop */}

                {isLeft ? (
                  <>
                    <div className="hidden md:block" />

                    <div className="pl-12 md:pl-0">
                      <TimelineCard month={month} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pl-12 md:pr-0 md:text-right">
                      <TimelineCard month={month} align="right" />
                    </div>

                    <div className="hidden md:block" />
                  </>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* Ending */}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 mt-32 text-center"
      >
        <div className="text-4xl">❤️</div>

        <p className="mt-6 text-sm uppercase tracking-[6px] text-violet-400">
          JULY 2026
        </p>

        <h3 className="mt-4 text-3xl font-bold md:text-5xl">
          And this isn't the end.
        </h3>

        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
          Fourteen chapters are behind us.
          <br />
          There are still so many more to write.
        </p>

      </motion.div>

    </section>
  );
}

function TimelineCard({
  month,
  align = "left",
}: {
  month: Month;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`
        max-w-xl
        rounded-3xl
        border
        border-white/10
        bg-white/[0.04]
        p-7
        backdrop-blur-xl
        transition
        duration-500
        hover:border-violet-400/30
        hover:bg-white/[0.07]
        md:p-8
        ${align === "right" ? "md:ml-auto" : ""}
      `}
    >

      <p className="text-sm tracking-[5px] text-violet-400">
        {month.date}
      </p>

      <h3 className="mt-4 text-2xl font-bold md:text-3xl">
        {month.title}
      </h3>

      <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">
        {month.memory}
      </p>

      {month.meetup && (
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          🎥 Meetup memory
        </div>
      )}

    </div>
  );
}