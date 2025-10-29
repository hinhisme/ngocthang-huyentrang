import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-pink-50">
      <img
        src="/images/header.jpg"
        alt="Ảnh cưới"
        className="absolute inset-0 w-full h-full object-cover brightness-75 animate-slow-zoom"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute w-2 h-2 bg-white/50 rounded-full animate-twinkle left-[35%] top-[40%]" />
      <div className="absolute w-1.5 h-1.5 bg-pink-100/70 rounded-full animate-twinkle-slow left-[65%] top-[30%]" />
      <div className="absolute w-1.5 h-1.5 bg-white/50 rounded-full animate-twinkle-slow left-[50%] top-[55%]" />

      <ScrollReveal direction="up" delay={200}>
        <div className="relative z-10 text-center text-white px-8 py-6 
          bg-white/2 backdrop-blur-[2px] rounded-2xl border border-white/5 
          shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden">

          <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-30 blur-md pointer-events-none"></span>

          <p className="text-3xl font-['Great_Vibes'] text-pink-100 mb-3 animate-fade-in relative z-10">
            Save The Date
          </p>

          <h1 className="text-2xl md:text-6xl font-playfair font-semibold bg-gradient-to-r from-pink-100 via-white to-pink-50 bg-clip-text text-transparent animate-slide-up relative z-10 leading-tight">
            Ngọc Thắng & Huyền Trang
          </h1>

          <p className="text-lg md:text-xl font-light mt-4 text-pink-50 animate-fade-in relative z-10">
            09 • 11 • 2025
          </p>

          <div className="relative z-10">
            <Countdown targetDate={new Date('2025-11-09T00:00:00')} />
          </div>
        </div>
      </ScrollReveal>

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
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

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.08); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-8px); }
        }

        @keyframes twinkle-slow {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.9; transform: translateY(-6px); }
        }

        .animate-fade-in { animation: fade-in 1.2s ease forwards; }
        .animate-slide-up { animation: slide-up 1.2s ease forwards; }
        .animate-gradient { background-size: 200%; animation: gradient 6s ease infinite; }
        .animate-slow-zoom { animation: slow-zoom 25s ease-in-out infinite alternate; }
        .animate-twinkle { animation: twinkle 6s ease-in-out infinite; }
        .animate-twinkle-slow { animation: twinkle-slow 9s ease-in-out infinite; }
      `}</style>
    </header>
  );
}
