import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext.jsx'
import './index.css'

const App = lazy(() => import('./App.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))
const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="route-skeleton" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/privacy" element={<LegalPage slug="privacy" />} />
            <Route path="/terms" element={<LegalPage slug="terms" />} />
            <Route path="/cookies" element={<LegalPage slug="cookies" />} />
            <Route path="/about" element={<LegalPage slug="placeholder" />} />
            <Route path="/blog" element={<LegalPage slug="placeholder" />} />
            <Route path="/careers" element={<LegalPage slug="placeholder" />} />
            <Route path="/press" element={<LegalPage slug="placeholder" />} />
            <Route path="/contact" element={<LegalPage slug="placeholder" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  </React.StrictMode>,
)
