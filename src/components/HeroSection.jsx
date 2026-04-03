export default function HeroSection() {
  const [vis1, setVis1] = useState(false);
  const [vis2, setVis2] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setVis1(true), 100);
    const t2 = setTimeout(() => setVis2(true), 500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior:"smooth" });

  return (
    <div style={{ minHeight:"100vh", background:"#FAFAF9", display:"flex", alignItems:"center", justifyContent:"center", overflow:"hidden", position:"relative" }}>
      <div style={{ position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 55% at 15% 45%,rgba(139,26,26,0.04),transparent 65%),radial-gradient(ellipse 55% 45% at 85% 65%,rgba(180,60,40,0.03),transparent 65%)",pointerEvents:"none" }} />

      <ElegantShape delay={0.3} width={580} height={130} rotate={11}  color="rgba(139,26,26,0.09)" style={{ left:"-4%", top:"16%" }} />
      <ElegantShape delay={0.5} width={460} height={110} rotate={-14} color="rgba(160,40,30,0.07)" style={{ right:"-1%", top:"68%" }} />
      <ElegantShape delay={0.4} width={280} height={72}  rotate={-7}  color="rgba(120,20,20,0.07)" style={{ left:"7%",  bottom:"9%" }} />
      <ElegantShape delay={0.6} width={190} height={52}  rotate={19}  color="rgba(150,45,25,0.06)" style={{ right:"19%",top:"11%" }} />
      <ElegantShape delay={0.7} width={140} height={38}  rotate={-24} color="rgba(180,60,40,0.06)" style={{ left:"23%",top:"6%" }} />

      <div style={{ position:"absolute",inset:0,background:"linear-gradient(to bottom,#FAFAF9 0%,transparent 18%,transparent 80%,#FAFAF9 100%)",pointerEvents:"none" }} />

      <div style={{ position:"relative",zIndex:10,textAlign:"center",maxWidth:820,padding:"0 28px" }}>
        <h1 style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(52px,8.5vw,110px)", fontWeight:900, letterSpacing:"-4px", lineHeight:1.0, margin:"0 0 24px 0", opacity:vis1?1:0, transform:vis1?"translateY(0)":"translateY(36px)", transition:"all 0.9s cubic-bezier(0.25,0.4,0.25,1)" }}>
          <span style={{ display:"block", color:"#1A0F0A" }}>Top 1% Tutors</span>
          <span style={{ display:"block", color:"#8B1A1A" }}>Real Results.</span>
        </h1>
        <p style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(15px,2vw,18px)", fontWeight:400, color:"#6B4C3A", lineHeight:1.7, maxWidth:460, margin:"0 auto 36px", opacity:vis2?1:0, transform:vis2?"translateY(0)":"translateY(20px)", transition:"all 0.9s cubic-bezier(0.25,0.4,0.25,1) 0.15s" }}>
          Five Sugar Land high schoolers who scored in the top 1% on the SAT — bringing elite prep at a price that's actually fair.
        </p>
        <div style={{ opacity:vis2?1:0, transition:"opacity 0.9s ease 0.3s" }}>
          <button
            onClick={() => scrollTo("contact")}
            style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:700, color:"#fff", background:"#8B1A1A", border:"none", padding:"14px 34px", borderRadius:50, cursor:"pointer", boxShadow:"0 4px 20px rgba(139,26,26,0.3)", transition:"all 0.2s", letterSpacing:"-0.1px" }}
            onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(139,26,26,0.42)"; }}
            onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 20px rgba(139,26,26,0.3)"; }}
          >Book a Free Session →</button>
        </div>
      </div>
    </div>
  );
}
