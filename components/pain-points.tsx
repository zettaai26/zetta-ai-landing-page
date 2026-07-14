"use client"

import { useEffect, useRef, useState } from "react"
import { PhoneMissed, MessageSquareOff, MailX } from "lucide-react"

const CARDS = [
  {
    icon: PhoneMissed,
    stat: "78%",
    title: "Llamadas perdidas",
    description: "de los clientes llaman a la competencia cuando nadie contesta.",
  },
  {
    icon: MessageSquareOff,
    stat: "90%",
    title: "WhatsApp sin responder",
    description: "de los compradores esperan una respuesta en minutos. Cada mensaje sin contestar es una oportunidad perdida.",
  },
  {
    icon: MailX,
    stat: "80%",
    title: "Correos olvidados",
    description: "de las ventas necesitan un seguimiento que nunca llega.",
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
      { threshold: 0.2 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

export function PainPoints() {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            ¿Cuánto dinero estás perdiendo cada día?
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Cada mensaje sin responder es una oportunidad perdida.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-xl transition-all duration-700 ease-out hover:border-primary/40"
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(2rem)",
              }}
            >
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-background/60">
                  <card.icon className="h-7 w-7 text-primary" />
                </div>
                <span className="text-4xl font-bold tracking-tight text-primary">{card.stat}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{card.title}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-14 flex justify-center transition-all duration-700 ease-out"
          style={{
            transitionDelay: "420ms",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(1rem)",
          }}
        >
          <p className="rounded-full border border-primary/30 bg-primary/10 px-8 py-4 text-center text-lg font-medium text-balance sm:text-xl">
            Tu AI Employee <span className="text-primary">nunca pierde un cliente.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
