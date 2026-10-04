import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Film, ImageIcon, Radio, Rocket, Timer } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Cobertura de eventos",
  description:
    "Fotografía, video y contenido profesional para eventos corporativos.",
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Cobertura de eventos"
        title="Capturamos el momento. Extendemos la conversación."
        description="Creamos fotografía, video y contenido inmediato para que cada evento siga generando valor después de terminar."
        cta="Cotizar mi evento"
      />
      <section className="bg-surface text-foreground py-24">
        <div className="container-site grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            [
              Camera,
              "Fotografía profesional",
              "Momentos, detalles y protagonistas con mirada editorial.",
            ],
            [
              Film,
              "Video y aftermovie",
              "Una historia dinámica que resume la energía del evento.",
            ],
            [
              Radio,
              "Contenido en tiempo real",
              "Piezas listas para compartir mientras todo está sucediendo.",
            ],
            [
              ImageIcon,
              "Galería curada",
              "Selección y edición profesional para comunicación interna y externa.",
            ],
            [
              Timer,
              "Entrega ágil",
              "Flujo de trabajo pensado para campañas y prensa.",
            ],
            [
              Rocket,
              "Activaciones y lanzamientos",
              "Contenido que amplifica experiencias de marca.",
            ],
          ].map(([Icon, title, text]) => {
            const ItemIcon = Icon as typeof Camera;
            return (
              <article
                key={title as string}
                className="border-line bg-surface rounded-2xl border p-6"
              >
                <ItemIcon className="text-accent" />
                <h2 className="mt-8 text-xl font-semibold">
                  {title as string}
                </h2>
                <p className="text-muted mt-3 text-sm leading-6">
                  {text as string}
                </p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="py-24">
        <div className="container-site">
          <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
            Una galería diseñada para hacer sentir que estuviste ahí.
          </h2>
          <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-4 lg:h-[38rem] lg:grid-cols-4">
            {[
              ["col-span-2 row-span-2", "object-center"],
              ["col-span-1", "object-left"],
              ["col-span-1", "object-right"],
              ["col-span-2", "object-bottom"],
            ].map(([layout, position], index) => (
              <div
                key={index}
                className={`relative min-h-56 overflow-hidden rounded-2xl ${layout}`}
              >
                <Image
                  src="/images/event-coverage.png"
                  alt={`Cobertura profesional de evento ${index + 1}`}
                  fill
                  sizes="50vw"
                  className={`object-cover ${position}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
