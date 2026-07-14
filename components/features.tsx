import {
  Headset,
  Zap,
  Filter,
  CalendarCheck,
  MailCheck,
  Database,
  MessageCircle,
  CalendarClock,
  Mail,
  BrainCircuit,
  Workflow,
} from "lucide-react"

const FEATURES = [
  {
    icon: Headset,
    title: "Atención al cliente 24/7",
    desc: "Tu AI Employee responde cada pregunta, de día o de noche, con la voz de tu marca.",
  },
  {
    icon: Zap,
    title: "Respuestas instantáneas con IA",
    desc: "Respuestas en menos de un segundo que se sienten humanas y resuelven al primer contacto.",
  },
  {
    icon: Filter,
    title: "Calificación de leads",
    desc: "Puntúa y clasifica automáticamente los leads para que tu equipo solo hable con compradores reales.",
  },
  {
    icon: CalendarCheck,
    title: "Agendamiento de citas",
    desc: "Confirma reuniones, envía invitaciones y llena tu calendario en piloto automático.",
  },
  {
    icon: MailCheck,
    title: "Automatización de email",
    desc: "Redacta, envía y da seguimiento a correos sin perder ni un contacto.",
  },
  {
    icon: Database,
    title: "Integración con CRM",
    desc: "Cada conversación, contacto y negociación sincronizados con tu CRM en tiempo real.",
  },
]

const INTEGRATIONS = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: CalendarClock, label: "Google Calendar" },
  { icon: Mail, label: "Gmail" },
  { icon: BrainCircuit, label: "OpenAI" },
  { icon: Workflow, label: "n8n" },
]

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Capacidades
          </span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Un empleado. Todas las tareas repetitivas.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            ZETTA-AI se encarga del trabajo que frena a tu equipo — para que te enfoques en crecer.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div
                aria-hidden="true"
                className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-0"
              />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
          <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Se conecta con tus herramientas
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {INTEGRATIONS.map((it) => (
              <span
                key={it.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium"
              >
                <it.icon className="h-4 w-4 text-primary" />
                {it.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
