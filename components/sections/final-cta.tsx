import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/scroll-reveal'

export function FinalCta() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden text-center">
      <Image
        src="/images/final-cta.png"
        alt="Close-up of a diamond ring catching the light"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary/60" />

      <ScrollReveal className="relative z-10 mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-3xl leading-tight text-primary-foreground text-balance sm:text-4xl lg:text-5xl">
          Your Next Chapter Deserves Something Special
        </h2>
        <p className="mt-5 text-base leading-relaxed text-primary-foreground/85">
          Visit our showroom or book a private consultation to begin designing a piece that will
          be cherished for generations.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#"
            className="bg-primary-foreground px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Book a Consultation
          </Link>
          <Link
            href="#"
            className="border border-primary-foreground/60 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            Visit Our Store
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
