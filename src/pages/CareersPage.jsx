import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Карьера',
    title: 'Команда NEUROXISE',
    intro: 'Мы растём и ищем людей, которым близки продукт, образование и здоровье. Открытые вакансии будут публиковаться здесь.',
    emailHint: 'Если хотите связаться заранее:',
    roles: ['Product Designer', 'Frontend Engineer', 'Clinical Content Specialist'],
  },
  en: {
    badge: 'Careers',
    title: 'Join the NEUROXISE team',
    intro: 'We are growing and looking for people who care about product, learning, and health. Open roles will be listed here.',
    emailHint: 'To reach out early:',
    roles: ['Product Designer', 'Frontend Engineer', 'Clinical Content Specialist'],
  },
  uz: {
    badge: 'Karyera',
    title: 'NEUROXISE jamoasi',
    intro: 'Biz o‘sib bormoqdamiz va mahsulat, ta’lim va salomatlikka qiziqqan odamlarni qidiramiz. Bo‘sh ish o‘rinlari shu yerda e’lon qilinadi.',
    emailHint: 'Oldindan bog‘lanish uchun:',
    roles: ['Product Designer', 'Frontend Engineer', 'Clinical Content Specialist'],
  },
}

export default function CareersPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SubPageLayout title={t.title} badge={t.badge}>
      <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 16 }}>{t.intro}</p>
      <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 8 }}>{t.emailHint}</p>
      <p style={{ fontSize: 16, marginBottom: 16 }}>
        <a href="mailto:hello@neuroxise.app?subject=Careers" style={{ color: '#3D52F5', fontWeight: 600 }}>
          hello@neuroxise.app
        </a>
      </p>
      <div className="car-grid">
        {t.roles.map((role, i) => (
          <div key={role} className="car-item" style={{ animationDelay: `${i * 90}ms`, borderColor: c.border, background: isDark ? '#141728' : '#fff' }}>
            {role}
          </div>
        ))}
      </div>
      <style>{`
        .car-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
        .car-item{border:1px solid;border-radius:12px;padding:12px 14px;color:${c.text};font-weight:600;animation:fadeUp .5s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:760px){.car-grid{grid-template-columns:1fr}}
      `}</style>
    </SubPageLayout>
  )
}
