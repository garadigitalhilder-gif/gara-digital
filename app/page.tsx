import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeIntro } from "@/components/home-intro";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Code2,
  Palette,
  Share2,
  Sparkles,
  TrendingUp,
  Video,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Agencia de marketing y publicidad en Panamá",
  description:
    "Gara Digital impulsa marcas con estrategia, creatividad, producción audiovisual, eventos y desarrollo web.",
  alternates: { canonical: "/" },
};

const capabilities = [
  [
    Share2,
    "Marketing digital",
    "Estrategias que construyen comunidad y demanda.",
  ],
  [
    Palette,
    "Branding y diseño",
    "Identidades claras, coherentes y memorables.",
  ],
  [
    Video,
    "Producción audiovisual",
    "Contenido que captura atención y comunica valor.",
  ],
  [Code2, "Desarrollo web", "Experiencias rápidas diseñadas para convertir."],
];

export default function Home() {
  return (
    <main>
      <HomeIntro />
      <section className="home-hero bg-surface text-foreground relative overflow-hidden pt-24">
        <div className="container-site relative grid min-h-[45rem] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="border-line bg-accent-soft text-accent mb-7 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold">
              <Sparkles size={14} /> Transformamos ideas en resultados.
            </div>
            <h2 className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[4.8rem]">
              Estrategia digital para marcas que quieren{" "}
              <span className="brand-text">crecer en serio.</span>
            </h2>
            <p className="text-muted mt-7 max-w-2xl text-base leading-7 sm:text-lg">
              Unimos creatividad, contenido, tecnología y rendimiento para
              convertir buenas ideas en resultados medibles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="button-primary flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold"
              >
                Solicitar cotización <ArrowRight size={16} />
              </Link>
              <Link
                href="/portafolio"
                className="border-line bg-surface text-foreground hover:bg-accent-soft flex items-center justify-center gap-2 rounded-full border px-6 py-3.5 text-sm font-bold"
              >
                Ver portafolio
              </Link>
            </div>
            <div className="border-line mt-12 grid max-w-xl grid-cols-3 gap-5 border-t pt-7">
              {[
                ["40+", "Marcas impulsadas"],
                ["92%", "Clientes recurrentes"],
                ["4.9", "Valoración promedio"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="text-2xl tracking-tight sm:text-3xl">
                    {value}
                  </strong>
                  <p className="text-muted mt-1 text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="border-line bg-surface relative aspect-[4/5] overflow-hidden rounded-[2rem] border p-3 shadow-2xl shadow-blue-950/50">
              <Image
                src="/images/event-coverage.png"
                alt="Producción de Gara Digital"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-3 rounded-[1.45rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute right-8 bottom-8 left-8 text-white">
                <p className="text-2xl leading-tight font-semibold">
                  Ideas que conectan.
                  <br />
                  Resultados que se miden.
                </p>
              </div>
            </div>
            <div className="border-line bg-surface text-foreground absolute -right-3 -bottom-7 rounded-2xl border p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-accent" size={20} />
                <div>
                  <p className="text-muted text-[0.65rem] font-bold uppercase">
                    Crecimiento
                  </p>
                  <p className="text-sm font-bold">+38.4% mensual</p>
                </div>
                <BadgeCheck size={18} className="text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase">
                Una agencia integral
              </p>
              <h2 className="text-foreground mt-5 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                Una visión completa. Un solo equipo.
              </h2>
              <p className="text-muted mt-5 leading-7">
                Diseñamos el camino y también hacemos el trabajo. Así cada punto
                de contacto avanza en la misma dirección.
              </p>
              <Link
                href="/nosotros"
                className="text-accent mt-7 inline-flex items-center gap-2 text-sm font-bold"
              >
                Conoce Gara Digital <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map(([Icon, title, description]) => {
                const ItemIcon = Icon as typeof Camera;
                return (
                  <article
                    key={title as string}
                    className="service-card border-line rounded-2xl border p-6"
                  >
                    <ItemIcon className="text-accent" size={22} />
                    <h3 className="mt-8 text-lg font-semibold">
                      {title as string}
                    </h3>
                    <p className="text-muted mt-3 text-sm leading-6">
                      {description as string}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/event-coverage.png"
              alt="Cobertura de eventos"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <Camera className="text-accent" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Tu evento termina. Su impacto no.
            </h2>
            <p className="text-muted mt-5 leading-7">
              Fotografía, video y contenido inmediato para extender la
              conversación mucho después del evento.
            </p>
            <Link
              href="/eventos"
              className="button-primary mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold"
            >
              Explorar cobertura de eventos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section border-line bg-surface text-foreground border-t py-24">
        <div className="container-site flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-accent text-sm font-bold">
              ¿Tienes una idea en mente?
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Convirtámosla en tu próximo resultado.
            </h2>
          </div>
          <Link
            href="/contacto"
            className="button-primary inline-flex w-fit items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold"
          >
            Iniciar un proyecto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
