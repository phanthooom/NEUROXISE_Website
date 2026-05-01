import { Suspense } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter, Routes } from 'react-router-dom'
import { LanguageProvider } from '../i18n/LanguageContext'

/**
 * Same route shell as production (lazy chunks + providers).
 */
export function renderRoutes(initialPath, routes) {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[initialPath]}>
        <Suspense fallback={<div data-testid="route-suspense" />}>
          <Routes>{routes}</Routes>
        </Suspense>
      </MemoryRouter>
    </LanguageProvider>
  )
}
