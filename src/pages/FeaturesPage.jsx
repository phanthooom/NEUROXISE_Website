import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { TargetIcon, BarChartIcon, GamepadIcon, GlobeIcon, ShieldIcon, ActivityIcon, CheckCircleIcon } from '../components/Icons'

const FEATURE_META = [
  { Icon: TargetIcon,   color: '#3D52F5', bg: '#EEF0FF' },
  { Icon: BarChartIcon, color: '#34C48C', bg: '#E8FAF3' },
  { Icon: GamepadIcon,  color: '#9B59F5', bg: '#F3EEFF' },
  { Icon: GlobeIcon,    color: '#F5A623', bg: '#FEF4E2' },
  { Icon: ShieldIcon,   color: '#F55454', bg: '#FEF0F0' },
  { Icon: ActivityIcon, color: '#3D52F5', bg: '#EEF0FF' },
]

const UI = {
  ru: {
    badge: 'Возможности',
    title: 'Всё для эффективных тренировок',
    subtitle: 'NEUROXISE объединяет персонализацию, нейронауку и красивый интерфейс, чтобы тренировки были регулярными и результативными.',
    ctaLabel: 'Попробовать бесплатно',
    features: [
      {
        title: 'Персональный план',
        desc: 'Планы на основе ИИ, адаптированные к вашим когнитивным целям, уровню и доступному времени.',
        bullets: ['Оценка когнитивного профиля', 'Динамическая сложность', 'Адаптация под расписание'],
      },
      {
        title: 'Отслеживание прогресса',
        desc: 'Визуальная аналитика показывает точность, серии и еженедельный прогресс по всем категориям.',
        bullets: ['Графики по каждой категории', 'Статистика за неделю и месяц', 'Сравнение с прошлым периодом'],
      },
      {
        title: 'Геймификация',
        desc: 'Игровые упражнения поддерживают высокую мотивацию и при этом дают реальный терапевтический эффект.',
        bullets: ['Награды и достижения', 'Ежедневные вызовы', 'Рейтинги и соревнования'],
      },
      {
        title: 'Мультиязычность',
        desc: 'Полная поддержка русского, английского и узбекского языков — доступно широкой аудитории.',
        bullets: ['Интерфейс на 3 языках', 'Упражнения с учётом языка', 'Автосохранение выбора'],
      },
      {
        title: 'Приватность и офлайн',
        desc: 'Данные хранятся на устройстве. Основные упражнения работают полностью офлайн без учётной записи.',
        bullets: ['Нет рекламы, нет трекеров', 'Офлайн без аккаунта', 'Шифрование данных'],
      },
      {
        title: 'Ежедневные серии',
        desc: 'Формируйте устойчивые привычки с помощью счётчика серий и умных напоминаний под ваш график.',
        bullets: ['Умные уведомления', 'Счётчик непрерывных дней', 'Гибкое время напоминания'],
      },
    ],
    differTitle: 'Почему NEUROXISE, а не другие?',
    differs: [
      { label: 'Наука в основе', desc: 'Каждое упражнение разработано с опорой на рецензированные исследования.' },
      { label: 'Без подписки навязчиво', desc: 'Честная модель: базовый набор всегда бесплатен, премиум — по выбору.' },
      { label: 'Работает офлайн', desc: 'Тренируйтесь в метро, самолёте и там, где нет интернета.' },
      { label: 'Тёмная тема', desc: 'Полная поддержка светлого и тёмного режима для комфорта глаз.' },
    ],
    ctaBanner: 'Готовы начать тренировки?',
    ctaSub: 'Присоединяйтесь к тысячам пользователей, которые уже тренируют мозг с NEUROXISE.',
    ctaBtn: 'Открыть приложение',
  },
  en: {
    badge: 'Features',
    title: 'Everything you need to train smarter',
    subtitle: 'NEUROXISE combines personalization, neuroscience, and a polished UX to keep training effective and sustainable.',
    ctaLabel: 'Try for free',
    features: [
      {
        title: 'Personalized Training',
        desc: 'AI-driven plans tailored to your specific cognitive goals, difficulty level, and daily availability.',
        bullets: ['Cognitive profile assessment', 'Dynamic difficulty scaling', 'Schedule-aware adaptation'],
      },
      {
        title: 'Progress Tracking',
        desc: 'Visual analytics show your accuracy, streaks and weekly improvements across all exercise categories.',
        bullets: ['Per-category charts', 'Weekly and monthly stats', 'Period-over-period comparison'],
      },
      {
        title: 'Gamified Exercises',
        desc: 'Engaging game-based activities keep motivation high while delivering real therapeutic benefit.',
        bullets: ['Rewards and achievements', 'Daily challenges', 'Leaderboards and competitions'],
      },
      {
        title: 'Multilingual Support',
        desc: 'Full support for English, Russian and Uzbek — accessible to a broad global user base.',
        bullets: ['Interface in 3 languages', 'Language-aware exercises', 'Auto-saved language choice'],
      },
      {
        title: 'Private & Offline',
        desc: 'Your data stays on your device. Core exercises work fully offline without any account required.',
        bullets: ['No ads, no trackers', 'Offline without account', 'End-to-end data encryption'],
      },
      {
        title: 'Daily Streaks',
        desc: 'Build lasting habits with streak tracking and smart reminders that adapt to your schedule.',
        bullets: ['Smart notifications', 'Streak day counter', 'Flexible reminder time'],
      },
    ],
    differTitle: 'Why NEUROXISE over others?',
    differs: [
      { label: 'Science-backed', desc: 'Every exercise is grounded in peer-reviewed cognitive science research.' },
      { label: 'Fair pricing', desc: 'Honest model: core features free forever, premium is optional.' },
      { label: 'Works offline', desc: 'Train on the subway, on a plane, or anywhere without internet.' },
      { label: 'Dark mode', desc: 'Full light and dark theme support for comfortable use any time of day.' },
    ],
    ctaBanner: 'Ready to start training?',
    ctaSub: 'Join thousands of users already training their brain with NEUROXISE.',
    ctaBtn: 'Open the app',
  },
  uz: {
    badge: 'Imkoniyatlar',
    title: "Samarali mashq uchun kerakli hamma narsa",
    subtitle: "NEUROXISE shaxsiylashtirish, nevrologiya va chiroyli UX ni birlashtiradi — mashqlar samarali va barqaror bo'lishi uchun.",
    ctaLabel: "Bepul sinab ko'rish",
    features: [
      {
        title: 'Shaxsiy reja',
        desc: "Sun'iy intellekt asosidagi rejalar sizning kognitiv maqsadlaringiz, darajangiz va vaqtingizga moslashtirilgan.",
        bullets: ['Kognitiv profil baholash', "Dinamik qiyinchilik moslashuvi", "Jadvalga mos sozlash"],
      },
      {
        title: "Taraqqiyotni kuzatish",
        desc: "Vizual analitika barcha kategoriyalar bo'yicha aniqlik, serialar va haftalik o'sishni ko'rsatadi.",
        bullets: ["Har bir kategoriya bo'yicha grafiklar", 'Haftalik va oylik statistika', "Davrlar bo'yicha solishtirish"],
      },
      {
        title: 'Gamifikatsiya',
        desc: "O'yin asosidagi mashqlar yuqori motivatsiyani saqlab, haqiqiy terapevtik foyda keltiradi.",
        bullets: ["Mukofotlar va yutuqlar", 'Kunlik vazifalar', "Reytinglar va musobaqalar"],
      },
      {
        title: "Ko'p tillilik",
        desc: "O'zbek, rus va ingliz tillarini to'liq qo'llab-quvvatlash — keng auditoriya uchun qulay.",
        bullets: ["3 tilda interfeys", "Tilga mos mashqlar", "Tanlov avtomatik saqlanadi"],
      },
      {
        title: "Maxfiylik va oflayn",
        desc: "Ma'lumotlar qurilmangizda saqlanadi. Asosiy mashqlar hisob yaratmasdan oflayn ishlaydi.",
        bullets: ["Reklama yo'q, kuzatuvchi yo'q", "Hisobsiz oflayn rejim", "Ma'lumotlar shifrlash"],
      },
      {
        title: 'Kunlik serialar',
        desc: "Seriyani kuzatish va aqlli eslatmalar yordamida uzoq muddatli odatlar shakllantiring.",
        bullets: ["Aqlli bildirishnomalar", "Ketma-ket kunlar hisoblagichi", "Moslashuvchan eslatma vaqti"],
      },
    ],
    differTitle: "Nima uchun NEUROXISE?",
    differs: [
      { label: "Ilmiy asosda", desc: "Har bir mashq ko'rib chiqilgan kognitiv fan tadqiqotlariga asoslanadi." },
      { label: "Adolatli narx", desc: "Halol model: asosiy funksiyalar doim bepul, premium ixtiyoriy." },
      { label: "Oflayn ishlaydi", desc: "Metro, samolyot yoki internetsiz joylarda mashq qiling." },
      { label: "Qorong'u mavzu", desc: "Istalgan vaqtda qulay foydalanish uchun yorug' va qorong'u mavzular." },
    ],
    ctaBanner: "Mashqlarni boshlashga tayyormisiz?",
    ctaSub: "NEUROXISE bilan allaqachon miyasini mashq qilayotgan minglab foydalanuvchilarga qo'shiling.",
    ctaBtn: "Ilovani ochish",
  },
}

export default function FeaturesPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="fp-hero" style={{ animation: 'fadeUp .5s ease both' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(30px, 5vw, 56px)', color: c.text, lineHeight: 1.08, marginBottom: 16, letterSpacing: '-1px', maxWidth: 700 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 18, lineHeight: 1.75, maxWidth: 600, marginBottom: 28 }}>{t.subtitle}</p>
          </div>

          {/* Feature cards */}
          <div className="fp-grid">
            {t.features.map((feat, i) => {
              const { Icon, color, bg } = FEATURE_META[i]
              return (
                <div key={feat.title} className="fp-card" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 70}ms` }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                    <Icon size={24} color={color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ color: c.text, fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{feat.title}</h3>
                  <p style={{ color: c.text2, fontSize: 14, lineHeight: 1.65, marginBottom: 16 }}>{feat.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                    {feat.bullets.map(b => (
                      <li key={b} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <CheckCircleIcon size={15} color={color} strokeWidth={2} />
                        <span style={{ color: c.text2, fontSize: 13 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Differentiators strip */}
          <h2 style={{ color: c.text, fontSize: 22, fontWeight: 700, marginTop: 56, marginBottom: 20 }}>{t.differTitle}</h2>
          <div className="fp-differ-grid">
            {t.differs.map((d, i) => (
              <div key={d.label} className="fp-differ-card" style={{ background: isDark ? '#101424' : '#F5F6FF', borderColor: c.border, animationDelay: `${i * 80}ms` }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#3D52F5', flexShrink: 0, marginTop: 4 }} />
                <div>
                  <div style={{ color: c.text, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{d.label}</div>
                  <div style={{ color: c.text2, fontSize: 13, lineHeight: 1.6 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA banner */}
          <div className="fp-cta" style={{ background: 'linear-gradient(135deg,#3D52F5 0%,#6A7BF7 60%,#9DA8F5 100%)', animation: 'fadeUp .7s ease both' }}>
            <div>
              <h2 style={{ color: '#fff', fontSize: 'clamp(22px,3vw,32px)', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px' }}>{t.ctaBanner}</h2>
              <p style={{ color: 'rgba(255,255,255,.75)', fontSize: 16, lineHeight: 1.6 }}>{t.ctaSub}</p>
            </div>
            <a href="/" className="fp-cta-btn">{t.ctaBtn} →</a>
          </div>

        </div>
      </section>

      <style>{`
        .fp-hero{text-align:center;margin-bottom:52px}
        .fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .fp-card{border:1px solid;border-radius:20px;padding:26px 24px;animation:fadeUp .6s ease both;transition:transform .2s ease,box-shadow .2s ease}
        .fp-card:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(0,0,0,.08)}
        .fp-differ-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:52px}
        .fp-differ-card{border:1px solid;border-radius:16px;padding:18px 20px;display:flex;gap:14px;align-items:flex-start;animation:fadeUp .6s ease both;transition:transform .2s ease}
        .fp-differ-card:hover{transform:translateY(-3px)}
        .fp-cta{border-radius:24px;padding:40px 44px;display:flex;align-items:center;justify-content:space-between;gap:28px;flex-wrap:wrap}
        .fp-cta-btn{background:#fff;color:#3D52F5;padding:13px 22px;border-radius:13px;text-decoration:none;font-weight:700;font-size:15px;white-space:nowrap;flex-shrink:0;transition:opacity .2s}
        .fp-cta-btn:hover{opacity:.88}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.fp-grid{grid-template-columns:repeat(2,1fr)}.fp-differ-grid{grid-template-columns:1fr}}
        @media(max-width:580px){.fp-grid{grid-template-columns:1fr}.fp-cta{flex-direction:column;text-align:center}}
      `}</style>
    </SiteChrome>
  )
}
