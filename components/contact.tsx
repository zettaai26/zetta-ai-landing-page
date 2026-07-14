import { Globe, Mail, MessageSquare, ArrowUpRight } from "lucide-react"

const DETAILS = [
  {
    icon: Globe,
    label: "Website",
    value: "zetta-ai.org",
    href: "https://zetta-ai.org",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@zetta-ai.org",
    href: "mailto:info@zetta-ai.org",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+507 6978-3939",
    href: "https://wa.me/50769783939",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 rounded-[2rem] border border-border bg-card p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Contacto
            </span>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Construyamos tu AI Employee
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Escríbenos y te ayudamos a configurarlo. ZETTA-AI — AI Employees para negocios de logística.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {DETAILS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target={d.label === "Website" ? "_blank" : undefined}
                rel={d.label === "Website" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-secondary/30 p-5 transition-colors hover:border-primary/40 hover:bg-secondary/60"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <d.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">{d.label}</p>
                    <p className="text-base font-medium">{d.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
