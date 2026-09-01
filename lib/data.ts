export type Category = {
  id: string
  name: string
  description: string
  image: string
  href: string
  span?: 'wide' | 'tall' | 'normal'
}

export const categories: Category[] = [
  {
    id: 'rings',
    name: 'Rings',
    description: 'Solitaires, bands & statement rings',
    image: '/images/category-rings.png',
    href: '#',
    span: 'tall',
  },
  {
    id: 'earrings',
    name: 'Earrings',
    description: 'Jhumkas, studs & drops',
    image: '/images/category-earrings.png',
    href: '#',
    span: 'normal',
  },
  {
    id: 'necklaces',
    name: 'Necklaces',
    description: 'Statement sets & layered chains',
    image: '/images/category-necklaces.png',
    href: '#',
    span: 'wide',
  },
  {
    id: 'mangalsutra',
    name: 'Mangalsutra',
    description: 'Traditional & contemporary designs',
    image: '/images/category-mangalsutra.png',
    href: '#',
    span: 'normal',
  },
  {
    id: 'bangles',
    name: 'Bangles',
    description: 'Kada, cuffs & everyday stacks',
    image: '/images/category-bangles.png',
    href: '#',
    span: 'normal',
  },
  {
    id: 'bracelets',
    name: 'Bracelets',
    description: 'Tennis lines & charm bracelets',
    image: '/images/category-bracelets.png',
    href: '#',
    span: 'normal',
  },
  {
    id: 'pendants',
    name: 'Pendants',
    description: 'Everyday diamonds & gold motifs',
    image: '/images/category-pendants.png',
    href: '#',
    span: 'tall',
  },
  {
    id: 'karas',
    name: 'Karas',
    description: 'Bridal & ceremonial karas',
    image: '/images/category-karas.png',
    href: '#',
    span: 'normal',
  },
]

export type Product = {
  id: string
  name: string
  category: string
  price: number
  image: string
  hoverImage: string
  isNew?: boolean
}

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Amara Solitaire Ring',
    category: 'Rings',
    price: 184000,
    image: '/images/product-1.png',
    hoverImage: '/images/product-1-alt.png',
    isNew: true,
  },
  {
    id: 'p2',
    name: 'Kalindi Jhumka Earrings',
    category: 'Earrings',
    price: 96500,
    image: '/images/product-2.png',
    hoverImage: '/images/product-2-alt.png',
  },
  {
    id: 'p3',
    name: 'Vera Diamond Tennis Bracelet',
    category: 'Bracelets',
    price: 142000,
    image: '/images/product-3.png',
    hoverImage: '/images/product-3-alt.png',
  },
  {
    id: 'p4',
    name: 'Ishaani Gold Mangalsutra',
    category: 'Mangalsutra',
    price: 128000,
    image: '/images/product-4.png',
    hoverImage: '/images/product-4-alt.png',
    isNew: true,
  },
  {
    id: 'p5',
    name: 'Meher Layered Necklace',
    category: 'Necklaces',
    price: 236000,
    image: '/images/product-5.png',
    hoverImage: '/images/product-5-alt.png',
  },
  {
    id: 'p6',
    name: 'Zara Kada Bangle',
    category: 'Bangles',
    price: 168000,
    image: '/images/product-6.png',
    hoverImage: '/images/product-6-alt.png',
  },
  {
    id: 'p7',
    name: 'Noor Everyday Pendant',
    category: 'Pendants',
    price: 58500,
    image: '/images/product-7.png',
    hoverImage: '/images/product-7-alt.png',
  },
  {
    id: 'p8',
    name: 'Devika Bridal Kara',
    category: 'Karas',
    price: 214000,
    image: '/images/product-8.png',
    hoverImage: '/images/product-8-alt.png',
  },
]

export type DesignerPick = {
  id: string
  name: string
  note: string
  price: number
  image: string
}

export const designerPicks: DesignerPick[] = [
  {
    id: 'd1',
    name: 'Anaya Cushion Halo Ring',
    note: 'A designer favourite in polished platinum-finish gold',
    price: 198000,
    image: '/images/designer-pick-1.png',
  },
  {
    id: 'd2',
    name: 'Sitara Drop Earrings',
    note: 'Pear-cut diamonds set in a fluid, modern silhouette',
    price: 112000,
    image: '/images/designer-pick-2.png',
  },
  {
    id: 'd3',
    name: 'Rani Choker',
    note: 'Kundan-inspired detailing reimagined for daily wear',
    price: 264000,
    image: '/images/designer-pick-3.png',
  },
  {
    id: 'd4',
    name: 'Elan Stacking Bands',
    note: 'Three finishes designed to be worn together or alone',
    price: 86000,
    image: '/images/designer-pick-4.png',
  },
]

export type Testimonial = {
  id: string
  quote: string
  name: string
  location: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Every piece I have bought from Nina has become something I reach for again and again. The craftsmanship is exceptional and the staff genuinely take the time to understand what you are looking for.',
    name: 'Priya S.',
    location: 'Edison, NJ',
  },
  {
    id: 't2',
    quote:
      'We had our wedding sets made here and the entire experience felt personal from start to finish. The mangalsutra design is exactly what we envisioned, only more beautiful in person.',
    name: 'Rohan & Meghna K.',
    location: 'Iselin, NJ',
  },
  {
    id: 't3',
    quote:
      'It is rare to find a jeweller who blends traditional Indian craftsmanship with a design language that feels current. Nina has been our family jeweller for over a decade.',
    name: 'Anjali D.',
    location: 'Woodbridge, NJ',
  },
]

export type NavItem = {
  label: string
  href: string
  columns: {
    heading: string
    links: { label: string; href: string }[]
  }[]
  featured?: { image: string; label: string; href: string }
}

export const navigation: NavItem[] = [
  {
    label: 'Jewellery',
    href: '#',
    columns: [
      {
        heading: 'Shop by Category',
        links: [
          { label: 'Rings', href: '#' },
          { label: 'Earrings', href: '#' },
          { label: 'Necklaces', href: '#' },
          { label: 'Bracelets', href: '#' },
          { label: 'Bangles', href: '#' },
          { label: 'Pendants', href: '#' },
        ],
      },
      {
        heading: 'Occasion',
        links: [
          { label: 'Mangalsutra', href: '#' },
          { label: 'Karas', href: '#' },
          { label: 'Everyday', href: '#' },
          { label: 'Gifting', href: '#' },
        ],
      },
    ],
    featured: { image: '/images/nav-featured-jewellery.png', label: 'New Arrivals', href: '#' },
  },
  {
    label: 'Collections',
    href: '#',
    columns: [
      {
        heading: 'Curated Edits',
        links: [
          { label: "Designer's Picks", href: '#' },
          { label: 'Modern Heritage', href: '#' },
          { label: 'The Wedding Edit', href: '#' },
          { label: 'Everyday Diamonds', href: '#' },
        ],
      },
    ],
    featured: { image: '/images/nav-featured-collections.png', label: 'Modern Heritage', href: '#' },
  },
  {
    label: 'Gold',
    href: '#',
    columns: [
      {
        heading: '22K Gold',
        links: [
          { label: 'Gold Bangles', href: '#' },
          { label: 'Gold Chains', href: '#' },
          { label: 'Gold Karas', href: '#' },
          { label: 'Antique Gold', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Diamonds',
    href: '#',
    columns: [
      {
        heading: 'Diamond Jewellery',
        links: [
          { label: 'Diamond Rings', href: '#' },
          { label: 'Diamond Earrings', href: '#' },
          { label: 'Diamond Necklaces', href: '#' },
          { label: 'Diamond Bracelets', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'Wedding',
    href: '#',
    columns: [
      {
        heading: 'Bridal',
        links: [
          { label: 'Bridal Sets', href: '#' },
          { label: 'Mangalsutra', href: '#' },
          { label: 'Karas', href: '#' },
          { label: 'Book a Consultation', href: '#' },
        ],
      },
    ],
    featured: { image: '/images/nav-featured-wedding.png', label: 'The Wedding Edit', href: '#' },
  },
  {
    label: 'Gifts',
    href: '#',
    columns: [
      {
        heading: 'Gifting',
        links: [
          { label: 'Under $50,000', href: '#' },
          { label: 'Anniversary', href: '#' },
          { label: 'Everyday Pendants', href: '#' },
          { label: 'Gift Cards', href: '#' },
        ],
      },
    ],
  },
  {
    label: 'About',
    href: '#',
    columns: [
      {
        heading: 'Nina Jewellers',
        links: [
          { label: 'Our Story', href: '#' },
          { label: 'Visit Our Store', href: '#' },
          { label: 'Book a Consultation', href: '#' },
          { label: 'Contact Us', href: '#' },
        ],
      },
    ],
  },
]

export const instagramImages = [
  '/images/instagram-1.png',
  '/images/instagram-2.png',
  '/images/instagram-3.png',
  '/images/instagram-4.png',
  '/images/instagram-5.png',
  '/images/instagram-6.png',
]

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
