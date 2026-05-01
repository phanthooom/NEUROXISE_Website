import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import App from './App.jsx'
import PageLoader from './components/PageLoader.jsx'
import PageTransition from './components/PageTransition.jsx'
import './index.css'

const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'))
const PressPage = lazy(() => import('./pages/PressPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))
const HelpPage = lazy(() => import('./pages/HelpPage.jsx'))
const DownloadPage = lazy(() => import('./pages/DownloadPage.jsx'))
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'))
const FeaturesPage = lazy(() => import('./pages/FeaturesPage.jsx'))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage.jsx'))
const ExercisesPage = lazy(() => import('./pages/ExercisesPage.jsx'))
const StatsPage = lazy(() => import('./pages/StatsPage.jsx'))

function SuspenseLegal({ slug }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <LegalPage slug={slug} />
    </Suspense>
  )
}

function SuspenseNotFound() {
  return (
    <Suspense fallback={<PageLoader />}>
      <NotFound />
    </Suspense>
  )
}

function SuspenseLazyPage({ Page }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <PageTransition>
        <Page />
      </PageTransition>
    </Suspense>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<SuspenseLegal slug="privacy" />} />
          <Route path="/terms" element={<SuspenseLegal slug="terms" />} />
          <Route path="/cookies" element={<SuspenseLegal slug="cookies" />} />
          <Route path="/about" element={<SuspenseLazyPage Page={AboutPage} />} />
          <Route path="/blog" element={<SuspenseLazyPage Page={BlogPage} />} />
          <Route path="/careers" element={<SuspenseLazyPage Page={CareersPage} />} />
          <Route path="/press" element={<SuspenseLazyPage Page={PressPage} />} />
          <Route path="/contact" element={<SuspenseLazyPage Page={ContactPage} />} />
          <Route path="/help" element={<SuspenseLazyPage Page={HelpPage} />} />
          <Route path="/download" element={<SuspenseLazyPage Page={DownloadPage} />} />
          <Route path="/pricing" element={<SuspenseLazyPage Page={PricingPage} />} />
          <Route path="/features" element={<SuspenseLazyPage Page={FeaturesPage} />} />
          <Route path="/how-it-works" element={<SuspenseLazyPage Page={HowItWorksPage} />} />
          <Route path="/exercises" element={<SuspenseLazyPage Page={ExercisesPage} />} />
          <Route path="/stats" element={<SuspenseLazyPage Page={StatsPage} />} />
          <Route path="*" element={<SuspenseNotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)
