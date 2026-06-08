const images = [
  '/galeria/galeria-1.jpg',
  '/galeria/galeria-2.jpg',
  '/galeria/galeria-3.jpg',
  '/galeria/galeria-4.jpg',
  '/galeria/galeria-5.jpg',
]

const GallerySection = () => {
  return (
    <section className="bg-[#eefcff] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Texto */}
          <div>
            <span className="text-sm font-black uppercase tracking-[0.28em] text-[#0d6f86]">
              Nuestro universo
            </span>

            <h2 className="mt-4 text-4xl font-black leading-tight text-[#075569] sm:text-5xl">
              Belleza, calma y resultados que se sienten
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Cada tratamiento en Sonia Caracola está pensado como una pausa
              para volver a ti. Cuidamos tu piel, tu cuerpo y tu bienestar con
              técnicas avanzadas, productos seleccionados y un trato cercano que
              convierte cada visita en una experiencia de calma.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-600">
              Desde el primer diagnóstico hasta el último detalle, trabajamos
              con precisión, mimo y honestidad para que salgas sintiéndote
              renovada, segura y en armonía contigo misma.
            </p>

            <div className="mt-8 rounded-[28px] bg-white p-8 shadow-[0_15px_45px_rgba(7,85,105,0.08)]">
              <p className="text-xl font-black text-[#075569]">
                Un espacio donde la tecnología estética se une al cuidado más
                humano.
              </p>

              <p className="mt-3 text-slate-600 leading-8">
                Porque la verdadera belleza nace cuando te sientes bien por
                dentro y por fuera.
              </p>
            </div>
          </div>

          {/* Galería estilo Pinterest */}
          <div className="columns-2 gap-4 lg:columns-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid overflow-hidden rounded-[28px] shadow-[0_15px_45px_rgba(7,85,105,0.12)]"
              >
                <img
                  src={image}
                  alt="Galería Sonia Caracola"
                  className={`w-full object-cover transition duration-500 hover:scale-105 ${
                    index % 3 === 0
                      ? 'h-[420px]'
                      : index % 2 === 0
                      ? 'h-[280px]'
                      : 'h-[340px]'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection