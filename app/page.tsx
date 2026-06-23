import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <section className="hero-grid noise relative overflow-hidden bg-slate-950 pt-36 text-white">
        <div className="absolute top-0 left-1/2 h-[38rem] w-[60rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="container-site relative grid min-h-[45rem] items-center gap-14 pb-20 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-200">
              <Sparkles size={14} /> Transformamos ideas en resultados.
            </div>
            <h1 className="max-w-4xl text-5xl leading-[0.98] font-semibold tracking-[-0.06em] text-balance sm:text-6xl lg:text-[4.8rem]">
              Estrategia digital para marcas que quieren{" "}
              <span className="brand-text">crecer en serio.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Unimos creatividad, contenido, tecnología y rendimiento para
              convertir buenas ideas en resultados medibles.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 hover:bg-cyan-300"
              >
                Solicitar cotización <ArrowRight size={16} />
              </Link>
              <Link
                href="/portafolio"
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
              >
                Ver portafolio
              </Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-5 border-t border-white/10 pt-7">
              {[
                ["40+", "Marcas impulsadas"],
                ["92%", "Clientes recurrentes"],
                ["4.9", "Valoración promedio"],
              ].map(([value, label]) => (
                <div key={label}>
                  <strong className="text-2xl tracking-tight sm:text-3xl">
                    {value}
                  </strong>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-3 shadow-2xl shadow-blue-950/50">
              <Image
                src="/images/event-coverage.png"
                alt="Producción de Gara Digital"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover opacity-80"
              />
              <div className="absolute inset-3 rounded-[1.45rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute right-8 bottom-8 left-8">
                <p className="text-2xl leading-tight font-semibold">
                  Ideas que conectan.
                  <br />
                  Resultados que se miden.
                </p>
              </div>
            </div>
            <div className="absolute -right-3 -bottom-7 rounded-2xl bg-white p-4 text-slate-950 shadow-2xl">
              <div className="flex items-center gap-3">
                <TrendingUp className="text-blue-600" size={20} />
                <div>
                  <p className="text-[0.65rem] font-bold text-slate-400 uppercase">
                    Crecimiento
                  </p>
                  <p className="text-sm font-bold">+38.4% mensual</p>
                </div>
                <BadgeCheck size={18} className="text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold tracking-[0.18em] text-blue-600 uppercase">
                Una agencia integral
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Una visión completa. Un solo equipo.
              </h2>
              <p className="mt-5 leading-7 text-slate-600">
                Diseñamos el camino y también hacemos el trabajo. Así cada punto
                de contacto avanza en la misma dirección.
              </p>
              <Link
                href="/nosotros"
                className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
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
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <ItemIcon className="text-blue-600" size={22} />
                    <h3 className="mt-8 text-lg font-semibold">
                      {title as string}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {description as string}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
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
            <Camera className="text-blue-600" />
            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
              Tu evento termina. Su impacto no.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Fotografía, video y contenido inmediato para extender la
              conversación mucho después del evento.
            </p>
            <Link
              href="/eventos"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white"
            >
              Explorar cobertura de eventos <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-20 text-white">
        <div className="container-site flex flex-col justify-between gap-7 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold text-cyan-200">
              ¿Tienes una idea en mente?
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight">
              Convirtámosla en tu próximo resultado.
            </h2>
          </div>
          <Link
            href="/contacto"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950"
          >
            Iniciar un proyecto <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
