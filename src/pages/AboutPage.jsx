import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { BrainIcon, TargetIcon, ActivityIcon, CheckCircleIcon, UsersIcon, ShieldIcon } from '../components/Icons'
import { usePageMeta } from '../hooks/usePageMeta'

const VALUE_META = [
  { Icon: BrainIcon,    color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: TargetIcon,   color: '#34C48C', bg: '#E8FAF3' },
  { Icon: ActivityIcon, color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: UsersIcon,    color: '#F5A623', bg: '#FEF4E2' },
  { Icon: ShieldIcon,   color: '#F55454', bg: '#FEF0F0' },
  { Icon: CheckCircleIcon, color: '#3D52F5', bg: '#EEF0FF' },
]

const UI = {
  ru: {
    badge: 'О проекте',
    heroTitle: 'Когнитивное здоровье — для каждого',
    heroSub: 'NEUROXISE — платформа персонализированных тренировок для речи, памяти, внимания и языка. Мы превращаем когнитивную науку в ежедневную привычку.',
    missionTitle: 'Наша миссия',
    mission: 'Помочь каждому человеку поддерживать ясность мышления, восстанавливать навыки после перерывов и уверенно развиваться в собственном темпе — дома, в дороге, в любом месте.',
    missionPoints: [
      'Научный подход в каждом упражнении',
      'Персональные планы под конкретную цель',
      'Короткие сессии — результат без перегруза',
    ],
    valuesTitle: 'Наши принципы',
    values: [
      { title: 'Наука прежде всего', desc: 'Каждое упражнение разработано на основе рецензированных исследований когнитивной нейронауки.' },
      { title: 'Измеримый результат', desc: 'Мы показываем реальный прогресс — в цифрах, графиках и сравнении с прошлыми сессиями.' },
      { title: 'Адаптивность', desc: 'Платформа подстраивается под пользователя: его цели, уровень подготовки и доступное время.' },
      { title: 'Доступность', desc: 'Три языка, офлайн-режим, бесплатный базовый уровень — чтобы никто не был отстранён.' },
      { title: 'Конфиденциальность', desc: 'Данные хранятся на устройстве. Никаких рекламных профилей, никакой слежки.' },
      { title: 'Качество опыта', desc: 'Красивый интерфейс и продуманный UX — потому что приятно выглядящий продукт используют чаще.' },
    ],
    productTitle: 'Что такое NEUROXISE',
    productText: 'Это мобильная платформа (iOS и Android) с набором когнитивных упражнений, персональным ИИ-планом и детальной аналитикой. Приложение в финальной стадии разработки; этот сайт знакомит с проектом до релиза.',
    statusLabel: 'Статус: финальная разработка',
    storeLabel: 'Ссылки появятся в день релиза',
    ctaTitle: 'Хотите быть первым?',
    ctaSub: 'Оставьте email — пришлём ссылку в день релиза.',
    ctaBtn: 'Записаться в список',
  },
  en: {
    badge: 'About',
    heroTitle: 'Cognitive health — for everyone',
    heroSub: 'NEUROXISE is a personalized training platform for speech, memory, attention, and language. We turn cognitive science into a daily habit.',
    missionTitle: 'Our mission',
    mission: 'Help every person maintain mental sharpness, recover skills after breaks, and grow confidently at their own pace — at home, on the go, anywhere.',
    missionPoints: [
      'Science in every exercise',
      'Personalized plans for specific goals',
      'Short sessions — results without burnout',
    ],
    valuesTitle: 'Our principles',
    values: [
      { title: 'Science first', desc: 'Every exercise is grounded in peer-reviewed cognitive neuroscience research.' },
      { title: 'Measurable results', desc: 'We show real progress — in numbers, charts, and comparisons with past sessions.' },
      { title: 'Adaptivity', desc: 'The platform adapts to the user: their goals, preparation level, and available time.' },
      { title: 'Accessibility', desc: 'Three languages, offline mode, free tier — so no one is left behind.' },
      { title: 'Privacy', desc: 'Data stays on your device. No ad profiles, no tracking, no exceptions.' },
      { title: 'Experience quality', desc: 'Beautiful UI and thoughtful UX — because apps people enjoy using get used more.' },
    ],
    productTitle: 'What is NEUROXISE',
    productText: 'A mobile platform (iOS & Android) with cognitive exercises, a personalized AI plan, and detailed analytics. The app is in final development; this website introduces the project ahead of launch.',
    statusLabel: 'Status: final development',
    storeLabel: 'Store links will appear on launch day',
    ctaTitle: 'Want to be first?',
    ctaSub: 'Leave your email — we will send the link on launch day.',
    ctaBtn: 'Join the waitlist',
  },
  uz: {
    badge: 'Loyiha haqida',
    heroTitle: "Kognitiv salomatlik — har kim uchun",
    heroSub: "NEUROXISE nutq, xotira, diqqat va til uchun shaxsiylashtirilgan mashqlar platformasi. Kognitiv fanni kundalik odatga aylantiramiz.",
    missionTitle: 'Bizning missiyamiz',
    mission: "Har bir kishiga aqliy aniqlikni saqlash, tanaffusdan keyin ko'nikmalarga qaytish va o'z sur'atida ishonch bilan rivojlanishga yordam berish — uyda, yo'lda, istalgan joyda.",
    missionPoints: [
      "Har bir mashqda ilmiy yondashuv",
      "Aniq maqsadlar uchun shaxsiy rejalar",
      "Qisqa sessiyalar — yuklanmasdan natija",
    ],
    valuesTitle: "Bizning tamoyillarimiz",
    values: [
      { title: "Avvalo ilm", desc: "Har bir mashq ko'rib chiqilgan kognitiv nevrologiya tadqiqotlariga asoslanadi." },
      { title: "O'lchanadigan natijalar", desc: "Haqiqiy taraqqiyotni ko'rsatamiz — raqamlar, grafiklar va o'tgan sessiyalar bilan taqqoslash." },
      { title: "Moslashuvchanlik", desc: "Platforma foydalanuvchiga moslashadi: maqsadlari, tayyorlik darajasi va mavjud vaqti." },
      { title: "Imkoniyat", desc: "Uch til, oflayn rejim, bepul asosiy daraja — hech kim ortda qolmasligi uchun." },
      { title: "Maxfiylik", desc: "Ma'lumotlar qurilmangizda qoladi. Reklama profillari yo'q, kuzatuv yo'q." },
      { title: "Tajriba sifati", desc: "Chiroyli UI va o'ylangan UX — chunki yoqimli ko'rinadigan dasturlardan ko'proq foydalaniladi." },
    ],
    productTitle: "NEUROXISE nima",
    productText: "Kognitiv mashqlar, shaxsiy AI-reja va batafsil analitika bilan iOS va Android uchun mobil platforma. Ilova yakuniy ishlanmada; bu sayt relizdan oldin loyihani tanishtiradi.",
    statusLabel: "Holat: yakuniy ishlanma",
    storeLabel: "Do'kon havolalari reliz kuni paydo bo'ladi",
    ctaTitle: "Birinchi bo'lmoqchimisiz?",
    ctaSub: "Email qoldiring — reliz kuni havola yuboramiz.",
    ctaBtn: "Ro'yxatga yozilish",
  },
}

export default function AboutPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  usePageMeta(t.badge, t.heroSub)

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="ab-hero" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(28px, 4.8vw, 52px)', color: c.text, lineHeight: 1.08, marginBottom: 14, letterSpacing: '-0.5px' }}>{t.heroTitle}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>{t.heroSub}</p>
            </div>
            <div className="ab-mission-box" style={{ background: isDark ? '#101424' : '#F5F6FF', borderColor: c.border }}>
              <div style={{ color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{t.missionTitle}</div>
              <p style={{ color: c.text, fontSize: 15, lineHeight: 1.7, marginBottom: 16 }}>{t.mission}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {t.missionPoints.map(pt => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <CheckCircleIcon size={16} color="#34C48C" strokeWidth={2} />
                    <span style={{ color: c.text, fontSize: 14, fontWeight: 600 }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Values grid */}
          <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginTop: 52, marginBottom: 20 }}>{t.valuesTitle}</h2>
          <div className="ab-values-grid">
            {t.values.map((v, i) => {
              const { Icon, color, bg } = VALUE_META[i]
              return (
                <div key={v.title} className="ab-val-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                    <Icon size={20} color={color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ color: c.text, fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{v.title}</h3>
                  <p style={{ color: c.text2, fontSize: 13, lineHeight: 1.65 }}>{v.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Product status */}
          <div className="ab-product" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <h2 style={{ color: c.text, fontSize: 20, fontWeight: 700, marginBottom: 10 }}>{t.productTitle}</h2>
              <p style={{ color: c.text2, fontSize: 15, lineHeight: 1.75, maxWidth: 560 }}>{t.productText}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 12, background: isDark ? '#101424' : '#EEF0FF' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F5A623' }} />
                <span style={{ color: c.text, fontSize: 13, fontWeight: 600 }}>{t.statusLabel}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderRadius: 12, background: isDark ? '#101424' : '#EEF0FF' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#34C48C' }} />
                <span style={{ color: c.text, fontSize: 13, fontWeight: 600 }}>{t.storeLabel}</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="ab-cta" style={{ background: 'linear-gradient(135deg,#3D52F5 0%,#6A7BF7 60%,#9DA8F5 100%)' }}>
            <h2 style={{ color: '#fff', fontSize: 'clamp(20px,2.8vw,30px)', fontWeight: 800, marginBottom: 6 }}>{t.ctaTitle}</h2>
            <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 15, marginBottom: 24 }}>{t.ctaSub}</p>
            <a href="/download" className="ab-cta-btn">{t.ctaBtn} →</a>
          </div>

        </div>
      </section>

      <style>{`
        .ab-hero{border:1px solid;border-radius:28px;padding:40px;display:grid;grid-template-columns:1fr 340px;gap:32px;align-items:start;animation:fadeUp .55s ease both}
        .ab-mission-box{border:1px solid;border-radius:18px;padding:22px}
        .ab-values-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:32px}
        .ab-val-card{border:1px solid;border-radius:18px;padding:22px;animation:fadeUp .6s ease both;transition:transform .2s ease}
        .ab-val-card:hover{transform:translateY(-4px)}
        .ab-product{border:1px solid;border-radius:22px;padding:30px;display:flex;align-items:flex-start;justify-content:space-between;gap:28px;flex-wrap:wrap;margin-bottom:32px;animation:fadeUp .6s ease both}
        .ab-cta{border-radius:22px;padding:40px 44px;text-align:center;animation:fadeUp .65s ease both}
        .ab-cta-btn{display:inline-block;background:#fff;color:#3D52F5;padding:13px 26px;border-radius:13px;text-decoration:none;font-weight:700;font-size:15px;transition:opacity .2s}
        .ab-cta-btn:hover{opacity:.88}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.ab-hero{grid-template-columns:1fr}.ab-values-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:580px){.ab-values-grid{grid-template-columns:1fr}.ab-cta{padding:28px 20px}}
      `}</style>
    </SiteChrome>
  )
}
