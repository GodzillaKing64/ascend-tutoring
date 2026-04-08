import { NEW_LOGO } from "../data/logo";

export default function Footer() {
  return (
    <footer className="bg-[#1A0F0A] text-white/45 px-5 md:px-10 py-10 text-center text-[13px]">
      <div className="flex items-center justify-center gap-2.5 mb-2.5">
        <img src={NEW_LOGO} alt="Ascend" className="h-8 w-auto" />
        <span className="font-extrabold text-[14px] text-white/80 tracking-[1px]">ASCEND TUTORING</span>
      </div>
      <p>Six Sugar Land high schoolers helping students score higher — at a price that's actually fair.</p>
      <p className="mt-2.5 text-[11px] opacity-30">© 2026 Ascend Tutoring. All rights reserved.</p>
    </footer>
  );
}
