import SiteChrome from '../layouts/SiteChrome'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const COPY = {
  ru: {
    badge: 'Справка',
    title: 'Центр помощи NEUROXISE',
    subtitle: 'Ответы на частые вопросы, рекомендации по тренировкам и быстрый путь к поддержке.',
    cards: [
      { title: 'Начало работы', text: 'Как выбрать первую программу и настроить удобный ежедневный ритм занятий.' },
      { title: 'Прогресс и метрики', text: 'Как читать статистику, что значит точность и как отслеживать динамику по неделям.' },
      { title: 'Аккаунт и доступ', text: 'Смена языка, восстановление доступа и общие технические рекомендации.' },
    ],
    contactTitle: 'Не нашли ответ?',
    contactText: 'Напишите в поддержку, и мы поможем разобраться с вашим сценарием.',
    contactCta: 'Написать в поддержку',
  },
  en: {
    badge: 'Help',
    title: 'NEUROXISE Help Center',
    subtitle: 'Find answers, training recommendations, and a direct way to contact support.',
    cards: [
      { title: 'Getting started', text: 'How to choose your first program and set up a sustainable daily routine.' },
      { title: 'Progress metrics', text: 'How to read analytics, understand accuracy, and track weekly trends.' },
      { title: 'Account & access', text: 'Language switch, account recovery, and common technical checks.' },
    ],
    contactTitle: 'Still need help?',
    contactText: 'Send us a message and we will guide you through your exact case.',
    contactCta: 'Contact support',
  },
  uz: {
    badge: 'Yordam',
    title: 'NEUROXISE yordam markazi',
    subtitle: 'Tez-tez so‘raladigan savollar, mashq bo‘yicha tavsiyalar va qo‘llab-quvvatlashga tez ulanish.',
    cards: [
      { title: 'Boshlash', text: 'Birinchi dastur tanlash va kunlik qulay mashg‘ulot ritmini sozlash.' },
      { title: 'Natijalar va metrikalar', text: 'Statistikani o‘qish, aniqlik ma’nosi va haftalik o‘sishni kuzatish.' },
      { title: 'Akkaunt va kirish', text: 'Tilni almashtirish, kirishni tiklash va texnik tavsiyalar.' },
    ],
    contactTitle: 'Javob topilmadimi?',
    contactText: 'Qo‘llab-quvvatlashga yozing, holatingiz bo‘yicha yordam beramiz.',
    contactCta: 'Yordamga yozish',
  },
}

export default function HelpPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="help-hero" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <div className="help-badge">{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.12, marginBottom: 14 }}>{t.title}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 620 }}>{t.subtitle}</p>
            </div>
            <div className="help-photo">
              <img src={logo} alt="NEUROXISE support" />
            </div>
          </div>

          <div className="help-grid">
            {t.cards.map((card, i) => (
              <article key={card.title} className="help-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 90}ms` }}>
                <h3 style={{ color: c.text, fontSize: 22, marginBottom: 10 }}>{card.title}</h3>
                <p style={{ color: c.text2, lineHeight: 1.75 }}>{card.text}</p>
              </article>
            ))}
          </div>

          <div className="help-contact" style={{ background: isDark ? '#101424' : '#EEF0FF' }}>
            <h2 style={{ color: c.text, marginBottom: 8 }}>{t.contactTitle}</h2>
            <p style={{ color: c.text2, marginBottom: 20 }}>{t.contactText}</p>
            <a href="/contact" className="help-btn">{t.contactCta}</a>
          </div>
        </div>
      </section>

      <style>{`
        .help-hero,.help-card,.help-contact{border:1px solid;border-radius:26px}
        .help-hero{display:grid;grid-template-columns:1fr 280px;gap:26px;padding:36px;position:relative;overflow:hidden;animation:fadeUp .55s ease both}
        .help-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .help-photo{display:flex;align-items:center;justify-content:center}
        .help-photo img{width:140px;height:140px;border-radius:24px;object-fit:cover;box-shadow:0 14px 36px rgba(61,82,245,.24);animation:floatY 4s ease-in-out infinite}
        .help-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:22px}
        .help-card{padding:24px;animation:fadeUp .55s ease both}
        .help-card:hover{transform:translateY(-4px);transition:transform .22s ease}
        .help-contact{margin-top:22px;padding:28px;border:1px solid transparent;animation:fadeUp .55s ease both}
        .help-btn{display:inline-block;background:#3D52F5;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:600}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @media (max-width:960px){.help-hero{grid-template-columns:1fr}.help-grid{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
