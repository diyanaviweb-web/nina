'use client'

import { cn } from '@/lib/utils'

export type DiamondShape =
  | 'round'
  | 'oval'
  | 'cushion'
  | 'emerald'
  | 'princess'
  | 'pear'
  | 'marquise'
  | 'radiant'

export type DiamondOption = {
  id: string
  label: string
  shape: DiamondShape
}

const shapePaths: Record<DiamondShape, React.ReactNode> = {
  round: (
    <>
      <circle cx="24" cy="24" r="17" />
      <circle cx="24" cy="24" r="8" />
      <path d="M24 7 L24 16 M24 32 L24 41 M7 24 L16 24 M32 24 L41 24 M11.9 11.9 L18 18 M30 30 L36.1 36.1 M36.1 11.9 L30 18 M18 30 L11.9 36.1" />
    </>
  ),
  oval: (
    <>
      <ellipse cx="24" cy="24" rx="13" ry="18" />
      <ellipse cx="24" cy="24" rx="6" ry="10" />
      <path d="M24 6 L24 14 M24 34 L24 42 M13.5 12 L18 17 M34.5 12 L30 17 M13.5 36 L18 31 M34.5 36 L30 31" />
    </>
  ),
  cushion: (
    <>
      <path d="M12 12 Q24 6 36 12 Q42 24 36 36 Q24 42 12 36 Q6 24 12 12 Z" />
      <path d="M20 20 Q24 17 28 20 Q31 24 28 28 Q24 31 20 28 Q17 24 20 20 Z" />
      <path d="M12 12 L20 20 M36 12 L28 20 M12 36 L20 28 M36 36 L28 28" />
    </>
  ),
  emerald: (
    <>
      <path d="M15 9 H33 L39 15 V33 L33 39 H15 L9 33 V15 Z" />
      <path d="M19 15 H29 L33 19 V29 L29 33 H19 L15 29 V19 Z" />
      <path d="M9 15 H15 M33 15 H39 M9 33 H15 M33 33 H39 M19 9 V15 M29 9 V15 M19 39 V33 M29 39 V33" />
    </>
  ),
  princess: (
    <>
      <path d="M8 8 H40 V40 H8 Z" />
      <path d="M8 8 L24 24 M40 8 L24 24 M8 40 L24 24 M40 40 L24 24" />
    </>
  ),
  pear: (
    <>
      <path d="M24 6 C31 6 36 13 36 22 C36 32 28 42 24 42 C20 42 12 32 12 22 C12 13 17 6 24 6 Z" />
      <path d="M24 14 C27.5 14 30 18 30 22.5 C30 27.5 26.5 33 24 33 C21.5 33 18 27.5 18 22.5 C18 18 20.5 14 24 14 Z" />
      <path d="M24 6 L24 14 M14.5 14.5 L18.5 18.5 M33.5 14.5 L29.5 18.5" />
    </>
  ),
  marquise: (
    <>
      <path d="M24 5 C33 13 38 19 38 24 C38 29 33 35 24 43 C15 35 10 29 10 24 C10 19 15 13 24 5 Z" />
      <path d="M24 13 C29 18 32 21 32 24 C32 27 29 30 24 35 C19 30 16 27 16 24 C16 21 19 18 24 13 Z" />
      <path d="M24 5 L24 13 M24 35 L24 43" />
    </>
  ),
  radiant: (
    <>
      <path d="M14 8 H34 L40 14 V34 L34 40 H14 L8 34 V14 Z" />
      <path d="M20 16 H28 L32 20 V28 L28 32 H20 L16 28 V20 Z" />
      <path d="M14 8 L20 16 M34 8 L28 16 M14 40 L20 32 M34 40 L28 32" />
    </>
  ),
}

export function DiamondSelector({
  options,
  selected,
  onSelect,
  className,
}: {
  options: DiamondOption[]
  selected: string
  onSelect: (id: string) => void
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory px-1 py-2 sm:grid sm:grid-cols-4 sm:overflow-visible md:grid-cols-8 md:gap-4',
        className,
      )}
      role="radiogroup"
      aria-label="Diamond shape"
    >
      {options.map((option) => {
        const isSelected = option.id === selected
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onSelect(option.id)}
            className={cn(
              'group relative flex shrink-0 snap-start flex-col items-center gap-3 rounded-sm border px-4 py-5 transition-all duration-300 ease-out sm:shrink',
              isSelected
                ? 'border-primary bg-primary/[0.04]'
                : 'border-line bg-transparent hover:-translate-y-0.5 hover:border-accent',
            )}
            style={{ minWidth: '104px' }}
          >
            <span
              className={cn(
                'relative flex h-12 w-12 items-center justify-center transition-transform duration-300',
                !isSelected && 'group-hover:scale-110',
              )}
            >
              {isSelected && (
                <span
                  aria-hidden
                  className="absolute inset-[-6px] rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, color-mix(in oklab, var(--accent) 22%, transparent) 0%, transparent 72%)',
                  }}
                />
              )}
              <svg
                viewBox="0 0 48 48"
                className="relative h-11 w-11"
                fill={isSelected ? 'color-mix(in oklab, var(--accent) 18%, transparent)' : 'none'}
                stroke={isSelected ? 'var(--primary)' : 'var(--accent)'}
                strokeWidth={isSelected ? 1.4 : 1.1}
                strokeLinejoin="round"
                strokeLinecap="round"
              >
                {shapePaths[option.shape]}
              </svg>
            </span>
            <span
              className={cn(
                'font-sans text-[11px] font-medium uppercase tracking-[0.12em] transition-colors',
                isSelected ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground',
              )}
            >
              {option.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
