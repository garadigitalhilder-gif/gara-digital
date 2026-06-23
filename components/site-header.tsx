"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
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
      <nav className="container-site flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-slate-950/90 px-5 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
        <Logo inverse />
        <div className="hidden items-center gap-5 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-xs font-semibold transition hover:text-white",
                pathname === item.href ? "text-cyan-300" : "text-slate-300",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contacto"
          className="hidden items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 sm:flex"
        >
          Solicitar cotización <ArrowUpRight size={14} />
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white xl:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div className="container-site mt-2 rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl xl:hidden">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-xl px-4 py-3 text-sm font-medium",
                pathname === item.href
                  ? "bg-white/10 text-cyan-300"
                  : "text-slate-200 hover:bg-white/5",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white"
          >
            Solicitar cotización
          </Link>
        </div>
      )}
    </header>
  );
}
