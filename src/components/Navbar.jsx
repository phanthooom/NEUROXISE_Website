import { useState, useEffect } from 'react'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguagesIcon } from './Icons'

const LANGS = [
  { code: 'ru', label: 'RU', full: 'Русский'  },
  { code: 'en', label: 'EN', full: 'English'  },
  { code: 'uz', label: 'UZ', full: "O'zbek"   },
]

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [langOpen, setLangOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close lang dropdown on outside click
  useEffect(() => {
    if (!langOpen) return
    const close = () => setLangOpen(false)
    window.addEventListener('click', close)
    return () => window.removeEventListener('click', close)
  }, [langOpen])

  const navLinks = [
    { label: t.nav.features,   href: '#features'    },
    { label: t.nav.howItWorks, href: '#how-it-works' },
    { label: t.nav.exercises,  href: '#exercises'    },
    { label: t.nav.stats,      href: '#stats'        },
  ]

  const currentLang = LANGS.find(l => l.code === lang)

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid #E8E9F0' : '1px solid transparent',
      boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
          <img src={logo} alt="NEUROXISE" style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontSize: 18, fontWeight: 700, color: '#1A1D2E', letterSpacing: '-0.3px' }}>
            NEURO<span style={{ color: '#3D52F5' }}>XISE</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="nav-links">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </div>

        {/* Right: lang switcher + CTA + burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

          {/* Language switcher */}
          <div style={{ position: 'relative' }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLangOpen(o => !o)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 12px', borderRadius: 10,
                border: '1.5px solid #E8E9F0',
                background: '#fff',
                fontSize: 13, fontWeight: 700, color: '#1A1D2E',
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
            >
              <LanguagesIcon size={15} color="#6B7080" strokeWidth={1.8} />
              {currentLang.label}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                style={{ transition: 'transform 0.2s', transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                <path d="M6 9l6 6 6-6" stroke="#6B7080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {langOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 8px)', right: 0,
                background: '#fff',
                borderRadius: 14,
                border: '1px solid #E8E9F0',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                overflow: 'hidden',
                minWidth: 140,
                zIndex: 200,
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
                      color: lang === l.code ? '#3D52F5' : '#1A1D2E',
                      fontFamily: 'inherit',
                      textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => { if (lang !== l.code) e.currentTarget.style.background = '#F5F6FA' }}
                    onMouseLeave={e => { if (lang !== l.code) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span style={{
                      width: 24, height: 24, borderRadius: 6,
                      background: lang === l.code ? '#3D52F5' : '#F5F6FA',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 800,
                      color: lang === l.code ? '#fff' : '#6B7080',
                      flexShrink: 0,
                    }}>{l.label}</span>
                    {l.full}
                    {lang === l.code && (
                      <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#3D52F5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <span className="bar" style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
            <span className="bar" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="bar bar-short" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', width: menuOpen ? 22 : 16 }} />
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

        {/* Mobile lang switcher */}
        <div style={{ display: 'flex', gap: 8, paddingTop: 14, paddingBottom: 4 }}>
          {LANGS.map(l => (
            <button key={l.code} onClick={() => { setLang(l.code); setMenuOpen(false) }} style={{
              flex: 1, padding: '9px 0',
              borderRadius: 10,
              border: `2px solid ${lang === l.code ? '#3D52F5' : '#E8E9F0'}`,
              background: lang === l.code ? '#EEF0FF' : '#fff',
              color: lang === l.code ? '#3D52F5' : '#6B7080',
              fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              {l.label}
            </button>
          ))}
        </div>

        <a href="#download" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          {t.nav.getApp} →
        </a>
      </div>

      <style>{`
        .nav-links { display: flex; gap: 28px; align-items: center; }
        .nav-link {
          font-size: 14px; font-weight: 500; color: #6B7080;
          text-decoration: none; transition: color 0.2s;
        }
        .nav-link:hover { color: #3D52F5; }

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
          display: none;
          background: #fff;
          border-top: 1px solid #E8E9F0;
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, padding 0.35s ease;
        }
        .mobile-menu-open { max-height: 460px; padding: 12px 20px 20px; }

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
