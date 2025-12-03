'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from '@/components/Hero'
import BioSection from '@/components/BioSection'
import VinylPlayer from '@/components/VinylPlayer'
import Albums from '@/components/Albums'
import FunFacts from '@/components/FunFacts'
import DragDropGame from '@/components/DragDropGame'
import Footer from '@/components/Footer'
import WaveBackground from '@/components/WaveBackground'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <main className="relative min-h-screen">
      <WaveBackground />
      <Hero />
      <BioSection />
      <VinylPlayer />
      <Albums />
      <FunFacts />
      <DragDropGame />
      <Footer />
    </main>
  )
}

