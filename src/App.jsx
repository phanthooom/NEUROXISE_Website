import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Exercises from './components/Exercises'
import Stats from './components/Stats'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Exercises />
        <Stats />
        <Download />
      </main>
      <Footer />
    </>
  )
}
