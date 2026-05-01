import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguagesIcon } from './Icons'
import { mkC } from '../theme'

const LANGS = [
  { code: 'ru', label: 'RU', full: 'Русский' },
  { code: 'en', label: 'EN', full: 'English' },
  { code: 'uz', label: 'UZ', full: "O'zbek" },
]

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

export default function Navbar() {
  const { lang, setLang, t, isDark, setIsDark } = useLanguage()
  const c = mkC(isDark)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [langOpen])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) }),
      { rootMargin: '-35% 0px -60% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const navLinks = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.exercises, href: '#exercises' },
    { label: t.nav.stats, href: '#stats' },
    { label: t.nav.pricing, href: '#pricing' },
  ]

  const currentLang = LANGS.find(l => l.code === lang)
  const navBg = scrolled ? (isDark ? 'rgba(12,14,26,0.97)' : 'rgba(255,255,255,0.97)') : 'transparent'
  const navBdr = scrolled ? (isDark ? '#252840' : '#E8E9F0') : 'transparent'

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.3s ease',
      background: navBg,
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: `1px solid ${navBdr}`,
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <img
            src={logo}
            alt="NEUROXISE"
            decoding="async"
            style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: 18, fontWeight: 700, color: c.text, letterSpacing: '-0.3px' }}>
            NEURO<span style={{ color: '#3D52F5' }}>XISE</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map(l => {
            const isActive = activeId === l.href.replace('#', '')
            return (
              <a key={l.href} href={l.href} className={`nav-link${isActive ? ' nav-link-active' : ''}`}>
                {l.label}
              </a>
            )
          })}
        </div>

        {/* Right: dark toggle + lang switcher + CTA + burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>

          {/* Dark mode toggle */}
          <button
            onClick={() => setIsDark(d => !d)}
            title={isDark ? 'Light mode' : 'Dark mode'}
            style={{
              width: 36, height: 36, borderRadius: 10,
              border: `1.5px solid ${c.border}`,
              background: isDark ? '#1A1D2E' : '#fff',
              color: isDark ? '#9DA8F5' : '#6B7080',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.2s', flexShrink: 0,
            }}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Language switcher: stopPropagation so document click does not close menu on inner clicks */}
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div style={{ position: 'relative' }} onMouseDown={e => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 12px', borderRadius: 10,
                border: `1.5px solid ${c.border}`,
                background: isDark ? '#1A1D2E' : '#fff',
                fontSize: 13, fontWeight: 700, color: c.text,
                cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit',
              }}
            >
              <LanguagesIcon size={15} color="#6B7080" strokeWidth={1.8} />
              {currentLang.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                style={{ transition: 'transform 0.2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M6 9l6 6 6-6" stroke="#6B7080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: isDark ? '#141728' : '#fff',
                borderRadius: 14,
                border: `1px solid ${c.border}`,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                overflow: 'hidden', minWidth: 140, zIndex: 200,
              }}>
                {LANGS.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false) }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      width: '100%', padding: '11px 16px',
                      background: lang === l.code ? '#EEF0FF' : 'transparent',
                      border: 'none', cursor: 'pointer',
                      fontSize: 14, fontWeight: lang === l.code ? 700 : 500,
                      color: lang === l.code ? '#3D52F5' : c.text,
                      fontFamily: 'inherit', textAlign: 'left', transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (lang !== l.code) e.currentTarget.style.background = isDark ? '#1A1D2E' : '#F5F6FA' }}
                    onMouseLeave={e => { if (lang !== l.code) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span style={{
                      width: 24, height: 24, borderRadius: 6,
                      background: lang === l.code ? '#3D52F5' : (isDark ? '#252840' : '#F5F6FA'),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 800,
                      color: lang === l.code ? '#fff' : '#6B7080', flexShrink: 0,
                    }}>{l.label}</span>
                    {l.full}
                    {lang === l.code && (
                      <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#3D52F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="#download" className="nav-cta">{t.nav.getApp}</a>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(o => !o)} className="hamburger" aria-label="Menu">
            <span className="bar" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none', background: c.text }} />
            <span className="bar" style={{ opacity: menuOpen ? 0 : 1, background: c.text }} />
            <span className="bar bar-short" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', width: menuOpen ? 22 : 16, background: c.text }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}

        {/* Mobile lang + dark toggle */}
        <div style={{ display: 'flex', gap: 8, paddingTop: 14, paddingBottom: 4 }}>
          {LANGS.map(l => (
            <button key={l.code} onClick={() => { setLang(l.code); setMenuOpen(false) }} style={{
              flex: 1, padding: '9px 0', borderRadius: 10,
              border: `2px solid ${lang === l.code ? '#3D52F5' : c.border}`,
              background: lang === l.code ? '#EEF0FF' : (isDark ? '#141728' : '#fff'),
              color: lang === l.code ? '#3D52F5' : c.text2,
              fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              {l.label}
            </button>
          ))}
          <button onClick={() => setIsDark(d => !d)} style={{
            padding: '9px 12px', borderRadius: 10,
            border: `2px solid ${c.border}`,
            background: isDark ? '#1A1D2E' : '#fff',
            color: isDark ? '#9DA8F5' : '#6B7080',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        <a href="#download" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          {t.nav.getApp} →
        </a>
      </div>

      <style>{`
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-link {
          font-size: 14px; font-weight: 500; color: #6B7080;
          text-decoration: none; transition: color 0.2s;
          position: relative; white-space: nowrap;
        }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0; right: 0;
          height: 2px; background: #3D52F5; border-radius: 1px;
          transform: scaleX(0); transition: transform 0.2s ease;
        }
        .nav-link:hover { color: #3D52F5; }
        .nav-link:hover::after { transform: scaleX(1); }
        .nav-link-active { color: #3D52F5 !important; }
        .nav-link-active::after { transform: scaleX(1) !important; }

        .nav-cta {
          background: #3D52F5; color: #fff;
          font-size: 14px; font-weight: 600;
          padding: 10px 20px; border-radius: 12px;
          text-decoration: none; transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(61,82,245,0.3);
          white-space: nowrap;
        }
        .nav-cta:hover { background: #2E3FD9; transform: translateY(-1px); }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          padding: 6px; cursor: pointer; background: none; border: none;
        }
        .bar {
          width: 22px; height: 2px; background: #1A1D2E;
          border-radius: 2px; display: block; transition: all 0.25s;
        }
        .bar-short { width: 16px; }

        .mobile-menu {
          display: none; background: #fff; border-top: 1px solid #E8E9F0;
          padding: 0 20px; max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .mobile-menu-open { max-height: 520px; padding: 12px 20px 20px; }
        .mobile-link {
          display: block; padding: 13px 0;
          font-size: 15px; font-weight: 500; color: #1A1D2E;
          text-decoration: none; border-bottom: 1px solid #F5F6FA;
          transition: color 0.2s;
        }
        .mobile-link:hover { color: #3D52F5; }
        .mobile-cta {
          display: block; margin-top: 14px;
          background: #3D52F5; color: #fff;
          font-size: 15px; font-weight: 600;
          padding: 14px 24px; border-radius: 14px;
          text-align: center; text-decoration: none;
        }

        @media (max-width: 1050px) {
          .nav-links { gap: 16px; }
        }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: block; }
          .nav-cta { display: none; }
        }
      `}</style>
    </nav>
  )
}
