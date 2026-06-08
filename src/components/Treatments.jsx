import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Cuidado facial y belleza diaria',
    description:
      'Higiene facial profunda, BB Glow, depilación, manicura, pedicura SPA y diseño de mirada.',
    image: '/cuidad-facial.jpg',
  },
  {
    title: 'Tratamientos corporales',
    description:
      'Maderoterapia, presoterapia, cavitación y remodelación corporal avanzada.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Medicina estética avanzada',
    description:
      'Armonización facial, bioestimulación, exosomas y revitalización capilar.',
    image: '/medicina.webp',
  },
  {
    title: 'Estética especializada',
    description:
      'Micropigmentación, reconstrucción paramédica y eliminación de tatuajes.',
    image: '/estetica-especializada.jpg',
  },
  {
    title: 'Tratamientos de lujo',
    description:
      'Diseño de mirada, cejas, pestañas y maquillaje profesional con acabados elegantes y sofisticados.',
    image: '/lujo.jpg',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-24 bg-[#eefcff] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <span className="text-sm font-black uppercase tracking-[0.28em] text-[#0d6f86]">
            Servicios destacados
          </span>

          <h2 className="mt-4 text-4xl font-black text-[#075569] sm:text-5xl">
            Estética avanzada en Leganés
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Tratamientos faciales, corporales y médico-estéticos diseñados para
            realzar tu belleza natural.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex min-h-[380px] flex-col overflow-hidden rounded-[2rem] border border-[#bdefff] bg-white shadow-[0_15px_45px_rgba(7,85,105,0.10)] transition hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(7,85,105,0.18)] sm:flex-row
              ${
                index === 4
                  ? 'md:col-span-2 md:mx-auto md:max-w-[760px]'
                  : ''
              }`}
            >
              <div className="h-60 w-full overflow-hidden sm:h-auto sm:w-[42%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex h-full w-full flex-col justify-between p-7 sm:w-[58%]">
                <div>
                  <h3 className="text-2xl font-black text-[#075569]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {service.description}
                  </p>
                </div>

                <div className="mt-7">
                  <Link
                    to="/tratamientos"
                    className="inline-flex items-center rounded-full bg-[#075569] px-5 py-3 text-sm font-black text-white shadow-lg transition hover:bg-[#0d6f86]"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-[#075569] to-[#0d6f86] px-6 py-10 text-center shadow-2xl">
          <p className="text-xl font-bold text-white sm:text-2xl">
            ¿Quieres descubrir el tratamiento ideal para ti?
          </p>

          <Link
            to="/tratamientos"
            className="mt-6 inline-flex items-center rounded-2xl bg-white px-8 py-4 text-lg font-black text-[#075569] shadow-xl transition hover:scale-105"
          >
            Ver todos los tratamientos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Treatments