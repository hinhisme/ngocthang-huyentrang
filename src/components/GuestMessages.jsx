import React, { useEffect, useState } from "react";

const GuestMessages = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://wedding-rsvp-server-z9at.onrender.com/api/rsvp")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Lỗi khi tải lời chúc:", err));
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white w-[90%] md:w-[70%] max-h-[80vh] rounded-2xl shadow-xl overflow-y-auto p-6">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✕
        </button>

        <h2 className="text-3xl font-playfair mb-6 text-center text-pink-600">
          💬 Lời chúc từ bạn bè
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl shadow-md p-5 relative border border-pink-200 hover:shadow-lg transition-all duration-300"
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

                <span className="absolute top-3 right-3 text-xs bg-pink-100 px-2 py-1 rounded-full text-gray-700">
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
            <p className="text-gray-500 italic text-center col-span-2">
              Chưa có lời chúc nào 💌
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestMessages;
