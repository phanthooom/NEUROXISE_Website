import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { lazy } from 'react'
import { Route } from 'react-router-dom'
import { renderRoutes } from './test/renderWithProviders'

const App = lazy(() => import('./App.jsx'))

describe('Home SPA', () => {
  it('renders Russian hero headline after lazy load', async () => {
    renderRoutes('/', <Route path="/" element={<App />} />)
    expect(await screen.findByText(/Тренируй мозг/u, {}, { timeout: 10_000 })).toBeInTheDocument()
  })
})
