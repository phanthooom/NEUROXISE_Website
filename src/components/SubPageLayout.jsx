import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

/** Shared shell for marketing / info pages (matches LegalPage look). */
export default function SubPageLayout({ title, badge, children }) {
  const { isDark } = useLanguage()
  const c = mkC(isDark)

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '120px 24px 80px',
        background: isDark
          ? 'linear-gradient(160deg, #0C0E1A 0%, #111428 50%, #0C0E1A 100%)'
          : 'linear-gradient(160deg, #fff 0%, #F0F2FF 50%, #F5F6FA 100%)',
      }}
    >
      <article className="container" style={{ maxWidth: 720 }}>
        <p style={{ marginBottom: 24 }}>
          <Link
            to="/"
            style={{
              color: '#3D52F5',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: 3,
              fontSize: 15,
            }}
          >
            ← NEUROXISE
          </Link>
        </p>
        {badge && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: c.badge,
              borderRadius: 999,
              padding: '6px 14px',
              marginBottom: 16,
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{badge}</span>
          </div>
        )}
        <h1
          style={{
            fontSize: 'clamp(26px, 4vw, 36px)',
            fontWeight: 800,
            color: c.text,
            marginBottom: 20,
            letterSpacing: '-0.5px',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        {children}
      </article>
    </div>
  )
}
