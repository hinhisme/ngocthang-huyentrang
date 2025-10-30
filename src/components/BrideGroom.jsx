import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

function LazyImage({ src, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full">
      {!loaded && <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-2xl" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-[400px] object-cover rounded-2xl shadow-md transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function BrideGroom() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <ScrollReveal direction="up" delay={700}>
          <div>
            <LazyImage src="/images/groom.webp" alt="Chú rể" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={900}>
          <div className="text-gray-800 text-center md:text-left">
            <h4 className="text-sm tracking-widest text-gray-500 mb-2">CHÚ RỂ</h4>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Ngọc Thắng</h2>
            <p className="leading-relaxed text-lg">
              Tình yêu bắt đầu từ những điều nhỏ bé. Cùng nhau ngắm hoàng hôn,
              cùng lắng nghe tâm sự về một ngày đã qua. Cùng nhau dạo phố, cùng
              nhau ăn tối. Cứ vậy chúng ta bình yên cùng nhau đi qua từng ngày.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mt-20">
        <ScrollReveal direction="up" delay={700}>
          <div className="order-2 md:order-1 text-gray-800 text-center md:text-left">
            <h4 className="text-sm tracking-widest text-gray-500 mb-2">CÔ DÂU</h4>
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Huyền Trang</h2>
            <p className="leading-relaxed text-lg">
              Mỗi khoảnh khắc bên anh là một kỷ niệm đẹp. Cùng nhau đi qua bao
              cung đường, chia sẻ niềm vui và nỗi buồn. Em tin rằng tình yêu của
              chúng ta sẽ mãi bền lâu như những lời hứa thuở ban đầu.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={900}>
          <div className="order-1 md:order-2">
            <LazyImage src="/images/bride.webp" alt="Cô dâu" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
