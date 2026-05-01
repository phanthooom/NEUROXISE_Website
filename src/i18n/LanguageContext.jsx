import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import translations from './translations'

const LanguageContext = createContext(null)

/** Used when visitor has no saved preference yet */
export const DEFAULT_LANG = 'ru'

const STORAGE_KEY = 'neuroxise.lang'
const VALID_LANGS = new Set(['ru', 'en', 'uz'])

function readStoredLang() {
  if (typeof window === 'undefined') return DEFAULT_LANG
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    if (v && VALID_LANGS.has(v)) return v
  } catch {
    /* private mode / blocked storage */
  }
  return DEFAULT_LANG
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLang)
  const [isDark, setIsDark] = useState(false)

  const setLang = useCallback((value) => {
    setLangState(prev => {
      const next = typeof value === 'function' ? value(prev) : value
      if (next != null && VALID_LANGS.has(next)) {
        try {
          window.localStorage.setItem(STORAGE_KEY, next)
        } catch {
          /* ignore */
        }
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isDark, setIsDark }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
