"use client"

import { Check, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const PLANS = [
  {
    name: "Prueba Gratuita",
    price: "14 Días",
    period: "Sin tarjeta de crédito",
    desc: "Prueba tu AI Employee sin ningún riesgo.",
    cta: "Empezar Prueba Gratis",
    highlight: true,
    large: false,
    features: ["14 días de acceso completo", "Sin tarjeta de crédito", "Instalación incluida", "Cancela cuando quieras"],
  },
  {
    name: "Business",
    price: "$197",
    period: "al mes",
    prefix: "Desde",
    desc: "Para equipos en crecimiento que no quieren perder ni un cliente.",
    cta: "Empezar",
    highlight: false,
    large: true,
    features: [
      "Conversaciones ilimitadas",
      "WhatsApp",
      "Email",
      "Calendario",
      "AI Employee",
      "Soporte prioritario",
    ],
  },
  {
    name: "Enterprise",
    price: "A medida",
    period: "Adaptado a tu escala",
    desc: "Seguridad avanzada, escalabilidad y onboarding dedicado.",
    cta: "Contactar Ventas",
    highlight: false,
    large: false,
    features: [
      "Múltiples AI Employees",
      "Integraciones con CRM",
      "Automatizaciones a medida",
      "Soporte dedicado",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Precios</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Precios simples que crecen contigo
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Empieza gratis. Sube de plan cuando tu AI Employee ya esté cerrando negocios por ti.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "group relative flex flex-col rounded-3xl border p-8 backdrop-blur-xl transition-all duration-300",
                plan.large ? "lg:scale-[1.06] lg:p-10" : "",
                plan.highlight
                  ? "border-primary/60 bg-primary/[0.06] shadow-[0_24px_80px_-24px] shadow-primary/50"
                  : "border-white/10 bg-white/[0.03] shadow-[0_24px_60px_-30px] shadow-black/80",
                "hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_36px_100px_-24px] hover:shadow-primary/40",
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-semibold text-primary-foreground shadow-[0_8px_30px_-6px] shadow-primary/60">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ideal para empezar
                </span>
              )}
              {plan.large && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-secondary px-3.5 py-1 text-xs font-semibold text-foreground ring-1 ring-white/10">
                  Más popular
                </span>
              )}

              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {plan.name}
              </h3>

              <div className="mt-5 flex items-baseline gap-2">
                {plan.prefix && <span className="text-xs text-muted-foreground">{plan.prefix}</span>}
                <span className="text-4xl font-semibold tracking-tight sm:text-5xl">{plan.price}</span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.period}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{plan.desc}</p>

              <ul className="mt-7 flex-1 space-y-3.5">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm">
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        plan.highlight ? "bg-primary/20" : "bg-white/5",
                      )}
                    >
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-foreground/90">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-9 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:scale-[1.03]",
                  plan.highlight || plan.large
                    ? "bg-primary text-primary-foreground shadow-[0_14px_44px_-10px] shadow-primary/60 hover:shadow-[0_18px_54px_-8px] hover:shadow-primary/70"
                    : "border border-white/10 bg-white/[0.04] text-foreground hover:bg-white/[0.08]",
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
