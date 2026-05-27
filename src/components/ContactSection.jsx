import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#eefcff] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#075569] px-5 py-2 text-sm font-black uppercase tracking-[0.2em] text-white">
            Contacto
          </span>

          <h2 className="mt-5 text-4xl font-black text-[#075569] sm:text-5xl">
            Estamos aquí para ti
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Reserva tu cita en Sonia Caracola y descubre una experiencia
            personalizada de estética avanzada en Leganés.
          </p>
        </div>

        <div className="space-y-6">

          {/* Dirección */}
          <div className="flex gap-5 rounded-[2rem] border border-[#bdefff] bg-white px-7 py-7 shadow-[0_15px_45px_rgba(7,85,105,0.08)]">
            <div className="pt-1 text-2xl text-[#075569]">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#075569]">
                Dirección
              </h3>

              <p className="mt-2 text-lg text-slate-600">
                C. de Madrid, 16, 28912 Leganés, Madrid
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="flex gap-5 rounded-[2rem] border border-[#bdefff] bg-white px-7 py-7 shadow-[0_15px_45px_rgba(7,85,105,0.08)]">
            <div className="pt-1 text-2xl text-[#075569]">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#075569]">
                Teléfono
              </h3>

              <a
                href="tel:614253037"
                className="mt-2 block text-lg text-slate-600 transition hover:text-[#0d6f86]"
              >
                614 253 037
              </a>
            </div>
          </div>

          {/* Horario */}
          <div className="rounded-[2rem] border border-[#bdefff] bg-white px-7 py-7 shadow-[0_15px_45px_rgba(7,85,105,0.08)]">
            <div className="flex gap-5">
              <div className="pt-1 text-2xl text-[#075569]">
                <FaClock />
              </div>

              <div className="w-full">
                <h3 className="text-2xl font-black text-[#075569]">
                  Horario
                </h3>

                <p className="mt-2 text-base font-bold text-green-600">
                  ● Abierto ahora
                </p>

                <div className="mt-5 space-y-4 text-lg">
                  {[
                    ['Lunes', '10:00–20:00'],
                    ['Martes', '10:00–20:00'],
                    ['Miércoles', '10:00–20:00'],
                    ['Jueves', '10:00–20:00'],
                    ['Viernes', '10:00–20:00'],
                    ['Sábado', '8:00–14:00'],
                    ['Domingo', 'Cerrado'],
                  ].map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between border-b border-[#d9f5fb] pb-3 last:border-b-0"
                    >
                      <span className="font-bold text-[#075569]">
                        {day}
                      </span>

                      <span className="text-slate-600">
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactSection