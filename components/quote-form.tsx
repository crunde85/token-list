"use client"

import { useState } from "react"
import { CheckCircle2, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceOptions = [
  "Standard Clean",
  "Deep Clean",
  "Move In / Out",
  "Office & Studio",
]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="quote" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Info side */}
            <div className="relative flex flex-col justify-between gap-10 bg-primary p-8 text-primary-foreground md:p-12">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                  Free Estimate
                </p>
                <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  Get your quote in under a minute.
                </h2>
                <p className="mt-4 max-w-sm text-pretty leading-relaxed text-primary-foreground/80">
                  Tell us about your space and we'll send a transparent,
                  no-obligation quote the same day.
                </p>
              </div>

              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <Clock className="size-5 shrink-0" aria-hidden="true" />
                  Same-day response, every time
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0" aria-hidden="true" />
                  (555) 123-4567
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0" aria-hidden="true" />
                  hello@maisonclean.com
                </li>
              </ul>
            </div>

            {/* Form side */}
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Thank you!
                  </h3>
                  <p className="max-w-xs text-muted-foreground">
                    Your request is in. A Maison Clean specialist will reach out
                    with your quote shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Jane Doe"
                        className={inputClass}
                      />
                    </Field>
                    <Field label="Phone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="(555) 123-4567"
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@email.com"
                      className={inputClass}
                    />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Service" htmlFor="service">
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {serviceOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Bedrooms" htmlFor="bedrooms">
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        defaultValue=""
                        className={inputClass}
                      >
                        <option value="" disabled>
                          Select
                        </option>
                        <option>Studio</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4+</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Anything else?" htmlFor="notes">
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      placeholder="Pets, specific rooms, preferred days…"
                      className={`${inputClass} resize-none`}
                    />
                  </Field>

                  <Button type="submit" size="lg" className="mt-1 w-full rounded-full">
                    Request my free quote
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No spam, no obligation. We respect your inbox.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      {children}
    </label>
  )
}
