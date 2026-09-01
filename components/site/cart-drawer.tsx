'use client'

import { X, ShoppingBag } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useStore } from '@/lib/store-context'

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { cartCount } = useStore()

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-[70] bg-primary/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-[71] flex h-full w-full max-w-sm flex-col bg-background transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Your Bag ({cartCount})
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close bag"
            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
          <ShoppingBag className="h-10 w-10 text-accent" strokeWidth={1} />
          <p className="font-serif text-xl text-foreground">
            {cartCount > 0 ? 'Your selections are being prepared.' : 'Your bag is empty'}
          </p>
          <p className="text-sm text-muted-foreground">
            {cartCount > 0
              ? 'A specialist will confirm every detail with you before checkout.'
              : 'Begin exploring our jewellery collections to add pieces here.'}
          </p>
        </div>

        <div className="border-t border-line px-6 py-6">
          <button
            type="button"
            className="w-full bg-primary py-3.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-heritage"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </>
  )
}
