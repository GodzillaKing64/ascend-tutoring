import React from "react";

export default function TeamSection() {
  return (
    <>
      {/* ── Separator between hero and team ── */}
      <div style={{ position:"relative", overflow:"hidden" }}>
        <div style={{ height:2, background:"linear-gradient(to right, transparent, rgba(139,26,26,0.15), rgba(139,26,26,0.3), rgba(139,26,26,0.15), transparent)" }} />
        <div style={{ background:"linear-gradient(to bottom, #F0E8E0, #FAFAF9)", padding:"64px 40px 0" }}>
          <div style={{ maxWidth:1000, margin:"0 auto" }}>
            <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#8B1A1A", marginBottom:12 }}>Meet the Team</div>
            <h2 style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(30px,4.5vw,52px)", fontWeight:900, letterSpacing:"-2.5px", color:"#1A0F0A", lineHeight:1.0, marginBottom:16 }}>
              Five Sugar Land<br/>high schoolers.
            </h2>
            <p style={{ fontFamily:"'Inter',sans-serif", fontSize:16, color:"#6B4C3A", maxWidth:460, lineHeight:1.75, marginBottom:28 }}>
              We scored in the top 1% in our class on the SAT. We teach because we genuinely know how to explain hard things clearly.
            </p>

          </div>
        </div>
      </div>

      <section id="team" style={{ background:"linear-gradient(to bottom, #F0E8E0, #FAFAF9)", padding:"48px 40px 96px" }}>
        <div style={{ maxWidth:1000, margin:"0 auto" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(5,1fr)", gap:16 }}>
            {TEAM.map(m => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}