import React, { useEffect, useRef, useState } from "react";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  const directionClass = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  }[direction];

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        visible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClass}`
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
