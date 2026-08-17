import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Categories } from '@/components/categories'
import { MythsTruth } from '@/components/myths-truth'
import { Timeline } from '@/components/timeline'
import { Gallery } from '@/components/gallery'
import { Discography } from '@/components/discography'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Categories />
        <MythsTruth />
        <Timeline />
        <Gallery />
        <Discography />
      </main>
      <SiteFooter />
    </div>
  )
}
