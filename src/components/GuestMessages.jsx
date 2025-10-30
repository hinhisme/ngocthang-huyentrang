import React, { useEffect, useState } from "react";

const GuestMessages = ({ onClose }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("https://wedding-rsvp-server-z9at.onrender.com/api/rsvp")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("Lỗi khi tải lời chúc:", err));
  }, []);

  const maskPhone = (phone) => {
    if (!phone) return "";
    const str = String(phone);
    return str.replace(/(\d{2})\d{4}(\d{3,4})/, "$1****$2");
  };

  const getRelationTag = (relation) => {
    switch (relation) {
      case "bride":
        return (
          <span className="inline-flex items-center gap-1 text-pink-600 bg-pink-50 border border-pink-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            👰‍♀️ Bạn cô dâu
          </span>
        );
      case "groom":
        return (
          <span className="inline-flex items-center gap-1 text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            🤵‍♂️ Bạn chú rể
          </span>
        );
      case "family":
        return (
          <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            👨‍👩‍👧‍👦 Người thân
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">
            🌸 Khách mời
          </span>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white/95 w-[90%] md:w-[70%] max-h-[80vh] rounded-3xl shadow-2xl overflow-y-auto p-6 md:p-8 border border-pink-100 animate-slideUp">
        {/* Nút đóng */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl transition-transform hover:scale-110"
          aria-label="Đóng"
        >
          ✕
        </button>

        <h2 className="text-3xl md:text-4xl font-playfair mb-6 text-center text-pink-600">
          💌 Lời chúc từ bạn bè
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-md p-5 border border-pink-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-messageAppear"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Tên + Mối quan hệ */}
                <div className="flex flex-col mb-3">
                  <p className="text-base font-semibold text-gray-800">
                    {msg.name || "Khách mời ẩn danh"}
                  </p>
                  <div className="mt-1">{getRelationTag(msg.relation)}</div>
                </div>

                {/* Lời chúc */}
                <p className="text-gray-700 italic leading-relaxed mb-3">
                  “{msg.message || "Không có lời chúc 💌"}”
                </p>

                {/* Thông tin phụ */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    {msg.attendance === "yes" ? (
                      <span className="text-green-600 font-medium">
                        💒 Sẽ tham dự
                      </span>
                    ) : (
                      <span className="text-red-500 font-medium">
                        😢 Không tham dự
                      </span>
                    )}
                  </p>
                  {msg.phone && (
                    <p className="text-xs text-gray-400 italic">
                      📞 {maskPhone(msg.phone)}
                    </p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic text-center col-span-2">
              Chưa có lời chúc nào 💌
            </p>
          )}
        </div>

        {/* Hiệu ứng */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes messageAppear {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.4s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 0.5s ease-out forwards;
          }
          .animate-messageAppear {
            animation: messageAppear 0.4s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
};

export default GuestMessages;
