import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'

const ARTICLES = {
  ru: [
    {
      cat: 'Наука',
      catColor: '#7C3AED',
      catBg: 'rgba(124,58,237,.12)',
      title: 'Почему 15 минут в день меняют мозг',
      excerpt: 'Нейропластичность работает не от длительности, а от регулярности. Разбираем, как короткие ежедневные сессии перестраивают нейронные связи быстрее, чем редкие марафоны.',
      date: '12 апр 2025',
      read: '5 мин',
    },
    {
      cat: 'Память',
      catColor: '#0891B2',
      catBg: 'rgba(8,145,178,.12)',
      title: 'Метод интервального повторения: как удержать слова навсегда',
      excerpt: 'Spaced repetition — самый изученный алгоритм запоминания. Объясняем математику кривой забывания Эббингауза и как NEUROXISE применяет её в упражнениях.',
      date: '3 апр 2025',
      read: '7 мин',
    },
    {
      cat: 'Речь',
      catColor: '#059669',
      catBg: 'rgba(5,150,105,.12)',
      title: 'Артикуляция под давлением: почему мы теряем слова при стрессе',
      excerpt: 'Кортизол буквально сужает доступ к лексическому банку. Рассказываем, какие упражнения помогают удерживать беглость речи даже в напряжённые моменты.',
      date: '24 мар 2025',
      read: '6 мин',
    },
    {
      cat: 'Концентрация',
      catColor: '#DC2626',
      catBg: 'rgba(220,38,38,.12)',
      title: 'Монозадачность vs многозадачность: что говорят данные',
      excerpt: 'Мозг не умеет делать несколько задач одновременно — он переключается. Каждое переключение стоит когнитивного ресурса. Как тренировать устойчивое внимание.',
      date: '15 мар 2025',
      read: '4 мин',
    },
    {
      cat: 'Язык',
      catColor: '#D97706',
      catBg: 'rgba(217,119,6,.12)',
      title: 'Билингвизм и когнитивный резерв: как второй язык защищает мозг',
      excerpt: 'Исследования показывают: люди, регулярно переключающиеся между языками, дольше сохраняют когнитивную гибкость. Разбираем механизм и практические выводы.',
      date: '6 мар 2025',
      read: '8 мин',
    },
    {
      cat: 'Прогресс',
      catColor: '#3D52F5',
      catBg: 'rgba(61,82,245,.12)',
      title: 'Как читать свою статистику и не обманываться',
      excerpt: 'Точность 94% — это хорошо или нет? Объясняем, что значат ключевые метрики NEUROXISE, как отличить плато от регресса и когда стоит менять программу.',
      date: '25 фев 2025',
      read: '5 мин',
    },
  ],
  en: [
    {
      cat: 'Science',
      catColor: '#7C3AED',
      catBg: 'rgba(124,58,237,.12)',
      title: 'Why 15 minutes a day rewires your brain',
      excerpt: 'Neuroplasticity responds to consistency, not duration. We break down how short daily sessions reshape neural pathways faster than infrequent marathon sessions.',
      date: 'Apr 12, 2025',
      read: '5 min',
    },
    {
      cat: 'Memory',
      catColor: '#0891B2',
      catBg: 'rgba(8,145,178,.12)',
      title: 'Spaced repetition: how to hold onto words forever',
      excerpt: "Spaced repetition is the most studied memorization algorithm. We explain the math behind Ebbinghaus's forgetting curve and how NEUROXISE applies it.",
      date: 'Apr 3, 2025',
      read: '7 min',
    },
    {
      cat: 'Speech',
      catColor: '#059669',
      catBg: 'rgba(5,150,105,.12)',
      title: 'Why we lose words under stress — and how to train through it',
      excerpt: 'Cortisol literally narrows access to your lexical bank. These exercises help maintain speech fluency even under high-pressure moments.',
      date: 'Mar 24, 2025',
      read: '6 min',
    },
    {
      cat: 'Focus',
      catColor: '#DC2626',
      catBg: 'rgba(220,38,38,.12)',
      title: 'Monotasking vs multitasking: what the data says',
      excerpt: "The brain can't truly multitask — it switches rapidly. Every switch costs cognitive resources. Here's how to train sustained attention.",
      date: 'Mar 15, 2025',
      read: '4 min',
    },
    {
      cat: 'Language',
      catColor: '#D97706',
      catBg: 'rgba(217,119,6,.12)',
      title: 'Bilingualism and cognitive reserve: how a second language protects the brain',
      excerpt: 'Research shows people who regularly switch between languages maintain cognitive flexibility longer. We break down the mechanism and practical takeaways.',
      date: 'Mar 6, 2025',
      read: '8 min',
    },
    {
      cat: 'Progress',
      catColor: '#3D52F5',
      catBg: 'rgba(61,82,245,.12)',
      title: 'How to read your stats without fooling yourself',
      excerpt: "Is 94% accuracy good or not? We explain what NEUROXISE's key metrics mean, how to tell a plateau from a regression, and when to switch programs.",
      date: 'Feb 25, 2025',
      read: '5 min',
    },
  ],
  uz: [
    {
      cat: 'Fan',
      catColor: '#7C3AED',
      catBg: 'rgba(124,58,237,.12)',
      title: "Kuniga 15 daqiqa nima uchun miyani o'zgartiradi",
      excerpt: "Neyoplastiklik davomiylikka emas, muntazamlikka javob beradi. Qisqa kunlik mashqlar neyron aloqalarni qanday tezroq qayta tuzishini tahlil qilamiz.",
      date: '12 apr 2025',
      read: '5 daq',
    },
    {
      cat: 'Xotira',
      catColor: '#0891B2',
      catBg: 'rgba(8,145,178,.12)',
      title: "Interval takrorlash: so'zlarni abadiy eslab qolish usuli",
      excerpt: "Interval takrorlash — eng ko'p o'rganilgan yodlash algoritmi. Ebbinghaus unutish egri chizig'ining matematikasini tushuntiramiz.",
      date: '3 apr 2025',
      read: '7 daq',
    },
    {
      cat: 'Nutq',
      catColor: '#059669',
      catBg: 'rgba(5,150,105,.12)',
      title: "Stress paytida nima uchun so'zlarni yo'qotamiz",
      excerpt: "Kortizol leksik bankga kirishni toraytiradi. Bu mashqlar kuchli bosim ostida ham nutq ravonligini saqlashga yordam beradi.",
      date: '24 mar 2025',
      read: '6 daq',
    },
    {
      cat: 'Diqqat',
      catColor: '#DC2626',
      catBg: 'rgba(220,38,38,.12)',
      title: "Yagona vazifa vs ko'p vazifa: ma'lumotlar nima deydi",
      excerpt: "Miya bir vaqtda bir nechta ishni haqiqiy qila olmaydi — u tez almashadi. Har bir almashuv kognitiv resurs sarflaydi.",
      date: '15 mar 2025',
      read: '4 daq',
    },
    {
      cat: 'Til',
      catColor: '#D97706',
      catBg: 'rgba(217,119,6,.12)',
      title: "Bilingvizm va kognitiv zaxira: ikkinchi til miyani qanday himoya qiladi",
      excerpt: "Tadqiqotlar ko'rsatadiki, tillar orasida muntazam almashuvchilar kognitiv moslashuvchanlikni uzoqroq saqlab qoladi.",
      date: '6 mar 2025',
      read: '8 daq',
    },
    {
      cat: 'Natija',
      catColor: '#3D52F5',
      catBg: 'rgba(61,82,245,.12)',
      title: "Statistikangizni qanday to'g'ri o'qish kerak",
      excerpt: "94% aniqlik — yaxshimi yoki yo'qmi? NEUROXISE asosiy ko'rsatkichlari nimani anglatishini tushuntiramiz.",
      date: '25 fev 2025',
      read: '5 daq',
    },
  ],
}

const UI = {
  ru: { badge: 'Блог', title: 'Когнитивная наука в жизни', subtitle: 'Короткие, практические материалы о памяти, речи, внимании и языке — без воды.', readLabel: 'чтения', comingSoon: 'Читать скоро →', newsletter: 'Подписаться на обновления', newsletterSub: 'Новые статьи раз в две недели. Никакого спама.', placeholder: 'Ваш email', btn: 'Подписаться' },
  en: { badge: 'Blog', title: 'Cognitive science, applied', subtitle: 'Short, practical reads on memory, speech, attention, and language—no filler.', readLabel: 'read', comingSoon: 'Coming soon →', newsletter: 'Stay in the loop', newsletterSub: 'New articles every two weeks. No spam.', placeholder: 'Your email', btn: 'Subscribe' },
  uz: { badge: 'Blog', title: 'Kognitiv fan hayotda', subtitle: "Xotira, nutq, diqqat va til haqida qisqa, amaliy maqolalar — befoydasiz so'zlarsiz.", readLabel: "o'qish", comingSoon: 'Tez orada →', newsletter: "Yangilanishlarga obuna bo'ling", newsletterSub: "Ikki haftada bir yangi maqola. Spam yo'q.", placeholder: 'Email manzilingiz', btn: "Obuna bo'lish" },
}

export default function BlogPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  usePageMeta(t.badge, t.subtitle)
  const articles = ARTICLES[lang] || ARTICLES.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="bl-hero">
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: c.text, lineHeight: 1.08, marginBottom: 14, letterSpacing: '-1px' }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>{t.subtitle}</p>
          </div>

          {/* Article grid */}
          <div className="bl-grid">
            {articles.map((a, i) => (
              <article
                key={a.title}
                className="bl-card"
                style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999, background: a.catBg, color: a.catColor, letterSpacing: .4 }}>{a.cat.toUpperCase()}</span>
                  <span style={{ fontSize: 12, color: c.text2 }}>{a.read} {t.readLabel}</span>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: c.text, lineHeight: 1.35, marginBottom: 10 }}>{a.title}</h2>
                <p style={{ fontSize: 14, color: c.text2, lineHeight: 1.7, marginBottom: 18, flexGrow: 1 }}>{a.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: `1px solid ${c.border}`, paddingTop: 14 }}>
                  <span style={{ fontSize: 12, color: c.text2 }}>{a.date}</span>
                  <span style={{ fontSize: 13, color: '#3D52F5', fontWeight: 600, cursor: 'default' }}>{t.comingSoon}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bl-newsletter" style={{ background: isDark ? 'linear-gradient(135deg,#1A1D2E,#141728)' : 'linear-gradient(135deg,#EEF0FF,#F5F6FF)', borderColor: c.border }}>
            <div className="bl-nl-text">
              <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{t.newsletter}</h2>
              <p style={{ color: c.text2, fontSize: 15, lineHeight: 1.6 }}>{t.newsletterSub}</p>
            </div>
            <form className="bl-nl-form" onSubmit={e => e.preventDefault()}>
              <input className="bl-nl-input" type="email" placeholder={t.placeholder} style={{ background: isDark ? '#0C0E1A' : '#fff', borderColor: c.border, color: c.text }} />
              <button type="submit" className="bl-nl-btn">{t.btn}</button>
            </form>
          </div>

        </div>
      </section>

      <style>{`
        .bl-hero{margin-bottom:48px;animation:fadeUp .55s ease both}
        .bl-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-bottom:32px}
        .bl-card{border:1px solid;border-radius:20px;padding:22px;display:flex;flex-direction:column;animation:fadeUp .6s ease both;transition:transform .22s ease,box-shadow .22s ease}
        .bl-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(61,82,245,.12)}
        .bl-newsletter{border:1px solid;border-radius:24px;padding:32px 36px;display:flex;align-items:center;gap:32px;flex-wrap:wrap;animation:fadeUp .65s ease both}
        .bl-nl-text{flex:1;min-width:220px}
        .bl-nl-form{display:flex;gap:10px;flex:1;min-width:280px}
        .bl-nl-input{flex:1;padding:12px 16px;border-radius:12px;border:1px solid;font-size:14px;outline:none}
        .bl-nl-btn{background:#3D52F5;color:#fff;border:none;padding:12px 20px;border-radius:12px;font-weight:600;font-size:14px;cursor:pointer;white-space:nowrap}
        .bl-nl-btn:hover{background:#2B40D4}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.bl-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:620px){.bl-grid{grid-template-columns:1fr}.bl-newsletter{flex-direction:column}.bl-nl-form{width:100%}}
      `}</style>
    </SiteChrome>
  )
}
