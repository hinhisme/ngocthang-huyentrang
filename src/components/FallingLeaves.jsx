import React, { useEffect, useState } from "react";

const FallingLeaves = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // vị trí ngang ngẫu nhiên
      duration: 8 + Math.random() * 8, // thời gian rơi
      delay: Math.random() * 5, // trễ ngẫu nhiên
      size: 30 + Math.random() * 40, // kích thước khác nhau
      opacity: 0.7 + Math.random() * 0.3, // độ trong
      rotateDir: Math.random() < 0.5 ? 1 : -1, // xoay trái/phải
      drift: 30 + Math.random() * 50, // độ lệch ngang
    }));
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-10">
      {leaves.map((leaf) => (
        <img
          key={leaf.id}
          src="/images/heart.png"
          alt="leaf"
          className="absolute animate-fall"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            top: "-80px",
            opacity: leaf.opacity,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            "--drift": `${leaf.drift}px`,
            "--rotateDir": leaf.rotateDir,
          }}
        />
      ))}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateX(0) translateY(-10vh) rotate(0deg);
            opacity: 1;
          }
          25% {
            transform: translateX(calc(var(--drift) * 0.5 * var(--rotateDir))) translateY(25vh) rotate(90deg);
            opacity: 0.9;
          }
          50% {
            transform: translateX(calc(var(--drift) * -0.5 * var(--rotateDir))) translateY(55vh) rotate(180deg);
            opacity: 0.8;
          }
          75% {
            transform: translateX(calc(var(--drift) * 0.3 * var(--rotateDir))) translateY(85vh) rotate(270deg);
            opacity: 0.7;
          }
          100% {
            transform: translateX(0) translateY(110vh) rotate(360deg);
            opacity: 0.6;
          }
        }

        .animate-fall {
          position: absolute;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FallingLeaves;
