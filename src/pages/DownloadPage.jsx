import { useState } from 'react'
import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { SmartphoneIcon, CheckCircleIcon, ShieldIcon, FlameIcon } from '../components/Icons'

const UI = {
  ru: {
    badge: 'Скачать',
    title: 'NEUROXISE на вашем телефоне',
    subtitle: 'iOS и Android приложения в финальной стадии. Оставьте email — пришлём ссылку первым делом в день релиза.',
    formTitle: 'Получить первый доступ',
    emailPlaceholder: 'Ваш email',
    btn: 'Записаться в список',
    btnSent: 'Вы в списке ✓',
    sentTitle: 'Отлично, вы в списке!',
    sentDesc: 'Пришлём ссылку на скачивание сразу после релиза в App Store и Google Play.',
    points: [
      { Icon: SmartphoneIcon, color: '#3D52F5', bg: '#EEF0FF', label: 'iOS и Android', sub: 'Единый аккаунт, данные синхронизируются' },
      { Icon: ShieldIcon,     color: '#34C48C', bg: '#E8FAF3', label: 'Офлайн-режим', sub: 'Упражнения доступны без интернета' },
      { Icon: FlameIcon,      color: '#F5A623', bg: '#FEF4E2', label: 'Серии и цели', sub: 'Мотивация через ежедневные привычки' },
      { Icon: CheckCircleIcon,color: '#9B59F5', bg: '#F3EEFF', label: 'Без рекламы', sub: 'Чистый опыт, никаких прерываний' },
    ],
    storeNote: 'Ссылки появятся после публикации в сторах',
    privacy: 'Email используется только для уведомления о релизе.',
  },
  en: {
    badge: 'Download',
    title: 'NEUROXISE on your phone',
    subtitle: 'iOS and Android apps are in the final stage. Leave your email — we will send the link on launch day.',
    formTitle: 'Get early access',
    emailPlaceholder: 'Your email',
    btn: 'Join the waitlist',
    btnSent: "You're on the list ✓",
    sentTitle: "You're on the list!",
    sentDesc: 'We will send the download link as soon as the app hits the App Store and Google Play.',
    points: [
      { Icon: SmartphoneIcon, color: '#3D52F5', bg: '#EEF0FF', label: 'iOS & Android', sub: 'One account, synced everywhere' },
      { Icon: ShieldIcon,     color: '#34C48C', bg: '#E8FAF3', label: 'Offline mode', sub: 'Exercises work without internet' },
      { Icon: FlameIcon,      color: '#F5A623', bg: '#FEF4E2', label: 'Streaks & goals', sub: 'Build daily habits that stick' },
      { Icon: CheckCircleIcon,color: '#9B59F5', bg: '#F3EEFF', label: 'No ads', sub: 'Clean experience, no interruptions' },
    ],
    storeNote: 'Store links will appear on launch',
    privacy: 'Your email is used only to notify you of the release.',
  },
  uz: {
    badge: 'Yuklab olish',
    title: 'NEUROXISE telefoningizda',
    subtitle: "iOS va Android ilovalar yakuniy bosqichda. Email qoldiring — reliz kuni birinchi bo'lib havola yuboramiz.",
    formTitle: "Birinchi kirish huquqini oling",
    emailPlaceholder: 'Email manzilingiz',
    btn: "Ro'yxatga yozilish",
    btnSent: "Ro'yxatdasiz ✓",
    sentTitle: "Ro'yxatdasiz!",
    sentDesc: "Ilova App Store va Google Play da chiqishi bilan yuklab olish havolasini yuboramiz.",
    points: [
      { Icon: SmartphoneIcon, color: '#3D52F5', bg: '#EEF0FF', label: 'iOS va Android', sub: "Bitta akkaunt, hamma joyda sinxronlanadi" },
      { Icon: ShieldIcon,     color: '#34C48C', bg: '#E8FAF3', label: 'Oflayn rejim', sub: "Mashqlar internetsiz ishlaydi" },
      { Icon: FlameIcon,      color: '#F5A623', bg: '#FEF4E2', label: 'Seriyalar va maqsadlar', sub: "Kunlik odatlarni shakllantirish" },
      { Icon: CheckCircleIcon,color: '#9B59F5', bg: '#F3EEFF', label: 'Reklamasiz', sub: "Toza tajriba, hech qanday uzilishlar yo'q" },
    ],
    storeNote: "Havolalar do'konlarda chiqqandan so'ng paydo bo'ladi",
    privacy: "Email faqat reliz haqida xabardor qilish uchun ishlatiladi.",
  },
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.37.21.8.22 1.19.05L15.34 12 4.37.19C3.98.02 3.55.03 3.18.24 2.44.65 2 1.42 2 2.28v19.44c0 .86.44 1.63 1.18 2.04z"/>
      <path d="M16.43 13.09L6.16 23.36l9.07-5.24 1.2-5.03zM21.5 10.5L18.43 8.7 17 12l1.43 3.3 3.07-1.8c.88-.52.88-2.48 0-3z"/>
      <path d="M6.16.64L16.43 10.91l-1.2-4.97L6.16.64z" opacity=".7"/>
    </svg>
  )
}

export default function DownloadPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru

  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    window.location.href = `mailto:hello@neuroxise.app?subject=${encodeURIComponent('Waitlist: ' + email)}&body=${encodeURIComponent('Add to waitlist: ' + email)}`
    setSent(true)
  }

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero band */}
          <div className="dl2-hero" style={{ background: 'linear-gradient(135deg,#3D52F5 0%,#6A7BF7 60%,#9DA8F5 100%)' }}>
            <div className="dl2-hero-text">
              <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: 'rgba(255,255,255,.18)', color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 18 }}>{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px,4.8vw,52px)', fontWeight: 800, color: '#fff', lineHeight: 1.1, marginBottom: 14, letterSpacing: '-1px' }}>{t.title}</h1>
              <p style={{ color: 'rgba(255,255,255,.78)', fontSize: 17, lineHeight: 1.75, maxWidth: 480, marginBottom: 28 }}>{t.subtitle}</p>

              {/* Store buttons — disabled */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 10 }}>
                {[
                  { Icon: AppleIcon, top: 'App Store', sub: 'iOS' },
                  { Icon: PlayIcon,  top: 'Google Play', sub: 'Android' },
                ].map(btn => (
                  <div key={btn.top} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.15)', border: '1px solid rgba(255,255,255,.25)', borderRadius: 14, padding: '12px 20px', opacity: .7, cursor: 'default' }}>
                    <btn.Icon />
                    <div>
                      <div style={{ fontSize: 10, color: 'rgba(255,255,255,.7)', marginBottom: 1 }}>{btn.top}</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{btn.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,.5)' }}>{t.storeNote}</p>
            </div>

            {/* Waitlist form */}
            <div className="dl2-form-wrap" style={{ background: isDark ? '#141728' : '#fff', borderColor: isDark ? '#252840' : '#E8E9F0' }}>
              {sent ? (
                <div className="dl2-sent">
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: '#E8FAF3', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <CheckCircleIcon size={28} color="#34C48C" strokeWidth={1.8} />
                  </div>
                  <h2 style={{ color: c.text, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{t.sentTitle}</h2>
                  <p style={{ color: c.text2, fontSize: 14, lineHeight: 1.65 }}>{t.sentDesc}</p>
                </div>
              ) : (
                <>
                  <h2 style={{ color: c.text, fontSize: 18, fontWeight: 700, marginBottom: 20 }}>{t.formTitle}</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder={t.emailPlaceholder}
                      style={{ padding: '13px 16px', borderRadius: 12, border: `1px solid ${c.border}`, background: isDark ? '#0C0E1A' : '#F5F6FA', color: c.text, fontSize: 15, outline: 'none', fontFamily: 'inherit' }}
                    />
                    <button type="submit" style={{ background: '#3D52F5', color: '#fff', border: 'none', padding: '14px', borderRadius: 12, fontWeight: 700, fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>
                      {t.btn}
                    </button>
                  </form>
                  <p style={{ color: c.text2, fontSize: 12, marginTop: 10, lineHeight: 1.5 }}>{t.privacy}</p>
                </>
              )}
            </div>
          </div>

          {/* Feature cards */}
          <div className="dl2-grid">
            {t.points.map((pt, i) => (
              <div key={pt.label} className="dl2-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: pt.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <pt.Icon size={24} color={pt.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ color: c.text, fontSize: 16, fontWeight: 700, marginBottom: 4 }}>{pt.label}</h3>
                <p style={{ color: c.text2, fontSize: 13, lineHeight: 1.6 }}>{pt.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .dl2-hero{border-radius:28px;padding:44px;display:grid;grid-template-columns:1fr 340px;gap:36px;align-items:center;animation:fadeUp .55s ease both;position:relative;overflow:hidden}
        .dl2-hero::before{content:'';position:absolute;top:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(255,255,255,.08) 0%,transparent 70%);pointer-events:none}
        .dl2-hero-text{position:relative;z-index:1}
        .dl2-form-wrap{border:1px solid;border-radius:22px;padding:28px;animation:fadeUp .6s ease both}
        .dl2-sent{text-align:center;padding:16px 0}
        .dl2-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px}
        .dl2-card{border:1px solid;border-radius:20px;padding:22px;animation:fadeUp .65s ease both;transition:transform .2s ease}
        .dl2-card:hover{transform:translateY(-4px)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.dl2-hero{grid-template-columns:1fr}.dl2-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:520px){.dl2-grid{grid-template-columns:1fr 1fr}}
      `}</style>
    </SiteChrome>
  )
}
