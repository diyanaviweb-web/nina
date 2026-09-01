import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function Heritage() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">
        <ScrollReveal className="relative aspect-[4/5] lg:aspect-auto lg:h-[640px]">
          <Image
            src="/images/heritage.png"
            alt="Close-up of kundan and gold jewellery detail"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </ScrollReveal>

        <ScrollReveal delay={100} className="px-6 py-16 lg:px-16 lg:py-0">
          <SectionLabel tone="inverted" className="mb-4 text-accent">
            Modern Heritage
          </SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-primary-foreground text-balance sm:text-4xl">
            Gold, Kundan &amp; Kundan-Inspired Craft
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75">
            Our heritage collection reinterprets traditional Indian techniques — hand-set kundan,
            22K gold work, and antique finishing — for a generation that wears fine jewellery
            every day, not just for occasion.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-primary-foreground/75">
            Each piece is finished by hand, balancing intricate detail with a silhouette that
            feels considered rather than ornate.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block border border-primary-foreground/50 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Explore Modern Heritage
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
