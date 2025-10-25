import ScrollReveal from "./ScrollReveal";

export default function LoveStory() {
  const stories = [
    {
      date: "Tháng 6/2020",
      text: "Lần đầu gặp nhau tại quán cà phê nhỏ giữa lòng Hà Nội.",
      image: "/images/story1.jpg",
    },
    {
      date: "2021",
      text: "Những chuyến đi xa, những kỷ niệm khó quên.",
      image: "/images/story2.jpg",
    },
    {
      date: "2023",
      text: "Lời tỏ tình giản dị nhưng đầy chân thành.",
      image: "/images/story3.jpg",
    },
    {
      date: "2025",
      text: "Chúng ta nói lời ước hẹn trăm năm ❤️",
      image: "/images/story4.jpg",
    },
  ];

  return (
    <ScrollReveal direction="up" delay={700}>
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-playfair mb-10">Our Love Story</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {stories.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start bg-pink-50 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300"
            >
              <img
                src={item.image}
                alt={item.date}
                className="w-full h-64 object-cover"
              />
              <div className="p-5 text-left">
                <p className="text-sm text-gray-500 font-playfair">{item.date}</p>
                <p className="text-lg text-gray-700 font-playfair mt-2">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
