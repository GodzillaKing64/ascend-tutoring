import { useRef, useState, useEffect } from "react";

export default function TeamCard({ member }) {
  const cardRef = useRef();
  const [beamPos, setBeamPos] = useState(0);

  useEffect(() => {
    let frame, start = null;
    const duration = 3200;
    const tick = (ts) => {
      if (!start) start = ts;
      setBeamPos(((ts - start) % duration) / duration);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const getBeamStyle = () => {
    const p = beamPos;
    const beamColor = "rgba(255,255,255,0.55)";
    if (p < 0.25) {
      const t = p / 0.25;
      return { top: 0, left: `${t * 100}%`, width: "30%", height: "1.5px", transform: "translateX(-50%)", background: `linear-gradient(to right, transparent, ${beamColor}, transparent)` };
    } else if (p < 0.5) {
      const t = (p - 0.25) / 0.25;
      return { right: 0, top: `${t * 100}%`, width: "1.5px", height: "30%", transform: "translateY(-50%)", background: `linear-gradient(to bottom, transparent, ${beamColor}, transparent)` };
    } else if (p < 0.75) {
      const t = (p - 0.5) / 0.25;
      return { bottom: 0, right: `${t * 100}%`, width: "30%", height: "1.5px", transform: "translateX(50%)", background: `linear-gradient(to right, transparent, ${beamColor}, transparent)` };
    } else {
      const t = (p - 0.75) / 0.25;
      return { left: 0, bottom: `${t * 100}%`, width: "1.5px", height: "30%", transform: "translateY(50%)", background: `linear-gradient(to bottom, transparent, ${beamColor}, transparent)` };
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative rounded-[18px] overflow-hidden cursor-default bg-[#111010] border border-white/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.25)] transition-all duration-[220ms] ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
      style={{ aspectRatio: "3/4" }}
    >
      {/* Traveling beam */}
      <div className="absolute inset-0 rounded-[18px] overflow-hidden pointer-events-none z-[3]">
        <div className="absolute" style={getBeamStyle()} />
      </div>

      {/* Subtle top inner glow */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
      />

      {/* Photo */}
      {member.photo ? (
        <img
          src={member.photo}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: member.id === "es" ? "center 15%" : "top" }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-0">
          <div className="w-[60px] h-[60px] rounded-full bg-white/[0.04] border border-dashed border-white/10 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <span className="text-[10px] text-white/[0.18] tracking-[0.5px]">Add photo</span>
        </div>
      )}

      {/* Bottom name overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[2] px-4 pb-4 pt-9"
        style={{ background: "linear-gradient(to top, rgba(8,6,6,0.96) 0%, rgba(8,6,6,0.7) 50%, transparent 100%)" }}
      >
        <div className="font-bold text-[13px] text-white tracking-[-0.2px] leading-[1.25]">
          {member.name}
        </div>
        <div className="text-[10px] text-white/[0.38] font-medium mt-[3px] tracking-[0.6px] uppercase">
          Ascend Tutor
        </div>
      </div>
    </div>
  );
}
