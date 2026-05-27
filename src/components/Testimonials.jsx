const reviews = [
  {
    text: 'Un centro precioso y muy profesional. Salí encantada con el tratamiento facial y el trato recibido.',
    name: 'Laura M.',
    time: 'Hace 2 semanas',
  },
  {
    text: 'Atención impecable, tecnología avanzada y resultados visibles desde la primera sesión. Totalmente recomendable.',
    name: 'Sara P.',
    time: 'Hace 1 mes',
  },
  {
    text: 'El mejor centro de estética en Leganés. Profesionalidad, cercanía y una experiencia realmente premium.',
    name: 'Andrea G.',
    time: 'Hace 3 semanas',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#eefcff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-black text-[#075569] sm:text-5xl">
            Lo que dicen nuestras clientas
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-[#f5b700]">
            ★★★★★
          </div>

          <p className="mt-4 text-lg font-medium text-slate-600">
            Valoración <span className="font-black text-[#075569]">4,7 ⭐</span> en Google con{' '}
            <span className="font-black text-[#075569]">15 reseñas</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[340px] flex-col rounded-[2rem] border border-[#bdefff] bg-white p-7 shadow-[0_15px_45px_rgba(7,85,105,0.08)] transition hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(7,85,105,0.14)]"
            >
              <div className="mb-5 text-xl tracking-[0.18em] text-[#f5b700]">
                ★★★★★
              </div>

              <p className="flex-1 text-[15px] leading-8 text-slate-600">
                {review.text}
              </p>

              <div className="mt-8 border-t border-[#d9f5fb] pt-5">
                <p className="text-xl font-black text-[#075569]">
                  {review.name}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  {review.time}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials