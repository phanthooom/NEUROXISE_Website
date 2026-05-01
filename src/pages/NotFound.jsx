import { useNavigate } from 'react-router-dom'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const labels = {
  ru: { code: '404', title: 'Страница не найдена', desc: 'Кажется, такой страницы не существует. Вернитесь на главную и продолжите тренировку.', btn: 'На главную' },
  en: { code: '404', title: 'Page Not Found', desc: "Looks like this page doesn't exist. Head back to the home page and keep training.", btn: 'Back to Home' },
  uz: { code: '404', title: 'Sahifa topilmadi', desc: "Bu sahifa mavjud emas. Bosh sahifaga qayting va mashqni davom ettiring.", btn: 'Bosh sahifaga' },
}

export default function NotFound() {
  const navigate = useNavigate()
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const l = labels[lang] || labels.ru

  return (
    <div style={{
      minHeight: '100vh',
      background: isDark
        ? 'linear-gradient(160deg, #0C0E1A 0%, #111428 50%, #0C0E1A 100%)'
        : 'linear-gradient(160deg, #fff 0%, #F0F2FF 50%, #F5F6FA 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px', fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 480 }}>

        {/* Logo */}
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, textDecoration: 'none', marginBottom: 48 }}>
          <img
            src={logo}
            alt="NEUROXISE"
            decoding="async"
            style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: 18, fontWeight: 700, color: c.text, letterSpacing: '-0.3px' }}>
            NEURO<span style={{ color: '#3D52F5' }}>XISE</span>
          </span>
        </a>

        {/* 404 number */}
        <div style={{
          fontSize: 'clamp(80px, 20vw, 140px)', fontWeight: 900,
          background: 'linear-gradient(135deg, #3D52F5, #9DA8F5)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          lineHeight: 1, marginBottom: 24, letterSpacing: '-4px',
        }}>{l.code}</div>

        <h1 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: c.text, marginBottom: 16, letterSpacing: '-0.5px' }}>
          {l.title}
        </h1>
        <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.7, marginBottom: 40 }}>
          {l.desc}
        </p>

        <button
          onClick={() => navigate('/')}
          style={{
            background: 'linear-gradient(135deg, #3D52F5, #6A7BF7)',
            color: '#fff', fontSize: 15, fontWeight: 600,
            padding: '14px 32px', borderRadius: 14, border: 'none',
            cursor: 'pointer', boxShadow: '0 8px 24px rgba(61,82,245,0.35)',
            transition: 'all 0.25s', fontFamily: 'inherit',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,82,245,0.45)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,82,245,0.35)' }}
        >
          ← {l.btn}
        </button>
      </div>
    </div>
  )
}
