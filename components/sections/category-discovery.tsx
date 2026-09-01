import Image from 'next/image'
import Link from 'next/link'
import { categories } from '@/lib/data'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function CategoryDiscovery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <ScrollReveal>
        <SectionLabel align="center" className="mb-4">
          Shop by Category
        </SectionLabel>
        <h2 className="text-center font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
          Discover Your Next Piece
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px] lg:auto-rows-[260px]">
        {categories.map((category, index) => (
          <ScrollReveal
            key={category.id}
            delay={index * 60}
            className={
              category.span === 'wide'
                ? 'col-span-2 md:col-span-2'
                : category.span === 'tall'
                  ? 'md:row-span-2'
                  : ''
            }
          >
            <Link
              href={category.href}
              className="group relative block h-full min-h-[160px] overflow-hidden"
            >
              <Image
                src={category.image || '/placeholder.svg'}
                alt={category.name}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl text-primary-foreground sm:text-2xl">
                  {category.name}
                </h3>
                <p className="mt-1 hidden text-xs text-primary-foreground/80 sm:block">
                  {category.description}
                </p>
                <span className="mt-2 inline-block h-px w-8 bg-primary-foreground/70 transition-all duration-300 group-hover:w-14" />
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
