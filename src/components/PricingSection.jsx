import { PRICING } from "../data/pricing";

export default function PricingSection() {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="bg-cream px-5 md:px-10 py-20 pb-24">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-[52px]">
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary mb-3">
            Pricing
          </div>
          <h2
            className="font-extrabold text-dark mb-2.5"
            style={{ fontSize: "clamp(26px,3.5vw,42px)", letterSpacing: "-2px" }}
          >
            Half the cost. Twice the care.
          </h2>
          <p className="text-[15px] text-text-warm max-w-[420px] mx-auto">
            Most tutors charge $80–$200/hr. We charge{" "}
            <strong className="text-primary">$35/hr</strong> — proven results at a fair price.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 max-w-[860px] mx-auto">
          {PRICING.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl relative overflow-hidden flex flex-col"
              style={{
                border: plan.featured ? "2px solid #8B1A1A" : "1px solid #EDE5DC",
                boxShadow: plan.featured ? "0 8px 40px rgba(139,26,26,0.12)" : "0 2px 12px rgba(42,26,16,0.04)",
              }}
            >
              {/* Top accent bar on featured */}
              {plan.featured && (
                <div
                  className="h-1 w-full"
                  style={{ background: "linear-gradient(to right, #8B1A1A, #c0392b)" }}
                />
              )}

              <div className="px-8 pt-8 pb-7 flex flex-col flex-1">
                {/* Badge */}
                {plan.featured && (
                  <div className="inline-flex self-start bg-primary/[0.08] text-primary text-[11px] font-bold px-3 py-1 rounded-full border border-primary/[0.15] tracking-[0.5px] mb-4">
                    Best Value
                  </div>
                )}

                <div className="text-[18px] font-bold text-dark mb-1">{plan.name}</div>
                <div className="text-[13px] text-text-muted mb-5">{plan.sub}</div>

                {/* Price */}
                <div className="flex items-end gap-2 mb-1">
                  <span
                    className="font-black text-primary leading-none"
                    style={{ fontSize: 54, letterSpacing: "-2.5px" }}
                  >
                    {plan.price}
                  </span>
                </div>
                <div className="text-[13px] text-text-muted mb-1">{plan.unit}</div>
                <div className="text-[12px] text-text-light line-through mb-6">{plan.compare}</div>

                {/* Features */}
                <div className="border-t border-border pt-5 flex flex-col gap-3 mb-7 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex gap-3 text-[14px] text-[#5C3D2A] items-start">
                      <span className="text-accent-green font-bold shrink-0 mt-px">✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className="w-full py-3.5 text-[14px] font-semibold cursor-pointer rounded-[10px] transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    border: plan.featured ? "none" : "1.5px solid #D5C9BE",
                    background: plan.featured ? "#8B1A1A" : "transparent",
                    color: plan.featured ? "#fff" : "#1A0F0A",
                    boxShadow: plan.featured ? "0 4px_16px rgba(139,26,26,0.25)" : "none",
                  }}
                >
                  {plan.featured ? "Book This Package" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-8 max-w-[860px] mx-auto bg-white rounded-2xl border border-[#EDE5DC] px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-[0_2px_12px_rgba(42,26,16,0.04)]">
          <div>
            <div className="text-[15px] font-bold text-dark mb-0.5">Not sure where to start?</div>
            <div className="text-[13px] text-text-warm">Every student gets a free intro session — no commitment, no pressure.</div>
          </div>
          <button
            onClick={scrollToContact}
            className="shrink-0 px-6 py-2.5 rounded-full text-[13px] font-bold text-primary border border-primary/30 bg-primary/[0.05] cursor-pointer transition-all duration-200 hover:bg-primary/[0.10] whitespace-nowrap"
          >
            Book Free Consulting Session →
          </button>
        </div>

      </div>
    </section>
  );
}
