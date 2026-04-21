import { useState, useEffect } from "react";
import ElegantShape from "./ElegantShape";

export default function HeroSection({ onOpenModal }) {
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVis1(true), 100);
    const t2 = setTimeout(() => setVis2(true), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div className="min-h-screen bg-site-bg flex items-center justify-center overflow-hidden relative">
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 55% at 15% 45%,rgba(139,26,26,0.04),transparent 65%),radial-gradient(ellipse 55% 45% at 85% 65%,rgba(180,60,40,0.03),transparent 65%)" }}
      />

      <ElegantShape delay={0.3} width={580} height={130} rotate={11}  color="rgba(139,26,26,0.09)" style={{ left: "-4%", top: "16%" }} className="hidden md:block" />
      <ElegantShape delay={0.5} width={460} height={110} rotate={-14} color="rgba(160,40,30,0.07)" style={{ right: "-1%", top: "68%" }} className="hidden md:block" />
      <ElegantShape delay={0.4} width={200} height={52}  rotate={-7}  color="rgba(120,20,20,0.07)" style={{ left: "7%", bottom: "9%" }} />
      <ElegantShape delay={0.6} width={140} height={40}  rotate={19}  color="rgba(150,45,25,0.06)" style={{ right: "5%", top: "11%" }} />
      <ElegantShape delay={0.7} width={100} height={28}  rotate={-24} color="rgba(180,60,40,0.06)" style={{ left: "5%", top: "8%" }} />

      {/* Edge fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom,#FAFAF9 0%,transparent 18%,transparent 80%,#FAFAF9 100%)" }}
      />

      <div className="relative z-10 text-center max-w-[820px] px-7">
        <h1
          className="font-black leading-none mb-6 transition-all duration-[900ms] [cubic-bezier(0.25,0.4,0.25,1)]"
          style={{
            fontSize: "clamp(52px,8.5vw,110px)",
            letterSpacing: "-4px",
            opacity: vis1 ? 1 : 0,
            transform: vis1 ? "translateY(0)" : "translateY(36px)",
            transition: "all 0.9s cubic-bezier(0.25,0.4,0.25,1)",
          }}
        >
          <span className="block text-dark">Top 1% Tutors</span>
          <span className="block text-primary">Real Results.</span>
        </h1>

        <p
          className="font-normal text-text-warm leading-[1.7] max-w-[460px] mx-auto mb-9"
          style={{
            fontSize: "clamp(15px,2vw,18px)",
            opacity: vis2 ? 1 : 0,
            transform: vis2 ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.25,0.4,0.25,1) 0.15s",
          }}
        >
          Six Sugar Land high schoolers who scored in the top 1% on the SAT — bringing elite prep at a price that's actually fair.
        </p>

        <div style={{ opacity: vis2 ? 1 : 0, transition: "opacity 0.9s ease 0.3s" }}>
          <button
            onClick={onOpenModal}
            className="text-[15px] font-bold text-white bg-primary border-none px-[34px] py-[14px] rounded-full cursor-pointer tracking-[-0.1px] shadow-[0_4px_20px_rgba(139,26,26,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(139,26,26,0.42)]"
          >
            Book a Consulting Session →
          </button>
        </div>
      </div>
    </div>
  );
}
