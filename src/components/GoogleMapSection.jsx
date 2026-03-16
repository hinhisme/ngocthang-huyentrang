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
          <p className="font-playfair mb-3">Tổ dân phố Tiên Xá 2, phường Mỹ Hào, tỉnh Hưng Yên</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d217.20231595705263!2d106.09376585283192!3d20.94935837456439!2m3!1f134.2851866402603!2f45.000000000004334!3f0!3m2!1i1024!2i768!4f35!5e1!3m2!1svi!2s!4v1773667968669!5m2!1svi!2s"
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
          <p className="font-playfair mb-3">Thôn Kim Ốc, huyện Thọ Xuân, tỉnh Thanh Hóa</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1424.0223347215829!2d105.5026341584347!3d19.954183863392057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDU3JzE0LjkiTiAxMDXCsDMwJzA5LjYiRQ!5e1!3m2!1svi!2s!4v1773668212253!5m2!1svi!2s"
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
