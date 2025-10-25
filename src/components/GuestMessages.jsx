import React, { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const GuestMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://wedding-rsvp-server-z9at.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Lỗi khi tải lời chúc:", err));
  }, []);

  return (
    <ScrollReveal direction="up" delay={700}>
    <section
      id="guest-messages"
      className="py-20 bg-accent-light/30 flex flex-col items-center"
    >
      <h2 className="text-3xl font-playfair mb-8">
        💬 Lời chúc từ bạn bè
      </h2>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 relative border border-accent/20 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-gray-800 italic mb-3">
                “{msg.message || "Không có lời chúc 💌"}”
              </p>
              <p className="text-sm text-gray-600 font-medium">
                — {msg.name}{" "}
                {msg.attendance === "yes" ? (
                  <span className="text-green-600">💒 Sẽ tham dự</span>
                ) : (
                  <span className="text-red-500">😢 Không tham dự</span>
                )}
              </p>
              <p className="text-xs text-gray-400 mt-1">{msg.timestamp}</p>

              <span className="absolute top-3 right-3 text-xs bg-accent/20 px-2 py-1 rounded-full text-gray-700">
                {msg.relation === "bride"
                  ? "Bạn cô dâu"
                  : msg.relation === "groom"
                  ? "Bạn chú rể"
                  : msg.relation === "family"
                  ? "Người thân"
                  : "Khác"}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">Chưa có lời chúc nào 💌</p>
        )}
      </div>
    </section>
    </ScrollReveal>
  );
};

export default GuestMessages;
