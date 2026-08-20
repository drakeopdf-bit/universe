"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Memory = {
  month: string;
  title: string;
  message: string;
  photos: string[];
  video: string;
};

const memories: Memory[] = [
  {
    month: "June 2025",
    title: "It All Started With Talking",
    message:
      "So many conversations, so many little moments... somewhere between all those talks, something beautiful quietly began.",
    photos: [
      "/images/timeline/june-2025/01.jpg",
      "/images/timeline/june-2025/02.jpg",
      "/images/timeline/june-2025/03.jpg",
      "/images/timeline/june-2025/04.jpg",
    ],
    video: "/videos/timeline/june-2025.mp4",
  },
  {
    month: "July 2025",
    title: "The Day We Finally Met",
    message:
      "04 July 2025 — after two months of distance, we finally got one day together.",
    photos: [
      "/images/timeline/july-2025/01.jpg",
      "/images/timeline/july-2025/02.jpg",
      "/images/timeline/july-2025/03.jpg",
      "/images/timeline/july-2025/04.jpg",
    ],
    video: "/videos/timeline/july-2025.mp4",
  },
  {
    month: "August 2025",
    title: "Falling Deeper",
    message:
      "The distance was still there, but somehow the connection kept getting stronger.",
    photos: [
      "/images/timeline/august-2025/01.jpg",
      "/images/timeline/august-2025/02.jpg",
      "/images/timeline/august-2025/03.jpg",
      "/images/timeline/august-2025/04.jpg",
    ],
    video: "/videos/timeline/august-2025.mp4",
  },
  {
    month: "September 2025",
    title: "Chikku's Angry Era",
    message:
      "Not every moment was perfect. There were little fights, angry moments and then... somehow we always found our way back.",
    photos: [
      "/images/timeline/september-2025/01.jpg",
      "/images/timeline/september-2025/02.jpg",
      "/images/timeline/september-2025/03.jpg",
      "/images/timeline/september-2025/04.jpg",
    ],
    video: "/videos/timeline/september-2025.mp4",
  },
  {
    month: "October 2025",
    title: "And Then We Met Again",
    message:
      "30 October 2025 — another day together, another memory that distance couldn't take away.",
    photos: [
      "/images/timeline/october-2025/01.jpg",
      "/images/timeline/october-2025/02.jpg",
      "/images/timeline/october-2025/03.jpg",
      "/images/timeline/october-2025/04.jpg",
    ],
    video: "/videos/timeline/october-2025.mp4",
  },
  {
    month: "November 2025",
    title: "Nidhu's Birthday",
    message:
      "27 November — Nidhu's birthday. A day that deserved its own little place in our universe.",
    photos: [
      "/images/timeline/november-2025/01.jpg",
      "/images/timeline/november-2025/02.jpg",
      "/images/timeline/november-2025/03.jpg",
      "/images/timeline/november-2025/04.jpg",
    ],
    video: "/videos/timeline/november-2025.mp4",
  },
  {
    month: "December 2025",
    title: "Our Cutest Phase",
    message:
      "Somewhere in this chapter, we entered our cutest phase. Just us being us. ❤️",
    photos: [
      "/images/timeline/december-2025/01.jpg",
      "/images/timeline/december-2025/02.jpg",
      "/images/timeline/december-2025/03.jpg",
      "/images/timeline/december-2025/04.jpg",
    ],
    video: "/videos/timeline/december-2025.mp4",
  },
  {
    month: "January 2026",
    title: "My Best Birthday",
    message:
      "03 January — my best birthday. Not because of the date, but because of who made it special.",
    photos: [
      "/images/timeline/january-2026/01.jpg",
      "/images/timeline/january-2026/02.jpg",
      "/images/timeline/january-2026/03.jpg",
      "/images/timeline/january-2026/04.jpg",
    ],
    video: "/videos/timeline/january-2026.mp4",
  },
  {
    month: "February 2026",
    title: "Third Time, Same Spark",
    message:
      "21 February — our third meetup. Somehow, every time we met, the spark felt just as strong.",
    photos: [
      "/images/timeline/february-2026/01.jpg",
      "/images/timeline/february-2026/02.jpg",
      "/images/timeline/february-2026/03.jpg",
      "/images/timeline/february-2026/04.jpg",
    ],
    video: "/videos/timeline/february-2026.mp4",
  },
  {
    month: "March 2026",
    title: "Nidhu Goes Mad",
    message:
      "Nidhu getting mad. 😂 Another chaotic little chapter that somehow still belonged to us.",
    photos: [
      "/images/timeline/march-2026/01.jpg",
      "/images/timeline/march-2026/02.jpg",
      "/images/timeline/march-2026/03.jpg",
      "/images/timeline/march-2026/04.jpg",
    ],
    video: "/videos/timeline/march-2026.mp4",
  },
  {
    month: "April 2026",
    title: "The Hardest Chapter",
    message:
      "Things became difficult. It wasn't our easiest chapter, but it was still part of our story.",
    photos: [
      "/images/timeline/april-2026/01.jpg",
      "/images/timeline/april-2026/02.jpg",
      "/images/timeline/april-2026/03.jpg",
      "/images/timeline/april-2026/04.jpg",
    ],
    video: "/videos/timeline/april-2026.mp4",
  },
  {
    month: "May 2026",
    title: "The Spark Came Back",
    message:
      "We met again, and somehow the moment we were together, that spark came alive again.",
    photos: [
      "/images/timeline/may-2026/01.jpg",
      "/images/timeline/may-2026/02.jpg",
      "/images/timeline/may-2026/03.jpg",
      "/images/timeline/may-2026/04.jpg",
    ],
    video: "/videos/timeline/may-2026.mp4",
  },
  {
    month: "June 2026",
    title: "Deeper Than Ever",
    message:
      "Through everything, we became deeply connected. Some bonds don't need distance to disappear.",
    photos: [
      "/images/timeline/june-2026/01.jpg",
      "/images/timeline/june-2026/02.jpg",
      "/images/timeline/june-2026/03.jpg",
      "/images/timeline/june-2026/04.jpg",
    ],
    video: "/videos/timeline/june-2026.mp4",
  },
  {
    month: "July 2026",
    title: "Still Us",
    message:
      "Busy schedules, busy days, different places — but somehow, still together.",
    photos: [
      "/images/timeline/july-2026/01.jpg",
      "/images/timeline/july-2026/02.jpg",
      "/images/timeline/july-2026/03.jpg",
      "/images/timeline/july-2026/04.jpg",
    ],
    video: "/videos/timeline/july-2026.mp4",
  },
];

export default function Universe() {
  const [selected, setSelected] = useState<Memory | null>(null);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [memoryIndex, setMemoryIndex] = useState(0);

  const openMemory = (memory: Memory) => {
    const index = memories.findIndex(
      (item) => item.month === memory.month
    );

    setMemoryIndex(index);
    setSelected(memory);
    setPhotoIndex(0);
  };

  const closeMemory = () => {
    setSelected(null);
    setPhotoIndex(0);
  };

  const changeMemory = (direction: "next" | "previous") => {
    let newIndex = memoryIndex;

    if (direction === "next") {
      newIndex =
        memoryIndex === memories.length - 1
          ? 0
          : memoryIndex + 1;
    } else {
      newIndex =
        memoryIndex === 0
          ? memories.length - 1
          : memoryIndex - 1;
    }

    setMemoryIndex(newIndex);
    setSelected(memories[newIndex]);
    setPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!selected) return;

    setPhotoIndex((current) =>
      current === selected.photos.length - 1
        ? 0
        : current + 1
    );
  };

  const previousPhoto = () => {
    if (!selected) return;

    setPhotoIndex((current) =>
      current === 0
        ? selected.photos.length - 1
        : current - 1
    );
  };

  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMemory();
      if (event.key === "ArrowRight") nextPhoto();
      if (event.key === "ArrowLeft") previousPhoto();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, memoryIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020205] px-5 py-32 text-white">

      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-28 text-center"
        >
          <p className="text-sm uppercase tracking-[9px] text-violet-400">
            OUR UNIVERSE
          </p>

          <h2 className="mt-6 text-5xl font-bold md:text-7xl">
            Fourteen months.
            <br />
            <span className="text-violet-400">
              One universe.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-gray-400">
            Every conversation.
            <br />
            Every meeting.
            <br />
            Every little moment.
            <br />
            Became another star in our story.
          </p>
        </motion.div>

        {/* TIMELINE */}

        <div className="relative">

          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-500/30 to-violet-400/50 md:block" />

          <div className="space-y-28 md:space-y-40">

            {memories.map((memory, index) => {
              const left = index % 2 === 0;

              return (
                <motion.div
                  key={memory.month}
                  initial={{
                    opacity: 0,
                    y: 70,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="relative"
                >

                  {/* STAR */}

                  <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 md:block">

                    <button
                      onClick={() => openMemory(memory)}
                      className="group relative flex h-12 w-12 items-center justify-center"
                    >

                      <span className="absolute h-12 w-12 rounded-full bg-violet-500/20 blur-xl transition duration-500 group-hover:scale-[2]" />

                      <span className="absolute h-6 w-6 rounded-full bg-violet-400/30 blur-md" />

                      <span className="relative h-3 w-3 rounded-full bg-white shadow-[0_0_25px_8px_rgba(167,139,250,0.8)] transition duration-300 group-hover:scale-[2]" />

                    </button>

                  </div>

                  {/* CARD */}

                  <div
                    className={`flex ${
                      left
                        ? "md:justify-start md:pr-[55%]"
                        : "md:justify-end md:pl-[55%]"
                    }`}
                  >

                    <button
                      onClick={() => openMemory(memory)}
                      className="group w-full text-left"
                    >

                      <motion.div
                        whileHover={{
                          y: -10,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                      >

                        <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">

                          <img
                            src={memory.photos[0]}
                            alt={memory.month}
                            className="h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                          <div className="absolute bottom-5 left-5">

                            <p className="text-xs uppercase tracking-[5px] text-violet-300">
                              {memory.month}
                            </p>

                            <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                              {memory.title}
                            </h3>

                          </div>

                          <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-3 py-2 text-xs backdrop-blur-md">
                            ✦ {index + 1}
                          </div>

                        </div>

                        <div className="px-2 pb-2 pt-5">

                          <p className="line-clamp-2 text-sm leading-relaxed text-gray-400">
                            {memory.message}
                          </p>

                          <div className="mt-5 flex items-center gap-2 text-sm text-violet-400">
                            <span>
                              Enter this memory
                            </span>

                            <span className="transition duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>

                        </div>

                      </motion.div>

                    </button>

                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* END */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40 text-center"
        >

          <div className="mx-auto h-16 w-16 rounded-full bg-violet-500/20 blur-xl" />

          <div className="-mt-12 text-3xl">
            ❤️
          </div>

          <p className="mt-7 text-xs uppercase tracking-[7px] text-violet-400">
            JULY 2026
          </p>

          <h3 className="mt-5 text-3xl font-bold md:text-5xl">
            This isn't the end.
          </h3>

          <p className="mx-auto mt-5 max-w-lg text-gray-400">
            Fourteen chapters are behind us.
            <br />
            Our universe is still expanding.
          </p>

        </motion.div>

      </div>

      {/* MEMORY POPUP */}

      <AnimatePresence>
        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeMemory();
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl md:p-8"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
              }}
              className="relative max-h-[94vh] w-full max-w-5xl overflow-y-auto rounded-[30px] border border-white/10 bg-[#09090d] shadow-2xl shadow-violet-950/30"
            >

              {/* CLOSE */}

              <button
                onClick={closeMemory}
                className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-2xl backdrop-blur-md transition hover:bg-white/10"
              >
                ×
              </button>

              <div className="p-5 md:p-8">

                <p className="text-xs uppercase tracking-[5px] text-violet-400">
                  {selected.month}
                </p>

                <h3 className="mt-3 pr-14 text-3xl font-bold md:text-5xl">
                  {selected.title}
                </h3>

                <p className="mt-5 max-w-3xl leading-relaxed text-gray-400">
                  {selected.message}
                </p>

                {/* PHOTO */}

                <div className="relative mt-8 overflow-hidden rounded-3xl bg-black">

                  <AnimatePresence mode="wait">

                    <motion.img
                      key={selected.photos[photoIndex]}
                      src={selected.photos[photoIndex]}
                      alt={`${selected.month} memory`}
                      initial={{
                        opacity: 0,
                        scale: 1.04,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="max-h-[65vh] w-full object-contain"
                    />

                  </AnimatePresence>

                  {selected.photos.length > 1 && (
                    <>

                      <button
                        onClick={previousPhoto}
                        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl backdrop-blur-md transition hover:bg-black/90"
                      >
                        ←
                      </button>

                      <button
                        onClick={nextPhoto}
                        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl backdrop-blur-md transition hover:bg-black/90"
                      >
                        →
                      </button>

                    </>
                  )}

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs backdrop-blur-md">
                    {photoIndex + 1} / {selected.photos.length}
                  </div>

                </div>

                {/* THUMBNAILS */}

                {selected.photos.length > 1 && (

                  <div className="mt-4 flex gap-3 overflow-x-auto pb-2">

                    {selected.photos.map((photo, index) => (

                      <button
                        key={photo}
                        onClick={() => setPhotoIndex(index)}
                        className={`h-20 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                          index === photoIndex
                            ? "border-violet-400"
                            : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                      >

                        <img
                          src={photo}
                          alt={`Memory ${index + 1}`}
                          className="h-full w-full object-cover"
                        />

                      </button>

                    ))}

                  </div>

                )}

                {/* VIDEO */}

                <div className="mt-10">

                  <div className="mb-4">

                    <p className="text-lg font-medium">
                      🎥 A little piece of this month
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Press play when you're ready.
                    </p>

                  </div>

                  <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">

                    <video
                      controls
                      playsInline
                      preload="metadata"
                      src={selected.video}
                      className="max-h-[500px] w-full"
                    />

                  </div>

                </div>

                {/* MEMORY NAVIGATION */}

                <div className="mt-10 border-t border-white/10 pt-8">

                  <div className="flex items-center justify-between gap-4">

                    {/* PREVIOUS */}

                    <button
                      onClick={() =>
                        changeMemory("previous")
                      }
                      className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-left transition hover:border-violet-400/40 hover:bg-violet-500/10"
                    >

                      <span className="text-xl transition group-hover:-translate-x-1">
                        ←
                      </span>

                      <div className="hidden sm:block">

                        <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                          Previous
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                          {
                            memories[
                              memoryIndex === 0
                                ? memories.length - 1
                                : memoryIndex - 1
                            ].month
                          }
                        </p>

                      </div>

                    </button>

                    {/* CENTER */}

                    <div className="text-center">

                      <p className="text-xs text-gray-600">
                        {memoryIndex + 1} / {memories.length}
                      </p>

                      <p className="mt-1 text-xs text-violet-400">
                        ✦
                      </p>

                    </div>

                    {/* NEXT */}

                    <button
                      onClick={() =>
                        changeMemory("next")
                      }
                      className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-right transition hover:border-violet-400/40 hover:bg-violet-500/10"
                    >

                      <div className="hidden sm:block">

                        <p className="text-[10px] uppercase tracking-[3px] text-gray-500">
                          Next
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                          {
                            memories[
                              memoryIndex === memories.length - 1
                                ? 0
                                : memoryIndex + 1
                            ].month
                          }
                        </p>

                      </div>

                      <span className="text-xl transition group-hover:translate-x-1">
                        →
                      </span>

                    </button>

                  </div>

                  <p className="mt-7 text-center text-sm text-gray-500">
                    Another star in our universe. ✦
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}