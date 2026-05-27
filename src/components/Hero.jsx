const Hero = () => {
  const whatsappNumber = '34614253037'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir cita en Sonia Caracola.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-manicura-pedicura-getafe.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0 bg-[#063b4a]/55"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#052f3d]/90 via-[#0d6f86]/60 to-[#ffffff]/10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#031f29]/80 via-transparent to-[#e8fbff]/10"></div>

      {/* LOGO IZQUIERDA MÁS ALTO */}
      <img
  src="/sonia-caracola-logo.png"
  alt="Logo Sonia Caracola"
  className="pointer-events-none absolute bottom-4 left-4 z-10 hidden w-auto opacity-95 drop-shadow-2xl md:block md:h-[380px] lg:bottom-8 lg:left-10 lg:h-[620px]"
/>

      {/* Contenido */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl justify-end px-5 pb-24 pt-28 sm:px-8 lg:pb-20">
        <div className="max-w-4xl text-center md:text-left">
          <span className="mb-4 inline-flex rounded-full border border-white/40 bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-white shadow-lg backdrop-blur-md sm:text-base">
            Centro de estética avanzada en Leganés
          </span>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-white drop-shadow-xl sm:text-6xl lg:text-7xl">
            Belleza natural,
            <span className="block text-[#c7f5ff]">
              resultados visibles
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-white/95 drop-shadow-md sm:text-2xl sm:leading-10">
            En Sonia Caracola combinamos experiencia, innovación estética y
            protocolos personalizados para realzar tu belleza con resultados
            visibles y duraderos.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full bg-white px-5 py-3 text-sm font-extrabold text-[#075569] shadow-xl sm:text-base">
              Estética avanzada
            </span>

            <span className="rounded-full bg-[#c7f5ff] px-5 py-3 text-sm font-extrabold text-[#075569] shadow-xl sm:text-base">
              Tratamientos personalizados
            </span>

            <span className="rounded-full border border-white/50 bg-white/15 px-5 py-3 text-sm font-extrabold text-white shadow-xl backdrop-blur-md sm:text-base">
              Tecnología de vanguardia
            </span>
          </div>

          <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#00c853] px-7 py-4 text-base font-black text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#00b84c] sm:w-auto sm:px-9 sm:text-lg"
              aria-label="Pedir cita por WhatsApp"
            >
              <img
                src="/whatsapp.png"
                alt=""
                className="h-6 w-6 sm:h-7 sm:w-7"
                aria-hidden="true"
              />
              Pedir cita por WhatsApp
            </a>

            <a
              href="tel:614253037"
              className="flex w-full items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-black text-[#075569] shadow-2xl transition hover:-translate-y-1 hover:bg-[#e8fbff] sm:w-auto sm:px-9 sm:text-lg whitespace-nowrap"
              aria-label="Llamar a Sonia Caracola"
            >
              Llamar ahora
            </a>
          </div>

          <a
            href="#servicios"
            className="mt-5 inline-flex items-center rounded-2xl border border-white/60 bg-white/10 px-8 py-4 text-lg font-bold text-white shadow-xl backdrop-blur-md transition hover:bg-white hover:text-[#075569]"
          >
            Ver tratamientos
          </a>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#00c853] shadow-2xl transition hover:scale-110 hover:bg-[#00b84c] sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>
    </section>
  )
}

export default Hero