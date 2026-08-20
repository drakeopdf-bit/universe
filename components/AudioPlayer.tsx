"use client";

import { createContext, useContext, useRef, useState } from "react";

type AudioContextType = {
  playing: boolean;
  play: () => void;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextType | null>(null);

export function AudioProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    if (!audioRef.current) return;

    audioRef.current.play();
    setPlaying(true);
  };

  const toggle = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{ playing, play, toggle }}>
      {children}

      <audio
        ref={audioRef}
        loop
        src="/music/our-song.mp3"
      />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);

  if (!context) {
    throw new Error("useAudio must be inside AudioProvider");
  }

  return context;
}