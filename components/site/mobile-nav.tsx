'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'

export function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)

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
          'fixed left-0 top-0 z-[71] flex h-full w-full max-w-sm flex-col overflow-y-auto bg-background transition-transform duration-300 ease-out',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <span className="font-serif text-xl text-foreground">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center text-foreground transition-colors hover:text-accent"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col px-6 py-4">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-line">
              <button
                type="button"
                onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                className="flex w-full items-center justify-between py-4 text-left"
                aria-expanded={expanded === item.label}
              >
                <span className="font-serif text-lg text-foreground">{item.label}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-accent transition-transform',
                    expanded === item.label && 'rotate-180',
                  )}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={cn(
                  'grid overflow-hidden transition-all duration-300',
                  expanded === item.label ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] opacity-0',
                )}
              >
                <div className="flex flex-col gap-4 overflow-hidden">
                  {item.columns.map((column) => (
                    <div key={column.heading} className="flex flex-col gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                        {column.heading}
                      </span>
                      {column.links.map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={onClose}
                          className="py-1 text-sm text-foreground"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

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
