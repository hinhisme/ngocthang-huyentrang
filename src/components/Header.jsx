import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#f9f7f6]">
      <picture>
        <source srcSet="/images/header.webp" type="image/webp" />
        <img
          src="/images/header.webp"
          alt="Ảnh cưới"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover bg-[#f9f7f6]
          object-[65%_8%] 
          md:object-[60%_5%] 
          lg:object-[55%_0%] 
          xl:object-[50%_0%]"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <ScrollReveal direction="up" delay={200}>
        <div
          className="relative z-10 text-center text-white px-8 py-6 
          bg-white/5 backdrop-blur-[2px] rounded-2xl border border-white/5 
          shadow-[0_0_50px_rgba(255,255,255,0.05)] mt-[22vh] md:mt-[18vh] overflow-hidden"
        >
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent opacity-30 blur-md pointer-events-none"></span>

          {/* Save the date */}
          <p className="text-5xl md:text-6xl font-['Great_Vibes'] text-pink-500 mb-3">
            Save The Date
          </p>

          {/* TÊN */}
          <h1
            className="text-2xl md:text-5xl font-playfair font-semibold
            text-white drop-shadow-lg leading-tight"
          >
            Phan Khởi <span className="text-pink-500">&</span> Lê Thúy
          </h1>

          {/* DATE */}
          <p className="text-lg md:text-xl mt-4 text-pink-600 tracking-widest">
            30 • 03 • 2026
          </p>

          {/* COUNTDOWN */}
          <div className="mt-6">
            <Countdown targetDate={new Date("2026-03-30T00:00:00")} />
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
