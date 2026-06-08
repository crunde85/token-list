import { Home, Sparkles, Building2, PackageOpen } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Standard Clean",
    description:
      "Routine upkeep for a consistently tidy home — dusting, floors, kitchen, and baths.",
  },
  {
    icon: Sparkles,
    title: "Deep Clean",
    description:
      "A top-to-bottom reset, including baseboards, inside appliances, and detailed scrubbing.",
  },
  {
    icon: PackageOpen,
    title: "Move In / Out",
    description:
      "Leave it spotless or start fresh. Cabinets, closets, and every corner handled.",
  },
  {
    icon: Building2,
    title: "Office & Studio",
    description:
      "Clean, professional workspaces for small offices, studios, and rentals.",
  },
]

export function Services() {
  return (
    <section id="services" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Our Services
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Cleaning tailored to how you live.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Pick the level of care your space needs. Every visit follows a
            58-point checklist, so nothing gets missed.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
