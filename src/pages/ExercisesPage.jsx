import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { BrainIcon, MicIcon, EyeIcon, GlobeIcon, LayersIcon, CrosshairIcon } from '../components/Icons'

const CATS = {
  ru: [
    {
      Icon: BrainIcon,
      color: '#3D52F5', bg: 'rgba(61,82,245,.1)',
      title: 'Память',
      desc: 'Ассоциативное запоминание, последовательности, быстрое воспроизведение и удержание информации под давлением времени.',
      tags: ['Ассоциации', 'Последовательности', 'Рабочая память'],
      difficulty: 3,
      duration: '8–12 мин',
      examples: ['Слово → образ', 'Цифровые цепочки', 'Позиции на сетке'],
    },
    {
      Icon: MicIcon,
      color: '#9B59F5', bg: 'rgba(155,89,245,.1)',
      title: 'Речь',
      desc: 'Артикуляция, скорость построения фраз, расширение словарного запаса и распознавание звуков в разных контекстах.',
      tags: ['Артикуляция', 'Словарный запас', 'Фонетика'],
      difficulty: 4,
      duration: '10–15 мин',
      examples: ['Скороговорки', 'Синонимы под таймер', 'Слуховой анализ'],
    },
    {
      Icon: CrosshairIcon,
      color: '#34C48C', bg: 'rgba(52,196,140,.1)',
      title: 'Внимание',
      desc: 'Концентрация на одной задаче, быстрое переключение между контекстами и устойчивость к внешним раздражителям.',
      tags: ['Фокус', 'Переключение', 'Помехоустойчивость'],
      difficulty: 3,
      duration: '5–10 мин',
      examples: ['Числа Шульте', 'Двойная задача', 'Подавление помех'],
    },
    {
      Icon: GlobeIcon,
      color: '#F5A623', bg: 'rgba(245,166,35,.1)',
      title: 'Язык',
      desc: 'Изучение и закрепление лексики на нескольких языках с применением метода интервального повторения.',
      tags: ['Лексика', 'Интервальное повторение', 'Многоязычие'],
      difficulty: 2,
      duration: '10–20 мин',
      examples: ['Карточки SRS', 'Перевод в контексте', 'Слуховое распознавание'],
    },
    {
      Icon: LayersIcon,
      color: '#F55454', bg: 'rgba(245,84,84,.1)',
      title: 'Обработка',
      desc: 'Скорость когнитивной обработки: быстрые решения, мгновенная классификация и тренировка реакции.',
      tags: ['Скорость реакции', 'Классификация', 'Решения под давлением'],
      difficulty: 5,
      duration: '5–8 мин',
      examples: ['Быстрый выбор', 'Нечёткие паттерны', 'Отсчёт времени'],
    },
    {
      Icon: EyeIcon,
      color: '#0891B2', bg: 'rgba(8,145,178,.1)',
      title: 'Зрительная память',
      desc: 'Запоминание и воспроизведение визуальных паттернов, пространственное мышление и навигация по сетке.',
      tags: ['Паттерны', 'Пространство', 'Навигация'],
      difficulty: 3,
      duration: '8–12 мин',
      examples: ['Зеркальные фигуры', 'Матрицы', 'Маршруты на сетке'],
    },
  ],
  en: [
    {
      Icon: BrainIcon,
      color: '#3D52F5', bg: 'rgba(61,82,245,.1)',
      title: 'Memory',
      desc: 'Associative recall, sequences, rapid reproduction, and holding information under time pressure.',
      tags: ['Associations', 'Sequences', 'Working memory'],
      difficulty: 3,
      duration: '8–12 min',
      examples: ['Word → image', 'Digit chains', 'Grid positions'],
    },
    {
      Icon: MicIcon,
      color: '#9B59F5', bg: 'rgba(155,89,245,.1)',
      title: 'Speech',
      desc: 'Articulation, sentence construction speed, vocabulary growth, and sound recognition across contexts.',
      tags: ['Articulation', 'Vocabulary', 'Phonetics'],
      difficulty: 4,
      duration: '10–15 min',
      examples: ['Tongue twisters', 'Synonyms under timer', 'Auditory analysis'],
    },
    {
      Icon: CrosshairIcon,
      color: '#34C48C', bg: 'rgba(52,196,140,.1)',
      title: 'Attention',
      desc: 'Sustained focus on a single task, rapid context switching, and resistance to distractions.',
      tags: ['Focus', 'Task switching', 'Interference control'],
      difficulty: 3,
      duration: '5–10 min',
      examples: ['Schulte tables', 'Dual task', 'Distractor suppression'],
    },
    {
      Icon: GlobeIcon,
      color: '#F5A623', bg: 'rgba(245,166,35,.1)',
      title: 'Language',
      desc: 'Vocabulary acquisition and retention across multiple languages using spaced repetition.',
      tags: ['Vocabulary', 'Spaced repetition', 'Multilingual'],
      difficulty: 2,
      duration: '10–20 min',
      examples: ['SRS flashcards', 'Contextual translation', 'Auditory recognition'],
    },
    {
      Icon: LayersIcon,
      color: '#F55454', bg: 'rgba(245,84,84,.1)',
      title: 'Processing speed',
      desc: 'Cognitive throughput: rapid decisions, instant classification, and reaction time training.',
      tags: ['Reaction time', 'Classification', 'Decisions under pressure'],
      difficulty: 5,
      duration: '5–8 min',
      examples: ['Rapid selection', 'Fuzzy patterns', 'Time pressure'],
    },
    {
      Icon: EyeIcon,
      color: '#0891B2', bg: 'rgba(8,145,178,.1)',
      title: 'Visual memory',
      desc: 'Encoding and reproducing visual patterns, spatial reasoning, and grid navigation.',
      tags: ['Patterns', 'Spatial', 'Navigation'],
      difficulty: 3,
      duration: '8–12 min',
      examples: ['Mirror shapes', 'Matrices', 'Grid routes'],
    },
  ],
  uz: [
    {
      Icon: BrainIcon,
      color: '#3D52F5', bg: 'rgba(61,82,245,.1)',
      title: 'Xotira',
      desc: "Assotsiativ eslab qolish, ketma-ketliklar, tezkor qayta tiklash va vaqt bosimi ostida ma'lumotni ushlab turish.",
      tags: ['Assotsiatsiyalar', 'Ketma-ketliklar', 'Ishchi xotira'],
      difficulty: 3,
      duration: '8–12 daq',
      examples: ["So'z → obraz", 'Raqamli zanjirlar', 'Katakcha pozitsiyalari'],
    },
    {
      Icon: MicIcon,
      color: '#9B59F5', bg: 'rgba(155,89,245,.1)',
      title: 'Nutq',
      desc: "Artikulyatsiya, gap qurishning tezligi, lug'at boyligini o'stirish va turli kontekstlarda tovush tanish.",
      tags: ['Artikulyatsiya', "Lug'at boyligi", 'Fonetika'],
      difficulty: 4,
      duration: '10–15 daq',
      examples: ['Tez aytishlar', 'Taymer ostida sinonimlar', 'Eshitish tahlili'],
    },
    {
      Icon: CrosshairIcon,
      color: '#34C48C', bg: 'rgba(52,196,140,.1)',
      title: 'Diqqat',
      desc: "Bitta vazifaga barqaror fokus, tez kontekst almashtirish va tashqi chalg'ituvchilarga bardoshlilik.",
      tags: ['Fokus', 'Vazifa almashtirish', 'Aralashuv nazorati'],
      difficulty: 3,
      duration: '5–10 daq',
      examples: ['Schulte jadvallari', 'Ikki vazifa', "Chalg'ituvchini bostirish"],
    },
    {
      Icon: GlobeIcon,
      color: '#F5A623', bg: 'rgba(245,166,35,.1)',
      title: 'Til',
      desc: "Interval takrorlash usuli bilan bir necha tilda lug'at o'zlashtirish va mustahkamlash.",
      tags: ["Lug'at", 'Interval takrorlash', "Ko'p tillilik"],
      difficulty: 2,
      duration: '10–20 daq',
      examples: ['SRS kartochkalar', 'Kontekstli tarjima', 'Eshitib aniqlash'],
    },
    {
      Icon: LayersIcon,
      color: '#F55454', bg: 'rgba(245,84,84,.1)',
      title: 'Qayta ishlash tezligi',
      desc: "Kognitiv unumdorlik: tez qarorlar, darhol tasniflash va reaksiya vaqtini trening qilish.",
      tags: ['Reaksiya vaqti', 'Tasniflash', 'Bosim ostida qarorlar'],
      difficulty: 5,
      duration: '5–8 daq',
      examples: ['Tez tanlov', "Noaniq naqshlar", 'Vaqt bosimi'],
    },
    {
      Icon: EyeIcon,
      color: '#0891B2', bg: 'rgba(8,145,178,.1)',
      title: 'Vizual xotira',
      desc: "Vizual naqshlarni eslab qolish va qayta tiklash, fazoviy fikrlash va katakcha navigatsiyasi.",
      tags: ['Naqshlar', 'Fazoviy', 'Navigatsiya'],
      difficulty: 3,
      duration: '8–12 daq',
      examples: ["Ko'zgu shakllar", 'Matritsalar', "Katakcha yo'llari"],
    },
  ],
}

const UI = {
  ru: { badge: 'Упражнения', title: 'Шесть направлений тренировки', subtitle: 'Каждый модуль развивает конкретную когнитивную функцию. Система выбирает нужные для вашей цели и подстраивает сложность.', diffLabel: 'Сложность', durationLabel: 'Сессия', examplesLabel: 'Примеры', ctaTitle: 'Готовы начать?', ctaText: 'Приложение с полным набором упражнений выйдет совсем скоро.', ctaBtn: 'Предзаписаться' },
  en: { badge: 'Exercises', title: 'Six training domains', subtitle: 'Each module develops a specific cognitive function. The system selects what fits your goal and adjusts difficulty automatically.', diffLabel: 'Difficulty', durationLabel: 'Session', examplesLabel: 'Examples', ctaTitle: 'Ready to start?', ctaText: 'The app with the full exercise set launches very soon.', ctaBtn: 'Join waitlist' },
  uz: { badge: 'Mashqlar', title: "Oltita trening yo'nalishi", subtitle: "Har bir modul aniq kognitiv funktsiyani rivojlantiradi. Tizim maqsadingizga mos narsalarni tanlaydi va qiyinlikni avtomatik sozlaydi.", diffLabel: 'Qiyinlik', durationLabel: 'Seans', examplesLabel: 'Misollar', ctaTitle: 'Boshlashga tayyormisiz?', ctaText: "To'liq mashqlar to'plami bilan ilova juda tez chiqadi.", ctaBtn: 'Predvaritelnaya zapis' },
}

function DiffDots({ level, color }) {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {[1, 2, 3, 4, 5].map(n => (
        <div key={n} style={{ width: 8, height: 8, borderRadius: '50%', background: n <= level ? color : 'rgba(0,0,0,.12)', transition: 'background .2s' }} />
      ))}
    </div>
  )
}

export default function ExercisesPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  const cats = CATS[lang] || CATS.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="ex2-hero">
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: c.text, lineHeight: 1.08, marginBottom: 14, letterSpacing: '-1px' }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 600 }}>{t.subtitle}</p>
          </div>

          {/* Grid */}
          <div className="ex2-grid">
            {cats.map((cat, i) => (
              <article key={cat.title} className="ex2-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <cat.Icon size={26} color={cat.color} strokeWidth={1.8} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, padding: '4px 9px', borderRadius: 999, background: cat.bg, color: cat.color }}>{t.durationLabel}: {cat.duration}</span>
                </div>

                <h3 style={{ color: c.text, fontSize: 19, fontWeight: 700, marginBottom: 8 }}>{cat.title}</h3>
                <p style={{ color: c.text2, fontSize: 13, lineHeight: 1.7, marginBottom: 14 }}>{cat.desc}</p>

                {/* Difficulty */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontSize: 12, color: c.text2, fontWeight: 500 }}>{t.diffLabel}</span>
                  <DiffDots level={cat.difficulty} color={cat.color} />
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {cat.tags.map(tag => (
                    <span key={tag} style={{ fontSize: 11, padding: '3px 9px', borderRadius: 999, background: isDark ? '#1A1D2E' : '#F5F6FA', color: c.text2, fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>

                {/* Examples */}
                <div style={{ borderTop: `1px solid ${c.border}`, paddingTop: 12 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: c.text2, marginBottom: 8, letterSpacing: .4 }}>{t.examplesLabel.toUpperCase()}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    {cat.examples.map(ex => (
                      <div key={ex} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: cat.color, flexShrink: 0 }} />
                        <span style={{ fontSize: 12, color: c.text2 }}>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="ex2-cta" style={{ background: 'linear-gradient(135deg,#3D52F5,#6A7BF7)', marginTop: 32 }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 22, fontWeight: 700, marginBottom: 6 }}>{t.ctaTitle}</h2>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 15 }}>{t.ctaText}</p>
            </div>
            <a href="mailto:hello@neuroxise.app?subject=Waitlist" className="ex2-cta-btn">{t.ctaBtn} →</a>
          </div>

        </div>
      </section>

      <style>{`
        .ex2-hero{margin-bottom:44px;animation:fadeUp .5s ease both}
        .ex2-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:0}
        .ex2-card{border:1px solid;border-radius:22px;padding:24px;animation:fadeUp .6s ease both;transition:transform .22s ease,box-shadow .22s ease}
        .ex2-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(61,82,245,.1)}
        .ex2-cta{border-radius:24px;padding:28px 36px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;animation:fadeUp .7s ease both}
        .ex2-cta-btn{background:#fff;color:#2B40D4;padding:12px 22px;border-radius:12px;text-decoration:none;font-weight:700;font-size:14px;white-space:nowrap;flex-shrink:0}
        .ex2-cta-btn:hover{background:#F0F2FF}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.ex2-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:620px){.ex2-grid{grid-template-columns:1fr}.ex2-cta{flex-direction:column}}
      `}</style>
    </SiteChrome>
  )
}
