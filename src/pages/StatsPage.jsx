import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const COPY = {
  ru: {
    badge: 'Статистика',
    title: 'Результаты, которые видно',
    subtitle: 'Смотрите рост в динамике: вовлечённость, точность выполнения и стабильность практики.',
    metrics: [
      { value: '10K+', label: 'активных пользователей' },
      { value: '94%', label: 'средняя точность' },
      { value: '+12%', label: 'рост за неделю' },
    ],
  },
  en: {
    badge: 'Stats',
    title: 'Measurable outcomes',
    subtitle: 'Track engagement, accuracy, and consistency with clear trend visibility.',
    metrics: [
      { value: '10K+', label: 'active users' },
      { value: '94%', label: 'average accuracy' },
      { value: '+12%', label: 'weekly growth' },
    ],
  },
  uz: {
    badge: 'Statistika',
    title: 'Ko‘rinadigan natijalar',
    subtitle: 'Faollik, aniqlik va muntazam mashg‘ulot dinamikasini kuzating.',
    metrics: [
      { value: '10K+', label: 'faol foydalanuvchi' },
      { value: '94%', label: 'o‘rtacha aniqlik' },
      { value: '+12%', label: 'haftalik o‘sish' },
    ],
  },
}

export default function StatsPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="st-wrap" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div className="st-head">
              <div className="st-badge">{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, marginBottom: 10 }}>{t.title}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 760, margin: '0 auto' }}>{t.subtitle}</p>
            </div>
            <div className="st-grid">
              {t.metrics.map((m, i) => (
                <article key={m.label} className="st-card" style={{ background: isDark ? '#101424' : '#EEF0FF', animationDelay: `${i * 120}ms` }}>
                  <div className="st-value">{m.value}</div>
                  <div style={{ color: c.text2 }}>{m.label}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .st-wrap{border:1px solid;border-radius:28px;padding:36px;animation:fadeUp .55s ease both}
        .st-head{text-align:center}
        .st-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .st-grid{margin-top:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .st-card{border-radius:18px;padding:24px;animation:fadeUp .6s ease both}
        .st-value{font-size:clamp(30px,4vw,48px);line-height:1;font-weight:800;color:#3D52F5;margin-bottom:8px}
        .st-card:hover{transform:translateY(-4px);transition:transform .22s ease}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:960px){.st-grid{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
