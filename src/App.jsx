import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteChrome from './layouts/SiteChrome'
import Hero from './components/Hero'
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
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/') return
    const raw = location.hash
    if (!raw || raw.length < 2) return
    const id = raw.slice(1)
    const t = window.requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return () => window.cancelAnimationFrame(t)
  }, [location.pathname, location.hash])

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
    <SiteChrome>
      <Hero />
      {SECTIONS.map(({ id, load }) => (
        <LazySection key={id} id={id} load={load} className="reveal-section" rootMargin="300px" />
      ))}

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
    </SiteChrome>
  )
}
