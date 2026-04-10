export default function ContactSection({ onOpenModal }) {
  return (
    <section id="contact" className="px-5 md:px-10 py-24 max-w-[900px] mx-auto">

      <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary mb-3">
        Contact
      </div>
      <h2
        className="font-extrabold text-dark mb-4"
        style={{ fontSize: "clamp(24px,3vw,36px)", letterSpacing: "-1.5px" }}
      >
        Ready to start?
      </h2>
      <p className="text-[15px] text-text-warm leading-[1.75] mb-10 max-w-[500px]">
        Fill out our interest form and one of us will reach out within 24 hours to set up a free consulting session. No pressure — just a conversation about your goals.
      </p>

      {/* CTA card */}
      <div className="bg-white rounded-2xl border border-[#EDE5DC] shadow-[0_4px_24px_rgba(42,26,16,0.06)] px-8 py-10 max-w-[480px]">
        <div className="flex flex-col gap-4 mb-8">
          {[
            ["📍", "Sugar Land, TX · In-person or online"],
            ["📞", "(346) 391-4081"],
            ["⏱️", "We respond within 24 hours"],
          ].map(([icon, text]) => (
            <div key={text} className="flex gap-3 items-center text-[14px] text-[#5C3D2A]">
              <div className="w-9 h-9 bg-[#F5EDE8] rounded-lg flex items-center justify-center text-base shrink-0 border border-primary/10">
                {icon}
              </div>
              {text}
            </div>
          ))}
        </div>

        <button
          onClick={onOpenModal}
          className="block w-full text-center py-[14px] text-[15px] font-bold text-white bg-primary rounded-[10px] border-none cursor-pointer tracking-[-0.2px] shadow-[0_4px_16px_rgba(139,26,26,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(139,26,26,0.35)]"
        >
          Fill Out Interest Form →
        </button>
      </div>

    </section>
  );
}
