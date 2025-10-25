import ScrollReveal from "./ScrollReveal";

export default function Header() {
  return (
    
    <header className="relative w-full h-screen bg-pink-50 flex items-center justify-center overflow-hidden">
      <img
        src="/images/header.jpg"
        alt="Ảnh cưới"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <ScrollReveal direction="up" delay={500}>
      <div className="relative z-10 text-center text-white drop-shadow-lg">
        <h2 className="text-3xl md:text-5xl font-playfair mb-4">
          Ngọc Thắng & Huyền Trang
        </h2>
        <p className="text-lg md:text-xl font-playfair">Save The Date • 30.11.2025</p>
      </div>
      </ScrollReveal>
      <div className="absolute bottom-8 text-white animate-bounce">
        <span className="text-sm opacity-80">Cuộn xuống để xem thiệp</span>
      </div>
    </header>
  );
}