import { useEffect } from 'react'

const SITE = 'NEUROXISE'
const DEFAULT_TITLE = 'NEUROXISE — Когнитивные тренировки и терапия'
const DEFAULT_DESC = 'Персонализированные упражнения для речи, памяти, внимания и языка. Тренируй мозг каждый день с NEUROXISE.'

function attr(selector, attribute, value) {
  const el = document.querySelector(selector)
  if (el && value) el.setAttribute(attribute, value)
  return el
}

export function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${SITE}` : DEFAULT_TITLE

    const prevTitle = document.title
    const descEl    = document.querySelector('meta[name="description"]')
    const ogTitleEl = document.querySelector('meta[property="og:title"]')
    const ogDescEl  = document.querySelector('meta[property="og:description"]')
    const twTitleEl = document.querySelector('meta[name="twitter:title"]')
    const twDescEl  = document.querySelector('meta[name="twitter:description"]')

    const prevDesc    = descEl?.getAttribute('content')    ?? ''
    const prevOgTitle = ogTitleEl?.getAttribute('content') ?? ''
    const prevOgDesc  = ogDescEl?.getAttribute('content')  ?? ''

    document.title = fullTitle
    if (ogTitleEl) ogTitleEl.setAttribute('content', fullTitle)
    if (twTitleEl) twTitleEl.setAttribute('content', fullTitle)
    if (description) {
      if (descEl)   descEl.setAttribute('content', description)
      if (ogDescEl) ogDescEl.setAttribute('content', description)
      if (twDescEl) twDescEl.setAttribute('content', description)
    }

    return () => {
      document.title = prevTitle
      if (descEl)    descEl.setAttribute('content', prevDesc)
      if (ogTitleEl) ogTitleEl.setAttribute('content', prevOgTitle)
      if (ogDescEl)  ogDescEl.setAttribute('content', prevOgDesc)
    }
  }, [title, description])
}
