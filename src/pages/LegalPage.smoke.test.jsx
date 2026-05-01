import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { Route } from 'react-router-dom'
import { renderRoutes } from '../test/renderWithProviders'
import LegalPage from './LegalPage'

describe('LegalPage', () => {
  it('renders privacy title on /privacy', () => {
    renderRoutes('/privacy', <Route path="/privacy" element={<LegalPage slug="privacy" />} />)
    expect(screen.getByRole('heading', { level: 1, name: /Политика конфиденциальности/u })).toBeInTheDocument()
  })
})
