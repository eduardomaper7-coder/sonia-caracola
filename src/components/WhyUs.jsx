import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80',
    alt: 'Tratamientos faciales en Sonia Caracola',
    badge: 'Belleza avanzada en Leganés',
  },
  {
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
    alt: 'Centro de estética Sonia Caracola',
    badge: 'Tecnología estética de vanguardia',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#eefcff] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2">
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-black uppercase tracking-[0.4em] text-[#0d6f86] lg:block [writing-mode:vertical-rl]">
            Sonia Caracola
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black text-white shadow-lg">
              Nosotros
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#075569] sm:text-5xl">
              Belleza que fluye con innovación
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-700">
              Como la fuerza renovadora del mar, fusionamos naturalidad y
              tecnología avanzada para ofrecer tratamientos estéticos diseñados
              para que tu belleza fluya con armonía, precisión y resultados
              visibles.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-2xl font-black text-[#075569]">
                  Regeneración profunda
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  Protocolos especializados que revitalizan tu piel desde el
                  interior.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#075569]">
                  Tecnología avanzada
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  Equipos innovadores para una remodelación precisa y segura.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#075569]">
                  Atención experta
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  Manos profesionales que diseñan cada tratamiento según tus
                  necesidades.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black text-[#075569]">
                  Cambio real y duradero
                </h3>
                <p className="mt-2 text-lg text-slate-600">
                  Resultados visibles que realzan tu belleza natural con
                  equilibrio y elegancia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(7,85,105,0.18)]">
            <div className="relative h-[520px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'scale-100 opacity-100'
                      : 'scale-105 opacity-0'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-[#075569]/25"></div>

              <div className="absolute left-6 top-6 z-10 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-sm">
                <p className="text-base font-black text-[#075569]">
                  {slides[currentSlide].badge}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#0d6f86]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index
                    ? 'bg-[#075569]'
                    : 'bg-[#075569]/30'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs