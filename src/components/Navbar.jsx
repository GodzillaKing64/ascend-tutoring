import { useState } from "react";
import { NEW_LOGO } from "../data/logo";

const NAV_LINKS = [
  ["team", "Team"],
  ["credentials", "Credentials"],
  ["how-it-works", "How It Works"],
  ["pricing", "Pricing"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="nav-anim fixed top-4 left-0 right-0 z-[200] flex justify-center px-5 pointer-events-none">
      <div className="pointer-events-auto flex flex-col items-center">

        {/* Main pill */}
        <div className="flex items-center gap-0.5 bg-[rgba(250,250,249,0.88)] backdrop-blur-[20px] border border-primary/[0.12] rounded-full px-3.5 py-1.5 shadow-[0_4px_32px_rgba(0,0,0,0.10),0_1px_2px_rgba(0,0,0,0.05)]">

          {/* Logo */}
          <div
            onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}
            className="flex items-center gap-2 mr-1.5 pr-3 border-r border-primary/10 cursor-pointer"
          >
            <img src={NEW_LOGO} alt="Ascend" className="h-9 w-auto" />
            <span className="font-extrabold text-[14px] text-dark tracking-[-0.4px]">Ascend</span>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(([id, label]) => (
              <button
                key={id}
                className="nav-btn border-none cursor-pointer rounded-full transition-all duration-[180ms] tracking-[-0.1px]"
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 13,
                  fontWeight: id === "contact" ? 700 : 500,
                  color: id === "contact" ? "#fff" : "#5C3D2A",
                  background: id === "contact" ? "#8B1A1A" : "transparent",
                  padding: id === "contact" ? "7px 18px" : "7px 12px",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full cursor-pointer border-none bg-transparent text-[#5C3D2A] ml-0.5"
            onClick={() => setMenuOpen(o => !o)}
          >
            {menuOpen ? (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="13" y2="13"/><line x1="13" y1="2" x2="2" y2="13"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="3.5" x2="13" y2="3.5"/><line x1="2" y1="7.5" x2="13" y2="7.5"/><line x1="2" y1="11.5" x2="13" y2="11.5"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 w-52 bg-[rgba(250,250,249,0.96)] backdrop-blur-[20px] border border-primary/[0.12] rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] overflow-hidden">
            {NAV_LINKS.map(([id, label], idx) => (
              <button
                key={id}
                className="w-full text-left px-5 py-3 border-none bg-transparent cursor-pointer"
                style={{
                  fontFamily: "'Inter',sans-serif",
                  fontSize: 14,
                  fontWeight: id === "contact" ? 700 : 500,
                  color: id === "contact" ? "#8B1A1A" : "#5C3D2A",
                  borderBottom: idx < NAV_LINKS.length - 1 ? "1px solid rgba(139,26,26,0.07)" : "none",
                }}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
}
