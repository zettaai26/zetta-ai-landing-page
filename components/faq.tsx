"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQS = [
  {
    q: "¿Qué es exactamente un AI Employee?",
    a: "Es una IA autónoma que trabaja como un miembro más de tu equipo — responde clientes, califica leads, agenda reuniones y se encarga de tareas repetitivas por WhatsApp, email y tu CRM, las 24 horas del día.",
  },
  {
    q: "¿Cuánto tarda la implementación?",
    a: "La mayoría de los negocios quedan operativos en menos de 24 horas. Nos cuentas sobre tu negocio, entrenamos y conectamos tu AI Employee, y lo lanzas — sin necesidad de conocimientos técnicos.",
  },
  {
    q: "¿Necesito conocimientos técnicos?",
    a: "Ninguno. Nuestro equipo se encarga de la implementación e integración por ti. Si puedes describir tu negocio, podemos desplegar tu AI Employee.",
  },
  {
    q: "¿Con qué herramientas se integra?",
    a: "WhatsApp, Google Calendar, Gmail, OpenAI, n8n y la mayoría de los CRMs populares. ¿Necesitas algo personalizado? Nuestro plan Enterprise cubre integraciones a medida.",
  },
  {
    q: "¿Mis datos están seguros?",
    a: "Sí. Tus datos se cifran en tránsito y en reposo, nunca se usan para entrenar modelos de terceros, y se manejan bajo controles de acceso estrictos con seguridad de nivel empresarial.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Claro. La prueba no requiere tarjeta de crédito, y los planes pagos son mes a mes sin contratos de permanencia. Cancela cuando quieras.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Preguntas frecuentes
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Resolvemos tus dudas
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium">{item.q}</span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
