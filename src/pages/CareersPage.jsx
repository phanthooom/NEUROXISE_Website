import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const ROLES = {
  ru: [
    { dept: 'Дизайн', title: 'Product Designer', location: 'Удалённо', type: 'Полная занятость', desc: 'Проектируете интерфейсы тренировочных упражнений, экраны прогресса и онбординг. Работаете в тесной связке с iOS/Android-командой.' },
    { dept: 'Инженерия', title: 'Frontend Engineer (React Native)', location: 'Удалённо', type: 'Полная занятость', desc: 'Разрабатываете мобильный клиент на React Native. Опыт с анимациями, офлайн-хранилищем и производительностью будет плюсом.' },
    { dept: 'Контент', title: 'Clinical Content Specialist', location: 'Гибко', type: 'Частичная занятость', desc: 'Составляете и проверяете упражнения для тренировки речи и памяти на основе клинических протоколов. Желателен фон в логопедии или когнитивной психологии.' },
    { dept: 'Бэкенд', title: 'Backend Engineer (Node.js / Go)', location: 'Удалённо', type: 'Полная занятость', desc: 'Строите и поддерживаете API прогресса пользователей, синхронизацию данных и систему аналитики тренировок.' },
    { dept: 'Рост', title: 'Growth Marketer', location: 'Удалённо', type: 'Полная занятость', desc: 'Отвечаете за привлечение пользователей через органику, ASO и партнёрства. Умеете работать с данными и проводить A/B-эксперименты.' },
  ],
  en: [
    { dept: 'Design', title: 'Product Designer', location: 'Remote', type: 'Full-time', desc: 'Own the UX of training exercises, progress screens, and onboarding flows. Work closely with the iOS and Android team.' },
    { dept: 'Engineering', title: 'Frontend Engineer (React Native)', location: 'Remote', type: 'Full-time', desc: 'Build the mobile client on React Native. Experience with animations, offline storage, and performance optimization is a plus.' },
    { dept: 'Content', title: 'Clinical Content Specialist', location: 'Flexible', type: 'Part-time', desc: 'Create and validate speech and memory exercises grounded in clinical protocols. Background in speech-language pathology or cognitive psychology preferred.' },
    { dept: 'Backend', title: 'Backend Engineer (Node.js / Go)', location: 'Remote', type: 'Full-time', desc: 'Build and maintain user progress APIs, data sync, and training analytics infrastructure.' },
    { dept: 'Growth', title: 'Growth Marketer', location: 'Remote', type: 'Full-time', desc: 'Own user acquisition through organic content, ASO, and partnerships. Comfortable with data and A/B testing.' },
  ],
  uz: [
    { dept: 'Dizayn', title: 'Product Designer', location: 'Masofadan', type: "To'liq ish vaqti", desc: "Mashq interfeyslari, progress ekranlari va onboarding oqimlarini loyihalaysiz. iOS va Android jamoasi bilan yaqin hamkorlik." },
    { dept: 'Muhandislik', title: 'Frontend Engineer (React Native)', location: 'Masofadan', type: "To'liq ish vaqti", desc: "React Native da mobil klientni qurasiz. Animatsiyalar, oflayn saqlash va ishlash optimallashtirish bo'yicha tajriba afzallik." },
    { dept: 'Kontent', title: 'Clinical Content Specialist', location: 'Moslashuvchan', type: 'Yarim ish vaqti', desc: 'Klinik protokollarga asoslangan nutq va xotira mashqlarini yaratasiz va tekshirasiz.' },
    { dept: 'Backend', title: 'Backend Engineer (Node.js / Go)', location: 'Masofadan', type: "To'liq ish vaqti", desc: "Foydalanuvchi progress API lari, ma'lumotlar sinxronizatsiyasi va mashq analitika infratuzilmasini qurasiz." },
    { dept: "O'sish", title: 'Growth Marketer', location: 'Masofadan', type: "To'liq ish vaqti", desc: "Organik kontent, ASO va hamkorliklar orqali foydalanuvchilarni jalb qilish uchun javobgarsiz." },
  ],
}

const VALUES = {
  ru: [
    { icon: '🧠', label: 'Наука прежде всего' },
    { icon: '🌍', label: 'Полностью удалённо' },
    { icon: '📐', label: 'Итерируем быстро' },
    { icon: '🤝', label: 'Открытая культура' },
    { icon: '📈', label: 'Данные решают' },
    { icon: '🛡️', label: 'Здоровье — миссия' },
  ],
  en: [
    { icon: '🧠', label: 'Science first' },
    { icon: '🌍', label: 'Fully remote' },
    { icon: '📐', label: 'Iterate fast' },
    { icon: '🤝', label: 'Open culture' },
    { icon: '📈', label: 'Data-driven' },
    { icon: '🛡️', label: 'Health is the mission' },
  ],
  uz: [
    { icon: '🧠', label: 'Fan birinchi' },
    { icon: '🌍', label: "To'liq masofadan" },
    { icon: '📐', label: 'Tez iteratsiya' },
    { icon: '🤝', label: 'Ochiq madaniyat' },
    { icon: '📈', label: "Ma'lumotga asoslanish" },
    { icon: '🛡️', label: 'Salomatlik — missiya' },
  ],
}

const UI = {
  ru: { badge: 'Карьера', title: 'Строим NEUROXISE вместе', subtitle: 'Маленькая команда с большими амбициями. Если вам важны здоровье, обучение и красивый продукт — вы на правильной странице.', openRoles: 'Открытые вакансии', applyBtn: 'Откликнуться', valuesTitle: 'Как мы работаем', emailNote: 'Не нашли подходящую роль? Напишите нам — мы всегда рады сильным людям:', noRoleEmail: 'Написать письмо' },
  en: { badge: 'Careers', title: 'Build NEUROXISE with us', subtitle: 'A small team with large ambitions. If health, learning, and polished products matter to you — you are in the right place.', openRoles: 'Open roles', applyBtn: 'Apply', valuesTitle: 'How we work', emailNote: "Don't see your role? We are always open to strong candidates:", noRoleEmail: 'Send a message' },
  uz: { badge: 'Karyera', title: 'NEUROXISE ni birga quramiz', subtitle: "Katta maqsadli kichik jamoa. Agar salomatlik, o'rganish va chiroyli mahsulot muhim bo'lsa — siz to'g'ri joydasiz.", openRoles: 'Ochiq lavozimlar', applyBtn: 'Murojaat', valuesTitle: 'Biz qanday ishlaymiz', emailNote: "Mos lavozimni topmadingizmi? Har doim kuchli nomzodlarga ochmiz:", noRoleEmail: 'Xat yuborish' },
}

const deptColor = (dept) => {
  const map = { 'Дизайн': '#7C3AED', 'Инженерия': '#0891B2', 'Контент': '#059669', 'Бэкенд': '#DC2626', 'Рост': '#D97706', 'Design': '#7C3AED', 'Engineering': '#0891B2', 'Content': '#059669', 'Backend': '#DC2626', 'Growth': '#D97706', 'Dizayn': '#7C3AED', 'Muhandislik': '#0891B2', 'Kontent': '#059669', "O'sish": '#D97706' }
  return map[dept] || '#3D52F5'
}

export default function CareersPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  const roles = ROLES[lang] || ROLES.ru
  const values = VALUES[lang] || VALUES.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="cr-hero" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
            <div>
              <div className="cr-badge">{t.badge}</div>
              <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.1, marginBottom: 14 }}>{t.title}</h1>
              <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 580 }}>{t.subtitle}</p>
            </div>
            <div className="cr-values-mini">
              {values.map(v => (
                <div key={v.label} className="cr-val-chip" style={{ background: isDark ? 'rgba(61,82,245,.1)' : '#F0F2FF', color: c.text }}>
                  <span>{v.icon}</span> {v.label}
                </div>
              ))}
            </div>
          </div>

          {/* Roles */}
          <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginTop: 44, marginBottom: 18 }}>{t.openRoles}</h2>
          <div className="cr-roles">
            {roles.map((role, i) => {
              const col = deptColor(role.dept)
              return (
                <article key={role.title} className="cr-role" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 80}ms` }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 12 }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 999, background: `${col}18`, color: col, letterSpacing: .4 }}>{role.dept.toUpperCase()}</span>
                      <h3 style={{ color: c.text, fontSize: 19, fontWeight: 700, marginTop: 8, marginBottom: 4 }}>{role.title}</h3>
                      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                        <span className="cr-pill" style={{ background: isDark ? '#1A1D2E' : '#F5F6FA', color: c.text2 }}>📍 {role.location}</span>
                        <span className="cr-pill" style={{ background: isDark ? '#1A1D2E' : '#F5F6FA', color: c.text2 }}>⏱ {role.type}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: c.text2, fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{role.desc}</p>
                  <a
                    href={`mailto:hello@neuroxise.app?subject=${encodeURIComponent(role.title)}`}
                    className="cr-apply-btn"
                    style={{ background: col }}
                  >
                    {t.applyBtn} →
                  </a>
                </article>
              )
            })}
          </div>

          {/* Open application */}
          <div className="cr-open" style={{ background: isDark ? '#101424' : '#EEF0FF', borderColor: c.border }}>
            <p style={{ color: c.text2, marginBottom: 12, fontSize: 15 }}>{t.emailNote}</p>
            <a href="mailto:hello@neuroxise.app?subject=Open%20Application" className="cr-open-btn">
              {t.noRoleEmail} → hello@neuroxise.app
            </a>
          </div>

        </div>
      </section>

      <style>{`
        .cr-hero{border:1px solid;border-radius:28px;padding:36px;display:grid;grid-template-columns:1fr 1fr;gap:28px;animation:fadeUp .55s ease both;align-items:start}
        .cr-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .cr-values-mini{display:flex;flex-wrap:wrap;gap:10px;align-content:flex-start}
        .cr-val-chip{display:flex;align-items:center;gap:6px;padding:8px 13px;border-radius:12px;font-size:13px;font-weight:600}
        .cr-roles{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-bottom:24px}
        .cr-role{border:1px solid;border-radius:22px;padding:24px;animation:fadeUp .6s ease both;transition:transform .22s ease}
        .cr-role:hover{transform:translateY(-4px)}
        .cr-pill{padding:4px 10px;border-radius:999px;font-size:12px;font-weight:500}
        .cr-apply-btn{display:inline-block;color:#fff;padding:9px 16px;border-radius:10px;text-decoration:none;font-weight:600;font-size:13px}
        .cr-apply-btn:hover{opacity:.88}
        .cr-open{border:1px solid;border-radius:22px;padding:26px 30px;animation:fadeUp .65s ease both}
        .cr-open-btn{display:inline-block;background:#3D52F5;color:#fff;padding:11px 18px;border-radius:11px;text-decoration:none;font-weight:600;font-size:14px}
        .cr-open-btn:hover{background:#2B40D4}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.cr-hero{grid-template-columns:1fr}.cr-roles{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
