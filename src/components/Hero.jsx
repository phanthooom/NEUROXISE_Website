import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { FlameIcon, CheckCircleIcon, CrosshairIcon, BrainIcon, MicIcon, EyeIcon } from './Icons'
import { mkC } from '../theme'

function PhoneMockup({ h }) {
  const exIcons = [
    { Icon: BrainIcon, done: true  },
    { Icon: MicIcon,   done: false },
    { Icon: EyeIcon,   done: false },
  ]
  const exData = [
    { title: h.wordRecall,    cat: h.memory,    color: '#3D52F5', bg: '#EEF0FF' },
    { title: h.soundPatterns, cat: h.speech,    color: '#9B59F5', bg: '#F3EEFF' },
    { title: h.focusGrid,     cat: h.attention, color: '#F5A623', bg: '#FEF4E2' },
  ]

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 340, margin: '0 auto' }}>
      <div style={{
        position: 'absolute', inset: '-20%',
        background: 'radial-gradient(circle at 50% 50%, rgba(61,82,245,0.18) 0%, transparent 70%)',
        borderRadius: '50%', animation: 'float 6s ease-in-out infinite', pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative', borderRadius: 40,
        border: '8px solid #1A1D2E',
        boxShadow: '0 32px 80px rgba(61,82,245,0.2), 0 8px 32px rgba(0,0,0,0.1)',
        animation: 'float 4s ease-in-out infinite',
        overflow: 'hidden', maxWidth: 280, margin: '0 auto', background: '#F5F6FA',
      }}>
        <div style={{ background: 'linear-gradient(135deg, #3D52F5 0%, #6A7BF7 100%)', padding: '24px 20px 20px', color: '#fff' }}>
          <div style={{ fontSize: 11, opacity: 0.65, fontWeight: 500 }}>{h.greeting}</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginTop: 2 }}>{h.hello}</div>
          <div style={{ fontSize: 11, color: 'rgba(157,168,245,0.9)', marginTop: 2 }}>{h.goal}</div>
        </div>

        <div style={{ display: 'flex', gap: 8, padding: '14px 14px 0' }}>
          {[
            { v: '7',   l: h.dayStreak, c: '#F5A623', Icon: FlameIcon       },
            { v: '5',   l: h.thisWeek,  c: '#34C48C', Icon: CheckCircleIcon },
            { v: '94%', l: h.accuracy,  c: '#3D52F5', Icon: CrosshairIcon   },
          ].map((s, idx) => (
            <div key={idx} style={{ flex: 1, background: '#fff', borderRadius: 12, padding: '10px 6px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                <s.Icon size={14} color={s.c} strokeWidth={1.8} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: s.c }}>{s.v}</div>
              <div style={{ fontSize: 9, color: '#6B7080', marginTop: 1, lineHeight: 1.2 }}>{s.l}</div>
            </div>
          ))}
        </div>

        <div style={{ padding: '14px 14px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: '#1A1D2E' }}>{h.todaysPlan}</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: '#3D52F5' }}>{h.seeAll}</span>
        </div>

        {exData.map((ex, i) => {
          const { Icon, done } = exIcons[i]
          return (
            <div key={i} style={{ margin: '0 14px 8px', background: '#fff', borderRadius: 14, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: ex.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, position: 'relative' }}>
                <Icon size={18} color={ex.color} strokeWidth={1.8} />
                {done && (
                  <div style={{ position: 'absolute', top: -4, right: -4, width: 14, height: 14, borderRadius: '50%', background: '#34C48C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#1A1D2E', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ex.title}</div>
                <div style={{ fontSize: 9, color: '#6B7080', marginTop: 1 }}>{ex.cat} · 5 {h.minLabel}</div>
              </div>
              {done && <span style={{ fontSize: 8, fontWeight: 700, color: '#34C48C', background: '#E8FAF3', padding: '2px 6px', borderRadius: 999, whiteSpace: 'nowrap' }}>{h.done}</span>}
            </div>
          )
        })}
        <div style={{ height: 20 }} />
      </div>

      <div className="badge-right" style={{
        position: 'absolute', top: '8%', right: '-14%',
        background: '#fff', borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
        display: 'flex', alignItems: 'center', gap: 8,
        animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s',
        minWidth: 130, zIndex: 2,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#FEF4E2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FlameIcon size={18} color="#F5A623" strokeWidth={1.8} />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1A1D2E' }}>{h.streakBadge}</div>
          <div style={{ fontSize: 9, color: '#6B7080' }}>{h.keepItUp}</div>
        </div>
      </div>

      <div className="badge-left" style={{
        position: 'absolute', bottom: '18%', left: '-16%',
        background: '#fff', borderRadius: 14, padding: '10px 14px',
        boxShadow: '0 8px 28px rgba(0,0,0,0.12)',
        display: 'flex', alignItems: 'center', gap: 8,
        animation: 'float 4.5s ease-in-out infinite', animationDelay: '1s',
        minWidth: 130, zIndex: 2,
      }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: '#EEF0FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CrosshairIcon size={18} color="#3D52F5" strokeWidth={1.8} />
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#1A1D2E' }}>{h.accuracyBadge}</div>
          <div style={{ fontSize: 9, color: '#34C48C' }}>{h.weekGrowth}</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const { t, isDark } = useLanguage()
  const h = t.hero
  const c = mkC(isDark)

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 100, paddingBottom: 80,
      background: isDark
        ? 'linear-gradient(160deg, #0C0E1A 0%, #111428 50%, #0F1120 100%)'
        : 'linear-gradient(160deg, #fff 0%, #F0F2FF 50%, #F5F6FA 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -200, right: -200, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(61,82,245,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -150, left: -150, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(157,168,245,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className="hero-grid">
          <div className="hero-text" style={{ animation: 'fadeInUp 0.8s ease both' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: c.badge, borderRadius: 999, padding: '6px 14px', marginBottom: 24 }}>
              <BrainIcon size={15} color="#3D52F5" strokeWidth={1.8} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{h.badge}</span>
            </div>

            <h1 className="hero-title" style={{ color: c.text }}>
              {h.title1}{' '}
              <span style={{ background: 'linear-gradient(135deg, #3D52F5, #9DA8F5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {h.title2}
              </span>
            </h1>

            <p style={{ fontSize: 17, color: c.text2, lineHeight: 1.75, marginBottom: 40, maxWidth: 480 }}>
              {h.desc}
            </p>

            <div className="hero-btns">
              <Link to="/download" className="btn-primary">
                {h.cta}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <a href="#how-it-works" className="btn-secondary">{h.secondary}</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <div style={{ display: 'flex' }}>
                {['#3D52F5','#9B59F5','#34C48C','#F5A623','#F55454'].map((clr, i) => (
                  <div key={i} style={{ width: 32, height: 32, borderRadius: '50%', background: clr, border: '2px solid #fff', marginLeft: i > 0 ? -10 : 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff', fontWeight: 700 }}>
                    {['A','B','C','D','E'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(n => (
                    <svg key={n} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623" stroke="#F5A623" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: c.text2, marginTop: 2 }}>
                  <strong style={{ color: c.text }}>10,000+</strong> {h.social}
                </div>
              </div>
            </div>
          </div>

          <div className="hero-phone" style={{ animation: 'fadeInUp 0.8s ease 0.2s both' }}>
            <PhoneMockup h={h} />
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid  { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .hero-title { font-size: clamp(36px, 5vw, 64px); font-weight: 800; line-height: 1.1; letter-spacing: -1.5px; margin-bottom: 24px; }
        .hero-btns  { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary {
          background: #3D52F5; color: #fff; font-size: 16px; font-weight: 600;
          padding: 15px 28px; border-radius: 16px;
          box-shadow: 0 8px 24px rgba(61,82,245,0.35); transition: all 0.25s;
          display: inline-flex; align-items: center; gap: 8px; text-decoration: none;
        }
        .btn-primary:hover { background: #2E3FD9; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(61,82,245,0.45); }
        .btn-secondary {
          background: #fff; color: #1A1D2E; font-size: 16px; font-weight: 600;
          padding: 15px 28px; border-radius: 16px; border: 2px solid #E8E9F0;
          transition: all 0.25s; display: inline-flex; align-items: center; text-decoration: none;
        }
        .btn-secondary:hover { border-color: #3D52F5; color: #3D52F5; }

        @media (max-width: 900px) {
          .hero-grid  { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .hero-text  { order: 1; }
          .hero-phone { order: 2; }
          .hero-title { font-size: clamp(32px, 8vw, 52px); }
          .hero-btns  { justify-content: center; }
          .badge-right, .badge-left { display: none !important; }
        }
        @media (max-width: 480px) {
          .btn-primary, .btn-secondary { width: 100%; justify-content: center; font-size: 15px; padding: 14px 20px; }
        }
      `}</style>
    </section>
  )
}
