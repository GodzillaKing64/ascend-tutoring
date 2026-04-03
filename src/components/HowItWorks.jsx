export default function HowItWorksSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  const subjects = [
    {
      tag: "SAT",
      title: "SAT Math",
      topics: ["Algebra & Functions", "Advanced Math", "Problem Solving", "Data Analysis"],
      desc: "From linear equations to quadratics to data interpretation — we cover every math module tested on the digital SAT.",
      level: "All levels",
    },
    {
      tag: "SAT",
      title: "SAT Reading & Writing",
      topics: ["Craft & Structure", "Information & Ideas", "Standard English", "Expression of Ideas"],
      desc: "Evidence-based reading, grammar rules, rhetoric, and rhetorical analysis broken down into repeatable strategies.",
      level: "All levels",
    },
    {
      tag: "AP",
      title: "AP Mathematics",
      topics: ["AP Calculus AB/BC", "AP Statistics", "AP Precalculus", "AP Computer Science"],
      desc: "Deep conceptual understanding plus exam strategy. We know the rubrics — we've scored 5s.",
      level: "High school",
    },
    {
      tag: "AP",
      title: "AP Sciences",
      topics: ["AP Biology", "AP Chemistry", "AP Physics 1 & 2", "AP Environmental Sci"],
      desc: "Lab reasoning, free-response strategy, and concept mastery across all major AP science exams.",
      level: "High school",
    },
    {
      tag: "Foundations",
      title: "Basic Math",
      topics: ["Arithmetic & Number Sense", "Fractions & Decimals", "Pre-Algebra", "Word Problems"],
      desc: "Building real mathematical confidence from the ground up — perfect for students who need to strengthen fundamentals before tackling advanced material.",
      level: "Middle school",
    },
    {
      tag: "Foundations",
      title: "Basic Reading",
      topics: ["Reading Comprehension", "Vocabulary in Context", "Main Idea & Detail", "Inference Skills"],
      desc: "Core literacy skills that carry into every subject. We build strong readers by teaching active strategies, not just practice.",
      level: "Middle school",
    },
  ];

  const prev = () => setActiveCard(c => Math.max(0, c - 1));
  const next = () => setActiveCard(c => Math.min(subjects.length - 1, c + 1));

  const card = subjects[activeCard];

  return (
    <section id="how-it-works" style={{ padding:"96px 0 96px", background:"#FAFAF9" }}>
      <div style={{ maxWidth:1160, margin:"0 auto", padding:"0 40px" }}>

        {/* Section label */}
        <div style={{ marginBottom:56 }}>
          <div style={{ fontFamily:"'Inter',sans-serif", fontSize:11, fontWeight:700, letterSpacing:"2px", textTransform:"uppercase", color:"#8B1A1A", marginBottom:12 }}>What We Teach</div>
          <h2 style={{ fontFamily:"'Inter',sans-serif", fontSize:"clamp(26px,3.5vw,44px)", fontWeight:900, letterSpacing:"-2px", color:"#1A0F0A", lineHeight:1.05 }}>Everything tailored.<br/>Nothing generic.</h2>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center" }}>

          {/* LEFT — 4 step cards */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            {[
              { n:"01", title:"Placement Test", body:"Every student starts with a full diagnostic to establish a baseline and identify exactly where points are being lost." },
              { n:"02", title:"Personalized Plan", body:"We build a custom plan targeting your exact weak areas — tailored material written by tutors who've taken the real tests." },
              { n:"03", title:"Progress Tests", body:"Every 4 sessions we run a full practice test, review every mistake, and rebuild the plan around what the data shows." },
              { n:"04", title:"Test-Day Ready", body:"Timed mock exams, pacing strategy, and mental prep so the real exam feels completely familiar." },
            ].map(({ n, title, body }) => (
              <div key={n} style={{ padding:"22px 24px", background:"#FFFFFF", borderRadius:14, border:"1px solid #EDE5DC", boxShadow:"0 2px 12px rgba(42,26,16,0.04)", display:"flex", gap:16, alignItems:"flex-start" }}>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, fontWeight:800, color:"rgba(139,26,26,0.25)", letterSpacing:"-0.5px", flexShrink:0, paddingTop:2, minWidth:22 }}>{n}</div>
                <div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:15, fontWeight:700, color:"#1A0F0A", letterSpacing:"-0.3px", marginBottom:5 }}>{title}</div>
                  <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"#6B4C3A", lineHeight:1.7 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — swipeable subject cards */}
          <div style={{ position:"relative" }}>

            {/* Card */}
            <div
              key={activeCard}
              style={{
                background:"#FFFFFF",
                borderRadius:20,
                border:"1px solid #E8E0D8",
                boxShadow:"0 8px 40px rgba(42,26,16,0.08)",
                overflow:"hidden",
                userSelect:"none",
              }}
            >
              {/* Color top accent */}
              <div style={{ height:2, background:"linear-gradient(to right, #8B1A1A, rgba(139,26,26,0.0))" }} />

              <div style={{ padding:"28px 28px 24px" }}>
                {/* Tag + level */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, fontWeight:700, color:"#8B1A1A", letterSpacing:"1.5px", textTransform:"uppercase", background:"rgba(139,26,26,0.07)", padding:"4px 10px", borderRadius:20, border:"1px solid rgba(139,26,26,0.12)" }}>{card.tag}</span>
                  <span style={{ fontFamily:"'Inter',sans-serif", fontSize:10, color:"#9C7060", letterSpacing:"0.3px" }}>{card.level}</span>
                </div>

                {/* Title */}
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:24, fontWeight:800, color:"#1A0F0A", letterSpacing:"-1px", marginBottom:10, lineHeight:1.1 }}>{card.title}</div>
                <div style={{ fontFamily:"'Inter',sans-serif", fontSize:13, color:"#6B4C3A", lineHeight:1.65, marginBottom:22 }}>{card.desc}</div>

                {/* Topics */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:8 }}>
                  {card.topics.map(t => (
                    <div key={t} style={{ padding:"9px 12px", background:"#F7F2EE", borderRadius:8, border:"1px solid #EDE5DC" }}>
                      <div style={{ fontFamily:"'Inter',sans-serif", fontSize:12, color:"#5C3D2A", fontWeight:500 }}>{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer nav */}
              <div style={{ padding:"14px 28px", borderTop:"1px solid #EDE5DC", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                {/* Dots */}
                <div style={{ display:"flex", gap:6 }}>
                  {subjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCard(i)}
                      style={{ width: i === activeCard ? 20 : 6, height:6, borderRadius:3, background: i === activeCard ? "#8B1A1A" : "rgba(139,26,26,0.18)", border:"none", cursor:"pointer", transition:"all 0.25s ease", padding:0 }}
                    />
                  ))}
                </div>
                {/* Arrows */}
                <div style={{ display:"flex", gap:8 }}>
                  <button
                    onClick={prev}
                    disabled={activeCard === 0}
                    style={{ width:32, height:32, borderRadius:"50%", background:"#F7F2EE", border:"1px solid #EDE5DC", color:"#5C3D2A", cursor: activeCard===0?"not-allowed":"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", opacity: activeCard===0?0.3:1, transition:"all 0.2s" }}
                  >←</button>
                  <button
                    onClick={next}
                    disabled={activeCard === subjects.length - 1}
                    style={{ width:32, height:32, borderRadius:"50%", background:"#F7F2EE", border:"1px solid #EDE5DC", color:"#5C3D2A", cursor: activeCard===subjects.length-1?"not-allowed":"pointer", fontSize:14, display:"flex", alignItems:"center", justifyContent:"center", opacity: activeCard===subjects.length-1?0.3:1, transition:"all 0.2s" }}
                  >→</button>
                </div>
              </div>
            </div>

            {/* Subject count */}
            <div style={{ textAlign:"center", marginTop:12, fontFamily:"'Inter',sans-serif", fontSize:12, color:"#9C7060" }}>
              {activeCard + 1} of {subjects.length} subjects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
