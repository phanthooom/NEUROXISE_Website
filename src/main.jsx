import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import App from './App.jsx'
import PageLoader from './components/PageLoader.jsx'
import './index.css'

const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const AboutPage = lazy(() => import('./pages/AboutPage.jsx'))
const BlogPage = lazy(() => import('./pages/BlogPage.jsx'))
const CareersPage = lazy(() => import('./pages/CareersPage.jsx'))
const PressPage = lazy(() => import('./pages/PressPage.jsx'))
const ContactPage = lazy(() => import('./pages/ContactPage.jsx'))

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
      <Page />
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
          <Route path="*" element={<SuspenseNotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)
