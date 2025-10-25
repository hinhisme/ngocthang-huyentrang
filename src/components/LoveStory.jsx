import ScrollReveal from "./ScrollReveal";

export default function LoveStory() {
  const stories = [
    { date: "Tháng 6/2020", text: "Lần đầu gặp nhau tại quán cà phê nhỏ giữa lòng Hà Nội." },
    { date: "2021", text: "Những chuyến đi xa, những kỷ niệm khó quên." },
    { date: "2023", text: "Lời tỏ tình giản dị nhưng đầy chân thành." },
    { date: "2025", text: "Chúng ta nói lời ước hẹn trăm năm ❤️" },
  ];

  return (
    <ScrollReveal direction="up" delay={700}>
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-playfair mb-10">Our Love Story</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        {stories.map((item, idx) => (
          <div key={idx} className="p-4 border-l-4 border-pink-400 text-left">
            <p className="text-sm font-playfair text-gray-500">{item.date}</p>
            <p className="text-lg font-playfair text-gray-700 mt-1">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
    </ScrollReveal>
  );
}
