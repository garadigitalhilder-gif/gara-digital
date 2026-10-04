"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";

// Replace this ID with the brand's YouTube video when it is available.
const PRESENTATION_VIDEO_ID = "aqz-KE-bpKQ";

export function HomeIntro() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      className="welcome-section relative overflow-hidden pt-40 pb-20 sm:pt-44 sm:pb-28"
      aria-labelledby="welcome-title"
    >
      <div className="container-site relative">
        <div className="welcome-reveal mx-auto max-w-4xl text-center">
          <span className="border-line text-accent inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase">
            <Sparkles size={14} /> Creatividad con propósito
          </span>
          <h1
            id="welcome-title"
            className="mt-7 text-5xl leading-[1.05] font-semibold tracking-[-0.06em] text-balance sm:text-7xl lg:text-[5.75rem]"
          >
            Bienvenido a<br />
            <span className="brand-text">GARA Digital.</span>
          </h1>
          <p className="text-muted mx-auto mt-6 max-w-xl text-base leading-7 sm:text-lg">
            Las grandes marcas comienzan con una idea.
            <br className="hidden sm:block" /> La tuya puede ser la próxima.
          </p>
          <a
            href="#presentacion"
            className="text-accent mt-7 inline-flex items-center gap-2 text-sm font-semibold"
          >
            Descubre nuestro universo <ArrowDown size={16} />
          </a>
        </div>

        <div
          id="presentacion"
          className="welcome-video welcome-reveal relative mx-auto mt-12 max-w-5xl rounded-[1.5rem] p-px sm:mt-14 sm:rounded-[2rem]"
        >
          <div className="bg-surface overflow-hidden rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2rem-1px)]">
            <div className="relative aspect-video">
              {playing ? (
                <iframe
                  className="absolute inset-0 size-full border-0"
                  src={`https://www.youtube-nocookie.com/embed/${PRESENTATION_VIDEO_ID}?autoplay=1&rel=0`}
                  title="Video de muestra: Big Buck Bunny"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="video-cover group absolute inset-0 flex size-full flex-col items-center justify-center overflow-hidden px-5 text-center"
                  aria-label="Reproducir video de muestra"
                >
                  <span
                    className="video-orbit video-orbit-one"
                    aria-hidden="true"
                  />
                  <span
                    className="video-orbit video-orbit-two"
                    aria-hidden="true"
                  />
                  <span className="text-accent relative text-[10px] font-semibold tracking-[0.3em] uppercase sm:text-xs">
                    El comienzo de algo grande
                  </span>
                  <span className="relative mt-3 text-2xl font-semibold tracking-[-0.045em] sm:mt-5 sm:text-5xl">
                    Dale play a las ideas.
                  </span>
                  <span className="button-primary relative mt-5 flex size-14 items-center justify-center rounded-full transition group-hover:scale-110 sm:mt-8 sm:size-20">
                    <Play
                      className="ml-1 size-5 sm:size-7"
                      fill="currentColor"
                    />
                  </span>
                  <span className="text-muted relative mt-4 text-xs sm:text-sm">
                    Una nueva perspectiva comienza aquí.
                  </span>
                </button>
              )}
            </div>
            <div className="border-line flex flex-wrap items-center justify-between gap-2 border-t px-5 py-4 text-[10px] sm:px-7 sm:text-xs">
              <span className="font-semibold tracking-[0.14em] uppercase">
                GARA Digital · En perspectiva
              </span>
              <span className="text-muted">
                Video de muestra · Próximamente nuestra historia
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-7 md:mt-20 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <p className="text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Mucho gusto. Somos GARA.
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.045em] sm:text-4xl">
              Ideas que nos unen.
              <br />
              Marcas que dejan huella.
            </h2>
          </div>
          <div>
            <p className="text-muted text-base leading-8">
              Somos una agencia creativa en Panamá. Unimos estrategia, diseño y
              marketing digital para darle voz a tu marca y conectar con las
              personas que importan. Nos mueve entender tu historia y ayudarte a
              escribir lo que sigue.
            </p>
            <Link
              href="/nosotros"
              className="text-accent mt-5 inline-flex items-center gap-2 text-sm font-semibold"
            >
              Conoce al equipo detrás de las ideas <ArrowUpRight size={17} />
            </Link>
            <div className="border-line text-muted mt-7 flex flex-wrap gap-x-6 gap-y-3 border-t pt-5 text-xs">
              <span>Estrategia que conecta</span>
              <span>Diseño que se siente</span>
              <span>Contenido que inspira</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
