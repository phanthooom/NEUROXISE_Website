import { useLanguage } from '../i18n/LanguageContext'
import { TargetIcon, BarChartIcon, GamepadIcon, GlobeIcon, ShieldIcon, ActivityIcon } from './Icons'
import { mkC } from '../theme'

const FEATURE_META = [
  { Icon: TargetIcon,   color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: BarChartIcon, color: '#34C48C', bg: '#E8FAF3' },
  { Icon: GamepadIcon,  color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: GlobeIcon,    color: '#F5A623', bg: '#FEF4E2' },
  { Icon: ShieldIcon,   color: '#F55454', bg: '#FEF0F0' },
  { Icon: ActivityIcon, color: '#3D52F5', bg: '#EEF0FF' },
]

export default function Features() {
  const { t, isDark } = useLanguage()
  const f = t.features
  const c = mkC(isDark)

  return (
    <section style={{ padding: '96px 0', background: c.pageBg }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.badge, borderRadius: 999, padding: '6px 14px', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{f.badge}</span>
          </div>
          <h2 className="section-title">
            {f.title1}{' '}
            <span style={{ color: '#3D52F5' }}>{f.title2}</span>
          </h2>
          <p className="section-subtitle">{f.subtitle}</p>
        </div>

        <div className="features-grid">
          {f.items.map((item, i) => {
            const { Icon, color, bg } = FEATURE_META[i]
            return (
              <div key={i} className="feature-card"
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.09)'; e.currentTarget.style.borderColor = color }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = c.border }}
              >
                <div style={{ width: 52, height: 52, background: bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Icon size={24} color={color} strokeWidth={1.8} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: c.text, marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: c.text2, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .feature-card {
          background: #fff; border-radius: 20px; padding: 28px 24px;
          border: 1px solid #E8E9F0; transition: all 0.3s ease;
        }
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px)  { .features-grid { grid-template-columns: 1fr; gap: 14px; } }
      `}</style>
    </section>
  )
}
