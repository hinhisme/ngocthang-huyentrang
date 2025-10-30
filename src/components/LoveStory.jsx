import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function LoveStory() {
  const stories = [
    {
      text: "Chẳng ai ngờ giữa hàng trăm toa thuốc ở Hiệu thuốc, chúng tôi lại kê đơn trúng… tình yêu.",
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
      image: "/images/album/album2.webp",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={200}>
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-playfair mb-10">
          Our Love Story
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          {stories.map((item, idx) => (
            <StoryCard key={idx} item={item} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

function StoryCard({ item }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col bg-pink-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
      <div className="flex justify-center bg-white">
        {!loaded && (
          <div className="w-full h-[400px] bg-gray-200 animate-pulse rounded-t-2xl" />
        )}

        <img
          src={item.image}
          alt="Love story"
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`max-h-[400px] w-auto rounded-t-2xl transition-opacity duration-700 ${
            loaded ? "opacity-100" : "opacity-0"
          } object-contain`}
        />
      </div>

      <div className="p-5 text-left">
        <p className="text-lg text-gray-700 font-playfair">{item.text}</p>
      </div>
    </div>
  );
}
