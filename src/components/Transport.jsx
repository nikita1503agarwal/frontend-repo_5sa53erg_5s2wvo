export default function Transport() {
  return (
    <section id="transport" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-6">
            <h2 className="text-3xl font-semibold text-white">Organizovan transport</h2>
            <p className="mt-2 text-blue-100/80">Preuzimanje na terenu i dostava na adresu uz urednu dokumentaciju i preciznu koordinaciju. Naš vozni park i partneri obezbjeđuju brzu i sigurnu isporuku.</p>
            <ul className="mt-4 space-y-2 text-blue-100/80 text-sm list-disc pl-5">
              <li>Preuzimanje i isporuka u roku 24–48h</li>
              <li>Fleksibilni termini i rute</li>
              <li>Praćenje pošiljke i podrška</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-800/40 p-2">
            <img src="https://images.unsplash.com/photo-1473042904451-00171c69419d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxUcmFuc3BvcnR8ZW58MHwwfHx8MTc2MzY3MDQwNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Transport" className="rounded-xl object-cover aspect-[4/3] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
