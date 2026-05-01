import { describe, expect, it } from 'vitest'
import { Route } from 'react-router-dom'
import { screen } from '@testing-library/react'
import { renderRoutes } from '../test/renderWithProviders'
import NotFound from './NotFound.jsx'
import AboutPage from './AboutPage.jsx'
import BlogPage from './BlogPage.jsx'
import CareersPage from './CareersPage.jsx'
import PressPage from './PressPage.jsx'
import ContactPage from './ContactPage.jsx'
import HelpPage from './HelpPage.jsx'
import DownloadPage from './DownloadPage.jsx'
import PricingPage from './PricingPage.jsx'
import FeaturesPage from './FeaturesPage.jsx'
import HowItWorksPage from './HowItWorksPage.jsx'
import ExercisesPage from './ExercisesPage.jsx'
import StatsPage from './StatsPage.jsx'

const ROUTES = [
  ['/about', AboutPage],
  ['/blog', BlogPage],
  ['/careers', CareersPage],
  ['/press', PressPage],
  ['/contact', ContactPage],
  ['/help', HelpPage],
  ['/download', DownloadPage],
  ['/pricing', PricingPage],
  ['/features', FeaturesPage],
  ['/how-it-works', HowItWorksPage],
  ['/exercises', ExercisesPage],
  ['/stats', StatsPage],
]

describe('marketing routes', () => {
  it.each(ROUTES)('%s resolves to page (not 404)', (path, Page) => {
    renderRoutes(
      path,
      <>
        <Route path={path} element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </>
    )

    expect(screen.queryByText(/Страница не найдена/u)).not.toBeInTheDocument()
  })
})
