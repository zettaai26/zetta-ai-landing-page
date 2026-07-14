import { Sparkles } from "lucide-react"

const LINKS = [
  { label: "Inicio", href: "#home" },
  { label: "Funciones", href: "#features" },
  { label: "Industrias", href: "#industries" },
  { label: "Precios", href: "#pricing" },
  { label: "Contacto", href: "#contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <div className="flex items-center justify-center gap-2.5 md:justify-start">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-[15px] font-semibold tracking-tight">
                ZETTA<span className="text-primary">-AI</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              AI Employees para negocios de logística y comercio. Responden clientes,
              califican leads y agendan reuniones — 24/7.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">Copyright © 2026 ZETTA-AI. Todos los derechos reservados.</p>
          <p className="text-xs text-muted-foreground">Hecho para negocios que nunca se detienen.</p>
        </div>
      </div>
    </footer>
  )
}
