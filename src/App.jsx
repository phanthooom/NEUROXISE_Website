import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import LazySection from './components/LazySection'

const loadFeatures = () => import('./components/Features')
const loadHowItWorks = () => import('./components/HowItWorks')
const loadExercises = () => import('./components/Exercises')
const loadStats = () => import('./components/Stats')
const loadPricing = () => import('./components/Pricing')
const loadFaq = () => import('./components/FAQ')
const loadDownload = () => import('./components/Download')

const SECTIONS = [
  { id: 'features', load: loadFeatures },
  { id: 'how-it-works', load: loadHowItWorks },
  { id: 'exercises', load: loadExercises },
  { id: 'stats', load: loadStats },
  { id: 'pricing', load: loadPricing },
  { id: 'faq', load: loadFaq },
  { id: 'download', load: loadDownload },
]

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
        {SECTIONS.map(({ id, load }) => (
          <LazySection key={id} load={load} className="reveal-section" rootMargin="300px" />
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
