import ScrollReveal from "./ScrollReveal";
import Countdown from "./Countdown";

export default function Header() {
  return (
    <header className="relative w-full h-screen bg-pink-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Ảnh nền */}
      <img
        src="/images/header.jpg"
        alt="Ảnh cưới"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* Nội dung trung tâm */}
      <ScrollReveal direction="up" delay={200}>
        <div className="relative z-10 text-center text-white drop-shadow-lg px-4">
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-pink-200 mb-3 animate-fade-in">
            Save The Date
          </p>

          <h1 className="text-4xl md:text-6xl font-playfair font-semibold bg-gradient-to-r from-pink-200 via-white to-pink-100 bg-clip-text text-transparent animate-slide-up">
            Ngọc Thắng & Huyền Trang
          </h1>

          <p className="text-lg md:text-xl font-light mt-4 text-pink-100 animate-fade-in">
            09 • 11 • 2025
          </p>

          <Countdown targetDate={new Date("2025-11-09T00:00:00")} />
        </div>
      </ScrollReveal>

      {/* Hiệu ứng hướng dẫn cuộn xuống */}
      <div className="absolute bottom-8 text-white text-center animate-bounce">
        <span className="text-sm opacity-80">Cuộn xuống để xem thiệp</span>
      </div>

      {/* Hiệu ứng động nhỏ */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease forwards;
        }

        .animate-slide-up {
          animation: slide-up 1.2s ease forwards;
        }
      `}</style>
    </header>
  );
}
