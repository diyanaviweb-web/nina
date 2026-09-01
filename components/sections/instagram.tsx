import Image from 'next/image'
import { instagramImages } from '@/lib/data'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <ScrollReveal className="mx-auto max-w-2xl text-center">
        <SectionLabel align="center" className="mb-4">
          @ninajewellers
        </SectionLabel>
        <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
          Follow the Nina World
        </h2>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
        {instagramImages.map((image, index) => (
          <ScrollReveal key={image} delay={index * 40}>
            <a
              href="#"
              aria-label="View on Instagram"
              className="group relative block aspect-square overflow-hidden"
            >
              <Image
                src={image || '/placeholder.svg'}
                alt=""
                fill
                sizes="(min-width: 768px) 16vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
