const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-[#063b4a] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-0.5 text-center text-[10px] sm:text-xs">
          <a
            href="https://www.google.com/maps/search/?api=1&query=C.+de+Madrid+16+28912+Leganes+Madrid"
            target="_blank"
            rel="noopener noreferrer"
            className="truncate font-medium hover:text-[#c7f5ff] transition"
          >
            📍 C. de Madrid, 16, 28912 Leganés, Madrid
          </a>
        </div>
      </div>

      <header className="fixed left-0 top-[20px] z-40 w-full border-b border-white/10 bg-white/95 backdrop-blur-xl shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">

          <a href="#inicio" className="leading-tight">
            <span className="block text-sm font-black tracking-wide text-[#075569] md:text-xl">
              SONIA CARACOLA
            </span>
            <span className="block text-[10px] font-medium text-[#0d6f86] md:text-xs">
              Estética avanzada en Leganés
            </span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#inicio" className="text-sm font-bold text-[#075569] hover:text-[#0ea5c6]">
              Inicio
            </a>
            <a href="#servicios" className="text-sm font-bold text-[#075569] hover:text-[#0ea5c6]">
              Servicios
            </a>
            <a href="#tarifas" className="text-sm font-bold text-[#075569] hover:text-[#0ea5c6]">
              Precios
            </a>
            <a href="#contacto" className="text-sm font-bold text-[#075569] hover:text-[#0ea5c6]">
              Contacto
            </a>
          </nav>

          <a
            href="tel:614253037"
            className="rounded-lg bg-gradient-to-r from-[#075569] to-[#0d6f86] px-4 py-1.5 text-xs font-black text-white shadow-lg transition hover:scale-105 md:px-5"
          >
            📞 614 253 037
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar