import React, { useEffect, useState } from "react";

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ expired: true });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <p className="text-xl font-playfair mt-4 text-white">
        💖 Ngày trọng đại đã đến rồi! 💍
      </p>
    );
  }

  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      {[
        { label: "Ngày", value: timeLeft.days },
        { label: "Giờ", value: timeLeft.hours },
        { label: "Phút", value: timeLeft.minutes },
        { label: "Giây", value: timeLeft.seconds },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white/20 backdrop-blur-md px-4 py-3 rounded-2xl shadow-md border border-white/30 min-w-[70px] transition transform hover:scale-105"
        >
          <span className="text-2xl md:text-3xl font-bold text-white drop-shadow-sm">
            {String(item.value || 0).padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm text-pink-100 mt-1 font-medium uppercase tracking-wider">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
