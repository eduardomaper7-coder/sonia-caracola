const Location = () => {
  return (
    <section className="bg-[#f7fdff] py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">

        {/* Título */}
        <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">
          Ubicación
        </span>

        <h2 className="mt-5 text-4xl font-black text-[#075569] sm:text-5xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-xl font-medium text-slate-600">
          C. de Madrid, 16, 28912 Leganés, Madrid
        </p>

        <p className="mt-3 text-lg text-slate-500">
          Tu centro de estética avanzada en el corazón de Leganés
        </p>

        {/* Mapa */}
        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#bdefff] shadow-[0_20px_60px_rgba(7,85,105,0.12)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20de%20Madrid%2016%20Legan%C3%A9s%20Madrid&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Sonia Caracola"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location