export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="font-bold text-xl text-slate-900">CNC PURWODADI</a>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-orange-600 transition">Tentang</a>
            <a href="#services" className="hover:text-orange-600 transition">Layanan</a>
          </div>
          <a href="https://wa.me/6285293291425" className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition">
            Hubungi Kami
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src="/hero-bg-cnc.jpg" alt="CNC Machine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10 px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">CNC FIBER LASER & ROUTER</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">Solusi potong, ukir, dan grafir presisi tinggi untuk kebutuhan logam dan non-logam Anda.</p>
          <a href="#services" className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition">Lihat Layanan</a>
        </div>
      </header>
    </main>
  );
}
