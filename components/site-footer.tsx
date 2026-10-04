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
    <footer className="border-line bg-surface text-foreground border-t py-12">
      <div className="container-site">
        <div className="border-line grid gap-10 border-b pb-10 md:grid-cols-4">
          <div>
            <Logo inverse />
            <p className="text-muted mt-5 max-w-xs text-sm leading-6">
              Transformamos ideas en resultados con estrategia, creatividad y
              tecnología.
            </p>
            <div className="mt-6 flex gap-2">
              {[FaInstagram, FaFacebookF, FaWhatsapp].map((Icon, index) => (
                <a
                  key={index}
                  href={index === 2 ? "https://wa.me/50764103972" : "#"}
                  aria-label={["Instagram", "Facebook", "WhatsApp"][index]}
                  className="border-line text-muted hover:border-accent hover:text-accent flex size-9 items-center justify-center rounded-full border transition"
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
                    className="text-muted hover:text-foreground block text-sm transition"
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
            <div className="text-muted mt-5 space-y-3 text-sm">
              <a
                href="mailto:garadigital@gmail.com"
                className="hover:text-foreground block"
              >
                garadigital@gmail.com
              </a>
              <a
                href="tel:+50764103972"
                className="hover:text-foreground block"
              >
                +507 6410-3972
              </a>
              <p>Ciudad de Panamá</p>
            </div>
          </div>
        </div>
        <div className="text-muted flex flex-col justify-between gap-3 pt-7 text-xs sm:flex-row">
          <p>Transformamos ideas en resultados.</p>
          <p>
            © {new Date().getFullYear()} Gara Digital. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
