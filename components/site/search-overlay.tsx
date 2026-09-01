'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const quickLinks = ['Rings', 'Earrings', 'Mangalsutra', 'Wedding Sets', 'Gold Bangles', 'Gifts']

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className={cn(
        'fixed inset-0 z-[70] bg-background transition-opacity duration-300',
        open ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <div className="mx-auto flex h-full max-w-3xl flex-col px-6 pt-28 sm:pt-36">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close search"
          className="absolute right-6 top-8 flex h-10 w-10 items-center justify-center text-foreground transition-colors hover:text-accent sm:top-10"
        >
          <X className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <div className="flex items-end border-b border-line pb-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search rings, mangalsutra, gifts…"
            className="w-full bg-transparent font-serif text-2xl text-foreground placeholder:text-muted-foreground focus:outline-none sm:text-4xl"
          />
        </div>

        <div className="mt-10 flex flex-col gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
            Popular Searches
          </span>
          <div className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <button
                key={link}
                type="button"
                className="border border-line px-4 py-2 font-sans text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
