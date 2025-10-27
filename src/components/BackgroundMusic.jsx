import React, { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const preload = new Audio("/music/ido.mp3");
    preload.preload = "auto";
    preload.load();

    audio.volume = 0.7;

    const enablePlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        setUserInteracted(true);
      }).catch((err) => {
        console.warn("⚠️ Autoplay bị chặn:", err);
      });
    };

    document.addEventListener("click", enablePlay, { once: true });
    document.addEventListener("touchstart", enablePlay, { once: true });

    return () => {
      document.removeEventListener("click", enablePlay);
      document.removeEventListener("touchstart", enablePlay);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src="/music/ido.mp3"
      />

      {userInteracted && (
        <button
          onClick={togglePlay}
          className="fixed bottom-5 right-5 z-50 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition"
          title={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        >
          {isPlaying ? (
            <Volume2 className="text-pink-600" size={24} />
          ) : (
            <VolumeX className="text-gray-500" size={24} />
          )}
        </button>
      )}

      {!userInteracted && (
        <button
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            audio.play()
              .then(() => {
                setUserInteracted(true);
                setIsPlaying(true);
              })
              .catch((err) => console.warn("Không thể phát nhạc:", err));
          }}
          className="fixed bottom-5 right-5 z-50 bg-pink-500 text-white p-3 rounded-full shadow-lg animate-bounce hover:bg-pink-600 transition"
        >
          Bật nhạc 🎵
        </button>
      )}
    </>
  );
};

export default BackgroundMusic;
