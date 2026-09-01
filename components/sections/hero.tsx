'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const slides = [
  {
    image: '/images/hero-1.png',
    eyebrow: 'The Wedding Edit',
    title: 'For Your Most Important Yes',
    copy: 'Bridal jewellery crafted in 22K gold and diamonds, designed to be worn for generations.',
    primaryCta: { label: 'Shop Bridal', href: '#' },
    secondaryCta: { label: 'Book a Consultation', href: '#' },
  },
  {
    image: '/images/hero-2.png',
    eyebrow: 'New Arrivals',
    title: 'Modern Heirlooms, Made Today',
    copy: 'Discover a new season of rings and everyday diamonds designed in our Iselin atelier.',
    primaryCta: { label: 'Shop New Arrivals', href: '#' },
    secondaryCta: { label: 'Explore Collections', href: '#' },
  },
  {
    image: '/images/hero-3.png',
    eyebrow: 'Since 1987',
    title: 'A Modern Expression of Tradition',
    copy: 'Family-owned, handcrafted fine jewellery bringing Indian design heritage to every occasion.',
    primaryCta: { label: 'Our Story', href: '#' },
    secondaryCta: { label: 'Visit Our Store', href: '#' },
  },
]

export function Hero() {
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6500)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  function goTo(index: number) {
    setActive(index)
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6500)
  }

  const touchStartX = useRef(0)

  return (
    <section
      className="relative -mt-[116px] flex min-h-[100vh] items-end overflow-hidden sm:min-h-[92vh]"
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX
      }}
      onTouchEnd={(e) => {
        const delta = e.changedTouches[0].clientX - touchStartX.current
        if (delta > 50) goTo((active - 1 + slides.length) % slides.length)
        else if (delta < -50) goTo((active + 1) % slides.length)
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === active ? 'opacity-100' : 'opacity-0',
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.image || '/placeholder.svg'}
            alt={slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
        </div>
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 sm:pb-28 lg:px-10">
        <div className="max-w-xl">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={cn(
                'transition-all duration-700',
                index === active
                  ? 'relative opacity-100'
                  : 'pointer-events-none absolute opacity-0',
              )}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
                {slide.eyebrow}
              </p>
              <h1 className="mt-4 font-serif text-4xl leading-[1.08] text-primary-foreground text-balance sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/85">
                {slide.copy}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={slide.primaryCta.href}
                  className="bg-primary-foreground px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {slide.primaryCta.label}
                </Link>
                <Link
                  href={slide.secondaryCta.href}
                  className="border border-primary-foreground/60 px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  {slide.secondaryCta.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-current={index === active}
              className="group flex items-center py-2"
            >
              <span
                className={cn(
                  'h-[2px] w-10 bg-primary-foreground/40 transition-all duration-300 group-hover:bg-primary-foreground/70',
                  index === active && 'w-16 bg-primary-foreground',
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
