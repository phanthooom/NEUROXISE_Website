import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'О проекте',
    title: 'NEUROXISE и когнитивное здоровье',
    paragraphs: [
      'NEUROXISE — это платформа персонализированных упражнений для тренировки речи, памяти, внимания и языка. Мы опираемся на идеи когнитивной науки и делаем ежедневную практику доступной и измеримой.',
      'Наша цель — помочь людям поддерживать ясность мышления, возвращаться к привычным задачам после перерывов и уверенно развивать навыки в удобном темпе — дома или в дороге.',
      'Сайт знакомит с продуктом. Полный функционал тренировок доступен в мобильных приложениях для iOS и Android (ссылки появятся после релиза в сторах).',
    ],
  },
  en: {
    badge: 'About',
    title: 'NEUROXISE & cognitive health',
    paragraphs: [
      'NEUROXISE is a platform for personalized exercises that train speech, memory, attention, and language. We draw on cognitive science and make daily practice measurable and approachable.',
      'We help people stay mentally sharp, return to routines after breaks, and build skills at a comfortable pace—at home or on the go.',
      'This website introduces the product. Full training features ship in our iOS and Android apps (store links will appear when published).',
    ],
  },
  uz: {
    badge: 'Loyiha haqida',
    title: 'NEUROXISE va kognitiv salomatlik',
    paragraphs: [
      "NEUROXISE — nutq, xotira, diqqat va til uchun shaxsiylashtirilgan mashqlar platformasi. Kognitiv fan g'oyalariga tayanganmiz va kundalik mashqni o'lchanadigan va qulay qilamiz.",
      'Odamlarga aqliy aniqlikni saqlash, tanaffusdan keyin odatlarga qaytish va qulay sur’atda ko‘nikmalarni rivojlantirishda yordam beramiz.',
      'Sayt mahsulot bilan tanishtiradi. To‘liq funksiya iOS va Android ilovalarida (do‘kon havolalari chiqishi bilan paydo bo‘ladi).',
    ],
  },
}

export default function AboutPage() {
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
