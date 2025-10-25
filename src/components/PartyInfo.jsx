import ScrollReveal from "./ScrollReveal";

export default function PartyInfo() {
  return (
    <ScrollReveal direction="up" delay={700}>
    <section className="w-full bg-[#faf8f4] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair tracking-wide text-gray-800">
          SỰ KIỆN CƯỚI
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="relative bg-[#fbfaf7] border border-[#e6e2d9] p-10 rounded-2xl shadow-sm">
          <h3 className="text-xl font-playfair mb-6 text-gray-800">
            TIỆC CƯỚI NHÀ TRAI
          </h3>

          <p className="font-playfair text-gray-700 mb-2">
            ĐƯỢC TỔ CHỨC VÀO
          </p>
          <p className="font-playfair text-gray-800 mb-4">
            16h30 - Thứ 7, 30/11/2025
          </p>

          <p className="font-playfair text-gray-700 mb-2">TẠI ĐỊA ĐIỂM</p>
          <p className="font-playfair text-gray-800">TƯ GIA NHÀ TRAI</p>
          <p className="font-playfair text-gray-800">
            Số nhà 2319, Đường Nguyễn Văn Linh, Tổ dân phố Lường, Phường Thượng Hồng, Tỉnh Hưng Yên
          </p>

          <img
            src="/images/decor-left.jpg"
            alt=""
            className="absolute bottom-0 left-0 w-24 opacity-70"
          />
          <img
            src="/images/decor-right.png"
            alt=""
            className="absolute bottom-0 right-0 w-24 opacity-70"
          />
        </div>

        <div className="relative bg-[#fbfaf7] border border-[#e6e2d9] p-10 rounded-2xl shadow-sm">
          <h3 className="text-xl font-playfair mb-6 text-gray-800">
            TIỆC CƯỚI NHÀ GÁI
          </h3>

          <p className="font-playfair text-gray-700 mb-2">
            ĐƯỢC TỔ CHỨC VÀO
          </p>
          <p className="font-playfair text-gray-800 mb-4">
            16h30 - Thứ 7, 30/11/2025
          </p>

          <p className="font-playfair text-gray-700 mb-2">TẠI ĐỊA ĐIỂM</p>
          <p className="font-playfair text-gray-800">TƯ GIA NHÀ GÁI</p>
          <p className="font-playfair text-gray-800">
            Số nhà 762, Đường Nguyễn Văn Linh, Tổ dân phố Ngọc Lập, Phường Đường Hào, Tỉnh Hưng Yên
          </p>

          <img
            src="/images/decor-left.jpg"
            alt=""
            className="absolute bottom-0 left-0 w-24 opacity-70"
          />

          <img
            src="/images/decor-right.png"
            alt=""
            className="absolute bottom-0 right-0 w-24 opacity-70"
          />
        </div>
      </div>
    </section>
    </ScrollReveal>
  );
}
