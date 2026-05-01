import SiteChrome from '../layouts/SiteChrome'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const COPY = {
  ru: {
    badge: 'Возможности',
    title: 'Что умеет NEUROXISE',
    subtitle: 'Платформа объединяет персонализацию, науку и красивый интерфейс, чтобы тренировки были регулярными и результативными.',
    bullets: ['Персональные планы под цель', 'Наглядная динамика прогресса', 'Игровой формат без перегруза', 'Поддержка нескольких языков'],
  },
  en: {
    badge: 'Features',
    title: 'What NEUROXISE delivers',
    subtitle: 'The platform combines personalization, science, and a polished UX to keep training effective and sustainable.',
    bullets: ['Personal plans by goal', 'Clear progress analytics', 'Game-based sessions', 'Multilingual interface'],
  },
  uz: {
    badge: 'Imkoniyatlar',
    title: 'NEUROXISE nimalarni beradi',
    subtitle: 'Platforma shaxsiylashtirish, ilmiy yondashuv va chiroyli UX orqali mashg‘ulotni samarali qiladi.',
    bullets: ['Maqsadga mos shaxsiy reja', 'Aniq progress analitikasi', 'O‘yin uslubidagi mashqlar', 'Ko‘p tilli interfeys'],
  },
}

export default function FeaturesPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="feat-wrap" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <div className="feat-badge">{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.1, marginBottom: 14 }}>{t.title}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 620 }}>{t.subtitle}</p>
              <ul className="feat-list">
                {t.bullets.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="feat-photo">
              <img src={logo} alt="NEUROXISE features" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .feat-wrap{border:1px solid;border-radius:28px;padding:38px;display:grid;grid-template-columns:1fr 280px;gap:28px;animation:fadeUp .55s ease both}
        .feat-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .feat-list{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:22px}
        .feat-list li{padding:12px 14px;border-radius:12px;background:rgba(61,82,245,.09);color:#3D52F5;font-weight:600}
        .feat-photo{display:flex;align-items:center;justify-content:center}
        .feat-photo img{width:150px;height:150px;border-radius:24px;object-fit:cover;box-shadow:0 14px 36px rgba(61,82,245,.24);animation:zoomPulse 4s ease-in-out infinite}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes zoomPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}
        @media (max-width:960px){.feat-wrap{grid-template-columns:1fr}.feat-list{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
