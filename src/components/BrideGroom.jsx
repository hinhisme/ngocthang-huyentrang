import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full flex justify-center bg-white">
      {!loaded && (
        <div className="w-full h-[450px] bg-gray-200 animate-pulse rounded-2xl" />
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`max-h-[450px] w-auto rounded-2xl shadow-md transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        } object-contain`}
      />
    </div>
  );
}

export default function BrideGroom() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="up" delay={200}>
          <div className="flex justify-center">
            <LazyImage src="/images/groom.webp" alt="Chú rể" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="text-gray-800 text-center md:text-left">
            <h4 className="text-sm tracking-widest text-gray-700 mb-2">CHÚ RỂ</h4>
            <h2 className="text-3xl font-['Great_Vibes'] text-pink-500 mb-3 animate-fade-in relative z-10">Phan Khởi</h2>
            <p className="leading-relaxed text-lg">
              Chú rể là người đàn ông chín chắn, 
              chân thành và luôn mang đến cảm giác bình yên cho những người xung quanh. 
              Với tình yêu và trách nhiệm, anh chính là bến đỗ vững chắc của cô dâu trong hành trình mới của cuộc đời.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Cô dâu */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
        <ScrollReveal direction="up" delay={200}>
          <div className="order-2 md:order-1 text-gray-800 text-center md:text-left">
            <h4 className="text-sm tracking-widest text-gray-700 mb-2">CÔ DÂU</h4>
            <h2 className="text-3xl font-['Great_Vibes'] text-pink-500 mb-3 animate-fade-in relative z-10">Lê Thúy</h2>
            <p className="leading-relaxed text-lg">
              Cô dâu là người con gái dịu dàng, tinh tế và đầy yêu thương. 
              Với trái tim ấm áp và nụ cười rạng rỡ, cô chính là nguồn hạnh phúc và động lực cho chú rể trên hành trình mới của cuộc đời.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="order-1 md:order-2 flex justify-center">
            <LazyImage src="/images/bride.webp" alt="Cô dâu" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
