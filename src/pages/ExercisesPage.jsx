import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { BrainIcon, MicIcon, EyeIcon } from '../components/Icons'

const COPY = {
  ru: {
    badge: 'Упражнения',
    title: 'Тренировки под ваши задачи',
    subtitle: 'Каждый блок направлен на конкретную когнитивную функцию и постепенно повышает сложность.',
    cards: [
      { title: 'Память', text: 'Ассоциации, последовательности, быстрое удержание и точное воспроизведение.' },
      { title: 'Речь', text: 'Артикуляция, словарный запас, скорость построения фраз и восприятие звуков.' },
      { title: 'Внимание', text: 'Концентрация, переключение задач и устойчивость к отвлекающим факторам.' },
    ],
  },
  en: {
    badge: 'Exercises',
    title: 'Training aligned to your goals',
    subtitle: 'Each module targets a cognitive skill and scales difficulty over time.',
    cards: [
      { title: 'Memory', text: 'Associations, sequences, short-term retention, and accurate recall.' },
      { title: 'Speech', text: 'Articulation, vocabulary growth, sentence speed, and sound recognition.' },
      { title: 'Attention', text: 'Focus control, task switching, and resilience to distractions.' },
    ],
  },
  uz: {
    badge: 'Mashqlar',
    title: 'Maqsadingizga mos trening',
    subtitle: 'Har bir modul aniq kognitiv ko‘nikmaga yo‘naltirilgan va qiyinchilik bosqichma-bosqich oshadi.',
    cards: [
      { title: 'Xotira', text: 'Assotsiatsiyalar, ketma-ketlik, qisqa muddatli eslab qolish va qayta tiklash.' },
      { title: 'Nutq', text: 'Artikulyatsiya, lug‘at boyligi, gap tuzish tezligi va tovushni farqlash.' },
      { title: 'Diqqat', text: 'Fokusni ushlash, vazifa almashtirish va chalg‘ituvchilarga bardoshlilik.' },
    ],
  },
}

const ICONS = [BrainIcon, MicIcon, EyeIcon]

export default function ExercisesPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          <div className="ex-head">
            <div className="ex-badge">{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, marginBottom: 10 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 740, margin: '0 auto' }}>{t.subtitle}</p>
          </div>
          <div className="ex-grid">
            {t.cards.map((card, i) => {
              const Icon = ICONS[i]
              return (
                <article key={card.title} className="ex-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 100}ms` }}>
                  <div className="ex-icon"><Icon size={24} color="#3D52F5" strokeWidth={1.9} /></div>
                  <h3 style={{ color: c.text, fontSize: 22, marginBottom: 10 }}>{card.title}</h3>
                  <p style={{ color: c.text2, lineHeight: 1.75 }}>{card.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        .ex-head{text-align:center;animation:fadeUp .55s ease both}
        .ex-badge{display:inline-flex;padding:6px 14px;border-radius:999px;background:#EEF0FF;color:#3D52F5;font-size:13px;font-weight:700;margin-bottom:16px}
        .ex-grid{margin-top:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .ex-card{border:1px solid;border-radius:24px;padding:26px;animation:fadeUp .6s ease both}
        .ex-icon{width:46px;height:46px;border-radius:12px;background:#EEF0FF;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
        .ex-card:hover{transform:translateY(-4px);transition:transform .22s ease}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media (max-width:960px){.ex-grid{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
