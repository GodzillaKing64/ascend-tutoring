import AnimatedNumber from "./AnimatedNumber";

const stats = [
  { target: 1530, suffix: "+", label: "Avg. Tutor SAT Score", prefix: "" },
  { target: 5,    suffix: "/5", label: "AP Exam Score Average", prefix: "" },
  { target: 1,    suffix: "%",  label: "Class Rank", prefix: "Top " },
];

export default function CredentialsSection() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden px-5 md:px-10 py-20"
      style={{ background: "linear-gradient(135deg,#8B1A1A,#7A1515)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%,rgba(255,255,255,0.04),transparent)" }}
      />
      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="text-center mb-[52px]">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-white/45 mb-3">
            Our Credentials
          </div>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(26px,3.5vw,40px)", letterSpacing: "-1.5px" }}
          >
            Numbers that speak for themselves.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-8">
          {stats.map(({ target, suffix, prefix = "", label }) => (
            <div
              key={label}
              className="text-center bg-white/[0.06] rounded-2xl border border-white/10 py-9 px-5 backdrop-blur-[8px]"
            >
              <div
                className="font-black text-white leading-none"
                style={{ fontSize: "clamp(34px,3.8vw,52px)", letterSpacing: "-2px" }}
              >
                {prefix}<AnimatedNumber target={target} suffix={suffix} />
              </div>
              <div className="text-[12px] text-white/50 mt-2.5 font-medium tracking-[0.3px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
