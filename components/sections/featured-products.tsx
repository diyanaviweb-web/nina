'use client'

import Link from 'next/link'
import { products } from '@/lib/data'
import { ProductCard } from '@/components/product-card'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'
import { useStore } from '@/lib/store-context'

export function FeaturedProducts() {
  const { isWishlisted, toggleWishlist, openQuickView } = useStore()

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <ScrollReveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <SectionLabel className="mb-4">Featured</SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
            This Season&apos;s Selection
          </h2>
        </div>
        <Link
          href="#"
          className="shrink-0 border-b border-accent pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-foreground hover:border-foreground"
        >
          View All Jewellery
        </Link>
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
        {products.map((product, index) => (
          <ScrollReveal key={product.id} delay={(index % 4) * 60}>
            <ProductCard
              product={product}
              isWishlisted={isWishlisted(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
              onQuickView={() => openQuickView(product)}
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
