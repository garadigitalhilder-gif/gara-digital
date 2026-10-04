"use client";

import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type ContactFormData = {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const inputStyles =
  "w-full rounded-xl border border-line bg-surface px-4 py-3.5 text-sm text-foreground transition placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/15 focus:outline-none";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    const message = `🚀 Nueva Solicitud de Cotización - Gara Digital

👤 Nombre: ${data.name}
🏢 Empresa: ${data.company}
📞 Teléfono: ${data.phone}
📧 Correo: ${data.email}
💼 Servicio: ${data.service}

📝 Mensaje:
${data.message}`;

    const whatsappUrl = `https://wa.me/50764103972?text=${encodeURIComponent(
      message,
    )}`;

    toast.success("Redirigiendo a WhatsApp...");

    window.open(whatsappUrl, "_blank");

    reset();
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--surface)",
            color: "var(--foreground)",
            borderColor: "var(--line)",
          },
        }}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border-line bg-surface rounded-[2rem] border p-6 shadow-2xl shadow-slate-950/10 sm:p-8"
        noValidate
      >
        <div className="mb-7 flex items-center justify-between gap-4">
          <div>
            <p className="text-accent text-xs font-bold tracking-[0.18em] uppercase">
              Cuéntanos tu idea
            </p>
            <h3 className="text-foreground mt-2 text-2xl font-semibold tracking-tight">
              Iniciemos una conversación
            </h3>
          </div>
          <div className="bg-accent-soft text-accent hidden size-12 items-center justify-center rounded-full sm:flex">
            <ArrowUpRight size={22} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nombre" error={errors.name?.message}>
            <input
              className={inputStyles}
              placeholder="Tu nombre"
              autoComplete="name"
              {...register("name", { required: "Ingresa tu nombre." })}
            />
          </Field>
          <Field label="Empresa" error={errors.company?.message}>
            <input
              className={inputStyles}
              placeholder="Nombre de tu empresa"
              autoComplete="organization"
              {...register("company", { required: "Ingresa tu empresa." })}
            />
          </Field>
          <Field label="Teléfono" error={errors.phone?.message}>
            <input
              className={inputStyles}
              placeholder="+507 6410-3972"
              type="tel"
              autoComplete="tel"
              {...register("phone", {
                required: "Ingresa tu teléfono.",
                minLength: { value: 7, message: "Verifica el teléfono." },
              })}
            />
          </Field>
          <Field label="Correo" error={errors.email?.message}>
            <input
              className={inputStyles}
              placeholder="hola@empresa.com"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "Ingresa tu correo.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Ingresa un correo válido.",
                },
              })}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Servicio requerido" error={errors.service?.message}>
              <select
                className={inputStyles}
                defaultValue=""
                {...register("service", {
                  required: "Selecciona un servicio.",
                })}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Gestión de redes sociales</option>
                <option>Branding y diseño gráfico</option>
                <option>Producción audiovisual</option>
                <option>Cobertura de eventos</option>
                <option>Desarrollo web</option>
                <option>Meta Ads</option>
                <option>Otro</option>
              </select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field label="Mensaje" error={errors.message?.message}>
              <textarea
                className={`${inputStyles} min-h-32 resize-y`}
                placeholder="Cuéntanos sobre tu proyecto, objetivos y tiempos..."
                {...register("message", {
                  required: "Cuéntanos brevemente sobre tu proyecto.",
                  minLength: {
                    value: 20,
                    message: "Incluye un poco más de información.",
                  },
                })}
              />
            </Field>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="button-primary mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-semibold transition disabled:cursor-wait disabled:opacity-60"
        >
          {isSubmitting ? "Enviando..." : "Solicitar cotización"}
          {!isSubmitting && <ArrowUpRight size={17} />}
        </button>
        <p className="text-muted mt-4 flex items-center gap-2 text-xs">
          <CheckCircle2 size={14} className="text-emerald-500" />
          Respondemos en menos de 24 horas laborables.
        </p>
      </form>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="text-foreground block text-sm font-medium">
      <span className="mb-2 block">{label}</span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-xs text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
