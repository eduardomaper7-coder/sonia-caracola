import {
  FaRegSmileBeam,
  FaSpa,
  FaWater,
  FaHeart,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaSpa />,
    title: 'Diagnóstico personalizado',
    text: 'Analizamos tus necesidades para diseñar protocolos estéticos adaptados a tu piel y objetivos.',
  },
  {
    icon: <FaWater />,
    title: 'Regeneración profunda',
    text: 'Tratamientos faciales y corporales que revitalizan, remodelan y devuelven luminosidad natural.',
  },
  {
    icon: <FaRegSmileBeam />,
    title: 'Belleza que se transforma',
    text: 'Desde diseño de mirada hasta terapias avanzadas para que recuperes frescura, energía y confianza.',
  },
  {
    icon: <FaHeart />,
    title: 'Cuidado experto',
    text: 'Te acompañamos con cercanía, precisión profesional y atención enfocada en resultados duraderos.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#eefcff] py-24">
      <div className="mx-auto max-w-7xl px-4">

        {/* Título */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">
            Qué hacemos
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#075569] sm:text-5xl">
            Belleza que nace del bienestar
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            En Sonia Caracola creemos que la belleza comienza con la salud.
            Creamos experiencias personalizadas que regeneran, revitalizan y
            realzan tu esencia para que brilles cada día.
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(7,85,105,0.08)] md:p-14">
          <div className="grid gap-12 md:grid-cols-2">

            {features.map((item, index) => (
              <div key={index} className="flex gap-5">

                {/* Icono */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#075569] to-[#0d6f86] text-xl text-white shadow-lg">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-xl font-black text-[#075569]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default HowWeWork