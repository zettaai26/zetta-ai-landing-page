"use client"

import { useEffect, useState } from "react"
import {
  MessageCircle,
  CalendarDays,
  Bell,
  Mail,
  TrendingUp,
  Check,
  CheckCheck,
  Phone,
  Video,
} from "lucide-react"

const CHAT_SCRIPT = [
  { from: "user", text: "¡Hola! ¿Tienen disponibilidad esta semana?" },
  { from: "ai", text: "¡Hola Sarah! Sí — te puedo agendar. ¿Qué servicio necesitas?" },
  { from: "user", text: "Una consulta completa, idealmente el jueves." },
  { from: "ai", text: "Perfecto. El jueves 2:00 PM está disponible. ¿Lo confirmo?" },
  { from: "user", text: "Sí, por favor 🙌" },
  { from: "ai", text: "¡Reservado! Invitación de calendario + recordatorio enviados. ¿Algo más?" },
]

function useTypingChat() {
  const [count, setCount] = useState(2)
  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => (c >= CHAT_SCRIPT.length ? 2 : c + 1))
    }, 1800)
    return () => clearInterval(id)
  }, [])
  return CHAT_SCRIPT.slice(0, count)
}

function WhatsAppCard() {
  const messages = useTypingChat()
  return (
    <div className="glass flex h-full flex-col overflow-hidden rounded-2xl border border-border">
      <div className="flex items-center justify-between border-b border-border bg-[#0b141a]/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
            <MessageCircle className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight">AI Employee · Chat en Vivo</p>
            <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" /> online · replies in 0.4s
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Video className="h-4 w-4" />
          <Phone className="h-4 w-4" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-end gap-2 px-3 py-3">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.from === "ai" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[82%] rounded-2xl px-3 py-2 text-[12px] leading-snug ${
                m.from === "ai"
                  ? "rounded-br-sm bg-[#005c4b] text-white"
                  : "rounded-bl-sm bg-secondary text-foreground"
              }`}
            >
              {m.text}
              {m.from === "ai" && (
                <span className="ml-1 inline-flex translate-y-0.5 text-[#8fd6c6]">
                  <CheckCheck className="h-3 w-3" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CalendarCard() {
  const days = ["M", "T", "W", "T", "F", "S", "S"]
  const booked = [3, 9, 14, 18, 22, 27]
  return (
    <div className="glass rounded-2xl border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-primary" />
          <p className="text-[13px] font-semibold">Calendario</p>
        </div>
        <span className="text-[11px] text-muted-foreground">Junio 2026</span>
      </div>
      <div className="mb-1.5 grid grid-cols-7 gap-1 text-center text-[9px] text-muted-foreground">
        {days.map((d, i) => (
          <span key={i}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 28 }).map((_, i) => {
          const day = i + 1
          const isBooked = booked.includes(day)
          return (
            <div
              key={i}
              className={`flex h-5 items-center justify-center rounded-[5px] text-[9px] ${
                isBooked
                  ? "bg-primary font-semibold text-primary-foreground"
                  : "bg-secondary/60 text-muted-foreground"
              }`}
            >
              {day}
            </div>
          )
        })}
      </div>
      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Check className="h-3 w-3 text-primary" /> 6 reuniones agendadas hoy
      </p>
    </div>
  )
}

function LeadCard() {
  return (
    <div className="glass rounded-2xl border border-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-primary" />
          <p className="text-[13px] font-semibold">Notificaciones de Leads</p>
        </div>
        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">
          3 new
        </span>
      </div>
      <ul className="space-y-2">
        {[
          { name: "Sarah Chen", tag: "Calificado", value: "$4.2k" },
          { name: "Marcus Webb", tag: "Lead caliente", value: "$9.8k" },
          { name: "Ava Torres", tag: "Agendado", value: "$2.1k" },
        ].map((lead) => (
          <li key={lead.name} className="flex items-center justify-between rounded-lg bg-secondary/50 px-2.5 py-2">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-[10px] font-semibold text-primary">
                {lead.name.split(" ").map((n) => n[0]).join("")}
              </span>
              <div>
                <p className="text-[11px] font-medium leading-tight">{lead.name}</p>
                <p className="text-[9px] text-muted-foreground">{lead.tag}</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-primary">{lead.value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AnalíticaCard() {
  const bars = [40, 62, 48, 78, 66, 92, 84]
  return (
    <div className="glass rounded-2xl border border-border p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <p className="text-[13px] font-semibold">Analítica</p>
        </div>
        <span className="text-[11px] font-medium text-primary">+38%</span>
      </div>
      <p className="text-xl font-semibold tracking-tight">1,284</p>
      <p className="mb-3 text-[10px] text-muted-foreground">Conversaciones gestionadas esta semana</p>
      <div className="flex h-14 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/30 to-primary"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}

function EmailCard() {
  return (
    <div className="glass flex items-center gap-3 rounded-2xl border border-border p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
        <Mail className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[12px] font-medium">Seguimiento enviado a 24 leads</p>
        <p className="truncate text-[10px] text-muted-foreground">Email automático · abierto por el 71%</p>
      </div>
      <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary">Auto</span>
    </div>
  )
}

export function DashboardMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[2rem] bg-primary/20 blur-3xl"
      />
      <div className="glass glow-blue rounded-3xl border border-border p-3 sm:p-4">
        <div className="mb-3 flex items-center gap-1.5 px-1">
          <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
          <span className="ml-3 text-[11px] text-muted-foreground">app.zetta-ai.org / workspace</span>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="sm:row-span-2 min-h-[300px]">
            <WhatsAppCard />
          </div>
          <CalendarCard />
          <AnalíticaCard />
        </div>
        <div className="mt-3 grid grid-cols-1 gap-3">
          <EmailCard />
          <LeadCard />
        </div>
      </div>
    </div>
  )
}
