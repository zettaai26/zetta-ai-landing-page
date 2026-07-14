import { ArrowRight } from "lucide-react"

export function FinalCta() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-16 text-center sm:px-12 sm:py-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]" />
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,oklch(1_0_0/5%)_1px,transparent_1px),linear-gradient(to_bottom,oklch(1_0_0/5%)_1px,transparent_1px)] [background-size:48px_48px]" />
          </div>

          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            Deja de perder clientes.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            Empieza hoy tu prueba gratuita de 14 días y pon a trabajar tu primer AI Employee.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_16px_50px_-12px] shadow-primary/70 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              Empieza tu prueba gratuita
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-secondary/40 px-7 py-4 text-base font-semibold transition-colors hover:bg-secondary sm:w-auto"
            >
              Hablemos
            </a>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Sin tarjeta de crédito · Lanza en menos de 24 horas</p>
        </div>
      </div>
    </section>
  )
}
