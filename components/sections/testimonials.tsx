'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cn } from '@/lib/utils'

export function Testimonials() {
  const [active, setActive] = useState(0)

  function next() {
    setActive((prev) => (prev + 1) % testimonials.length)
  }
  function prev() {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <SectionLabel align="center" className="mb-8">
            In Our Clients&apos; Words
          </SectionLabel>
        </ScrollReveal>

        <ScrollReveal delay={100} className="relative min-h-[220px] sm:min-h-[180px]">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.id}
              className={cn(
                'absolute inset-0 flex flex-col items-center gap-6 transition-opacity duration-500',
                index === active ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              <p className="font-serif text-xl leading-relaxed text-foreground text-balance sm:text-2xl">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{testimonial.name}</span> —{' '}
                {testimonial.location}
              </footer>
            </blockquote>
          ))}
        </ScrollReveal>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === active}
                className={cn(
                  'h-1.5 w-1.5 rounded-full transition-all',
                  index === active ? 'w-5 bg-accent' : 'bg-line',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  )
}
