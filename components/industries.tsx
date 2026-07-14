import { Ship, Truck, FileCheck, Warehouse, Package } from "lucide-react"

const INDUSTRIES = [
  {
    icon: Ship,
    label: "Freight forwarders",
    desc: "Cotiza fletes, da seguimiento a embarques y responde clientes sin perder tiempo.",
  },
  {
    icon: FileCheck,
    label: "Agencias aduaneras",
    desc: "Atiende consultas de trámites y documentación al instante, sin dejar clientes esperando.",
  },
  {
    icon: Warehouse,
    label: "3PL y almacenaje",
    desc: "Gestiona consultas de espacio, tarifas y disponibilidad las 24 horas.",
  },
  {
    icon: Truck,
    label: "Transporte y flotas",
    desc: "Coordina cotizaciones y seguimiento de carga sin saturar a tu equipo.",
  },
  {
    icon: Package,
    label: "Comercio e import/export",
    desc: "Nunca pierdas una cotización, consulta o reserva por falta de respuesta a tiempo.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Para quién es</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Hecho para negocios que no pueden darse el lujo de perder clientes
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Si un mensaje sin responder significa una venta perdida, un AI Employee se paga solo desde el primer día.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((it) => (
            <div
              key={it.label}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-primary/40 hover:bg-secondary/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary transition-transform group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold">{it.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
