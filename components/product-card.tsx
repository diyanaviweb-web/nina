'use client'

import Image from 'next/image'
import { Heart, Eye } from 'lucide-react'
import type { Product } from '@/lib/data'
import { formatPrice } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
}: {
  product: Product
  isWishlisted: boolean
  onToggleWishlist: () => void
  onQuickView: () => void
}) {
  return (
    <div className="group flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={product.hoverImage || product.image || '/placeholder.svg'}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        {product.isNew && (
          <span className="absolute left-3 top-3 bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground">
            New
          </span>
        )}

        <button
          type="button"
          onClick={onToggleWishlist}
          aria-pressed={isWishlisted}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center bg-background/90 text-foreground transition-colors hover:bg-background"
        >
          <Heart
            className={cn('h-4 w-4', isWishlisted && 'fill-heritage text-heritage')}
            strokeWidth={1.5}
          />
        </button>

        <button
          type="button"
          onClick={onQuickView}
          className="absolute inset-x-3 bottom-3 flex translate-y-2 items-center justify-center gap-2 bg-primary/95 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" strokeWidth={1.5} />
          Quick View
        </button>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-1">
        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {product.category}
        </span>
        <h3 className="font-serif text-lg leading-snug text-foreground">{product.name}</h3>
        <span className="mt-1 font-sans text-sm text-foreground">{formatPrice(product.price)}</span>
      </div>
    </div>
  )
}
