import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Transport from "./components/Transport";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Offer />
        <Transport />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-blue-200/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Palete Pro. Sva prava zadržana.</p>
          <p>Brza isporuka • Povoljne cijene • Profesionalna usluga</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
