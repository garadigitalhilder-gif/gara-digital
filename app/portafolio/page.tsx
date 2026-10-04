import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Casos de éxito y proyectos desarrollados por Gara Digital.",
  alternates: { canonical: "/portafolio" },
};

const projects = [
  [
    "Mega Ensambles",
    "Estrategia digital · B2B",
    "+74% solicitudes calificadas",
    "from-indigo-800 to-violet-500",
    "Una nueva narrativa comercial para convertir conocimiento técnico en oportunidades.",
  ],
  [
    "Restaurante Arrecifes",
    "Contenido · Gastronomía",
    "2.8x reservas desde redes",
    "from-violet-700 to-fuchsia-500",
    "Contenido audiovisual que llevó la experiencia del restaurante a cada pantalla.",
  ],
  [
    "GM Cell",
    "E-commerce · Performance",
    "+126% interacciones",
    "from-violet-700 to-blue-500",
    "Campañas y contenido orientados a producto para vender con mayor claridad.",
  ],
  [
    "Kawaii Panamá",
    "Branding · Social",
    "+40K alcance orgánico",
    "from-fuchsia-600 to-violet-500",
    "Un universo visual reconocible diseñado para crear comunidad.",
  ],
];

export default function PortafolioPage() {
  return (
    <main>
      <PageHero
        eyebrow="Portafolio"
        title="Ideas bonitas. Resultados todavía mejores."
        description="Una selección de proyectos donde estrategia, diseño y ejecución se encontraron para mover el negocio."
      />
      <section className="py-24 sm:py-32">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          {projects.map(([name, category, result, color, description]) => (
            <article
              key={name}
              className="group border-line bg-surface overflow-hidden rounded-[1.75rem] border"
            >
              <div
                className={cn(
                  "relative h-80 overflow-hidden bg-gradient-to-br",
                  color,
                )}
              >
                <Image
                  src="/images/event-coverage.png"
                  alt={`Proyecto ${name}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-40 transition duration-700 group-hover:scale-105"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br mix-blend-color",
                    color,
                  )}
                />
                <div className="bg-surface text-foreground absolute top-6 right-6 flex size-11 items-center justify-center rounded-full">
                  <ArrowUpRight size={18} />
                </div>
                <div className="absolute right-7 bottom-7 left-7 text-white">
                  <p className="text-xs font-semibold text-white/70">
                    {category}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold">{name}</h2>
                </div>
              </div>
              <div className="grid gap-5 p-7 sm:grid-cols-[1fr_auto] sm:items-end">
                <p className="text-muted text-sm leading-6">{description}</p>
                <div className="bg-surface rounded-xl px-4 py-3">
                  <p className="text-muted text-[0.6rem] font-bold uppercase">
                    Resultado
                  </p>
                  <p className="mt-1 text-sm font-bold">{result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
