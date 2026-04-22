import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Parsa Gilan",
    meta: "Houston — SAT Prep",
    quote:
      "The sessions with Monish were focused and never felt like generic tutoring — they actually figured out exactly where I was losing points and fixed those gaps.",
  },
  {
    name: "Victor Mora",
    meta: "Fort Bend — Algebra I & Geometry",
    quote:
      "I'd tried other tutoring services before and felt like I was just going through a worksheet with no help. Ascend was completely different, my tutor Eashan actually explained the reasoning behind every concept and taught special tricks toward understanding complex topics.",
  },
  {
    name: "Danny Philip",
    meta: "Fort Bend — SAT Prep",
    quote:
      "Ascend Tutoring is awesome, they’re flexible with different times, they’re tutoring services are student paced. When there’s content I don’t understand, Ascend breaks it down to make it comprehendible. Nikhil is a phenomenal tutor, he makes the topic more simpler, more content understood, and is a cool guy."
,
  },
  {
    name: "Krishiv Khandelia",
    meta: "Sugar Land — SAT Prep",
    quote:
      "Ascend made test prep feel manageable. My tutor broke down every concept in a way that actually stuck, and I saw real improvement by my second practice test. Highly recommend to anyone serious about their score.",
  },
];

function TestimonialCard({ data, position }) {
  const styles = {
    active: {
      transform: "translateX(-50%) translateZ(0px) rotateY(0deg)",
      opacity: 1,
      zIndex: 3,
      boxShadow:
        "0 20px 60px rgba(139,26,26,0.15), 0 4px 16px rgba(0,0,0,0.08)",
    },
    prev: {
      transform:
        "translateX(calc(-50% - 220px)) translateZ(-120px) rotateY(12deg)",
      opacity: 0.55,
      zIndex: 2,
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    },
    next: {
      transform:
        "translateX(calc(-50% + 220px)) translateZ(-120px) rotateY(-12deg)",
      opacity: 0.55,
      zIndex: 2,
      boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
    },
    hidden: {
      transform: "translateX(-50%) translateZ(-300px)",
      opacity: 0,
      zIndex: 1,
      pointerEvents: "none",
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "340px",
        background: "#ffffff",
        borderRadius: "16px",
        padding: "28px 28px 24px",
        top: 0,
        left: "50%",
        transformOrigin: "center center",
        transition:
          "transform 0.5s cubic-bezier(0.34, 1.3, 0.64, 1), opacity 0.5s ease, box-shadow 0.5s ease",
        boxSizing: "border-box",
        border: "1px solid #e8e0db",
        ...styles[position],
      }}
    >
      <span
        style={{
          fontFamily: "Georgia, serif",
          fontSize: "52px",
          color: "#8B1A1A",
          lineHeight: 0.6,
          display: "block",
          marginBottom: "14px",
        }}
      >
        "
      </span>

      <div
        style={{
          color: "#8B1A1A",
          fontSize: "13px",
          letterSpacing: "2px",
          marginBottom: "10px",
        }}
      >
        ★★★★★
      </div>

      <p
        style={{
          fontSize: "15px",
          color: "#2a2a2a",
          lineHeight: 1.65,
          margin: "0 0 20px",
        }}
      >
        {data.quote}
      </p>

      <div
        style={{
          width: "32px",
          height: "2px",
          background: "#8B1A1A",
          marginBottom: "16px",
          borderRadius: "2px",
        }}
      />

      <p
        style={{
          fontWeight: 700,
          fontSize: "14px",
          color: "#1a1a1a",
          margin: "0 0 3px",
        }}
      >
        {data.name}
      </p>

      <p style={{ fontSize: "12px", color: "#888888", margin: 0 }}>
        {data.meta}
      </p>
    </div>
  );
}

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const mouseStartX = useRef(null);
  const n = testimonials.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getPosition = (i) => {
    if (i === current) return "active";
    if (i === (current - 1 + n) % n) return "prev";
    if (i === (current + 1) % n) return "next";
    return "hidden";
  };

  const goNext = () => setCurrent((c) => (c + 1) % n);
  const goPrev = () => setCurrent((c) => (c - 1 + n) % n);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx < -40) goNext();
    else if (dx > 40) goPrev();
    touchStartX.current = null;
  };

  const handleMouseDown = (e) => {
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (mouseStartX.current === null) return;
    const dx = e.clientX - mouseStartX.current;
    if (dx < -40) goNext();
    else if (dx > 40) goPrev();
    mouseStartX.current = null;
  };

  const fadeStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(32px)",
    transition: "opacity 0.7s ease, transform 0.7s ease",
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        background: "#f5f0ed",
        padding: "96px 24px 120px",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Heading */}
      <div
        style={{
          ...fadeStyle,
          textAlign: "center",
          maxWidth: "700px",
          margin: "0 auto 12px",
        }}
      >
        <p
          style={{
            color: "#8B1A1A",
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Student Reviews
        </p>

        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 800,
            color: "#1a1a1a",
            margin: "0 0 48px",
            lineHeight: 1.1,
          }}
        >
          Countless students<br />Real growth.
        </h2>
      </div>

      {/* Carousel */}
      <div
        style={{
          ...fadeStyle,
          transitionDelay: "0.15s",
          position: "relative",
          perspective: "1000px",
          height: "420px",
          maxWidth: "700px",
          margin: "0 auto",
          userSelect: "none",
          cursor: "grab",
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} data={t} position={getPosition(i)} />
        ))}

        {/* Prev arrow */}
        <button
          onClick={goPrev}
          style={{
            position: "absolute",
            left: "-48px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#ffffff",
            border: "1px solid #e8e0db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            zIndex: 10,
            fontSize: "18px",
            color: "#8B1A1A",
          }}
          aria-label="Previous testimonial"
        >
          ‹
        </button>

        {/* Next arrow */}
        <button
          onClick={goNext}
          style={{
            position: "absolute",
            right: "-48px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "#ffffff",
            border: "1px solid #e8e0db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            zIndex: 10,
            fontSize: "18px",
            color: "#8B1A1A",
          }}
          aria-label="Next testimonial"
        >
          ›
        </button>
      </div>

      {/* Dot indicators */}
      <div
        style={{
          ...fadeStyle,
          transitionDelay: "0.2s",
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "32px",
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              background: i === current ? "#8B1A1A" : "#d0c8c2",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease, background 0.3s ease",
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}