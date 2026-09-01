'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Search, Heart, ShoppingBag, Menu, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation } from '@/lib/data'
import { useStore } from '@/lib/store-context'
import { MegaMenu } from '@/components/site/mega-menu'
import { SearchOverlay } from '@/components/site/search-overlay'
import { CartDrawer } from '@/components/site/cart-drawer'
import { MobileNav } from '@/components/site/mobile-nav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { wishlist, cartCount } = useStore()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const transparent = !scrolled && activeMenu === null

  return (
    <header
      className={cn(
        'sticky top-9 z-40 transition-colors duration-300',
        transparent
          ? 'bg-transparent'
          : 'border-b border-line bg-background/95 backdrop-blur-md',
      )}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className={cn(
            'flex h-9 w-9 items-center justify-center transition-colors lg:hidden',
            transparent ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          <Menu className="h-5 w-5" strokeWidth={1.5} />
        </button>

        <Link
          href="#"
          className={cn(
            'absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-medium tracking-[0.08em] transition-colors lg:static lg:left-0 lg:translate-x-0',
            transparent ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          NINA
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <div key={item.label} onMouseEnter={() => setActiveMenu(item.label)}>
              <Link
                href={item.href}
                className={cn(
                  'relative text-[13px] font-medium uppercase tracking-[0.1em] transition-colors',
                  transparent ? 'text-primary-foreground' : 'text-foreground',
                  activeMenu === item.label && (transparent ? 'text-primary-foreground' : 'text-accent'),
                )}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            aria-label="Search"
            className={cn(
              'flex h-9 w-9 items-center justify-center transition-colors',
              transparent ? 'text-primary-foreground' : 'text-foreground hover:text-accent',
            )}
          >
            <Search className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Account"
            className={cn(
              'hidden h-9 w-9 items-center justify-center transition-colors sm:flex',
              transparent ? 'text-primary-foreground' : 'text-foreground hover:text-accent',
            )}
          >
            <User className="h-[18px] w-[18px]" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={`Wishlist, ${wishlist.size} items`}
            className={cn(
              'relative flex h-9 w-9 items-center justify-center transition-colors',
              transparent ? 'text-primary-foreground' : 'text-foreground hover:text-accent',
            )}
          >
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {wishlist.size > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground">
                {wishlist.size}
              </span>
            )}
          </button>
          <button
            type="button"
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping bag, ${cartCount} items`}
            className={cn(
              'relative flex h-9 w-9 items-center justify-center transition-colors',
              transparent ? 'text-primary-foreground' : 'text-foreground hover:text-accent',
            )}
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-accent-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {navigation.map(
        (item) =>
          activeMenu === item.label && <MegaMenu key={item.label} item={item} />,
      )}

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
