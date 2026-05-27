const FeaturedBox = () => {
  return (
    <section className="bg-[#eefcff] py-20 pb-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#dff7ff] to-[#c7f5ff] min-h-[auto] lg:min-h-[620px] shadow-[0_20px_60px_rgba(7,85,105,0.14)]">

          {/* Imagen */}
          <div className="h-[280px] w-full lg:h-[620px] lg:w-[60%]">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
              alt="Centro de estética avanzada Sonia Caracola"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[44%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[28px] bg-white p-7 shadow-[0_20px_60px_rgba(7,85,105,0.14)] sm:p-9 md:p-10">

              <span className="inline-block rounded-full bg-[#075569] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white">
                Sonia Caracola
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-[#075569] sm:text-5xl">
                La belleza fluye con{' '}
                <span className="text-[#0d6f86]">precisión y armonía</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Fusionamos naturalidad y tecnología avanzada para ofrecer
                tratamientos estéticos diseñados para regenerar, remodelar y
                revitalizar tu piel con resultados visibles y duraderos.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
                Confía en manos expertas para una experiencia personalizada que
                realza tu belleza y devuelve a tu piel toda su vitalidad.
              </p>

              <div className="mt-10">
                <a
                  href="tel:614253037"
                  className="inline-flex rounded-2xl bg-gradient-to-r from-[#075569] to-[#0d6f86] px-7 py-4 text-sm font-black text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl sm:text-base"
                >
                  Pide cita llamando al 614 253 037
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox