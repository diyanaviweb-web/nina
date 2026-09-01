import Image from 'next/image'
import Link from 'next/link'
import { designerPicks, formatPrice } from '@/lib/data'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function DesignerPicks() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <SectionLabel align="center" className="mb-4">
            Designer&apos;s Picks
          </SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
            Curated by Our Design Team
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            A rotating edit of pieces our designers return to again and again — chosen for
            versatility, craftsmanship and quiet standout detail.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {designerPicks.map((pick, index) => (
            <ScrollReveal key={pick.id} delay={index * 80} className="group">
              <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <Image
                    src={pick.image || '/placeholder.svg'}
                    alt={pick.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-serif text-lg text-foreground">{pick.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{pick.note}</p>
                <span className="mt-2 inline-block text-sm text-foreground">
                  {formatPrice(pick.price)}
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
