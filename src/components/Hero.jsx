export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_10%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(600px_300px_at_90%_20%,rgba(34,197,94,0.2),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Profesionalna rješenja za palete – prodaja, otkup i transport na jednom mjestu
            </h1>
            <p className="mt-5 text-lg text-blue-100/90">
              Pružamo kompletnu uslugu za sve vrste drvenih i euro paleta: prodaja novih i polovnih, otkup i brza dostava na željenu lokaciju.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500 transition">Zatražite ponudu</a>
              <a href="#usluge" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-blue-100 hover:text-white hover:border-white/40 transition">Saznajte više</a>
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-blue-100/90 text-sm">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Brza isporuka i profesionalna usluga</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Povoljne cijene i stabilan kvalitet</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Otkup paleta svih tipova</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Ekološki prihvatljiva rješenja</li>
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-slate-800/40 backdrop-blur p-2">
              <img src="https://images.unsplash.com/photo-1742616773502-5afee0df2f47?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWxldGV8ZW58MHwwfHx8MTc2MzY3MDQwNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Palete" className="rounded-xl object-cover aspect-[4/3] w-full" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-blue-500/20 blur-2xl rounded-full"/>
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-emerald-500/20 blur-2xl rounded-full"/>
          </div>
        </div>
      </div>
    </section>
  );
}
