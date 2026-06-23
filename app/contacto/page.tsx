import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Solicita una cotización para tu próximo proyecto con Gara Digital.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Tu próxima gran idea comienza con una conversación."
        description="Cuéntanos qué quieres lograr. Nosotros te ayudamos a convertirlo en una estrategia clara, creativa y accionable."
        cta="Escríbenos"
      />
      <section className="bg-slate-50 py-24 sm:py-32">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.045em]">
              Hablemos de tu proyecto.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Responderemos en menos de 24 horas laborables para conocer tus
              objetivos y definir el siguiente paso.
            </p>
            <div className="mt-10 space-y-4">
              {[
                [Mail, "garadigital@gmail.com", "mailto:garadigital@gmail.com"],
                [MessageCircle, "+507 6410-3972", "tel:+50764103972"],
                [MapPin, "Ciudad de Panamá, Panamá", "#"],
              ].map(([Icon, text, href]) => {
                const ItemIcon = Icon as typeof Mail;
                return (
                  <a
                    key={text as string}
                    href={href as string}
                    className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-700"
                  >
                    <span className="flex size-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <ItemIcon size={17} />
                    </span>
                    {text as string}
                  </a>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
