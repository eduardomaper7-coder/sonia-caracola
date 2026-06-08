const AboutSonia = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* Foto */}
          <div className="relative">
            <div className="overflow-hidden rounded-[32px] shadow-[0_25px_60px_rgba(7,85,105,0.15)]">
              <img
                src="/sonia.jpeg"
                alt="Sonia Caracola"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-3xl bg-[#075569] px-8 py-5 text-white shadow-xl md:block">
              <p className="text-sm font-bold uppercase tracking-[0.2em]">
                Desde los 19 años
              </p>
              <p className="mt-1 text-3xl font-black">
                Cuidando la belleza
              </p>
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="text-sm font-black uppercase tracking-[0.28em] text-[#0d6f86]">
              Mi historia
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#075569] sm:text-5xl">
              Sonia Caracola
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              Dicen que si te acercas una caracola al oído, puedes escuchar el
              rumor del océano. Para mí, <strong>Sonia Caracola</strong> es
              exactamente eso: un refugio donde reconectar con tu propia
              tranquilidad.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              A lo largo de mi trayectoria, que comenzó cuando tenía 19 años,
              he aprendido que los mejores resultados —tanto en la piel como en
              el alma— nacen de la paciencia y del mimo. He transformado toda
              esa experiencia en un oleaje de bienestar, creando un entorno
              donde el trato no es solo profesional, sino profundamente humano
              y cariñoso.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Te invito a sumergirte en esta experiencia de estética avanzada,
              donde el tiempo se dilata y la calma del mar inunda cada
              tratamiento.
            </p>

            <div className="mt-10 rounded-[28px] bg-[#eefcff] p-8">
              <h3 className="text-2xl font-black text-[#075569]">
                Sumerge tu piel y tu cuerpo en la calma del mar.
              </h3>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Tratamientos de vanguardia creados desde la paciencia, la
                experiencia y el mimo real.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSonia