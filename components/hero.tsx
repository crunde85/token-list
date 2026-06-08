import { Star, ShieldCheck, Leaf } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </span>
            Rated 4.9 by 1,200+ local homes
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            A spotless home, without lifting a finger.
          </h1>

          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            Maison Clean pairs you with vetted, detail-obsessed
            professionals who treat your space like their own — using
            eco-friendly products and a checklist that never cuts corners.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#quote"
              className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 text-base")}
            >
              Request a free quote
            </a>
            <a
              href="#services"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full px-6 text-base",
              )}
            >
              View services
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
              Insured &amp; background-checked
            </span>
            <span className="flex items-center gap-2">
              <Leaf className="size-4 text-primary" aria-hidden="true" />
              Eco-friendly products
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <img
              src="/images/hero-living-room.png"
              alt="A bright, freshly cleaned modern living room with natural light"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-md sm:block">
            <p className="font-serif text-2xl font-semibold text-foreground">2hr</p>
            <p className="text-sm text-muted-foreground">average turnaround</p>
          </div>
        </div>
      </div>
    </section>
  )
}
