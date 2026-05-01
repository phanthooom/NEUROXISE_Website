import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { TagIcon, BookOpenIcon, ImageIcon, UserIcon } from '../components/Icons'

const KIT_META = [
  { Icon: TagIcon,      color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: BookOpenIcon, color: '#34C48C', bg: '#E8FAF3' },
  { Icon: ImageIcon,    color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: UserIcon,     color: '#F5A623', bg: '#FEF4E2' },
]

const UI = {
  ru: {
    badge: 'Пресса',
    title: 'Медиакит и сотрудничество',
    subtitle: 'Для журналистов, редакций и партнёров. Пресс-запросы отрабатываем в течение 24 часов.',
    email: 'press@neuroxise.app',
    emailLabel: 'Пресс-почта',
    statsTitle: 'NEUROXISE в цифрах',
    stats: [
      { value: '2024', label: 'Год основания' },
      { value: '3', label: 'Языка' },
      { value: '7+', label: 'Упражнений' },
      { value: '100%', label: 'Наука в основе' },
    ],
    kitTitle: 'Материалы для публикаций',
    kit: [
      { icon: '🎨', title: 'Логотипы и бренд', desc: 'SVG, PNG в тёмном и светлом вариантах. Готовы к печати и экрану.' },
      { icon: '📄', title: 'Описание продукта', desc: 'Официальные тексты о платформе на русском и английском языках (1 абзац и 1 страница).' },
      { icon: '📸', title: 'Скриншоты интерфейса', desc: 'Снимки ключевых экранов приложения в высоком разрешении.' },
      { icon: '🗣️', title: 'Биографии и фото', desc: 'Биографии основателей и фотографии команды для публикаций.' },
    ],
    kitNote: 'Все материалы предоставляются по запросу — напишите на пресс-почту.',
    topicsTitle: 'О чём пишем охотнее всего',
    topics: ['Нейронауки и обучение', 'Когнитивная реабилитация', 'EdTech и HealthTech', 'Языковое обучение', 'Персонализация в здравоохранении'],
    requestBtn: 'Запросить материалы',
  },
  en: {
    badge: 'Press',
    title: 'Media kit & press',
    subtitle: 'For journalists, editors, and partners. We respond to press inquiries within 24 hours.',
    email: 'press@neuroxise.app',
    emailLabel: 'Press inbox',
    statsTitle: 'NEUROXISE by the numbers',
    stats: [
      { value: '2024', label: 'Founded' },
      { value: '3', label: 'Languages' },
      { value: '7+', label: 'Exercise types' },
      { value: '100%', label: 'Science-backed' },
    ],
    kitTitle: 'Press materials',
    kit: [
      { icon: '🎨', title: 'Logos & brand assets', desc: 'SVG and PNG in dark and light variants, ready for print and screen.' },
      { icon: '📄', title: 'Product description', desc: 'Official product copy in Russian and English—one paragraph and one-page versions.' },
      { icon: '📸', title: 'UI screenshots', desc: 'High-resolution screenshots of key app screens.' },
      { icon: '🗣️', title: 'Bios & headshots', desc: 'Founder bios and team photos ready for publication.' },
    ],
    kitNote: 'All assets are available on request — email our press inbox.',
    topicsTitle: 'Topics we love to discuss',
    topics: ['Neuroscience & learning', 'Cognitive rehabilitation', 'EdTech & HealthTech', 'Language learning', 'Personalization in healthcare'],
    requestBtn: 'Request assets',
  },
  uz: {
    badge: 'Matbuot',
    title: 'Media-kit va matbuot',
    subtitle: "Jurnalistlar, tahririyatlar va hamkorlar uchun. Matbuot so'rovlarini 24 soat ichida ko'rib chiqamiz.",
    email: 'press@neuroxise.app',
    emailLabel: 'Matbuot pochtasi',
    statsTitle: 'NEUROXISE raqamlarda',
    stats: [
      { value: '2024', label: 'Tashkil etilgan yil' },
      { value: '3', label: 'Til' },
      { value: '7+', label: 'Mashq turlari' },
      { value: '100%', label: 'Ilmiy asosda' },
    ],
    kitTitle: 'Nashr materiallari',
    kit: [
      { icon: '🎨', title: 'Logotiplar va brend', desc: "Qorong'u va yorug' variantlarda SVG va PNG. Bosim va ekranga tayyor." },
      { icon: '📄', title: 'Mahsulot tavsifi', desc: "Rus va ingliz tillarida rasmiy mahsulot matnlari (1 xat boshi va 1 sahifa)." },
      { icon: '📸', title: 'Interfeys skrinshotlari', desc: "Asosiy ilova ekranlarining yuqori aniqlikdagi rasmlari." },
      { icon: '🗣️', title: 'Biografiyalar va fotosuratlar', desc: "Nashr uchun asoschilari biografiyalari va jamoa fotosuratlar." },
    ],
    kitNote: "Barcha materiallar so'rov bo'yicha taqdim etiladi — matbuot pochtasiga yozing.",
    topicsTitle: "Ko'proq muhokamalashni yaxshi ko'rgan mavzular",
    topics: ["Nevrologiya va o'rganish", "Kognitiv reabilitatsiya", 'EdTech va HealthTech', "Tillarni o'rganish", "Sog'liqni saqlashda shaxsiylashtirish"],
    requestBtn: "Materiallar so'rash",
  },
}

export default function PressPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="pr-hero" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.1, marginBottom: 14 }}>{t.title}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 560, marginBottom: 24 }}>{t.subtitle}</p>
              <a href={`mailto:${t.email}`} className="pr-email-btn">
                <span>📬</span> {t.emailLabel}: {t.email}
              </a>
            </div>
            <div className="pr-stats-mini">
              {t.stats.map(s => (
                <div key={s.label} className="pr-stat" style={{ background: isDark ? '#1A1D2E' : '#F5F6FF', borderColor: c.border }}>
                  <div style={{ color: '#3D52F5', fontSize: 28, fontWeight: 800 }}>{s.value}</div>
                  <div style={{ color: c.text2, fontSize: 13, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Kit cards */}
          <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginTop: 44, marginBottom: 18 }}>{t.kitTitle}</h2>
          <div className="pr-kit-grid">
            {t.kit.map((item, i) => {
              const { Icon, color, bg } = KIT_META[i]
              return (
              <div key={item.title} className="pr-kit-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 80}ms` }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <Icon size={24} color={color} strokeWidth={1.8} />
                </div>
                <h3 style={{ color: c.text, fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{item.title}</h3>
                <p style={{ color: c.text2, fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
              </div>
              )
            })}
          </div>
          <p style={{ color: c.text2, fontSize: 14, marginTop: 16, marginBottom: 32 }}>{t.kitNote}</p>

          {/* Topics + CTA */}
          <div className="pr-bottom" style={{ background: isDark ? '#101424' : '#EEF0FF', borderColor: c.border }}>
            <div>
              <h2 style={{ color: c.text, fontSize: 18, fontWeight: 700, marginBottom: 14 }}>{t.topicsTitle}</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {t.topics.map(topic => (
                  <span key={topic} style={{ padding: '6px 13px', borderRadius: 999, background: isDark ? 'rgba(61,82,245,.15)' : '#fff', color: '#3D52F5', fontSize: 13, fontWeight: 600, border: `1px solid ${isDark ? 'rgba(61,82,245,.3)' : '#D0D5FF'}` }}>{topic}</span>
                ))}
              </div>
            </div>
            <a href={`mailto:${t.email}?subject=${encodeURIComponent('Press kit request')}`} className="pr-cta-btn">{t.requestBtn} →</a>
          </div>

        </div>
      </section>

      <style>{`
        .pr-hero{border:1px solid;border-radius:28px;padding:38px;display:grid;grid-template-columns:1fr auto;gap:32px;animation:fadeUp .55s ease both;align-items:start}
        .pr-email-btn{display:inline-flex;align-items:center;gap:8px;background:#3D52F5;color:#fff;padding:11px 18px;border-radius:12px;text-decoration:none;font-weight:600;font-size:14px}
        .pr-email-btn:hover{background:#2B40D4}
        .pr-stats-mini{display:grid;grid-template-columns:1fr 1fr;gap:12px}
        .pr-stat{border:1px solid;border-radius:16px;padding:16px 18px;text-align:center}
        .pr-kit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .pr-kit-card{border:1px solid;border-radius:18px;padding:22px;animation:fadeUp .6s ease both;transition:transform .2s ease}
        .pr-kit-card:hover{transform:translateY(-4px)}
        .pr-bottom{border:1px solid;border-radius:22px;padding:26px 30px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;animation:fadeUp .65s ease both}
        .pr-cta-btn{background:#3D52F5;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:700;font-size:14px;white-space:nowrap;flex-shrink:0}
        .pr-cta-btn:hover{background:#2B40D4}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:1100px){.pr-kit-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:960px){.pr-hero{grid-template-columns:1fr}.pr-stats-mini{grid-template-columns:repeat(4,1fr)}}
        @media(max-width:620px){.pr-kit-grid{grid-template-columns:1fr}.pr-stats-mini{grid-template-columns:1fr 1fr}}
      `}</style>
    </SiteChrome>
  )
}
