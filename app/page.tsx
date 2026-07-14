import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { AiEmployee } from "@/components/ai-employee"
import { SocialProof } from "@/components/social-proof"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { Industries } from "@/components/industries"
import { Pricing } from "@/components/pricing"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <PainPoints />
        <AiEmployee />
        <SocialProof />
        <Features />
        <HowItWorks />
        <Benefits />
        <Industries />
        <Pricing />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
