import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Exercises from './components/Exercises'
import Stats from './components/Stats'
import Pricing from './components/Pricing'
import Download from './components/Download'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

const SECTIONS = [Features, HowItWorks, Exercises, Stats, Pricing, Download]

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal-section')
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      }),
      { threshold: 0.08 }
    )
    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {SECTIONS.map((Section, i) => (
          <div key={i} className="reveal-section">
            <Section />
          </div>
        ))}
      </main>
      <Footer />
      <BackToTop />

      <style>{`
        .reveal-section {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .reveal-section.revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  )
}
