import React, { useEffect, useState } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <div className="mt-6 flex justify-center gap-6 text-white font-semibold text-lg md:text-2xl">
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.days ?? "0"}</div>
        <div className="text-sm opacity-80">Ngày</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.hours ?? "0"}</div>
        <div className="text-sm opacity-80">Giờ</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.minutes ?? "0"}</div>
        <div className="text-sm opacity-80">Phút</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold">{timeLeft.seconds ?? "0"}</div>
        <div className="text-sm opacity-80">Giây</div>
      </div>
    </div>
  );
}
