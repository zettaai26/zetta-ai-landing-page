"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Mail, CalendarCheck, Users, FileText, BarChart3 } from "lucide-react"

const CAPABILITIES = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Respuestas instantáneas con IA, de día o de noche.",
    tag: "Activo",
  },
  {
    icon: Mail,
    label: "Gmail",
    description: "Responde correos automáticamente y hace seguimiento.",
    tag: "Automático",
  },
  {
    icon: CalendarCheck,
    label: "Calendario",
    description: "Agenda reuniones sin intervención humana.",
    tag: "Autoservicio",
  },
  {
    icon: Users,
    label: "CRM",
    description: "Captura y organiza cada lead automáticamente.",
    tag: "Sincronizado",
  },
  {
    icon: FileText,
    label: "Cotizaciones",
    description: "Genera cotizaciones precisas al instante usando IA.",
    tag: "Instantáneo",
  },
  {
    icon: BarChart3,
    label: "Reportes",
    description: "Resúmenes diarios de conversaciones, leads y reuniones.",
    tag: "Cada mañana",
  },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function AiEmployee() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="ai-employee" className="relative overflow-hidden py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Un asistente. Todos los canales.
          </div>
          <h2 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Conoce a tu AI Employee
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Un asistente inteligente conectado a cada canal de comunicación de tu negocio.
          </p>
        </div>

        {/* Product-style panel */}
        <div
          className="mt-16 rounded-3xl border border-border bg-card/40 p-4 backdrop-blur-xl transition-all duration-700 ease-out sm:p-6"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(2rem)",
          }}
        >
          {/* Panel top bar */}
          <div className="flex items-center justify-between border-b border-border/70 px-3 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">ZETTA-AI Console</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Activo
            </span>
          </div>

          {/* Capability grid */}
          <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background/50 p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-primary/50 hover:bg-background/70"
                style={{
                  transitionDelay: `${i * 90}ms`,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(1.5rem)",
                }}
              >
                {/* Glowing border sheen */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_40px_-8px] shadow-primary/40 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/80 transition-colors duration-500 group-hover:border-primary/50">
                    <cap.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {cap.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold">{cap.label}</h3>
                <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
