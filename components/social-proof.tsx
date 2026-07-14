const COMPANIES = [
  "Freight Forwarding",
  "Customs Brokerage",
  "3PL & Warehousing",
  "Logistics Operations",
  "Supply Chain",
  "Trade & Import/Export",
]

export function SocialProof() {
  return (
    <section className="border-y border-border py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Built for logistics & freight teams across Latin America
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14">
            {[...COMPANIES, ...COMPANIES].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
