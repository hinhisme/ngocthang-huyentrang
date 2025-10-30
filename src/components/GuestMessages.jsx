import React, { useEffect, useState } from "react";

const GuestMessages = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://wedding-rsvp-server-z9at.onrender.com/api/rsvp")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Lỗi khi tải lời chúc:", err));
  }, []);

  // 🎀 Hàm hiển thị quan hệ với màu & icon riêng
  const getRelationTag = (relation) => {
    switch (relation) {
      case "bride":
        return (
          <span className="flex items-center gap-1 text-pink-500 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            👰‍♀️ Bạn cô dâu
          </span>
        );
      case "groom":
        return (
          <span className="flex items-center gap-1 text-blue-500 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            🤵‍♂️ Bạn chú rể
          </span>
        );
      case "family":
        return (
          <span className="flex items-center gap-1 text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            👨‍👩‍👧‍👦 Người thân
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            🌸 Khách mời
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white w-[90%] md:w-[70%] max-h-[80vh] rounded-3xl shadow-2xl overflow-y-auto p-6 md:p-8 border border-pink-100 animate-slideUp">
        {/* Nút đóng popup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl transition-transform hover:scale-110"
          aria-label="Đóng"
        >
          ✕
        </button>

        {/* Tiêu đề */}
        <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center text-pink-600">
          💌 Lời chúc từ bạn bè
        </h2>

        {/* Danh sách lời chúc */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 rounded-2xl shadow-md p-5 border border-pink-100 hover:shadow-lg transition-all duration-500 relative"
              >
                <div className="flex justify-between items-center mb-3">
                  <p className="text-base font-medium text-gray-800">
                    {msg.name}
                  </p>
                  {getRelationTag(msg.relation)}
                </div>

                <p className="text-gray-700 italic leading-relaxed mb-3">
                  “{msg.message || "Không có lời chúc 💌"}”
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    {msg.attendance === "yes" ? (
                      <span className="text-green-600">💒 Sẽ tham dự</span>
                    ) : (
                      <span className="text-red-500">😢 Không tham dự</span>
                    )}
                  </p>
                  <p className="text-xs">{msg.timestamp}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-center col-span-2">
              Chưa có lời chúc nào 💌
            </p>
          )}
        </div>

        {/* Hiệu ứng CSS */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 0.5s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GuestMessages;
