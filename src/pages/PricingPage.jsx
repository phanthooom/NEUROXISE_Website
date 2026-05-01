import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'

const COPY = {
  ru: {
    badge: 'Цены',
    title: 'Прозрачные тарифы без сюрпризов',
    subtitle: 'Выберите подходящий формат: попробовать бесплатно, тренироваться регулярно или подключить командный доступ.',
    plans: [
      { name: 'Starter', price: 'Бесплатно', desc: 'База упражнений, базовая статистика, 1 профиль.' },
      { name: 'Pro', price: '$9 / мес', desc: 'Персональные планы, расширенная аналитика, приоритетные обновления.' },
      { name: 'Team', price: 'По запросу', desc: 'Для школ, клиник и команд: роли, отчёты, поддержка внедрения.' },
    ],
    cta: 'Перейти к загрузке',
  },
  en: {
    badge: 'Pricing',
    title: 'Simple pricing, clear value',
    subtitle: 'Pick what fits your journey: free start, pro routine, or team-scale access.',
    plans: [
      { name: 'Starter', price: 'Free', desc: 'Core exercises, basic stats, single profile.' },
      { name: 'Pro', price: '$9 / mo', desc: 'Personalized plans, deeper analytics, priority updates.' },
      { name: 'Team', price: 'Custom', desc: 'For schools, clinics, and teams: roles, reports, guided onboarding.' },
    ],
    cta: 'Go to download',
  },
  uz: {
    badge: 'Narxlar',
    title: 'Tushunarli tariflar',
    subtitle: 'Bepul boshlang, pro rejimga o‘ting yoki jamoa uchun kengaytirilgan rejani tanlang.',
    plans: [
      { name: 'Starter', price: 'Bepul', desc: 'Asosiy mashqlar, oddiy statistika, 1 profil.' },
      { name: 'Pro', price: '$9 / oy', desc: 'Shaxsiy reja, keng analitika, tezkor yangilanishlar.' },
      { name: 'Team', price: 'Kelishuv asosida', desc: 'Maktablar va klinikalar uchun: rollar, hisobotlar, joriy etish yordami.' },
    ],
    cta: 'Yuklab olish sahifasi',
  },
}

export default function PricingPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru
  usePageMeta(t.badge, t.subtitle)

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="pr-head">
            <div className="pr-badge">{t.badge}</div>
            <h1 style={{ color: c.text, fontSize: 'clamp(30px, 4.8vw, 52px)', marginBottom: 10 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 760, margin: '0 auto' }}>{t.subtitle}</p>
          </div>
          <div className="pr-grid">
            {t.plans.map((plan, i) => (
              <article key={plan.name} className="pr-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 100}ms` }}>
                <div style={{ color: '#3D52F5', fontWeight: 700, marginBottom: 10 }}>{plan.name}</div>
                <div style={{ color: c.text, fontSize: 30, fontWeight: 800, marginBottom: 8 }}>{plan.price}</div>
                <p style={{ color: c.text2, lineHeight: 1.75 }}>{plan.desc}</p>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 24 }}>
            <a href="/download" className="pr-btn">{t.cta}</a>
          </div>
        </div>
      </section>

      <style>{`
        .pr-head{text-align:center;animation:fadeUp .55s ease both}
        .pr-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .pr-grid{margin-top:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .pr-card{border:1px solid;border-radius:24px;padding:24px;animation:fadeUp .6s ease both}
        .pr-card:hover{transform:translateY(-4px);transition:transform .22s ease}
        .pr-btn{display:inline-block;background:#3D52F5;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:600}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:960px){.pr-grid{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
