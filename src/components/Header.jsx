import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header className="relative w-full h-screen bg-pink-50 flex flex-col items-center justify-center overflow-hidden">
      <img
        src="/images/header.jpg"
        alt="Ảnh cưới"
        className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105 animate-slow-zoom"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <ScrollReveal direction="up" delay={200}>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-3xl font-['Great_Vibes'] text-pink-200 mb-3 animate-fade-in drop-shadow-lg">
            Save The Date
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl border border-white/20 inline-block">
            <h1 className="text-4xl md:text-6xl font-playfair font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-100 via-white to-pink-200 animate-gradient">
              Ngọc Thắng & Huyền Trang
            </h1>

            <p className="text-lg md:text-xl font-light mt-4 text-pink-100 animate-fade-in">
              09 • 11 • 2025
            </p>

            <Countdown targetDate={new Date("2025-11-09T00:00:00")} />
          </div>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-8 text-white text-center animate-bounce">
        <span className="text-sm opacity-80">Cuộn xuống để xem thiệp</span>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
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

        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.05); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </header>
  );
}
