import ScrollReveal from "./ScrollReveal";
export default function Album() {
  const images = [
    "/images/album/album1.jpg",
    "/images/album/album1.jpg",
    "/images/album/album1.jpg",
    "/images/album/album1.jpg",
    "/images/album/album1.jpg",
    "/images/album/album1.jpg", 
  ];

  return (
    <ScrollReveal direction="up" delay={700}>
    <section className="py-20 bg-pink-50">
      <h2 className="text-3xl font-serif text-center font-playfair-800 mb-10">
        ALBUM ẢNH CƯỚI
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-6 max-w-5xl mx-auto">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
    </ScrollReveal>
  );
}
