import Image from 'next/image'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function Consultation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <SectionLabel className="mb-4">Personal Consultation</SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
            Jewellery, Chosen for You
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Whether you are designing an engagement ring, planning a complete bridal set, or
            looking for a piece to mark an occasion, our design consultants work with you
            one-on-one — in store or virtually — to bring it to life.
          </p>
          <ul className="mt-6 flex flex-col gap-3 text-sm text-foreground">
            {[
              'Private, no-obligation design sessions',
              'Custom sizing and stone selection',
              'In-store or virtual appointments',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="w-full border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none sm:max-w-xs"
            />
            <button
              type="submit"
              className="shrink-0 bg-primary px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:bg-heritage"
            >
              Book a Consultation
            </button>
          </form>
        </ScrollReveal>

        <ScrollReveal delay={100} className="relative aspect-[4/5]">
          <Image
            src="/images/consultation.png"
            alt="A design consultant reviewing jewellery designs with a client"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
