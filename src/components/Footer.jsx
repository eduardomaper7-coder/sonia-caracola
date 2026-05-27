import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#042f3c] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Info */}
          <div>
            <div className="mb-6 leading-tight">
              <span className="block text-3xl font-black text-white">
                SONIA CARACOLA
              </span>
              <span className="block text-[#7dd3e8] text-lg font-semibold">
                Estética avanzada en Leganés
              </span>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/90">
              Centro de estética avanzada especializado en tratamientos faciales,
              corporales y protocolos personalizados diseñados para realzar tu
              belleza natural con tecnología innovadora.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a
                href="https://www.instagram.com/sonia_caracola/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-3xl text-[#7dd3e8] transition hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div className="text-left md:text-right">
            <h3 className="text-3xl font-black text-[#7dd3e8]">
              Contacto
            </h3>

            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>
                C. de Madrid, 16<br />
                28912 Leganés, Madrid
              </p>

              <p>
                <a
                  href="tel:614253037"
                  className="font-black text-white transition hover:text-[#7dd3e8]"
                >
                  614 253 037
                </a>
              </p>

              <p className="text-white/80">
                Miércoles a lunes · Horario continuo
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg text-white/90">
            ¿Quieres reservar tu cita?
          </p>

          <Link
            to="/#contacto"
            className="rounded-2xl bg-gradient-to-r from-[#075569] to-[#0d6f86] px-8 py-4 text-lg font-black text-white transition hover:scale-105"
          >
            Solicitar cita
          </Link>
        </div>

        {/* Footer bottom */}
        <div className="mt-14 border-t border-white/15 pt-8 text-center">
          <p className="text-base text-white/80">
            © 2026 Sonia Caracola. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#7dd3e8]">
            <Link to="/legal" className="transition hover:text-white">
              Aviso legal · Privacidad · Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer