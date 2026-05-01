import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import App from './App.jsx'
import PageLoader from './components/PageLoader.jsx'
import './index.css'

const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<SuspenseLegal slug="privacy" />} />
          <Route path="/terms" element={<SuspenseLegal slug="terms" />} />
          <Route path="/cookies" element={<SuspenseLegal slug="cookies" />} />
          <Route path="/about" element={<SuspenseLegal slug="placeholder" />} />
          <Route path="/blog" element={<SuspenseLegal slug="placeholder" />} />
          <Route path="/careers" element={<SuspenseLegal slug="placeholder" />} />
          <Route path="/press" element={<SuspenseLegal slug="placeholder" />} />
          <Route path="/contact" element={<SuspenseLegal slug="placeholder" />} />
          <Route path="*" element={<SuspenseNotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)
