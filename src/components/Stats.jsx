import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { UsersIcon, LayersIcon, CrosshairIcon, StarIcon } from './Icons'

function useCountUp(end, duration = 2000, trigger) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, end, duration])
  return count
}

const STAT_META = [
  { value: 10000, suffix: '+', Icon: UsersIcon,    color: '#3D52F5' },
  { value: 500,   suffix: '+', Icon: LayersIcon,   color: '#9B59F5' },
  { value: 94,    suffix: '%', Icon: CrosshairIcon, color: '#34C48C' },
  { value: 4.8,   suffix: '★', Icon: StarIcon,     color: '#F5A623', isFloat: true },
]

const AVATAR_COLORS = ['#3D52F5', '#34C48C', '#9B59F5']

export default function Stats() {
  const { t } = useLanguage()
  const s = t.stats

  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const c0 = useCountUp(10000, 1800, triggered)
  const c1 = useCountUp(500,   1600, triggered)
  const c2 = useCountUp(94,    1400, triggered)
  const displayVals = [c0, c1, c2, 4.8]

  return (
    <section ref={ref} style={{
      padding: '96px 0',
      background: 'linear-gradient(160deg, #1A1D2E 0%, #2A2D4E 50%, #1A1D2E 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(circle, rgba(61,82,245,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className="stats-grid">
          {STAT_META.map((meta, i) => (
            <div key={i} className="stat-card">
              {/* Icon circle */}
              <div style={{
                width: 52, height: 52,
                borderRadius: 16,
                background: `${meta.color}20`,
                border: `1px solid ${meta.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 16px',
              }}>
                <meta.Icon size={24} color={meta.color} strokeWidth={1.8} />
              </div>

              <div style={{
                fontSize: 40, fontWeight: 800, letterSpacing: '-1px', lineHeight: 1,
                background: `linear-gradient(135deg, ${meta.color}, #fff)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                {meta.isFloat ? displayVals[i] : displayVals[i].toLocaleString()}
                <span style={{ fontSize: 22 }}>{meta.suffix}</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, fontWeight: 500 }}>
                {s.items[i].label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', margin: '80px 0 40px' }}>
          <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.6px', marginBottom: 10 }}>
            {s.testimonialsTitle}
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)' }}>{s.testimonialsSubtitle}</p>
        </div>

        <div className="testimonials-grid">
          {s.testimonials.map((t_, i) => (
            <div key={i} className="testimonial-card">
              <div style={{ display: 'flex', gap: 3, marginBottom: 16, alignItems: 'center' }}>
                {[1,2,3,4,5].map(n => (
                  <StarIcon key={n} size={14} color="#F5A623" strokeWidth={0} filled />
                ))}
              </div>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: 20 }}>
                <q style={{ quotes: '" "' }}>{t_.text}</q>
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${AVATAR_COLORS[i]}, #9DA8F5)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: '#fff', flexShrink: 0,
                }}>
                  {t_.name[0]}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t_.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>{t_.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
        }
        .stat-card {
          text-align: center;
          background: rgba(255,255,255,0.04);
          border-radius: 20px; padding: 32px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px); transition: all 0.3s;
        }
        .stat-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-4px); }

        .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .testimonial-card {
          background: rgba(255,255,255,0.05); border-radius: 20px; padding: 28px;
          border: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); transition: all 0.3s;
        }
        .testimonial-card:hover { background: rgba(255,255,255,0.09); transform: translateY(-2px); }

        @media (max-width: 900px) {
          .stats-grid        { grid-template-columns: repeat(2, 1fr); }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .stats-grid { gap: 12px; }
          .stat-card  { padding: 24px 10px; }
        }
      `}</style>
    </section>
  )
}
