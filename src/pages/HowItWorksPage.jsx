import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const COPY = {
  ru: {
    badge: 'Как это работает',
    title: 'Путь от старта к результату',
    subtitle: 'Три простых этапа: настройка цели, ежедневные короткие сессии и регулярный анализ динамики.',
    steps: ['Вы выбираете цель и уровень', 'Система формирует ежедневный набор заданий', 'Вы видите прогресс и корректируете план'],
  },
  en: {
    badge: 'How it works',
    title: 'From setup to real progress',
    subtitle: 'Three steps: define goals, train in short daily sessions, and review measurable outcomes.',
    steps: ['Pick goals and baseline level', 'Daily task set is generated for you', 'Track results and refine your plan'],
  },
  uz: {
    badge: 'Qanday ishlaydi',
    title: 'Boshlashdan natijagacha yo‘l',
    subtitle: 'Uch bosqich: maqsadni belgilash, qisqa kunlik mashqlar va o‘sishni tahlil qilish.',
    steps: ['Maqsad va boshlang‘ich darajani tanlaysiz', 'Tizim kunlik mashqlarni tuzadi', 'Natijalarni kuzatib rejani moslaysiz'],
  },
}

export default function HowItWorksPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="flow-head">
            <div className="flow-badge">{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, marginBottom: 10 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 740, margin: '0 auto' }}>{t.subtitle}</p>
          </div>
          <div className="flow-grid">
            {t.steps.map((step, i) => (
              <article key={step} className="flow-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 120}ms` }}>
                <div className="flow-num">{i + 1}</div>
                <h3 style={{ color: c.text, fontSize: 22, marginBottom: 8 }}>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .flow-head{text-align:center;animation:fadeUp .55s ease both}
        .flow-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .flow-grid{margin-top:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .flow-card{border:1px solid;border-radius:24px;padding:26px;animation:fadeUp .6s ease both}
        .flow-num{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#3D52F5;color:#fff;font-weight:700;margin-bottom:14px}
        .flow-card:hover{transform:translateY(-4px);transition:transform .22s ease}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:960px){.flow-grid{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
