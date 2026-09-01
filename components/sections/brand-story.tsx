import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/brand-story.png"
              alt="A goldsmith at Nina Jewellers hand-finishing a piece of jewellery"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] border border-line bg-background p-5 lg:block">
            <p className="font-serif text-3xl text-foreground">1987</p>
            <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Founded in Iselin, New Jersey
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} className="order-1 lg:order-2">
          <SectionLabel className="mb-4">Our Story</SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
            Family-Owned Since 1987
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nina Jewellers began with founders Praful and Kiran Vaid, who set out to bring the
            craftsmanship of Indian goldsmithing to families across New Jersey. What started as a
            single storefront has grown into a trusted destination for 22K gold and diamond
            jewellery, built one relationship at a time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Nearly four decades later, every piece that leaves our atelier is still shaped by the
            same principle: jewellery should be made to be worn, cherished, and eventually passed
            down.
          </p>
          <Link
            href="#"
            className="mt-7 inline-block border-b border-accent pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-foreground hover:border-foreground"
          >
            Read Our Full Story
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
