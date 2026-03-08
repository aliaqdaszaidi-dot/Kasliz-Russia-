import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { About } from '@/components/about'
import { Community } from '@/components/community'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <About />
      <Community />
      <Footer />
    </main>
  )
}
