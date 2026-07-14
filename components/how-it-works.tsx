"use client"

import { useEffect, useRef, useState } from "react"
import { FileText, Settings2, Cable, Rocket } from "lucide-react"

const STEPS = [
  {
    n: "Paso 1",
    title: "Solicita tu prueba gratuita",
    desc: "Regístrate en segundos. Sin tarjeta de crédito, sin compromiso, sin costo de instalación.",
    Icon: FileText,
  },
  {
    n: "Paso 2",
    title: "Configuramos tu AI Employee",
    desc: "Nuestro equipo lo entrena con tu negocio, tono, productos y procesos.",
    Icon: Settings2,
  },
  {
    n: "Paso 3",
    title: "Conecta tus canales",
    desc: "Integra WhatsApp, Email o tu sitio web en solo unos clics.",
    Icon: Cable,
  },
  {
    n: "Paso 4",
    title: "Empieza a recibir clientes",
    desc: "Tu AI Employee responde, califica y agenda clientes automáticamente.",
    Icon: Rocket,
  },
]

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-it-works" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Cómo funciona
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Operativo en cuatro simples pasos
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Del registro a tu primer cliente automatizado en menos de un día.
          </p>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* Connecting line track */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-border/60 md:block"
          />
          {/* Glowing animated line fill */}
          <div
            aria-hidden="true"
            className="absolute left-[12%] top-10 hidden h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0 shadow-[0_0_12px_2px] shadow-primary/60 transition-[width] duration-[1400ms] ease-out md:block"
            style={{ width: visible ? "76%" : "0%" }}
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.n}
                className="relative flex flex-col items-center text-center transition-all duration-700 ease-out"
                style={{
                  transitionDelay: `${i * 180}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(24px)",
                }}
              >
                <div className="relative">
                  <span className="absolute -inset-3 rounded-full bg-primary/20 blur-xl" aria-hidden="true" />
                  <span className="relative inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-card shadow-[0_10px_40px_-12px] shadow-primary/60">
                    <s.Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                  </span>
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>

                <span className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
