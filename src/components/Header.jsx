import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";
import { useState, useEffect } from "react";

export default function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/header.webp";
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-pink-50">
      <picture>
        <source srcSet="/images/header.webp" type="image/webp" />
        <img
          src="/images/header.jpg"
          alt="Ảnh cưới"
          loading="eager"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ${
            isLoaded ? "opacity-100 scale-100" : "opacity-30 scale-105 blur-md"
          }`}
          style={{ objectPosition: "center 35%" }}
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div
        className="relative z-10 text-center text-white px-8 py-6 
        bg-white/5 backdrop-blur-[2px] rounded-2xl border border-white/5 
        shadow-[0_0_50px_rgba(255,255,255,0.05)] mt-[22vh] md:mt-[18vh] overflow-hidden"
      >
        <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-30 blur-md pointer-events-none"></span>

        <p className="text-3xl font-['Great_Vibes'] text-pink-100 mb-3 animate-fade-in relative z-10">
          Save The Date
        </p>

        <h1
          className="text-2xl md:text-6xl font-playfair font-semibold 
          bg-gradient-to-r from-pink-100 via-white to-pink-50 bg-clip-text 
          text-transparent animate-slide-up relative z-10 leading-tight"
        >
          Ngọc Thắng & Huyền Trang
        </h1>

        <p className="text-lg md:text-xl font-light mt-4 text-pink-50 animate-fade-in relative z-10">
          09 • 11 • 2025
        </p>

        <div className="relative z-10">
          <Countdown targetDate={new Date("2025-11-09T00:00:00")} />
        </div>
      </div>

      <div className="absolute bottom-8 text-white text-center animate-bounce">
        <span className="text-sm opacity-80 flex items-center gap-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
          Cuộn xuống để xem thiệp
        </span>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s ease forwards; }
        .animate-slide-up { animation: slide-up 1.2s ease forwards; }
      `}</style>
    </header>
  );
}
