import { Link } from 'react-router-dom'

const BlogPost = () => {
  return (
    <section className="bg-[#eefcff] py-32">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">
            Blog · Estética avanzada en Leganés
          </span>

          <h1 className="mt-6 text-4xl font-black leading-tight text-[#075569] sm:text-6xl">
            Cómo revitalizar tu piel y recuperar su luminosidad natural
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Descubre cómo los tratamientos faciales avanzados ayudan a mejorar
            la textura, hidratación y luminosidad de la piel con resultados
            visibles y duraderos.
          </p>

          <p className="mt-4 text-lg font-medium text-slate-500">
            12 mayo, 2026 · Sonia Caracola · Centro de estética avanzada en Leganés
          </p>
        </div>

        {/* Imagen */}
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80"
          alt="Tratamiento facial para revitalizar la piel en Leganés"
          className="mt-14 w-full rounded-[2rem] shadow-[0_25px_60px_rgba(7,85,105,0.18)]"
        />

        {/* Contenido */}
        <article className="mt-16 rounded-[2rem] bg-white p-8 shadow-[0_20px_60px_rgba(7,85,105,0.08)] sm:p-14">

          <div className="space-y-10 text-lg leading-9 text-slate-700">

  <p>
    Mantener una piel luminosa, uniforme y saludable requiere mucho más que una
    rutina básica en casa. La exposición solar, el estrés, la contaminación, la
    falta de descanso y el paso del tiempo afectan directamente al equilibrio
    natural de la piel, provocando pérdida de brillo, textura irregular,
    deshidratación y signos visibles de fatiga.
  </p>

  <p>
    En Sonia Caracola, centro de estética avanzada en Leganés, trabajamos con
    tratamientos faciales personalizados diseñados para revitalizar, regenerar y
    devolver a tu piel su luminosidad natural mediante protocolos innovadores y
    tecnología estética avanzada.
  </p>

  <h2 className="text-3xl font-black text-[#075569]">
    ¿Por qué la piel pierde luminosidad?
  </h2>

  <p>
    La luminosidad de la piel depende directamente de su capacidad de renovación
    celular, hidratación y oxigenación. Cuando estos procesos se ralentizan,
    aparecen signos como tono apagado, líneas finas, sequedad y pérdida de
    elasticidad.
  </p>

  <p>
    Factores como la contaminación ambiental, el envejecimiento celular, la
    falta de hidratación profunda o una rutina incorrecta aceleran este proceso.
    Por eso es fundamental realizar un diagnóstico profesional y aplicar
    tratamientos adaptados a las necesidades específicas de cada piel.
  </p>

  <h2 className="text-3xl font-black text-[#075569]">
    Tratamientos faciales avanzados para revitalizar tu piel
  </h2>

  <p>
    En nuestro centro de estética en Leganés combinamos experiencia,
    aparatología avanzada y activos de alta eficacia para conseguir resultados
    visibles desde las primeras sesiones.
  </p>

  <ul className="space-y-4 rounded-2xl bg-[#eefcff] p-8 text-slate-700">
    <li>✓ Higiene facial profunda profesional</li>
    <li>✓ Bioestimulación y revitalización avanzada</li>
    <li>✓ Protocolos hidratantes intensivos</li>
    <li>✓ Tratamientos reafirmantes personalizados</li>
    <li>✓ Exosomas y tecnología estética avanzada</li>
    <li>✓ Terapias regenerativas para pieles fatigadas</li>
  </ul>

  <p>
    Cada protocolo está orientado a estimular la regeneración celular, mejorar
    la oxigenación, reforzar la barrera cutánea y potenciar la producción
    natural de colágeno y elastina.
  </p>

  <h2 className="text-3xl font-black text-[#075569]">
    Beneficios visibles desde las primeras sesiones
  </h2>

  <p>
    Los tratamientos faciales de revitalización ayudan a conseguir una piel más
    uniforme, luminosa, hidratada y visiblemente descansada. Además, mejoran la
    textura, minimizan imperfecciones y devuelven al rostro un aspecto fresco y
    saludable.
  </p>

  <p>
    La combinación de aparatología estética, cosmética profesional y seguimiento
    personalizado permite obtener resultados duraderos y progresivos.
  </p>

  <h2 className="text-3xl font-black text-[#075569]">
    Revitalización facial en Leganés con atención personalizada
  </h2>

  <p>
    En Sonia Caracola entendemos que cada piel es única. Por eso realizamos un
    estudio previo para diseñar tratamientos completamente adaptados a tus
    objetivos estéticos y necesidades reales.
  </p>

  <p>
    Nuestro centro de estética avanzada en Leganés está especializado en
    protocolos faciales orientados a recuperar la luminosidad, firmeza e
    hidratación, ofreciendo una experiencia profesional, cercana y enfocada en
    resultados visibles.
  </p>

  <p>
    Si notas tu piel apagada, fatigada o con falta de vitalidad, un tratamiento
    facial profesional puede marcar la diferencia y ayudarte a recuperar toda su
    frescura, equilibrio y belleza natural.
  </p>

</div>

          {/* CTA */}
          <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-[#075569] to-[#0d6f86] p-10 text-center text-white">
            <h3 className="text-3xl font-black">
              ¿Quieres recuperar la luminosidad de tu piel?
            </h3>

            <p className="mt-4 text-lg text-white/90">
              Reserva tu diagnóstico personalizado en nuestro centro de estética
              avanzada en Leganés.
            </p>

            <a
              href="tel:614253037"
              className="mt-8 inline-flex rounded-2xl bg-gradient-to-r from-[#0d6f86] to-[#0891b2] px-8 py-4 text-lg font-black text-white shadow-xl transition hover:scale-105 hover:from-[#075569] hover:to-[#0d6f86]"
            >
              Llamar ahora
            </a>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/"
              className="text-lg font-bold text-[#0d6f86] hover:text-[#075569]"
            >
              ← Volver al inicio
            </Link>
          </div>

        </article>
      </div>
    </section>
  )
}

export default BlogPost