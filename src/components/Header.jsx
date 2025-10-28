import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-rose-100 to-white">
      {/* Background image with soft zoom and fade */}
      <img
        src="/images/header.jpg"
        alt="Ảnh cưới"
        className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 animate-slow-zoom"
      />

      {/* Gradient overlay for romantic mood */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-white/60 rounded-full animate-twinkle delay-1000 left-[20%] top-[40%]" />
        <div className="absolute w-1.5 h-1.5 bg-pink-200/70 rounded-full animate-twinkle delay-2000 left-[50%] top-[20%]" />
        <div className="absolute w-2 h-2 bg-rose-100/70 rounded-full animate-twinkle delay-3000 left-[80%] top-[60%]" />
        <div className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-twinkle delay-4000 left-[35%] top-[70%]" />
      </div>

      <ScrollReveal direction="up" delay={200}>
        <div className="relative z-10 text-center px-8 py-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 max-w-3xl">
          <p className="text-3xl font-['Great_Vibes'] text-pink-200 mb-2 animate-fade-in drop-shadow-lg">
            Save The Date
          </p>

          <h1 className="text-5xl md:text-7xl font-playfair font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-white to-pink-100 animate-gradient drop-shadow-md leading-snug">
            Ngọc Thắng & Huyền Trang
          </h1>

          <p className="text-lg md:text-xl font-light mt-3 text-pink-100 animate-fade-in">
            09 • 11 • 2025
          </p>

          <div className="mt-5">
            <Countdown targetDate={new Date('2025-11-09T00:00:00')} />
          </div>
        </div>
      </ScrollReveal>

      {/* Scroll hint */}
      <div className="absolute bottom-8 text-white text-center animate-bounce z-20">
        <span className="text-sm opacity-80">Cuộn xuống để xem thiệp</span>
      </div>

      <style>{`
        /* Soft zoom animation */
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 25s ease-in-out infinite alternate;
        }

        /* Floating light sparkles */
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-10px); }
        }
        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }

        /* Fade-in and gradient shimmer */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease forwards;
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200%;
          animation: gradient 6s ease infinite;
        }
      `}</style>
    </header>
  );
}
