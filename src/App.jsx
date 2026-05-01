import { lazy, Suspense, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import SectionSkeleton from './components/SectionSkeleton'

const Features = lazy(() => import('./components/Features'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Exercises = lazy(() => import('./components/Exercises'))
const Stats = lazy(() => import('./components/Stats'))
const Pricing = lazy(() => import('./components/Pricing'))
const FAQ = lazy(() => import('./components/FAQ'))
const Download = lazy(() => import('./components/Download'))

const SECTIONS = [
  { id: 'features', Component: Features },
  { id: 'how-it-works', Component: HowItWorks },
  { id: 'exercises', Component: Exercises },
  { id: 'stats', Component: Stats },
  { id: 'pricing', Component: Pricing },
  { id: 'faq', Component: FAQ },
  { id: 'download', Component: Download },
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
        {SECTIONS.map(({ id, Component }) => (
          <div key={id} className="reveal-section">
            <Suspense fallback={<SectionSkeleton sectionId={id} />}>
              <Component />
            </Suspense>
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
