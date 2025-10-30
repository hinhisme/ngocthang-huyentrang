import React from "react";
import ScrollReveal from "./ScrollReveal";

const GoogleMapSection = () => {
  return (
    
    <div className="bg-pink-50 py-12 px-4">
      <ScrollReveal direction="up" delay={200}>
      <h2 className="text-center text-3xl font-playfair font-semibold mb-8">
        💒 Địa điểm tổ chức
      </h2>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={200}>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2 font-playfair">🏠 Nhà Trai</h3>
          <p className="font-playfair mb-3">Số nhà 2319, Đường Nguyễn Văn Linh, Tổ dân phố Lường, Phường Thượng Hồng, Tỉnh Hưng Yên</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d533.244711081014!2d106.11624331730287!3d20.91597096044017!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1761296866241!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ nhà trai"
            ></iframe>
          </div>
        </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
        <div className="text-center">
          <h3 className="text-xl font-medium mb-2 font-playfair">🏡 Nhà Gái</h3>
          <p className="font-playfair mb-3">Số nhà 762, Đường Nguyễn Văn Linh, Tổ dân phố Ngọc Lập, Phường Đường Hào, Tỉnh Hưng Yên</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d635.9413480015969!2d106.0951058260219!3d20.92094687919924!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1761297783348!5m2!1svi!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bản đồ nhà gái"
            ></iframe>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default GoogleMapSection;
