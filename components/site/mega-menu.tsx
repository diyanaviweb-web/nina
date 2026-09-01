'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { NavItem } from '@/lib/data'

export function MegaMenu({ item }: { item: NavItem }) {
  return (
    <div className="absolute inset-x-0 top-full border-t border-line bg-background shadow-[0_24px_48px_-24px_rgba(27,23,18,0.25)]">
      <div className="mx-auto flex max-w-7xl gap-16 px-6 py-10 lg:px-10">
        <div className="flex flex-1 gap-16">
          {item.columns.map((column) => (
            <div key={column.heading} className="flex flex-col gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                {column.heading}
              </span>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-serif text-[17px] text-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.featured && (
          <Link href={item.featured.href} className="group relative block w-72 shrink-0 overflow-hidden">
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <Image
                src={item.featured.image || '/placeholder.svg'}
                alt={item.featured.label}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <span className="mt-3 inline-block font-serif text-lg text-foreground underline decoration-accent decoration-1 underline-offset-4">
              {item.featured.label}
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}
