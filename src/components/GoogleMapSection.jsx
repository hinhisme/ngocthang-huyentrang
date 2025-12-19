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
          <p className="font-playfair mb-3">Số nhà 358, Đường Nguyễn Văn Linh, Phan Bôi, Dị Sử, Mỹ Hào, Tỉnh Hưng Yên</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3726.5898719087468!2d106.06987257525378!3d20.928813880695603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDU1JzQzLjciTiAxMDbCsDA0JzIwLjgiRQ!5e0!3m2!1sen!2s!4v1766106274902!5m2!1sen!2s"
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
          <p className="font-playfair mb-3">Phố Tây, Tam Sơn, Từ Sơn, Bắc Ninh</p>
          <div className="rounded-2xl font-playfair overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1860.520144199858!2d105.976762!3d21.1507949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d20.93459!2d106.063943!4m3!3m2!1d21.151077!2d105.97695!5e0!3m2!1svi!2s!4v1766106084420!5m2!1svi!2s"
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
