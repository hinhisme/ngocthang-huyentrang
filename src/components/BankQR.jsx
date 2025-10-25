import ScrollReveal from "./ScrollReveal";

export default function BankQR() {
  return (
    <ScrollReveal direction="up" delay={500}>
      <section className="py-20 bg-[#fffaf5] text-center">
        <h2 className="text-3xl font-playfair mb-12 tracking-wide">
          HỘP MỪNG CƯỚI
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-4">
          <div className="bg-white shadow-md rounded-xl p-8 border border-[#f2e6cf] hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-playfair font-semibold mb-4 uppercase">
              MỪNG CƯỚI CHÚ RỂ
            </h3>

            <div className="bg-gradient-to-b from-[#0047ab] to-[#002d70] rounded-lg p-3 w-60 h-60 flex items-center justify-center">
              <img
                src="/images/qr-groom.jpg"
                alt="QR chú rể"
                className="rounded-md border-4 border-white shadow-md w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="mt-4 font-playfair font-semibold text-lg">NGỌC THẮNG</p>
            <p className="text-sm md:text-base">1017356829</p>
            <p className="font-playfair font-semibold mt-1 text-sm md:text-base">
              Vietcombank
            </p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 border border-[#f2e6cf] hover:shadow-xl transition-all duration-300 flex flex-col items-center">
            <h3 className="text-lg md:text-xl font-playfair font-semibold mb-4 uppercase">
              MỪNG CƯỚI CÔ DÂU
            </h3>

            <div className="bg-gradient-to-b from-[#b80000] to-[#6a0000] rounded-lg p-3 w-60 h-60 flex items-center justify-center">
              <img
                src="/images/qr-bride.jpg"
                alt="QR cô dâu"
                className="rounded-md border-4 border-white shadow-md w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="mt-4 font-playfair font-semibold text-lg">HUYỀN TRANG</p>
            <p className="text-sm md:text-base">2224125346</p>
            <p className="font-playfair font-semibold mt-1 text-sm md:text-base">
              BIDV
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
