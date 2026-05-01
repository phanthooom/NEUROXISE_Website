import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Пресса',
    title: 'Для СМИ и партнёров',
    paragraphs: [
      'Запросы пресс-кита, логотипов и комментариев для публикаций принимаем по почте. Укажите издание, срок и формат материала.',
      'Коммерческие предложения и коллаборации — в письме кратко опишите идею и контакты ответственного лица.',
    ],
    emailHint: 'Пресса:',
  },
  en: {
    badge: 'Press',
    title: 'Media & partners',
    paragraphs: [
      'For press kits, logos, or statements, email us with your outlet, deadline, and format.',
      'For partnerships or commercial ideas, include a short brief and a contact person.',
    ],
    emailHint: 'Press inbox:',
  },
  uz: {
    badge: 'Matbuot',
    title: 'OAV va hamkorlar',
    paragraphs: [
      'Press-kit, logotip yoki izohlar uchun xatda nashr, muddat va formatni ko‘rsating.',
      'Hamkorlik yoki tijoriy takliflar uchun qisqa tavsif va mas’ul shaxs kontaktlarini yozing.',
    ],
    emailHint: 'Matbuot pochtasi:',
  },
}

export default function PressPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SubPageLayout title={t.title} badge={t.badge}>
      {t.paragraphs.map((p, i) => (
        <p key={i} style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 16 }}>
          {p}
        </p>
      ))}
      <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 8 }}>{t.emailHint}</p>
      <p style={{ fontSize: 16, marginBottom: 16 }}>
        <a href="mailto:press@neuroxise.app?subject=Press%20inquiry" style={{ color: '#3D52F5', fontWeight: 600 }}>
          press@neuroxise.app
        </a>
      </p>
    </SubPageLayout>
  )
}
