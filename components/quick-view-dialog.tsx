'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Heart } from 'lucide-react'
import { cn } from '@/lib/utils'
import { formatPrice } from '@/lib/data'
import { useStore } from '@/lib/store-context'

export function QuickViewDialog() {
  const { quickViewProduct, closeQuickView, isWishlisted, toggleWishlist, addToCart } = useStore()
  const open = Boolean(quickViewProduct)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeQuickView()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeQuickView])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[80] flex items-center justify-center bg-primary/50 p-4 transition-opacity duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      role="dialog"
      aria-modal="true"
      aria-label={quickViewProduct ? quickViewProduct.name : 'Quick view'}
      onClick={closeQuickView}
    >
      {quickViewProduct && (
        <div
          className="relative grid w-full max-w-2xl grid-cols-1 gap-0 bg-background sm:grid-cols-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={closeQuickView}
            aria-label="Close quick view"
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center bg-background/90 text-foreground transition-colors hover:text-accent"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <div className="relative aspect-square sm:aspect-auto">
            <Image
              src={quickViewProduct.image || '/placeholder.svg'}
              alt={quickViewProduct.name}
              fill
              sizes="(min-width: 640px) 320px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-4 p-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {quickViewProduct.category}
            </span>
            <h3 className="font-serif text-2xl leading-snug text-foreground">
              {quickViewProduct.name}
            </h3>
            <span className="font-sans text-lg text-foreground">
              {formatPrice(quickViewProduct.price)}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Handcrafted in 22K gold with certified diamonds. Every piece is finished by hand in
              our atelier and can be customized on request.
            </p>

            <div className="mt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  addToCart()
                  closeQuickView()
                }}
                className="w-full bg-primary py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-heritage"
              >
                Add to Bag
              </button>
              <button
                type="button"
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className="flex w-full items-center justify-center gap-2 border border-line py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Heart
                  className={cn(
                    'h-4 w-4',
                    isWishlisted(quickViewProduct.id) && 'fill-heritage text-heritage',
                  )}
                  strokeWidth={1.5}
                />
                {isWishlisted(quickViewProduct.id) ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
