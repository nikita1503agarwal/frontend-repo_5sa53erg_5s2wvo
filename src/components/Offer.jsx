export default function Offer() {
  return (
    <section id="ponuda" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
          <h2 className="text-3xl font-semibold text-white">Ponuda paleta</h2>
          <p className="mt-2 text-blue-100/80 max-w-3xl">Prodajemo euro palete (EPAL), polupalete i nestandardne dimenzije. Pošaljite nam potrebne količine i specifikacije, a mi ćemo pripremiti optimalnu ponudu.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-medium">Euro palete</h3>
              <p className="mt-2 text-sm text-blue-100/80">1200 x 800 mm, nova i polovna klasa</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-medium">Polupalete</h3>
              <p className="mt-2 text-sm text-blue-100/80">600 x 800 mm, različite klase</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-medium">Nestandardne</h3>
              <p className="mt-2 text-sm text-blue-100/80">Dimenzije po potrebi kupca</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
