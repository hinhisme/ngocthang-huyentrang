import ScrollReveal from "./ScrollReveal";
import { useState, useEffect } from "react";

export default function LoveStory() {
  const stories = [
    {
      text: "Chẳng ai ngờ giữa hàng trăm toa thuốc ở Long Châu, chúng tôi lại kê đơn trúng… tình yêu.",
      image: "/images/story1.webp",
    },
    {
      text: "Những chuyến đi xa, những kỷ niệm khó quên.",
      image: "/images/story2.webp",
    },
    {
      text: "Lời tỏ tình giản dị nhưng đầy chân thành.",
      image: "/images/story3.webp",
    },
    {
      text: "Chúng ta nói lời ước hẹn trăm năm ❤️",
      image: "/images/album/album2.jpg",
    },
  ];


  return (
    <ScrollReveal direction="up" delay={700}>
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-playfair mb-10 text-gray-800">
          Our Love Story
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-pink-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-500"
            >
              <picture>
                <source srcSet={item.image.replace(".jpg", ".webp")} type="image/webp" />
                <img
                  src={item.image}
                  alt={`Love story ${idx + 1}`}
                  loading={idx === 0 ? "eager" : "lazy"}
                  onLoad={() => setLoaded((prev) => ({ ...prev, [idx]: true }))}
                  className={`w-full h-64 object-cover object-[center_25%] transition-all duration-700 ${
                    loaded[idx]
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 blur-md"
                  }`}
                />
              </picture>

              <div className="p-5 text-left">
                <p className="text-lg text-gray-700 font-playfair mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </ScrollReveal>
  );
}
