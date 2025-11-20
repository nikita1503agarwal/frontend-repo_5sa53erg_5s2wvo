export default function Services() {
  const items = [
    {
      title: "Prodaja paleta",
      desc: "Nove i polovne euro palete, polupalete i nestandardne dimenzije, spremne za isporuku.",
    },
    {
      title: "Otkup paleta",
      desc: "Otkup svih tipova paleta u manjim i većim količinama uz fer procjenu.",
    },
    {
      title: "Transport i logistika",
      desc: "Brza i pouzdana dostava na željenu lokaciju, organizovano preuzimanje na terenu.",
    },
    {
      title: "Ekološki pristup",
      desc: "Stabilni, pouzdani i ekološki prihvatljivi proizvodi i procesi.",
    },
  ];

  return (
    <section id="usluge" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-semibold text-white">Naše usluge</h2>
        <p className="mt-2 text-blue-100/80 max-w-2xl">Zahvaljujući iskustvu i snažnoj logistici, nudimo brzu isporuku i stabilan kvalitet po povoljnim cijenama.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-slate-800/50 p-5 hover:border-white/20 transition">
              <h3 className="text-white font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-blue-100/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
