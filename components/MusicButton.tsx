"use client";

import { useAudio } from "./AudioPlayer";

export default function MusicButton() {
  const { playing, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      className="
        fixed
        bottom-8
        right-8
        z-50
        rounded-full
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        px-5
        py-3
        text-white
        transition
        hover:scale-105
      "
    >
      {playing ? "⏸ Playing" : "▶ Music"}
    </button>
  );
}