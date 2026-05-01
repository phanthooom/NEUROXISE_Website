import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Карьера',
    title: 'Команда NEUROXISE',
    intro: 'Мы растём и ищем людей, которым близки продукт, образование и здоровье. Открытые вакансии будут публиковаться здесь.',
    emailHint: 'Если хотите связаться заранее:',
  },
  en: {
    badge: 'Careers',
    title: 'Join the NEUROXISE team',
    intro: 'We are growing and looking for people who care about product, learning, and health. Open roles will be listed here.',
    emailHint: 'To reach out early:',
  },
  uz: {
    badge: 'Karyera',
    title: 'NEUROXISE jamoasi',
    intro: 'Biz o‘sib bormoqdamiz va mahsulat, ta’lim va salomatlikka qiziqqan odamlarni qidiramiz. Bo‘sh ish o‘rinlari shu yerda e’lon qilinadi.',
    emailHint: 'Oldindan bog‘lanish uchun:',
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
    </SubPageLayout>
  )
}
