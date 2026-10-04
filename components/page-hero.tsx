import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  cta = "Hablemos de tu proyecto",
}: {
  eyebrow: string;
  title: string;
  description: string;
  cta?: string;
}) {
  return (
    <section className="page-intro bg-surface text-foreground relative overflow-hidden pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="brand-rule absolute bottom-0 left-0 h-px w-full" />
      <div className="container-site relative">
        <p className="text-accent text-xs font-bold tracking-[0.2em] uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl text-5xl leading-[1.02] font-semibold tracking-[-0.055em] text-balance sm:text-7xl">
          {title}
        </h1>
        <div className="border-line mt-8 flex flex-col justify-between gap-7 border-t pt-7 md:flex-row md:items-end">
          <p className="text-muted max-w-2xl text-base leading-7 sm:text-lg">
            {description}
          </p>
          <Link
            href="https://wa.me/50764103972?text=Hola%2C%20Gara%20Digital%20y%20me%20gustar%C3%ADa%20conocer%20c%C3%B3mo%20pueden%20ayudar%20a%20crecer%20mi%20negocio%20%F0%9F%9A%80%F0%9F%92%9C"
            className="button-primary inline-flex w-fit items-center gap-2 rounded-full px-5 py-3.5 text-sm font-bold"
          >
            {cta} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
