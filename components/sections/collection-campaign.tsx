import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

export function CollectionCampaign() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      <Image
        src="/images/collection-campaign.png"
        alt="Model wearing a statement gold and diamond necklace"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/45" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            The Collection
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-primary-foreground text-balance sm:text-5xl">
            A Modern Expression of Tradition
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/85">
            Jewellery that carries Indian craftsmanship forward — reimagined for the way it is
            actually worn today.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block bg-primary-foreground px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explore the Collection
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
