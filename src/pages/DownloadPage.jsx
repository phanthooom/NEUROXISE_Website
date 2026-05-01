import SiteChrome from '../layouts/SiteChrome'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const COPY = {
  ru: {
    badge: 'Скачать',
    title: 'Мобильный NEUROXISE уже близко',
    subtitle: 'iOS и Android версии в финальной подготовке. Оставьте контакт, чтобы первыми получить ссылку.',
    points: ['Офлайн-доступ к упражнениям', 'Безопасное хранение прогресса', 'Быстрые короткие сессии каждый день'],
  },
  en: {
    badge: 'Download',
    title: 'The NEUROXISE app is coming',
    subtitle: 'iOS and Android are in final preparation. Leave your contact to get first access.',
    points: ['Offline exercise access', 'Secure progress storage', 'Fast daily micro-sessions'],
  },
  uz: {
    badge: 'Yuklab olish',
    title: 'NEUROXISE ilovasi tez orada',
    subtitle: 'iOS va Android versiyalari yakuniy bosqichda. Birinchi bo‘lib havola olish uchun kontakt qoldiring.',
    points: ['Mashqlarga oflayn kirish', 'Progress xavfsiz saqlanishi', 'Kunlik qisqa mashg‘ulotlar'],
  },
}

export default function DownloadPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="dl-wrap">
            <div>
              <div className="dl-badge">{t.badge}</div>
              <h1 style={{ color: '#fff', fontSize: 'clamp(30px, 4.8vw, 52px)', lineHeight: 1.1, marginBottom: 12 }}>{t.title}</h1>
              <p style={{ color: 'rgba(255,255,255,.76)', fontSize: 17, lineHeight: 1.75, maxWidth: 620 }}>{t.subtitle}</p>
              <ul className="dl-list">
                {t.points.map(item => <li key={item}>{item}</li>)}
              </ul>
              <a href="mailto:hello@neuroxise.app?subject=Download%20waitlist" className="dl-btn">Join Waitlist</a>
            </div>
            <div className="dl-photo">
              <img src={logo} alt="NEUROXISE app" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .dl-wrap{border-radius:30px;padding:38px;display:grid;grid-template-columns:1fr 280px;gap:26px;background:linear-gradient(135deg,#3D52F5,#6A7BF7,#9DA8F5);animation:fadeUp .55s ease both}
        .dl-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:rgba(255,255,255,.2);color:#fff;font-size:13px;font-weight:700;margin-bottom:16px}
        .dl-list{list-style:none;display:grid;gap:10px;margin:20px 0}
        .dl-list li{padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.15);color:#fff}
        .dl-btn{display:inline-block;background:#fff;color:#2E3FD9;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:700}
        .dl-photo{display:flex;align-items:center;justify-content:center}
        .dl-photo img{width:150px;height:150px;border-radius:24px;object-fit:cover;box-shadow:0 14px 36px rgba(0,0,0,.22);animation:floatY 4s ease-in-out infinite}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @media (max-width:960px){.dl-wrap{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
