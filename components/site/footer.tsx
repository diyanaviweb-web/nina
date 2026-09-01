import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

const columns = [
  {
    heading: 'Shop',
    links: ['Rings', 'Earrings', 'Necklaces', 'Bangles', 'Mangalsutra', 'Karas'],
  },
  {
    heading: 'Discover',
    links: ["Designer's Picks", 'Modern Heritage', 'The Wedding Edit', 'Our Story'],
  },
  {
    heading: 'Help',
    links: ['Book a Consultation', 'Visit Our Store', 'Contact Us', 'Care Guide'],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-line bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-serif text-2xl tracking-[0.08em] text-foreground">NINA</span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Fine Indian jewellery in 22K gold and diamonds, handcrafted and family-owned since
              1987.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="Nina Jewellers on Instagram"
                className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="Nina Jewellers on Facebook"
                className="flex h-9 w-9 items-center justify-center border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {columns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
                  {col.heading}
                </span>
                {col.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <div className="flex max-w-sm flex-col gap-4">
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-accent">
              Stay in Touch
            </span>
            <p className="text-sm text-muted-foreground">
              New arrivals, designer edits and invitations to private trunk shows.
            </p>
            <form className="flex border-b border-line pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-[11px] font-semibold uppercase tracking-[0.12em] text-accent"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nina Jewellers. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
