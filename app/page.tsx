import { StoreProvider } from '@/lib/store-context'
import { AnnouncementBar } from '@/components/site/announcement-bar'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { QuickViewDialog } from '@/components/quick-view-dialog'
import { Hero } from '@/components/sections/hero'
import { CategoryDiscovery } from '@/components/sections/category-discovery'
import { DiamondShapeDiscovery } from '@/components/sections/diamond-shape-discovery'
import { BrandStory } from '@/components/sections/brand-story'
import { FeaturedProducts } from '@/components/sections/featured-products'
import { DesignerPicks } from '@/components/sections/designer-picks'
import { Heritage } from '@/components/sections/heritage'
import { WeddingEdit } from '@/components/sections/wedding-edit'
import { CollectionCampaign } from '@/components/sections/collection-campaign'
import { Consultation } from '@/components/sections/consultation'
import { Testimonials } from '@/components/sections/testimonials'
import { InstagramSection } from '@/components/sections/instagram'
import { FinalCta } from '@/components/sections/final-cta'

export default function Page() {
  return (
    <StoreProvider>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <CategoryDiscovery />
        <DiamondShapeDiscovery />
        <BrandStory />
        <FeaturedProducts />
        <DesignerPicks />
        <Heritage />
        <WeddingEdit />
        <CollectionCampaign />
        <Consultation />
        <Testimonials />
        <InstagramSection />
        <FinalCta />
      </main>
      <Footer />
      <QuickViewDialog />
    </StoreProvider>
  )
}
