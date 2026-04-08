import { useState } from "react";

const subjects = [
  {
    tag: "SAT", title: "SAT Math",
    topics: ["Algebra & Functions", "Advanced Math", "Problem Solving", "Data Analysis"],
    desc: "From linear equations to quadratics to data interpretation — we cover every math module tested on the digital SAT.",
    level: "All levels",
  },
  {
    tag: "SAT", title: "SAT Reading & Writing",
    topics: ["Craft & Structure", "Information & Ideas", "Standard English", "Expression of Ideas"],
    desc: "Evidence-based reading, grammar rules, rhetoric, and rhetorical analysis broken down into repeatable strategies.",
    level: "All levels",
  },
  {
    tag: "AP", title: "AP Mathematics",
    topics: ["AP Calculus AB/BC", "AP Statistics", "AP Precalculus", "AP Computer Science"],
    desc: "Deep conceptual understanding plus exam strategy. We know the rubrics — we've scored 5s.",
    level: "High school",
  },
  {
    tag: "AP", title: "AP Sciences",
    topics: ["AP Biology", "AP Chemistry", "AP Physics 1 & 2", "AP Environmental Sci"],
    desc: "Lab reasoning, free-response strategy, and concept mastery across all major AP science exams.",
    level: "High school",
  },
  {
    tag: "Foundations", title: "Basic Math",
    topics: ["Arithmetic & Number Sense", "Fractions & Decimals", "Pre-Algebra", "Word Problems"],
    desc: "Building real mathematical confidence from the ground up — perfect for students who need to strengthen fundamentals before tackling advanced material.",
    level: "Middle school",
  },
  {
    tag: "Foundations", title: "Basic Reading",
    topics: ["Reading Comprehension", "Vocabulary in Context", "Main Idea & Detail", "Inference Skills"],
    desc: "Core literacy skills that carry into every subject. We build strong readers by teaching active strategies, not just practice.",
    level: "Middle school",
  },
];

const steps = [
  { n: "01", title: "Placement Test", body: "Every student starts with a full diagnostic to establish a baseline and identify exactly where points are being lost." },
  { n: "02", title: "Personalized Plan", body: "We build a custom plan targeting your exact weak areas — tailored material written by tutors who've taken the real tests." },
  { n: "03", title: "Progress Tests", body: "Every 4 sessions we run a full practice test, review every mistake, and rebuild the plan around what the data shows." },
  { n: "04", title: "Test-Day Ready", body: "Timed mock exams, pacing strategy, and mental prep so the real exam feels completely familiar." },
];

export default function HowItWorksSection() {
  const [activeCard, setActiveCard] = useState(0);

  const prev = () => setActiveCard(c => Math.max(0, c - 1));
  const next = () => setActiveCard(c => Math.min(subjects.length - 1, c + 1));
  const card = subjects[activeCard];

  return (
    <section id="how-it-works" className="bg-site-bg py-24">
      <div className="max-w-[1160px] mx-auto px-5 md:px-10">

        {/* Section header */}
        <div className="mb-14">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary mb-3">
            What We Teach
          </div>
          <h2
            className="font-black text-dark leading-[1.05]"
            style={{ fontSize: "clamp(26px,3.5vw,44px)", letterSpacing: "-2px" }}
          >
            Everything tailored.<br />Nothing generic.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:gap-14">

          {/* LEFT — process steps */}
          <div className="flex flex-col gap-4">
            {steps.map(({ n, title, body }) => (
              <div
                key={n}
                className="flex gap-4 items-start px-6 py-[22px] bg-white rounded-[14px] border border-border shadow-[0_2px_12px_rgba(42,26,16,0.04)]"
              >
                <div className="text-[12px] font-extrabold text-primary/25 tracking-[-0.5px] shrink-0 pt-0.5 min-w-[22px]">
                  {n}
                </div>
                <div>
                  <div className="text-[15px] font-bold text-dark tracking-[-0.3px] mb-1">{title}</div>
                  <div className="text-[13px] text-text-warm leading-[1.7]">{body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — subject card carousel */}
          <div className="relative">
            <div
              key={activeCard}
              className="bg-white rounded-[20px] border border-[#E8E0D8] shadow-[0_8px_40px_rgba(42,26,16,0.08)] overflow-hidden select-none"
            >
              {/* Top accent */}
              <div
                className="h-[2px]"
                style={{ background: "linear-gradient(to right, #8B1A1A, rgba(139,26,26,0.0))" }}
              />

              <div className="px-7 pt-7 pb-6">
                {/* Tag + level */}
                <div className="flex items-center justify-between mb-[18px]">
                  <span className="text-[10px] font-bold text-primary tracking-[1.5px] uppercase bg-primary/[0.07] px-2.5 py-1 rounded-full border border-primary/[0.12]">
                    {card.tag}
                  </span>
                  <span className="text-[10px] text-text-muted tracking-[0.3px]">{card.level}</span>
                </div>

                <div
                  className="font-extrabold text-dark leading-[1.1] mb-2.5"
                  style={{ fontSize: 24, letterSpacing: "-1px" }}
                >
                  {card.title}
                </div>
                <div className="text-[13px] text-text-warm leading-[1.65] mb-[22px]">{card.desc}</div>

                <div className="grid grid-cols-2 gap-2">
                  {card.topics.map(t => (
                    <div key={t} className="px-3 py-[9px] bg-cream rounded-lg border border-border">
                      <div className="text-[12px] text-[#5C3D2A] font-medium">{t}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card footer nav */}
              <div className="px-7 py-3.5 border-t border-border flex items-center justify-between">
                <div className="flex gap-1.5">
                  {subjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCard(i)}
                      className="h-1.5 rounded-[3px] border-none cursor-pointer transition-all duration-[250ms] p-0"
                      style={{
                        width: i === activeCard ? 20 : 6,
                        background: i === activeCard ? "#8B1A1A" : "rgba(139,26,26,0.18)",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    disabled={activeCard === 0}
                    className="w-8 h-8 rounded-full bg-cream border border-border text-[#5C3D2A] text-sm flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >←</button>
                  <button
                    onClick={next}
                    disabled={activeCard === subjects.length - 1}
                    className="w-8 h-8 rounded-full bg-cream border border-border text-[#5C3D2A] text-sm flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                  >→</button>
                </div>
              </div>
            </div>

            <div className="text-center mt-3 text-[12px] text-text-muted">
              {activeCard + 1} of {subjects.length} subjects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
