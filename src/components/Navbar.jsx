import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold">Palete Pro</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-blue-100/90">
          <a href="#usluge" className="hover:text-white transition">Usluge</a>
          <a href="#ponuda" className="hover:text-white transition">Ponuda</a>
          <a href="#transport" className="hover:text-white transition">Transport</a>
          <a href="#kontakt" className="hover:text-white transition">Kontakt</a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/95">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3 text-blue-100/90">
            <a href="#usluge" onClick={() => setOpen(false)} className="hover:text-white">Usluge</a>
            <a href="#ponuda" onClick={() => setOpen(false)} className="hover:text-white">Ponuda</a>
            <a href="#transport" onClick={() => setOpen(false)} className="hover:text-white">Transport</a>
            <a href="#kontakt" onClick={() => setOpen(false)} className="hover:text-white">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  );
}
