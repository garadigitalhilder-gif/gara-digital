import type { Metadata } from "next";
import {
  BarChart3,
  Camera,
  Check,
  Code2,
  Palette,
  Share2,
  Sparkles,
  Users,
  Video,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Servicios integrales de marketing, branding, contenido y tecnología.",
  alternates: { canonical: "/servicios" },
};

const services = [
  [
    Share2,
    "Gestión de Redes Sociales",
    "Estrategia, parrilla de contenido, publicación y análisis.",
    ["Presencia consistente", "Contenido estratégico", "Reportes mensuales"],
  ],
  [
    Palette,
    "Diseño Gráfico",
    "Piezas visuales que expresan la esencia de tu marca.",
    ["Sistemas visuales", "Campañas", "Material corporativo"],
  ],
  [
    Video,
    "Producción Audiovisual",
    "Fotografía y video para comunicar con más impacto.",
    ["Conceptualización", "Producción", "Postproducción"],
  ],
  [
    Code2,
    "Desarrollo Web",
    "Sitios veloces, claros y diseñados para convertir.",
    ["UX/UI", "Next.js", "SEO técnico"],
  ],
  [
    Sparkles,
    "Branding",
    "Estrategia e identidad para construir una marca propia.",
    ["Posicionamiento", "Identidad visual", "Guía de marca"],
  ],
  [
    BarChart3,
    "Meta Ads",
    "Campañas optimizadas para generar oportunidades reales.",
    ["Segmentación", "Optimización", "Medición"],
  ],
  [
    Users,
    "Community Management",
    "Conversaciones oportunas que crean relaciones duraderas.",
    ["Atención", "Moderación", "Comunidad"],
  ],
  [
    Camera,
    "Contenido y eventos",
    "Captura profesional y entrega ágil para comunicar en tiempo real.",
    ["Fotografía", "Video", "Contenido inmediato"],
  ],
];

export default function ServiciosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Servicios"
        title="Capacidades conectadas para hacer crecer tu marca."
        description="Desde la estrategia hasta la ejecución, reunimos las disciplinas necesarias para construir una presencia relevante y rentable."
      />
      <section className="py-24 sm:py-32">
        <div className="container-site grid gap-5 md:grid-cols-2">
          {services.map(([Icon, title, description, benefits], index) => {
            const ItemIcon = Icon as typeof Share2;
            return (
              <article
                key={title as string}
                className="group border-line hover:border-accent/40 rounded-[1.75rem] border p-7 transition hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="flex items-start justify-between">
                  <div className="bg-accent-soft text-accent group-hover:bg-accent-soft flex size-12 items-center justify-center rounded-xl">
                    <ItemIcon />
                  </div>
                  <span className="text-muted text-xs font-bold">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-10 text-2xl font-semibold tracking-tight">
                  {title as string}
                </h2>
                <p className="text-muted mt-3 leading-7">
                  {description as string}
                </p>
                <div className="mt-7 grid gap-2 sm:grid-cols-3">
                  {(benefits as string[]).map((benefit) => (
                    <p
                      key={benefit}
                      className="text-accent flex items-center gap-2 text-xs font-semibold"
                    >
                      <Check size={13} /> {benefit}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
