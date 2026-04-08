import { useState, useEffect } from "react";

export default function ElegantShape({ style = {}, delay = 0, width = 400, height = 100, rotate = 0, color = "rgba(139,26,26,0.08)", className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    let frame, start = null;
    const tick = (ts) => {
      if (!start) start = ts;
      setFloatY(Math.sin(((ts - start) / 1000) * (Math.PI / 6)) * 12);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        opacity: mounted ? 1 : 0,
        transform: `rotate(${rotate}deg) translateY(${mounted ? 0 : -120}px)`,
        transition: `opacity 1.4s ease ${delay}s, transform 2.2s cubic-bezier(0.23,0.86,0.39,0.96) ${delay}s`,
        ...style,
      }}
    >
      <div style={{ width, height, transform: `translateY(${floatY}px)`, transition: "transform 0.08s linear" }}>
        <div
          className="w-full h-full"
          style={{
            borderRadius: 9999,
            background: `linear-gradient(to right, ${color}, transparent)`,
            border: `1.5px solid ${color}`,
            boxShadow: "0 8px 32px 0 rgba(139,26,26,0.04)",
          }}
        />
      </div>
    </div>
  );
}
