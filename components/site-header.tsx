"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navigation = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Eventos", href: "/eventos" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Clientes", href: "/clientes" },
  { label: "Blog", href: "/blog" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav className="container-site border-line bg-surface/95 flex h-20 items-center justify-between rounded-2xl border px-5 shadow-lg shadow-black/5 backdrop-blur-xl">
        <Logo />
        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "hover:text-foreground text-xs font-semibold transition",
                pathname === item.href ? "text-accent" : "text-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contacto"
          className="button-primary hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold sm:flex"
        >
          Solicitar cotización <ArrowUpRight size={14} />
        </Link>
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="border-line text-foreground flex size-10 items-center justify-center rounded-full border xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="container-site border-line bg-surface mt-2 rounded-2xl border p-3 shadow-2xl xl:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-medium",
                pathname === item.href
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:bg-surface",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="button-primary mt-2 block rounded-xl px-4 py-3 text-center text-sm font-bold"
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </header>
  );
}
