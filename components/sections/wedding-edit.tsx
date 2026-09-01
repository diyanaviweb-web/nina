import Image from 'next/image'
import Link from 'next/link'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

const items = [
  { name: 'Mangalsutra', image: '/images/wedding-2.png', href: '#' },
  { name: 'Bridal Karas', image: '/images/wedding-3.png', href: '#' },
  { name: 'Wedding Rings', image: '/images/wedding-hero.png', href: '#' },
]

export function WeddingEdit() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <SectionLabel align="center" className="mb-4">
          The Wedding Edit
        </SectionLabel>
        <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
          For Your Most Important Yes
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          From the mangalsutra ceremony to the reception, complete bridal sets designed to be
          worn well beyond the wedding day.
        </p>
      </ScrollReveal>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item, index) => (
          <ScrollReveal key={item.name} delay={index * 80}>
            <Link href={item.href} className="group relative block aspect-[3/4] overflow-hidden">
              <Image
                src={item.image || '/placeholder.svg'}
                alt={item.name}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-serif text-xl text-primary-foreground">{item.name}</h3>
                <span className="mt-2 inline-block h-px w-8 bg-primary-foreground/70 transition-all duration-300 group-hover:w-14" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
