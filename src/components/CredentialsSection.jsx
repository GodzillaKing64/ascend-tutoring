export default function CredentialsSection() {
  const stats = [
    { target: 1500, suffix: "+", label: "Avg. Tutor SAT Score",  prefix: "" },
    { target: 5,    suffix: "/5", label: "AP Exam Score Average", prefix: "" },
    { target: 1,    suffix: "%",  label: "Class Rank",            prefix: "Top " },
  ];
  return (
    <section id="credentials" style={{ background:"linear-gradient(135deg,#8B1A1A,#7A1515)", padding:"80px 40px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 80% at 80% 50%,rgba(255,255,255,0.04),transparent)",pointerEvents:"none" }} />
      <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
        <div style={{ textAlign:"center", marginBottom:52 }}>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", marginBottom:12 }}>Our Credentials</div>
          <h2 style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(26px,3.5vw,40px)", fontWeight:800, letterSpacing:"-1.5px", color:"#fff" }}>Numbers that speak for themselves.</h2>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:32 }}>
          {stats.map(({ target, suffix, prefix="", label }) => (
            <div key={label} style={{ textAlign:"center", background:"rgba(255,255,255,0.06)", borderRadius:16, border:"1px solid rgba(255,255,255,0.1)", padding:"36px 20px", backdropFilter:"blur(8px)" }}>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(34px,3.8vw,52px)", fontWeight:900, color:"#fff", letterSpacing:"-2px", lineHeight:1 }}>
                {prefix}<AnimatedNumber target={target} suffix={suffix} />
              </div>
              <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:"rgba(255,255,255,0.5)", marginTop:10, fontWeight:500, letterSpacing:"0.3px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}