import { Star } from "lucide-react"

const reviews = [
  {
    quote:
      "My apartment has never looked this good. They were on time, friendly, and the place smelled incredible. I've already booked them monthly.",
    name: "Sarah K.",
    detail: "Downtown · Standard Clean",
  },
  {
    quote:
      "The deep clean before our move-in was worth every penny. Baseboards, inside the oven, every corner — flawless and stress-free.",
    name: "Marcus T.",
    detail: "Riverside · Move-In Clean",
  },
  {
    quote:
      "Transparent pricing and genuinely lovely people. It's the first cleaning service I've actually trusted with a key to my home.",
    name: "Priya N.",
    detail: "Oak Hill · Recurring Clean",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Loved Locally
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Neighbors who never look back.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-pretty leading-relaxed text-foreground">
                {`"${review.quote}"`}
              </blockquote>
              <figcaption className="mt-auto">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
