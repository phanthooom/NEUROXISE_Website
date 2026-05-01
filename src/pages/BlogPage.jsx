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
    upcoming: ['Практические гайды', 'Разборы упражнений', 'Истории прогресса'],
  },
  en: {
    badge: 'Blog',
    title: 'The blog is on the way',
    paragraphs: [
      'We will publish short, practical articles on cognitive training, memory, attention, and speech.',
      'For now, head back to the home page or check the FAQ section.',
    ],
    upcoming: ['Practical guides', 'Exercise breakdowns', 'Progress stories'],
  },
  uz: {
    badge: 'Blog',
    title: 'Blog tez orada',
    paragraphs: [
      'Bu yerda kognitiv mashqlar, xotira, diqqat va nutq haqida qisqa maqolalar paydo bo‘ladi.',
      'Hozircha bosh sahifaga qayting yoki FAQ bo‘limiga o‘ting.',
    ],
    upcoming: ['Amaliy qo‘llanmalar', 'Mashq tahlillari', 'Natija hikoyalari'],
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
      <div className="blog-grid">
        {t.upcoming.map((item, i) => (
          <div key={item} className="blog-card" style={{ animationDelay: `${i * 80}ms`, borderColor: c.border, background: isDark ? '#141728' : '#fff' }}>
            {item}
          </div>
        ))}
      </div>
      <style>{`
        .blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
        .blog-card{border:1px solid;border-radius:12px;padding:12px 14px;color:${c.text};font-weight:600;animation:fadeUp .5s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:760px){.blog-grid{grid-template-columns:1fr}}
      `}</style>
    </SubPageLayout>
  )
}
