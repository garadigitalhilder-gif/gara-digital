import Link from "next/link";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Agencia",
    links: [
      ["Nosotros", "/nosotros"],
      ["Clientes", "/clientes"],
      ["Blog", "/blog"],
      ["Contacto", "/contacto"],
    ],
  },
  {
    title: "Servicios",
    links: [
      ["Marketing digital", "/servicios"],
      ["Producción audiovisual", "/servicios"],
      ["Cobertura de eventos", "/eventos"],
      ["Desarrollo web", "/servicios"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-12 text-white">
      <div className="container-site">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-4">
          <div>
            <Logo inverse />
            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Transformamos ideas en resultados con estrategia, creatividad y
              tecnología.
            </p>
            <div className="mt-6 flex gap-2">
              {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 2 ? "https://wa.me/50764103972" : "#"}
                  aria-label={["Instagram", "Facebook", "WhatsApp"][index]}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300 hover:text-cyan-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-bold tracking-[0.16em] uppercase">
                {column.title}
              </p>
              <div className="mt-5 space-y-3">
                {column.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block text-sm text-slate-400 transition hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div>
            <p className="text-xs font-bold tracking-[0.16em] uppercase">
              Contacto
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <a
                href="mailto:garadigital@gmail.com"
                className="block hover:text-white"
              >
                garadigital@gmail.com
              </a>
              <a href="tel:+50764103972" className="block hover:text-white">
                +507 6410-3972
              </a>
              <p>Ciudad de Panamá</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Gara Digital. Todos los derechos
            reservados.
          </p>
          <p>Transformamos ideas en resultados.</p>
        </div>
      </div>
    </footer>
  );
}
