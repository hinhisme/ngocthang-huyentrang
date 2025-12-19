import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    phone: "",
    attendance: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);
  const [bgLoaded, setBgLoaded] = useState(false);

  const bgImage = "/images/album/album4.webp";

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => setBgLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://wedding-rsvp-server-z9at.onrender.com/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setMessages((prev) => [formData, ...prev]);
      setFormData({
        name: "",
        relation: "",
        phone: "",
        attendance: "",
        message: "",
      });
    } catch (error) {
      console.error("Lỗi gửi RSVP:", error);
    }
  };

  return (
    <ScrollReveal direction="up" delay={200}>
      <section
        id="rsvp"
        className={`relative min-h-screen flex flex-col items-center justify-end pb-12 transition-opacity duration-700 ${
          bgLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: bgLoaded ? `url('${bgImage}')` : "none",
          backgroundColor: "#f7f5f0",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "contain",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative bg-white/90 p-6 rounded-2xl shadow-xl max-w-xl w-[90%] text-center mb-10 animate-fadeIn">
          <h2 className="text-2xl font-playfair mb-3">Xác Nhận Tham Dự</h2>
          <p className="text-gray-600 mb-5 text-sm">
            Vui lòng gửi lời chúc & xác nhận tham dự 💌
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Họ và tên"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            />

            <select
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            >
              <option value="">Mối quan hệ</option>
              <option value="bride">Bạn của cô dâu</option>
              <option value="groom">Bạn của chú rể</option>
              <option value="family">Người thân hai bên</option>
              <option value="other">Khác</option>
            </select>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none"
            />

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === "yes"}
                  onChange={handleChange}
                  required
                />
                <span>Sẽ tham dự 💒</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === "no"}
                  onChange={handleChange}
                />
                <span>Không thể tham dự 😢</span>
              </label>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Lời chúc 💕"
              className="border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-accent focus:outline-none min-h-[80px]"
            ></textarea>

            <button
              type="submit"
              className="bg-accent hover:bg-accent-dark text-white py-2 px-8 rounded-full font-medium transition-all duration-300 mx-auto"
            >
              Gửi 💖
            </button>
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default RSVP;
