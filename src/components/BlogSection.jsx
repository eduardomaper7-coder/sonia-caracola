import { Link } from 'react-router-dom'

const posts = [
  {
    date: '12 mayo, 2026',
    title: 'Cómo revitalizar tu piel y recuperar su luminosidad',
    excerpt:
      'Descubre hábitos y tratamientos que ayudan a regenerar tu piel y potenciar su brillo natural.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    href: '/blog/revitalizar-piel',
  },
  {
    date: '4 mayo, 2026',
    title: 'Tecnología estética avanzada: beneficios reales',
    excerpt:
      'Conoce cómo los tratamientos innovadores permiten resultados visibles de forma segura y personalizada.',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '27 abril, 2026',
    title: 'El poder de una rutina de cuidado profesional',
    excerpt:
      'La constancia y un protocolo adecuado son clave para mantener una piel sana, firme y radiante.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-[#eefcff] py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Título */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">
            Blog
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#075569] sm:text-5xl">
            Belleza, cuidado y bienestar
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Consejos, tendencias y recomendaciones para cuidar tu piel y
            potenciar tu belleza natural
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[2rem] border border-[#bdefff] bg-white shadow-[0_15px_45px_rgba(7,85,105,0.08)] transition hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(7,85,105,0.14)]"
            >

              {/* Imagen */}
              <div className="h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-7">
                <p className="text-sm font-medium text-slate-500">
                  📅 {post.date}
                </p>

                <h3 className="mt-4 text-2xl font-black leading-tight text-[#075569]">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  {index === 0 ? (
                    <Link
                      to={post.href}
                      className="inline-flex items-center gap-2 text-lg font-bold text-[#0d6f86] transition hover:text-[#075569]"
                    >
                      Leer más <span className="text-2xl">›</span>
                    </Link>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 text-lg font-bold text-[#0d6f86] transition hover:text-[#075569]"
                    >
                      Leer más <span className="text-2xl">›</span>
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default BlogSection