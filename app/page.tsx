import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { QuoteForm } from "@/components/quote-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
      </main>
      <SiteFooter />
    </div>
  )
}
