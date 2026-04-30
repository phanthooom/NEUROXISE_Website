import { useLanguage } from '../i18n/LanguageContext'
import { UserIcon, DumbbellIcon, TrendingUpIcon } from './Icons'
import { mkC } from '../theme'

const STEP_META = [
  { Icon: UserIcon,       color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: DumbbellIcon,   color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: TrendingUpIcon, color: '#34C48C', bg: '#E8FAF3' },
]

export default function HowItWorks() {
  const { t, isDark } = useLanguage()
  const hw = t.howItWorks
  const c = mkC(isDark)

  return (
    <section id="how-it-works" style={{ padding: '96px 0', background: c.pageBg2 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.badge, borderRadius: 999, padding: '6px 14px', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{hw.badge}</span>
          </div>
          <h2 className="section-title">{hw.title}</h2>
          <p className="section-subtitle">{hw.subtitle}</p>
        </div>

        <div className="hiw-wrapper">
          <div className="hiw-line" />
          <div className="hiw-grid">
            {hw.steps.map((step, i) => {
              const { Icon, color, bg } = STEP_META[i]
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: bg, border: `2px solid ${color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    position: 'relative',
                    boxShadow: `0 0 0 8px ${c.pageBg2}, 0 0 0 9px ${color}20`,
                    zIndex: 1,
                  }}>
                    <Icon size={32} color={color} strokeWidth={1.6} />
                    <div style={{
                      position: 'absolute', top: -10, right: -10,
                      width: 28, height: 28, borderRadius: '50%',
                      background: color, color: '#fff',
                      fontSize: 12, fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 2px 8px ${color}60`,
                    }}>{i + 1}</div>
                  </div>
                  <h3 style={{ fontSize: 19, fontWeight: 700, color: c.text, marginBottom: 12 }}>{step.title}</h3>
                  <p style={{ fontSize: 15, color: c.text2, lineHeight: 1.65, maxWidth: 260, margin: '0 auto' }}>{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <a href="#download" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #3D52F5, #6A7BF7)',
            color: '#fff', fontSize: 16, fontWeight: 600,
            padding: '15px 36px', borderRadius: 16,
            boxShadow: '0 8px 24px rgba(61,82,245,0.35)',
            transition: 'all 0.25s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(61,82,245,0.45)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(61,82,245,0.35)' }}
          >
            {hw.cta}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>

      <style>{`
        .hiw-wrapper { position: relative; }
        .hiw-line {
          position: absolute; top: 40px; left: 16%; right: 16%;
          height: 2px;
          background: linear-gradient(90deg, #3D52F5, #9B59F5, #34C48C);
          border-radius: 1px; z-index: 0;
        }
        .hiw-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; position: relative; z-index: 1; }

        @media (max-width: 768px) {
          .hiw-line { display: none; }
          .hiw-grid { grid-template-columns: 1fr; gap: 40px; }
        }
      `}</style>
    </section>
  )
}
