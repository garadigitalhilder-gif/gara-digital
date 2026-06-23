import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas y recursos sobre marketing, creatividad y crecimiento de marcas.",
  alternates: { canonical: "/blog" },
};

const posts = [
  [
    "Estrategia",
    "Cómo saber si tu marca necesita un rebranding",
    "Señales prácticas para decidir cuándo evolucionar tu identidad y cómo hacerlo con intención.",
    "8 min",
  ],
  [
    "Marketing digital",
    "Métricas de redes sociales que realmente importan",
    "Una guía para dejar atrás los números vanidosos y medir lo que mueve el negocio.",
    "6 min",
  ],
  [
    "Eventos",
    "Cómo multiplicar el impacto de un evento con contenido",
    "Planifica fotografía, video y distribución para que el evento siga trabajando después.",
    "7 min",
  ],
  [
    "Desarrollo web",
    "Tu web se ve bien, pero ¿está convirtiendo?",
    "Los elementos que transforman una página bonita en una herramienta comercial.",
    "5 min",
  ],
  [
    "Contenido",
    "Una idea, diez piezas: contenido más eficiente",
    "Cómo construir un sistema editorial que aprovecha mejor cada producción.",
    "6 min",
  ],
  [
    "Publicidad",
    "Meta Ads: qué preparar antes de invertir",
    "La base estratégica y técnica necesaria para aprovechar mejor tu presupuesto.",
    "9 min",
  ],
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        eyebrow="Blog"
        title="Ideas para construir marcas más relevantes."
        description="Perspectivas prácticas sobre estrategia, creatividad, contenido y tecnología para tomar mejores decisiones."
        cta="Conversemos"
      />
      <section className="py-24 sm:py-32">
        <div className="container-site grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map(([category, title, description, time], index) => (
            <article
              key={title}
              className="group flex min-h-80 flex-col rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[0.65rem] font-bold text-blue-600 uppercase">
                  {category}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-10 text-2xl font-semibold tracking-tight">
                {title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {description}
              </p>
              <div className="mt-auto flex items-center justify-between pt-8">
                <span className="flex items-center gap-2 text-xs text-slate-400">
                  <CalendarDays size={13} /> {time} de lectura
                </span>
                <Link
                  href="/contacto"
                  aria-label={`Consultar sobre ${title}`}
                  className="flex size-9 items-center justify-center rounded-full bg-slate-950 text-white group-hover:bg-blue-600"
                >
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
