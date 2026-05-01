import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { TargetIcon, LayersIcon, FlameIcon, BarChartIcon, RefreshIcon, BrainIcon, MicIcon, CrosshairIcon, TrendingUpIcon } from '../components/Icons'
import { usePageMeta } from '../hooks/usePageMeta'

const STEP_META = [
  { Icon: TargetIcon,   color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: LayersIcon,   color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: FlameIcon,    color: '#34C48C', bg: '#E8FAF3' },
  { Icon: BarChartIcon, color: '#F5A623', bg: '#FEF4E2' },
  { Icon: RefreshIcon,  color: '#F55454', bg: '#FEF0F0' },
]

const OUTCOME_META = [
  { Icon: BrainIcon,      color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: MicIcon,        color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: CrosshairIcon,  color: '#34C48C', bg: '#E8FAF3' },
  { Icon: TrendingUpIcon, color: '#F5A623', bg: '#FEF4E2' },
]

const STEPS = {
  ru: [
    {
      num: '01',
      title: 'Выберите цель',
      desc: 'Ответьте на 5 коротких вопросов: что хотите улучшить, сколько времени готовы тратить и какой у вас текущий уровень. Никаких тестов на скорость — просто честный разговор.',
      detail: 'Память · Речь · Внимание · Язык',
      color: '#3D52F5',
      bg: 'rgba(61,82,245,.1)',
      icon: '🎯',
    },
    {
      num: '02',
      title: 'Получите программу',
      desc: 'Система составляет персональный план: нужные упражнения в правильном порядке, с постепенным ростом сложности. План обновляется по мере вашего прогресса.',
      detail: '10–20 минут в день',
      color: '#9B59F5',
      bg: 'rgba(155,89,245,.1)',
      icon: '📋',
    },
    {
      num: '03',
      title: 'Тренируйтесь каждый день',
      desc: 'Короткие сессии встраиваются в любой распорядок. Упражнения меняются, чтобы не было привыкания — мозг должен продолжать адаптироваться, а не просто повторять.',
      detail: 'Офлайн · Без рекламы · Без давления',
      color: '#34C48C',
      bg: 'rgba(52,196,140,.1)',
      icon: '⚡',
    },
    {
      num: '04',
      title: 'Следите за динамикой',
      desc: 'После каждой сессии вы видите точность, скорость реакции и серию дней. Еженедельный отчёт показывает, какие навыки растут быстрее, а на что стоит обратить внимание.',
      detail: 'Точность · Серия · Прогресс по неделям',
      color: '#F5A623',
      bg: 'rgba(245,166,35,.1)',
      icon: '📊',
    },
    {
      num: '05',
      title: 'Корректируйте план',
      desc: 'Если какой-то блок даётся легко — система автоматически повышает планку. Если что-то застопорилось — перестраивает приоритеты. Вы всегда можете задать направление вручную.',
      detail: 'Адаптивный алгоритм',
      color: '#F55454',
      bg: 'rgba(245,84,84,.1)',
      icon: '🔄',
    },
  ],
  en: [
    {
      num: '01',
      title: 'Set your goal',
      desc: "Answer 5 short questions: what you want to improve, how much time you have, and where you are starting from. No speed tests — just an honest conversation.",
      detail: 'Memory · Speech · Focus · Language',
      color: '#3D52F5',
      bg: 'rgba(61,82,245,.1)',
      icon: '🎯',
    },
    {
      num: '02',
      title: 'Get your program',
      desc: 'The system builds a personal plan: the right exercises in the right order, with gradual difficulty increases. The plan adapts as you improve.',
      detail: '10–20 minutes per day',
      color: '#9B59F5',
      bg: 'rgba(155,89,245,.1)',
      icon: '📋',
    },
    {
      num: '03',
      title: 'Train every day',
      desc: "Short sessions fit any schedule. Exercises rotate so there's no habituation — your brain keeps adapting rather than just repeating.",
      detail: 'Offline · No ads · No pressure',
      color: '#34C48C',
      bg: 'rgba(52,196,140,.1)',
      icon: '⚡',
    },
    {
      num: '04',
      title: 'Track your progress',
      desc: 'After every session you see accuracy, reaction speed, and your streak. Weekly reports show which skills are growing fastest and where to focus next.',
      detail: 'Accuracy · Streak · Weekly trends',
      color: '#F5A623',
      bg: 'rgba(245,166,35,.1)',
      icon: '📊',
    },
    {
      num: '05',
      title: 'Adjust the plan',
      desc: "If something feels easy, the system raises the bar automatically. If you hit a plateau, it reshuffles priorities. You can always steer manually.",
      detail: 'Adaptive algorithm',
      color: '#F55454',
      bg: 'rgba(245,84,84,.1)',
      icon: '🔄',
    },
  ],
  uz: [
    {
      num: '01',
      title: "Maqsadingizni belgilang",
      desc: "5 ta qisqa savolga javob bering: nimani yaxshilamoqchisiz, qancha vaqt sarflashga tayyorsiz va hozirgi darajangiz qanday. Tezlik testlari yo'q — faqat halol suhbat.",
      detail: "Xotira · Nutq · Diqqat · Til",
      color: '#3D52F5',
      bg: 'rgba(61,82,245,.1)',
      icon: '🎯',
    },
    {
      num: '02',
      title: "Dasturingizni oling",
      desc: "Tizim shaxsiy reja tuzadi: to'g'ri tartibda, qiyinlik asta-sekin oshib boradi. Plan sizning o'sishingizga qarab yangilanib turadi.",
      detail: "Kuniga 10–20 daqiqa",
      color: '#9B59F5',
      bg: 'rgba(155,89,245,.1)',
      icon: '📋',
    },
    {
      num: '03',
      title: "Har kuni mashq qiling",
      desc: "Qisqa seanslar har qanday jadvalga sig'adi. Mashqlar almashadi — miya odatlanmasligi uchun, doimo yangi narsa o'rganadi.",
      detail: "Oflayn · Reklamasiz · Bossimsiz",
      color: '#34C48C',
      bg: 'rgba(52,196,140,.1)',
      icon: '⚡',
    },
    {
      num: '04',
      title: "Dinamikangizni kuzating",
      desc: "Har seansdan so'ng aniqlik, reaksiya tezligi va seriyani ko'rasiz. Haftalik hisobot qaysi ko'nikmalar tezroq o'sayotganini ko'rsatadi.",
      detail: "Aniqlik · Seriya · Haftalik tendentsiyalar",
      color: '#F5A623',
      bg: 'rgba(245,166,35,.1)',
      icon: '📊',
    },
    {
      num: '05',
      title: "Rejani moslang",
      desc: "Biror narsa oson bo'lsa — tizim avtomatik qiyinlashtiradi. Agar to'xtab qolsangiz — ustuvorliklarni qayta tartibga soladi. Qo'lda ham yo'naltira olasiz.",
      detail: "Adaptiv algoritm",
      color: '#F55454',
      bg: 'rgba(245,84,84,.1)',
      icon: '🔄',
    },
  ],
}

const OUTCOMES = {
  ru: [
    { icon: '🧠', title: 'Острее мышление', desc: 'Задачи, которые раньше требовали усилий, становятся автоматическими.' },
    { icon: '🗣️', title: 'Беглая речь', desc: 'Слова находятся быстрее, фразы строятся точнее и уверенно.' },
    { icon: '🎯', title: 'Устойчивое внимание', desc: 'Дольше удерживаете фокус и быстрее возвращаетесь после отвлечений.' },
    { icon: '📈', title: 'Видимый прогресс', desc: 'Цифры и графики подтверждают то, что вы чувствуете.' },
  ],
  en: [
    { icon: '🧠', title: 'Sharper thinking', desc: 'Tasks that once took effort become automatic.' },
    { icon: '🗣️', title: 'Fluent speech', desc: 'Words come faster, sentences land more precisely and confidently.' },
    { icon: '🎯', title: 'Sustained focus', desc: 'You hold concentration longer and recover it faster after distractions.' },
    { icon: '📈', title: 'Visible progress', desc: 'Numbers and charts confirm what you feel happening.' },
  ],
  uz: [
    { icon: '🧠', title: "O'tkir fikrlash", desc: "Oldin kuch talab qilgan vazifalar avtomatik bo'lib qoladi." },
    { icon: '🗣️', title: "Ravon nutq", desc: "So'zlar tezroq topiladi, gaplar aniqroq va ishonch bilan quriladi." },
    { icon: '🎯', title: "Barqaror diqqat", desc: "Fokusni uzoqroq ushlab, chalg'ishdan tezroq qaytasiz." },
    { icon: '📈', title: "Ko'rinadigan natija", desc: "Raqamlar va grafiklar his qilayotganingizni tasdiqlaydi." },
  ],
}

const UI = {
  ru: { badge: 'Как это работает', title: 'Путь к результату', subtitle: 'Пять шагов — от первого запуска до заметных изменений в концентрации, памяти и речи.', outcomesTitle: 'Что меняется' },
  en: { badge: 'How it works', title: 'The path to real results', subtitle: 'Five steps — from first launch to noticeable changes in focus, memory, and speech.', outcomesTitle: 'What changes' },
  uz: { badge: "Qanday ishlaydi", title: "Natijaga yo'l", subtitle: "Besh qadam — birinchi ishga tushirishdan diqqat, xotira va nutqdagi ko'rinadigan o'zgarishlargacha.", outcomesTitle: "Nima o'zgaradi" },
}

export default function HowItWorksPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  usePageMeta(t.badge, t.subtitle)
  const steps = (STEPS[lang] || STEPS.ru).map((s, i) => ({ ...s, ...STEP_META[i] }))
  const outcomes = (OUTCOMES[lang] || OUTCOMES.ru).map((o, i) => ({ ...o, ...OUTCOME_META[i] }))

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="hiw-hero">
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: c.text, lineHeight: 1.08, marginBottom: 14, letterSpacing: '-1px' }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 580 }}>{t.subtitle}</p>
          </div>

          {/* Steps */}
          <div className="hiw-steps">
            {steps.map((step, i) => (
              <div key={step.num} className="hiw-step" style={{ animationDelay: `${i * 80}ms` }}>
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hiw-connector" style={{ background: `linear-gradient(180deg, ${step.color}60, ${steps[i+1].color}40)` }} />
                )}
                <div className="hiw-step-inner" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
                  <div className="hiw-step-left">
                    <div className="hiw-icon-wrap" style={{ background: step.bg }}>
                      <step.Icon size={24} color={step.color} strokeWidth={1.8} />
                    </div>
                    <div className="hiw-num" style={{ color: step.color }}>{step.num}</div>
                  </div>
                  <div className="hiw-step-body">
                    <h3 style={{ color: c.text, fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ color: c.text2, fontSize: 14, lineHeight: 1.75, marginBottom: 12 }}>{step.desc}</p>
                    <span style={{ fontSize: 12, fontWeight: 600, padding: '4px 11px', borderRadius: 999, background: step.bg, color: step.color }}>{step.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Outcomes */}
          <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginTop: 56, marginBottom: 20 }}>{t.outcomesTitle}</h2>
          <div className="hiw-outcomes">
            {outcomes.map((o, i) => (
              <div key={o.title} className="hiw-outcome" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: o.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 }}>
                  <o.Icon size={22} color={o.color} strokeWidth={1.8} />
                </div>
                <h3 style={{ color: c.text, fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{o.title}</h3>
                <p style={{ color: c.text2, fontSize: 13, lineHeight: 1.65 }}>{o.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .hiw-hero{margin-bottom:48px;animation:fadeUp .5s ease both}
        .hiw-steps{display:flex;flex-direction:column;gap:0;position:relative;max-width:760px}
        .hiw-step{position:relative;padding-bottom:0;animation:fadeUp .6s ease both}
        .hiw-connector{position:absolute;left:28px;top:72px;width:2px;height:calc(100% - 24px);z-index:0;border-radius:2px}
        .hiw-step-inner{border:1px solid;border-radius:20px;padding:22px 24px;display:flex;gap:20px;align-items:flex-start;margin-bottom:14px;position:relative;z-index:1;transition:transform .2s ease}
        .hiw-step-inner:hover{transform:translateX(4px)}
        .hiw-step-left{display:flex;flex-direction:column;align-items:center;gap:8px;flex-shrink:0}
        .hiw-icon-wrap{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .hiw-num{font-size:11px;font-weight:800;letter-spacing:.5px}
        .hiw-step-body{flex:1}
        .hiw-outcomes{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .hiw-outcome{border:1px solid;border-radius:18px;padding:22px;animation:fadeUp .6s ease both;transition:transform .2s ease}
        .hiw-outcome:hover{transform:translateY(-4px)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.hiw-outcomes{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:620px){.hiw-outcomes{grid-template-columns:1fr}.hiw-step-inner{flex-direction:column}.hiw-connector{display:none}}
      `}</style>
    </SiteChrome>
  )
}
