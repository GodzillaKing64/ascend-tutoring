import { useState, useEffect } from "react";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8BGhg2ZVdO5miXW2G0VGTRIU48R2VoqoQGwGTtFffuI_IWIUwljXpNabyNo-rkRRu-Q/exec";

const SERVICES = [
  "SAT Reading",
  "SAT Math",
  "Pre-AP Algebra I, Algebra II, Geometry",
  "AP Math Courses (Precalculus, Calculus)",
  "AP Science Courses (Bio, Chem, Physics)",
  "Coding Basics (Java, Python)",
  "AMC10/12, AIME",
  "USABO Opens/Semifinals and USNCO Locals",
  "Science Bowl",
  "Major-Based Extracurricular Guidance",
  "Basic level math/reading (grades 3-8)",
];

const LOCATIONS = [
  "Online (Zoom meetings)",
  "In person (Mutually decided area)",
  "Online or in person",
];

const INIT = { phone: "", email: "", name: "", services: [], location: "", referral: "" };

export default function ContactModal({ open, onClose }) {
  const [form, setForm] = useState(INIT);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setForm(INIT);
      setStatus("idle");
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  const toggle = (service) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter(s => s !== service)
        : [...f.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.location) return;
    setStatus("submitting");

    const data = { ...form, services: form.services.join(", "), timestamp: new Date().toISOString() };

    // Submit via hidden iframe to avoid CORS issues with Google Apps Script
    const iframeName = "gs-iframe";
    let iframe = document.getElementById(iframeName);
    if (!iframe) {
      iframe = document.createElement("iframe");
      iframe.id = iframeName;
      iframe.name = iframeName;
      iframe.style.display = "none";
      document.body.appendChild(iframe);
    }

    const formEl = document.createElement("form");
    formEl.method = "POST";
    formEl.action = SCRIPT_URL;
    formEl.target = iframeName;
    formEl.style.display = "none";

    Object.entries(data).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      formEl.appendChild(input);
    });

    document.body.appendChild(formEl);
    formEl.submit();
    document.body.removeChild(formEl);

    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-4"
      style={{ background: "rgba(10,6,4,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative bg-white rounded-2xl shadow-[0_24px_80px_rgba(10,6,4,0.22)] w-full max-w-[520px] max-h-[90vh] overflow-y-auto"
        style={{ border: "1px solid #EDE5DC" }}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 px-7 pt-7 pb-4 border-b border-[#EDE5DC]">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#F5EDE8] text-[#5C3D2A] cursor-pointer border-none text-[18px] leading-none hover:bg-[#EDE5DC] transition-colors"
          >
            ×
          </button>
          <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary mb-1">Get Started</div>
          <h2 className="font-black text-dark" style={{ fontSize: 22, letterSpacing: "-0.8px" }}>
            Book a Free Consulting Session
          </h2>
          <p className="text-[13px] text-text-warm mt-1">We'll reach out within 24 hours to set things up.</p>
        </div>

        {status === "success" ? (
          <div className="px-7 py-16 text-center">
            <div className="font-bold text-dark text-[18px] mb-2" style={{ letterSpacing: "-0.5px" }}>You're all set!</div>
            <p className="text-[14px] text-text-warm mb-6">We got your info and will reach out within 24 hours.</p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-[13px] font-bold text-white bg-primary border-none cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-5">

            {/* Phone */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-1.5 tracking-[0.3px]">
                Phone Number <span className="text-primary">*</span>
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                placeholder="(555) 000-0000"
                className="w-full px-4 py-2.5 rounded-[10px] text-[14px] text-dark border border-[#D5C9BE] outline-none focus:border-primary transition-colors"
                style={{ background: "#FAFAF9" }}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-1.5 tracking-[0.3px]">
                Email <span className="text-primary">*</span>
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full px-4 py-2.5 rounded-[10px] text-[14px] text-dark border border-[#D5C9BE] outline-none focus:border-primary transition-colors"
                style={{ background: "#FAFAF9" }}
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-1.5 tracking-[0.3px]">
                Student First and Last Name <span className="text-primary">*</span>
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-[10px] text-[14px] text-dark border border-[#D5C9BE] outline-none focus:border-primary transition-colors"
                style={{ background: "#FAFAF9" }}
              />
            </div>

            {/* Services */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-2 tracking-[0.3px]">
                What tutoring services would you be interested in? <span className="text-primary">*</span>
              </label>
              <div className="flex flex-col gap-2">
                {SERVICES.map(s => (
                  <label key={s} className="flex items-start gap-2.5 cursor-pointer group">
                    <div
                      className="w-4 h-4 mt-[1px] shrink-0 rounded border flex items-center justify-center transition-colors"
                      style={{
                        background: form.services.includes(s) ? "#8B1A1A" : "#FAFAF9",
                        borderColor: form.services.includes(s) ? "#8B1A1A" : "#D5C9BE",
                      }}
                    >
                      {form.services.includes(s) && (
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={form.services.includes(s)}
                      onChange={() => toggle(s)}
                    />
                    <span className="text-[13px] text-[#5C3D2A] leading-[1.4]">{s}</span>
                  </label>
                ))}
              </div>
              {form.services.length === 0 && (
                <p className="text-[11px] text-primary mt-1.5">Please select at least one service.</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-2 tracking-[0.3px]">
                What location would you prefer? <span className="text-primary">*</span>
              </label>
              <div className="flex flex-col gap-2">
                {LOCATIONS.map(l => (
                  <label key={l} className="flex items-center gap-2.5 cursor-pointer">
                    <div
                      className="w-4 h-4 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors"
                      style={{ borderColor: form.location === l ? "#8B1A1A" : "#D5C9BE" }}
                    >
                      {form.location === l && (
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="location"
                      className="sr-only"
                      value={l}
                      checked={form.location === l}
                      onChange={() => setForm(f => ({ ...f, location: l }))}
                    />
                    <span className="text-[13px] text-[#5C3D2A]">{l}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Referral */}
            <div>
              <label className="block text-[12px] font-bold text-dark mb-1.5 tracking-[0.3px]">
                Referral <span className="text-[#A08878]">(optional)</span>
              </label>
              <p className="text-[11px] text-text-warm mb-1.5">Who told you about Ascend Tutoring?</p>
              <input
                type="text"
                value={form.referral}
                onChange={e => setForm(f => ({ ...f, referral: e.target.value }))}
                placeholder="Name or source"
                className="w-full px-4 py-2.5 rounded-[10px] text-[14px] text-dark border border-[#D5C9BE] outline-none focus:border-primary transition-colors"
                style={{ background: "#FAFAF9" }}
              />
            </div>

            {status === "error" && (
              <p className="text-[13px] text-primary text-center">Something went wrong — please try again or call us directly.</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting" || form.services.length === 0 || !form.location}
              className="w-full py-[14px] text-[15px] font-bold text-white bg-primary rounded-[10px] border-none cursor-pointer shadow-[0_4px_16px_rgba(139,26,26,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(139,26,26,0.35)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Submitting…" : "Submit →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
