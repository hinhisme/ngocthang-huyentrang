import ScrollReveal from "./ScrollReveal";

export default function Album() {
  const images = [
    "/images/album/album1.jpg",
    "/images/album/album2.jpg",
    "/images/album/album3.jpg",
    "/images/album/album4.jpg",
    "/images/album/album5.jpg",
    "/images/album/album6.jpg",
    "/images/album/album7.jpg",

  ];

  return (
    <ScrollReveal direction="up" delay={700}>
      <section className="py-20 bg-pink-50">
        <h2 className="text-3xl font-playfair text-center mb-10">
          ALBUM ẢNH CƯỚI
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 px-6 max-w-6xl mx-auto space-y-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Ảnh cưới ${idx + 1}`}
              className="w-full rounded-2xl mb-4 break-inside-avoid shadow-md hover:scale-[1.03] transition-transform duration-300"
            />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
