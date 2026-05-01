import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Блог',
    title: 'Блог скоро откроется',
    paragraphs: [
      'Здесь появятся статьи о когнитивных тренировках, памяти, внимании и речи — коротко и по делу.',
      'Пока вы можете вернуться на главную и посмотреть разделы лендинга или заглянуть в FAQ.',
    ],
  },
  en: {
    badge: 'Blog',
    title: 'The blog is on the way',
    paragraphs: [
      'We will publish short, practical articles on cognitive training, memory, attention, and speech.',
      'For now, head back to the home page or check the FAQ section.',
    ],
  },
  uz: {
    badge: 'Blog',
    title: 'Blog tez orada',
    paragraphs: [
      'Bu yerda kognitiv mashqlar, xotira, diqqat va nutq haqida qisqa maqolalar paydo bo‘ladi.',
      'Hozircha bosh sahifaga qayting yoki FAQ bo‘limiga o‘ting.',
    ],
  },
}

export default function BlogPage() {
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
    </SubPageLayout>
  )
}
