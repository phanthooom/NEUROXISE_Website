import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

export default function FAQ() {
  const { t, isDark } = useLanguage()
  const f = t.faq
  const c = mkC(isDark)
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" style={{ padding: '96px 0', background: c.pageBg }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.badge, borderRadius: 999, padding: '6px 14px', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{f.badge}</span>
          </div>
          <h2 className="section-title" style={{ color: c.text }}>
            {f.title1}{' '}
            <span style={{ background: 'linear-gradient(135deg, #3D52F5, #9DA8F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {f.title2}
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {f.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                style={{
                  background: c.cardBg,
                  border: `1.5px solid ${isOpen ? '#3D52F5' : c.border}`,
                  borderRadius: 18,
                  overflow: 'hidden',
                  transition: 'border-color 0.25s',
                  boxShadow: isOpen ? '0 4px 24px rgba(61,82,245,0.10)' : 'none',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    padding: '20px 24px', background: 'transparent', border: 'none',
                    cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit',
                  }}
                >
                  <span style={{ fontSize: 15, fontWeight: 600, color: c.text, lineHeight: 1.4, flex: 1 }}>
                    {item.q}
                  </span>
                  <div style={{
                    width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                    background: isOpen ? '#3D52F5' : c.cardBg2,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke={isOpen ? '#fff' : '#6B7080'} strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ transition: 'transform 0.25s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div style={{
                  maxHeight: isOpen ? 300 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}>
                  <div style={{ padding: '0 24px 20px', fontSize: 14, color: c.text2, lineHeight: 1.75 }}>
                    {item.a}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
