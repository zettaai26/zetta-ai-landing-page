import { ArrowRight, PlayCircle, Clock, CreditCard, Wrench } from "lucide-react"
import { DashboardMockup } from "@/components/dashboard-mockup"

const TRUST = [
  { icon: Clock, label: "Lanza en menos de 24 horas" },
  { icon: CreditCard, label: "Sin tarjeta de crédito" },
  { icon: Wrench, label: "Instalación incluida" },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)]" />
        <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,oklch(1_0_0/4%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/4%)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
            </span>
            Oferta de lanzamiento • Prueba gratuita de 14 días
          </span>

          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4.25rem]">
            Deja de Perder Clientes <span className="text-gradient">Mientras Duermes.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0 lg:text-xl">
            Tu AI Employee responde clientes, califica leads, agenda reuniones y
            hace seguimiento automáticamente — las 24 horas, los 7 días de la semana. Sin programar. Sin
            instalaciones complicadas. Lanza en menos de 24 horas.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_16px_50px_-12px] shadow-primary/60 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Quiero mi AI Employee
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              <PlayCircle className="h-4 w-4" />
              Reserva una Demo en Vivo
            </a>
          </div>

          <ul className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2 lg:mx-0 lg:justify-start">
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <t.icon className="h-3 w-3" />
                </span>
                {t.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-float lg:pl-4">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
