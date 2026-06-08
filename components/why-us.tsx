import { CheckCircle2 } from "lucide-react"

const points = [
  {
    title: "Vetted professionals",
    description:
      "Every cleaner is background-checked, trained, and rated after each visit.",
  },
  {
    title: "Eco-friendly by default",
    description:
      "Plant-based, family- and pet-safe products that are tough on grime, gentle on your home.",
  },
  {
    title: "Flat, upfront pricing",
    description:
      "No hidden fees or surprises. You'll know your quote before we ever step inside.",
  },
  {
    title: "Happiness guaranteed",
    description:
      "Not thrilled with a spot? We'll come back within 24 hours and re-clean it free.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <img
              src="/images/cleaner-portrait.png"
              alt="A friendly professional cleaner smiling in a bright home"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Why Maison Clean
            </p>
            <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Care you can feel in every room.
            </h2>
          </div>

          <ul className="flex flex-col gap-5">
            {points.map((point) => (
              <li key={point.title} className="flex gap-4">
                <CheckCircle2
                  className="mt-0.5 size-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-medium text-foreground">{point.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
