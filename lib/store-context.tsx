'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/data'

type StoreContextValue = {
  wishlist: Set<string>
  toggleWishlist: (id: string) => void
  isWishlisted: (id: string) => boolean
  cartCount: number
  addToCart: () => void
  quickViewProduct: Product | null
  openQuickView: (product: Product) => void
  closeQuickView: () => void
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<Set<string>>(new Set())
  const [cartCount, setCartCount] = useState(0)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      return next
    })
  }, [])

  const isWishlisted = useCallback((id: string) => wishlist.has(id), [wishlist])

  const addToCart = useCallback(() => {
    setCartCount((prev) => prev + 1)
  }, [])

  const openQuickView = useCallback((product: Product) => setQuickViewProduct(product), [])
  const closeQuickView = useCallback(() => setQuickViewProduct(null), [])

  const value = useMemo(
    () => ({
      wishlist,
      toggleWishlist,
      isWishlisted,
      cartCount,
      addToCart,
      quickViewProduct,
      openQuickView,
      closeQuickView,
    }),
    [wishlist, toggleWishlist, isWishlisted, cartCount, addToCart, quickViewProduct, openQuickView, closeQuickView],
  )

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
