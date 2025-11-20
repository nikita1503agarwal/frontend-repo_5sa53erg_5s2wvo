import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Hvala! Vaša poruka je poslana. Odgovorićemo u najkraćem roku.");
    e.currentTarget.reset();
  }

  return (
    <section id="kontakt" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
          <h2 className="text-3xl font-semibold text-white">Kontakt</h2>
          <p className="mt-2 text-blue-100/80">Kontaktirajte nas i uvjerite se u kvalitet i efikasnost naše usluge. Tu smo da vaše poslovanje učinimo jednostavnijim, bržim i sigurnijim.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100/80 mb-1">Ime i prezime</label>
              <input required className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Vaše ime" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-blue-100/80 mb-1">Telefon</label>
              <input required className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Broj telefona" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-blue-100/80 mb-1">Poruka</label>
              <textarea required rows={4} className="w-full rounded-lg bg-slate-900/50 border border-white/10 px-4 py-3 text-white placeholder:text-blue-200/40 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="Kako vam možemo pomoći?" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-3">
              <p className="text-sm text-emerald-300/80">{status}</p>
              <button className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition">Pošalji poruku</button>
            </div>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-blue-200/70">Radimo sa pravnim i fizičkim licima • Brza isporuka • Povoljne cijene</p>
      </div>
    </section>
  );
}
