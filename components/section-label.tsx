import { cn } from '@/lib/utils'

function DiamondMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={cn('h-2.5 w-2.5', className)} aria-hidden="true">
      <path
        d="M6 0.5 L11.5 6 L6 11.5 L0.5 6 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

export function SectionLabel({
  children,
  align = 'left',
  tone = 'default',
  className,
}: {
  children: React.ReactNode
  align?: 'left' | 'center'
  tone?: 'default' | 'accent' | 'inverted'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em]',
        align === 'center' && 'justify-center',
        tone === 'accent' && 'text-accent',
        tone === 'inverted' ? 'text-background/80' : tone === 'default' && 'text-accent',
        className,
      )}
    >
      <DiamondMark />
      <span>{children}</span>
      {align === 'center' && <DiamondMark />}
    </div>
  )
}
