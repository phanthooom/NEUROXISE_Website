import { createContext, useContext, useState, useEffect } from 'react'
import translations from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang]     = useState('ru')
  const [isDark, setIsDark] = useState(false)

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
