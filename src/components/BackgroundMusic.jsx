import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = () => {
      audio.volume = 0.7;
      audio.play().catch((err) => {
        console.warn("⛔ Autoplay bị chặn, chờ tương tác:", err);
      });
    };

    tryPlay();
    document.addEventListener("click", tryPlay, { once: true });
    document.addEventListener("touchstart", tryPlay, { once: true });

    return () => {
      document.removeEventListener("click", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {/* 🎵 Nhạc nền tự động phát */}
      <audio ref={audioRef} loop preload="auto" src="/music/ido.mp3" />

      {/* 🔊 Nút bật/tắt âm thanh */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-5 right-5 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition"
        title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
      >
        {isPlaying ? (
          <Volume2 className="text-pink-600" size={24} />
        ) : (
          <VolumeX className="text-gray-500" size={24} />
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
