import { TEAM } from "../data/team";
import TeamCard from "./TeamCard";

export default function TeamSection() {
  return (
    <>
      {/* Separator */}
      <div className="relative overflow-hidden">
        <div
          className="h-[2px]"
          style={{ background: "linear-gradient(to right, transparent, rgba(139,26,26,0.15), rgba(139,26,26,0.3), rgba(139,26,26,0.15), transparent)" }}
        />
        <div
          className="px-5 md:px-10 pt-16"
          style={{ background: "linear-gradient(to bottom, #F0E8E0, #FAFAF9)" }}
        >
          <div className="max-w-[1000px] mx-auto">
            <div className="text-[11px] font-bold tracking-[2px] uppercase text-primary mb-3">
              Meet the Team
            </div>
            <h2
              className="font-black text-dark leading-none mb-4"
              style={{ fontSize: "clamp(30px,4.5vw,52px)", letterSpacing: "-2.5px" }}
            >
              Six Sugar Land<br />high schoolers.
            </h2>
            <p className="text-[16px] text-text-warm max-w-[460px] leading-[1.75] mb-7">
              We scored in the top 1% in our class on the SAT. We teach because we genuinely know how to explain hard things clearly.
            </p>
          </div>
        </div>
      </div>

      <section
        id="team"
        className="px-5 md:px-10 pb-24 pt-12"
        style={{ background: "linear-gradient(to bottom, #F0E8E0, #FAFAF9)" }}
      >
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6 md:gap-4">
            {TEAM.map(m => (
              <TeamCard key={m.id} member={m} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
