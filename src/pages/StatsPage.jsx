import { useEffect, useRef, useState } from 'react'
import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

function useCountUp(end, duration, trigger, isFloat) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setVal(end); clearInterval(timer) }
      else setVal(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, end, duration, isFloat])
  return val
}

const METRICS = {
  ru: [
    { value: 10000, suffix: '+', label: 'Пользователей', sublabel: 'на платформе', color: '#3D52F5', duration: 1800 },
    { value: 94, suffix: '%', label: 'Средняя точность', sublabel: 'по всем упражнениям', color: '#34C48C', duration: 1400 },
    { value: 4.8, suffix: '★', label: 'Оценка', sublabel: 'средний рейтинг', color: '#F5A623', duration: 1600, isFloat: true },
    { value: 500, suffix: '+', label: 'Упражнений', sublabel: 'в базе', color: '#9B59F5', duration: 1500 },
  ],
  en: [
    { value: 10000, suffix: '+', label: 'Users', sublabel: 'on the platform', color: '#3D52F5', duration: 1800 },
    { value: 94, suffix: '%', label: 'Avg. accuracy', sublabel: 'across all exercises', color: '#34C48C', duration: 1400 },
    { value: 4.8, suffix: '★', label: 'Rating', sublabel: 'average score', color: '#F5A623', duration: 1600, isFloat: true },
    { value: 500, suffix: '+', label: 'Exercises', sublabel: 'in the library', color: '#9B59F5', duration: 1500 },
  ],
  uz: [
    { value: 10000, suffix: '+', label: 'Foydalanuvchi', sublabel: 'platformada', color: '#3D52F5', duration: 1800 },
    { value: 94, suffix: '%', label: "O'rtacha aniqlik", sublabel: 'barcha mashqlarda', color: '#34C48C', duration: 1400 },
    { value: 4.8, suffix: '★', label: 'Reyting', sublabel: "o'rtacha ball", color: '#F5A623', duration: 1600, isFloat: true },
    { value: 500, suffix: '+', label: 'Mashq', sublabel: 'kutubxonada', color: '#9B59F5', duration: 1500 },
  ],
}

const SKILLS = {
  ru: [
    { label: 'Память', pct: 87, color: '#3D52F5' },
    { label: 'Речь', pct: 74, color: '#9B59F5' },
    { label: 'Внимание', pct: 91, color: '#34C48C' },
    { label: 'Язык', pct: 68, color: '#F5A623' },
    { label: 'Скорость обработки', pct: 82, color: '#F55454' },
    { label: 'Зрительная память', pct: 79, color: '#0891B2' },
  ],
  en: [
    { label: 'Memory', pct: 87, color: '#3D52F5' },
    { label: 'Speech', pct: 74, color: '#9B59F5' },
    { label: 'Attention', pct: 91, color: '#34C48C' },
    { label: 'Language', pct: 68, color: '#F5A623' },
    { label: 'Processing speed', pct: 82, color: '#F55454' },
    { label: 'Visual memory', pct: 79, color: '#0891B2' },
  ],
  uz: [
    { label: 'Xotira', pct: 87, color: '#3D52F5' },
    { label: 'Nutq', pct: 74, color: '#9B59F5' },
    { label: 'Diqqat', pct: 91, color: '#34C48C' },
    { label: 'Til', pct: 68, color: '#F5A623' },
    { label: 'Qayta ishlash tezligi', pct: 82, color: '#F55454' },
    { label: 'Vizual xotira', pct: 79, color: '#0891B2' },
  ],
}

const WEEKLY = [62, 70, 55, 88, 91, 76, 94]

const UI = {
  ru: { badge: 'Статистика', title: 'Данные, которые говорят сами', subtitle: 'Реальные показатели платформы и средняя динамика пользователей по ключевым когнитивным навыкам.', skillsTitle: 'Средняя точность по навыкам', weekTitle: 'Активность за неделю', days: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], growthTitle: 'Рост за 4 недели', growthItems: [{ label: 'Точность', val: '+12%' }, { label: 'Скорость реакции', val: '+8%' }, { label: 'Серия дней', val: '×2.4' }, { label: 'Завершённость', val: '+18%' }] },
  en: { badge: 'Stats', title: 'Numbers that speak', subtitle: 'Real platform metrics and the average user trajectory across key cognitive skills.', skillsTitle: 'Average accuracy by skill', weekTitle: 'Weekly activity', days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], growthTitle: '4-week growth', growthItems: [{ label: 'Accuracy', val: '+12%' }, { label: 'Reaction speed', val: '+8%' }, { label: 'Streak', val: '×2.4' }, { label: 'Completion', val: '+18%' }] },
  uz: { badge: 'Statistika', title: "O'zi gapiruvchi raqamlar", subtitle: "Platforma ko'rsatkichlari va asosiy kognitiv ko'nikmalardagi o'rtacha foydalanuvchi dinamikasi.", skillsTitle: "Ko'nikma bo'yicha o'rtacha aniqlik", weekTitle: 'Haftalik faollik', days: ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'], growthTitle: '4 haftalik o\'sish', growthItems: [{ label: 'Aniqlik', val: '+12%' }, { label: 'Reaksiya tezligi', val: '+8%' }, { label: 'Seriya', val: '×2.4' }, { label: "Yakunlanganlik", val: '+18%' }] },
}

function AnimBar({ pct, color, trigger }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    if (!trigger) return
    const t = setTimeout(() => setWidth(pct), 100)
    return () => clearTimeout(t)
  }, [trigger, pct])
  return (
    <div style={{ height: 8, borderRadius: 999, background: 'rgba(0,0,0,.08)', overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${width}%`, background: color, borderRadius: 999, transition: 'width 1.2s cubic-bezier(.4,0,.2,1)' }} />
    </div>
  )
}

function StatCard({ m, trigger }) {
  const val = useCountUp(m.value, m.duration, trigger, m.isFloat)
  return (
    <div className="sp-stat" style={{ borderColor: 'rgba(255,255,255,.1)', background: 'rgba(255,255,255,.06)' }}>
      <div style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 800, lineHeight: 1, background: `linear-gradient(135deg, ${m.color}, #fff)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {m.isFloat ? val.toFixed(1) : val.toLocaleString()}<span style={{ fontSize: '55%' }}>{m.suffix}</span>
      </div>
      <div style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginTop: 8 }}>{m.label}</div>
      <div style={{ color: 'rgba(255,255,255,.45)', fontSize: 12, marginTop: 2 }}>{m.sublabel}</div>
    </div>
  )
}

export default function StatsPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  const metrics = METRICS[lang] || METRICS.en
  const skills = SKILLS[lang] || SKILLS.en

  const ref = useRef(null)
  const [triggered, setTriggered] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTriggered(true) }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const maxBar = Math.max(...WEEKLY)

  return (
    <SiteChrome>
      {/* Dark hero band */}
      <section ref={ref} style={{ padding: '120px 0 64px', background: 'linear-gradient(160deg,#1A1D2E 0%,#111428 100%)' }}>
        <div className="container">
          <div style={{ marginBottom: 48, animation: 'fadeUp .5s ease both' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: 'rgba(61,82,245,.25)', color: '#9DA8F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 800, color: '#fff', lineHeight: 1.08, marginBottom: 14, letterSpacing: '-1px' }}>{t.title}</h1>
            <p style={{ color: 'rgba(255,255,255,.5)', fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>{t.subtitle}</p>
          </div>

          {/* Counter cards */}
          <div className="sp-stats-grid">
            {metrics.map((m, i) => (
              <div key={m.label} style={{ animationDelay: `${i * 80}ms`, animation: 'fadeUp .6s ease both' }}>
                <StatCard m={m} trigger={triggered} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Light/dark content section */}
      <section style={{ padding: '64px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="sp-bottom-grid">

            {/* Skills bars */}
            <div className="sp-panel" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
              <h2 style={{ color: c.text, fontSize: 18, fontWeight: 700, marginBottom: 24 }}>{t.skillsTitle}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {skills.map((s) => (
                  <div key={s.label}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ color: c.text, fontSize: 13, fontWeight: 600 }}>{s.label}</span>
                      <span style={{ color: s.color, fontSize: 13, fontWeight: 700 }}>{s.pct}%</span>
                    </div>
                    <AnimBar pct={s.pct} color={s.color} trigger={triggered} />
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Weekly bars */}
              <div className="sp-panel" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
                <h2 style={{ color: c.text, fontSize: 18, fontWeight: 700, marginBottom: 20 }}>{t.weekTitle}</h2>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 80 }}>
                  {WEEKLY.map((v, i) => (
                    <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, height: '100%', justifyContent: 'flex-end' }}>
                      <div style={{
                        width: '100%',
                        height: triggered ? `${(v / maxBar) * 72}px` : '0px',
                        background: v === maxBar ? '#3D52F5' : (isDark ? 'rgba(61,82,245,.35)' : '#D0D5FF'),
                        borderRadius: 6,
                        transition: `height 0.8s cubic-bezier(.4,0,.2,1) ${i * 60}ms`,
                      }} />
                      <span style={{ fontSize: 10, color: c.text2, fontWeight: 600 }}>{t.days[i]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth grid */}
              <div className="sp-panel" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
                <h2 style={{ color: c.text, fontSize: 18, fontWeight: 700, marginBottom: 18 }}>{t.growthTitle}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {t.growthItems.map((item, i) => {
                    const colors = ['#3D52F5', '#34C48C', '#F5A623', '#9B59F5']
                    return (
                      <div key={item.label} style={{ padding: '14px 16px', borderRadius: 14, background: isDark ? '#1A1D2E' : '#F5F6FF' }}>
                        <div style={{ fontSize: 22, fontWeight: 800, color: colors[i], lineHeight: 1 }}>{item.val}</div>
                        <div style={{ fontSize: 12, color: c.text2, marginTop: 4 }}>{item.label}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sp-stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .sp-stat{border:1px solid;border-radius:22px;padding:26px;backdrop-filter:blur(10px)}
        .sp-bottom-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
        .sp-panel{border:1px solid;border-radius:22px;padding:26px;animation:fadeUp .6s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.sp-stats-grid{grid-template-columns:repeat(2,1fr)}.sp-bottom-grid{grid-template-columns:1fr}}
        @media(max-width:480px){.sp-stats-grid{grid-template-columns:1fr 1fr}}
      `}</style>
    </SiteChrome>
  )
}
