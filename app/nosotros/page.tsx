import type { Metadata } from "next";
import {
  Compass,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce el enfoque, misión y valores de Gara Digital.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nosotros"
        title="Pensamos como estrategas. Creamos como artistas."
        description="Somos una agencia publicitaria panameña que integra estrategia, creatividad y tecnología para ayudar a marcas ambiciosas a avanzar."
      />
      <section className="py-24 sm:py-32">
        <div className="container-site grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase">
              Nuestra historia
            </p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Nacimos para hacer que las buenas ideas tengan impacto real.
            </h2>
          </div>
          <div className="text-muted space-y-5 text-base leading-8">
            <p>
              Gara Digital nació de una convicción sencilla: la creatividad
              funciona mejor cuando entiende el negocio. Por eso comenzamos cada
              proyecto escuchando, investigando y haciendo las preguntas
              correctas.
            </p>
            <p>
              Trabajamos cerca de cada cliente, sin capas innecesarias, para
              convertir retos complejos en estrategias claras y ejecuciones que
              se sienten relevantes.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-surface py-24">
        <div className="container-site grid gap-5 md:grid-cols-3">
          {[
            [
              Compass,
              "Misión",
              "Convertir desafíos de negocio en ideas claras, relevantes y efectivas.",
            ],
            [
              Rocket,
              "Visión",
              "Ser el socio estratégico que las marcas eligen para crecer con intención.",
            ],
            [
              Lightbulb,
              "Propósito",
              "Crear comunicación que conecte personas, marcas y oportunidades.",
            ],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof Compass;
            return (
              <article
                key={title as string}
                className="border-line bg-surface rounded-2xl border p-7"
              >
                <ItemIcon className="text-accent" />
                <h2 className="mt-12 text-2xl font-semibold">
                  {title as string}
                </h2>
                <p className="text-muted mt-4 leading-7">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="py-24">
        <div className="container-site">
          <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Los principios que guían cada decisión.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Zap, "Agilidad"],
              [ShieldCheck, "Transparencia"],
              [Users, "Colaboración"],
              [Lightbulb, "Curiosidad"],
            ].map(([Icon, title], index) => {
              const ItemIcon = Icon as typeof Zap;
              return (
                <div
                  key={title as string}
                  className="bg-surface text-foreground rounded-2xl p-6"
                >
                  <span className="text-accent text-xs">0{index + 1}</span>
                  <ItemIcon className="text-accent mt-12" />
                  <h3 className="mt-5 text-xl font-semibold">
                    {title as string}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
