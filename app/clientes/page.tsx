import type { Metadata } from "next";
import { Quote, Star } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Clientes",
  description:
    "Marcas que confían en Gara Digital y testimonios de nuestros clientes.",
  alternates: { canonical: "/clientes" },
};

const clients = [
  "MEGA ENSAMBLES",
  "ARRECIFES",
  "GM CELL",
  "KAWAII PANAMÁ",
  "GRUPO NEXO",
  "ALTURA",
  "NOVA",
  "URBANA",
  "PANAMA LAB",
  "FORMA",
];
const testimonials = [
  [
    "Gara entendió el negocio antes de diseñar una sola pieza. Eso cambió por completo la calidad de los resultados.",
    "María Torres",
    "Directora Comercial, Mega Ensambles",
  ],
  [
    "El equipo elevó nuestra presencia digital sin perder lo que hace especial a nuestra marca.",
    "Carlos Méndez",
    "Gerente, Restaurante Arrecifes",
  ],
  [
    "Pasamos de publicar por publicar a tener una estrategia clara, medible y con impacto real en ventas.",
    "Ana Lucía Pérez",
    "Marketing Manager, GM Cell",
  ],
  [
    "La cobertura fue impecable. En menos de 24 horas ya teníamos material profesional listo.",
    "Daniel Ríos",
    "Director de Eventos",
  ],
  [
    "Nos ayudaron a ordenar nuestra marca y a comunicar con mucha más seguridad.",
    "Paola Castillo",
    "Fundadora, Kawaii Panamá",
  ],
  [
    "Creativos, organizados y enfocados en resultados. Se sienten como parte del equipo.",
    "Ricardo Gómez",
    "CEO, Grupo Nexo",
  ],
];

export default function ClientesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Clientes"
        title="Las mejores relaciones producen el mejor trabajo."
        description="Trabajamos con equipos que valoran las ideas, la claridad y una ejecución que siempre apunta a resultados."
      />
      <section className="py-20">
        <div className="container-site border-line bg-line grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client}
              className="bg-surface text-muted flex h-32 items-center justify-center p-5 text-center text-sm font-black tracking-[0.12em]"
            >
              {client}
            </div>
          ))}
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-site">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Lo que dicen quienes ya trabajan con nosotros.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(([quote, name, role]) => (
              <figure
                key={name}
                className="border-line bg-surface flex min-h-64 flex-col rounded-2xl border p-6"
              >
                <div className="flex justify-between">
                  <Quote className="text-accent" />
                  <div className="text-accent flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={12} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-foreground mt-8 text-sm leading-6">
                  “{quote}”
                </blockquote>
                <figcaption className="mt-auto pt-7">
                  <p className="text-sm font-bold">{name}</p>
                  <p className="text-muted mt-1 text-xs">{role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
