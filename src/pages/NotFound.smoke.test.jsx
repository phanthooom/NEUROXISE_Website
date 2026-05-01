import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { renderRoutes } from '../test/renderWithProviders'

const NotFound = lazy(() => import('./NotFound.jsx'))

describe('NotFound', () => {
  it('shows 404 copy in Russian (default lang)', async () => {
    renderRoutes('/missing-page-xyz', <Route path="*" element={<NotFound />} />)
    expect(await screen.findByText(/Страница не найдена/u, {}, { timeout: 10_000 })).toBeInTheDocument()
  })
})
