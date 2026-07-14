import { CircleCheckBig } from "lucide-react"

const BENEFITS = [
  "Reduce trabajo repetitivo",
  "Nunca pierdas un cliente",
  "Aumenta la velocidad de respuesta",
  "Captura cada oportunidad",
  "Crece sin contratar",
]

export function Benefits() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Por qué ZETTA-AI
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              El rendimiento de un equipo completo, a una fracción del costo.
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Cada mensaje sin responder es un cliente perdido. ZETTA-AI se asegura
              de que eso nunca vuelva a pasar — haciendo crecer tu negocio sin aumentar tu nómina.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CircleCheckBig className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
