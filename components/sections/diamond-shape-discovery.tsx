'use client'

import { useState } from 'react'
import Link from 'next/link'
import { DiamondSelector, type DiamondOption } from '@/components/diamond-selector'
import { SectionLabel } from '@/components/section-label'
import { ScrollReveal } from '@/components/scroll-reveal'

const options: DiamondOption[] = [
  { id: 'round', label: 'Round', shape: 'round' },
  { id: 'oval', label: 'Oval', shape: 'oval' },
  { id: 'cushion', label: 'Cushion', shape: 'cushion' },
  { id: 'emerald', label: 'Emerald', shape: 'emerald' },
  { id: 'princess', label: 'Princess', shape: 'princess' },
  { id: 'pear', label: 'Pear', shape: 'pear' },
  { id: 'marquise', label: 'Marquise', shape: 'marquise' },
  { id: 'radiant', label: 'Radiant', shape: 'radiant' },
]

const descriptions: Record<string, string> = {
  round:
    'The most brilliant of all cuts, engineered with 58 facets to return the maximum light. A timeless choice for solitaires that never falls out of favour.',
  oval:
    'An elongated silhouette that flatters the hand and creates the illusion of length. A softer alternative to round with the same fire and brilliance.',
  cushion:
    'A square cut with rounded corners and larger facets, giving an antique, romantic glow reminiscent of candlelight-era jewellery.',
  emerald:
    'Clean lines and step-cut facets create a hall-of-mirrors effect. Favoured for its architectural, understated elegance.',
  princess:
    'Sharp, modern corners with the brilliance of a round cut. A popular choice for those who want maximum sparkle with a contemporary edge.',
  pear:
    'A hybrid of round and marquise, tapering to a single point. Worn with the point outward, it elongates and slims the finger.',
  marquise:
    'An elongated, boat-shaped cut that maximizes visual size, making it appear larger than its actual carat weight.',
  radiant:
    'Combines the elegance of an emerald cut with the brilliance of a round, faceted on all sides for exceptional sparkle.',
}

export function DiamondShapeDiscovery() {
  const [selected, setSelected] = useState('round')

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <SectionLabel align="center" className="mb-4">
            Find Your Shape
          </SectionLabel>
          <h2 className="font-serif text-3xl leading-tight text-foreground text-balance sm:text-4xl">
            Every Diamond Tells a Different Story
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Select a cut below to discover what makes it distinct — then explore pieces designed
            around it.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={100}>
          <DiamondSelector options={options} selected={selected} onSelect={setSelected} />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-6 border-t border-line pt-10 text-center">
            <p key={selected} className="font-serif text-lg leading-relaxed text-foreground text-balance sm:text-xl">
              {descriptions[selected]}
            </p>
            <Link
              href="#"
              className="border-b border-accent pb-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent transition-colors hover:text-foreground hover:border-foreground"
            >
              Explore {options.find((o) => o.id === selected)?.label} Cut Jewellery
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
