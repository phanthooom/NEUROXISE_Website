import { useState } from 'react'
import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'

const FAQ = {
  ru: [
    { cat: 'Начало', q: 'С чего начать тренировки?', a: 'Откройте приложение и пройдите короткий онбординг — он занимает 2–3 минуты. Система подберёт стартовую программу исходя из ваших целей и текущего уровня.' },
    { cat: 'Начало', q: 'Сколько времени нужно в день?', a: 'Рекомендуем 10–20 минут. Ключ — регулярность, а не длительность. Даже 10 минут каждый день дают лучший результат, чем час раз в неделю.' },
    { cat: 'Начало', q: 'Подходит ли NEUROXISE для пожилых?', a: 'Да. Упражнения разработаны с учётом разного уровня цифровой грамотности. Темп и сложность настраиваются индивидуально.' },
    { cat: 'Прогресс', q: 'Что означает показатель «Точность»?', a: 'Точность отражает процент правильных ответов в упражнении. Значение выше 80% — хороший уровень, выше 90% — сигнал, что можно переходить к более сложным заданиям.' },
    { cat: 'Прогресс', q: 'Что такое «Серия» и зачем она нужна?', a: 'Серия — это количество дней подряд с выполненной тренировкой. Она мотивирует поддерживать регулярность и отражает один из ключевых факторов прогресса.' },
    { cat: 'Прогресс', q: 'Как понять, что я развиваюсь?', a: 'Смотрите на динамику за 2–4 недели, а не на отдельные сессии. Постепенный рост точности и скорости реакции — верные признаки улучшений.' },
    { cat: 'Аккаунт', q: 'Как сменить язык интерфейса?', a: 'В настройках приложения выберите раздел «Язык» и переключитесь на нужный. Изменение применяется сразу без перезапуска.' },
    { cat: 'Аккаунт', q: 'Данные синхронизируются между устройствами?', a: 'Да, если вы авторизованы в аккаунте. Прогресс и статистика обновляются автоматически при наличии подключения к сети.' },
    { cat: 'Аккаунт', q: 'Что делать, если я забыл пароль?', a: 'На экране входа нажмите «Забыли пароль?» — мы отправим ссылку для сброса на вашу почту. Если письмо не пришло, проверьте папку «Спам».' },
    { cat: 'Тарифы', q: 'Что входит в бесплатный план?', a: 'Базовый набор упражнений, ежедневная статистика и один профиль. Без рекламы и ограничения по времени.' },
    { cat: 'Тарифы', q: 'Можно ли отменить Pro-подписку?', a: 'Да, в любой момент через настройки аккаунта. После отмены доступ сохраняется до конца оплаченного периода.' },
  ],
  en: [
    { cat: 'Getting started', q: 'How do I start training?', a: 'Open the app and complete the short onboarding — it takes 2–3 minutes. The system will suggest a starting program based on your goals and current level.' },
    { cat: 'Getting started', q: 'How much time do I need per day?', a: 'We recommend 10–20 minutes. Consistency matters more than duration. Even 10 minutes daily outperforms one hour once a week.' },
    { cat: 'Getting started', q: 'Is NEUROXISE suitable for older adults?', a: 'Yes. Exercises are designed with varying digital literacy in mind. Pace and difficulty adjust individually.' },
    { cat: 'Progress', q: 'What does the "Accuracy" metric mean?', a: 'Accuracy reflects the percentage of correct answers in an exercise. Above 80% is solid; above 90% means you are ready for harder tasks.' },
    { cat: 'Progress', q: 'What is a "Streak" and why does it matter?', a: 'A streak is the number of consecutive days you completed a session. It motivates consistency, which is one of the key drivers of progress.' },
    { cat: 'Progress', q: 'How do I know if I am improving?', a: 'Look at 2–4 week trends rather than individual sessions. Gradual increases in accuracy and reaction speed are reliable signs of improvement.' },
    { cat: 'Account', q: 'How do I change the interface language?', a: 'Go to Settings → Language and select your preferred language. The change applies immediately without a restart.' },
    { cat: 'Account', q: 'Does progress sync across devices?', a: 'Yes, if you are signed in. Progress and statistics update automatically when connected to the internet.' },
    { cat: 'Account', q: 'What if I forgot my password?', a: "On the login screen tap 'Forgot password?' and we'll send a reset link to your email. If it doesn't arrive, check your spam folder." },
    { cat: 'Billing', q: 'What is included in the free plan?', a: 'Core exercise set, daily stats, and one profile. No ads and no time limit.' },
    { cat: 'Billing', q: 'Can I cancel a Pro subscription?', a: 'Yes, at any time from account settings. After cancellation, access continues until the end of the paid period.' },
  ],
  uz: [
    { cat: 'Boshlash', q: 'Mashqlarni qanday boshlash kerak?', a: 'Ilovani oching va qisqa onboardingni bajaring — bu 2–3 daqiqa vaqt oladi. Tizim maqsadlaringiz va joriy darajangizga asoslanib dastur taklif etadi.' },
    { cat: 'Boshlash', q: 'Kuniga qancha vaqt kerak?', a: "Kuniga 10–20 daqiqa tavsiya etamiz. Muntazamlik davomiylikdan muhimroq. Haftada bir soat qilgandan ko'ra har kuni 10 daqiqa yaxshiroq natija beradi." },
    { cat: 'Boshlash', q: 'NEUROXISE keksa odamlarga mosmi?', a: "Ha. Mashqlar turli raqamli savodxonlik darajasini hisobga olgan holda ishlab chiqilgan. Sur'at va qiyinlik individual sozlanadi." },
    { cat: 'Natijalar', q: "\"Aniqlik\" ko'rsatkichi nimani anglatadi?", a: "Aniqlik mashqdagi to'g'ri javoblar foizini ko'rsatadi. 80% dan yuqori — yaxshi daraja; 90% dan yuqori — qiyinroq mashqlarga o'tish vaqti keldi." },
    { cat: 'Natijalar', q: "\"Seriya\" nima va nima uchun kerak?", a: "Seriya — ketma-ket mashq bajargan kunlar soni. U muntazamlikni motivatsiyalaydi, bu esa progress asosiy omillaridan biri." },
    { cat: 'Natijalar', q: "Rivojlanayotganimni qanday bilaman?", a: 'Alohida seanslar emas, 2–4 haftalik tendentsiyalarga qarang. Aniqlik va reaksiya tezligining asta-sekin oshishi yaxshilanish belgilaridir.' },
    { cat: 'Akkaunt', q: 'Interfeys tilini qanday almashtirish mumkin?', a: "Sozlamalar → Tilga o'ting va kerakli tilni tanlang. O'zgartirish qayta ishga tushirishsiz darhol qo'llaniladi." },
    { cat: 'Akkaunt', q: "Qurilmalar o'rtasida progress sinxronizatsiya qilinadi?", a: "Ha, agar akkauntingizga kirdingiz. Internet ulanishi borligi paytida progress va statistika avtomatik yangilanadi." },
    { cat: 'Akkaunt', q: 'Parolimni unutsam nima qilaman?', a: "Kirish ekranida \"Parolni unutdingizmi?\" tugmasini bosing — emailingizga tiklash havolasini yuboramiz. Xat kelmasa, spam papkasini tekshiring." },
    { cat: 'Tariflar', q: 'Bepul rejaga nima kiradi?', a: "Asosiy mashqlar to'plami, kunlik statistika va bitta profil. Reklama yo'q va vaqt chegarasi yo'q." },
    { cat: 'Tariflar', q: 'Pro obunasini bekor qilish mumkinmi?', a: "Ha, istalgan vaqtda akkaunt sozlamalaridan. Bekor qilingandan so'ng to'liq davr oxirigacha kirish saqlanadi." },
  ],
}

const UI = {
  ru: { badge: 'Справка', title: 'Центр помощи', subtitle: 'Быстрые ответы на частые вопросы.', searchPlaceholder: 'Поиск по вопросам…', allCat: 'Все', contactTitle: 'Не нашли ответ?', contactText: 'Напишите нам — разберёмся вместе.', contactBtn: 'Написать в поддержку' },
  en: { badge: 'Help', title: 'Help Center', subtitle: 'Quick answers to common questions.', searchPlaceholder: 'Search questions…', allCat: 'All', contactTitle: 'Still need help?', contactText: 'Send us a message and we will guide you.', contactBtn: 'Contact support' },
  uz: { badge: 'Yordam', title: 'Yordam markazi', subtitle: "Tez-tez so'raladigan savollarga tezkor javoblar.", searchPlaceholder: 'Savollarda qidirish…', allCat: 'Barchasi', contactTitle: 'Javob topilmadimi?', contactText: 'Yozing — birga hal qilamiz.', contactBtn: 'Yordamga yozish' },
}

function FaqItem({ item, isDark, c }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="hf-item" style={{ borderColor: c.border, background: isDark ? '#141728' : '#fff' }}>
      <button
        className="hf-q"
        onClick={() => setOpen(v => !v)}
        style={{ color: c.text }}
      >
        <span>{item.q}</span>
        <span className="hf-icon" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', color: '#3D52F5' }}>▾</span>
      </button>
      {open && (
        <div className="hf-a" style={{ color: c.text2 }}>{item.a}</div>
      )}
    </div>
  )
}

export default function HelpPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  usePageMeta(t.badge, t.subtitle)
  const allFaq = FAQ[lang] || FAQ.ru

  const cats = [t.allCat, ...Array.from(new Set(allFaq.map(f => f.cat)))]
  const [activeCat, setActiveCat] = useState(t.allCat)
  const [search, setSearch] = useState('')

  const filtered = allFaq.filter(f => {
    const matchCat = activeCat === t.allCat || f.cat === activeCat
    const q = search.toLowerCase()
    const matchSearch = !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
    return matchCat && matchSearch
  })

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Hero */}
          <div className="hf-hero" style={{ animation: 'fadeUp .5s ease both' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.1, marginBottom: 14 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, marginBottom: 28 }}>{t.subtitle}</p>
            <input
              className="hf-search"
              type="text"
              placeholder={t.searchPlaceholder}
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{ background: isDark ? '#0C0E1A' : '#fff', borderColor: c.border, color: c.text }}
            />
          </div>

          {/* Category tabs */}
          <div className="hf-tabs" style={{ animation: 'fadeUp .55s ease both' }}>
            {cats.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className="hf-tab"
                style={{
                  background: activeCat === cat ? '#3D52F5' : (isDark ? '#141728' : '#fff'),
                  color: activeCat === cat ? '#fff' : c.text2,
                  borderColor: activeCat === cat ? '#3D52F5' : c.border,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ list */}
          <div className="hf-list" style={{ animation: 'fadeUp .6s ease both' }}>
            {filtered.length === 0 ? (
              <p style={{ color: c.text2, textAlign: 'center', padding: '40px 0' }}>—</p>
            ) : (
              filtered.map((item, i) => (
                <FaqItem key={i} item={item} isDark={isDark} c={c} />
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="hf-contact" style={{ background: isDark ? '#101424' : '#EEF0FF', borderColor: c.border }}>
            <div>
              <h2 style={{ color: c.text, fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{t.contactTitle}</h2>
              <p style={{ color: c.text2, fontSize: 15 }}>{t.contactText}</p>
            </div>
            <a href="/contact" className="hf-btn">{t.contactBtn} →</a>
          </div>

        </div>
      </section>

      <style>{`
        .hf-hero{margin-bottom:28px}
        .hf-search{width:100%;max-width:560px;padding:13px 18px;border-radius:14px;border:1px solid;font-size:15px;outline:none;display:block;font-family:inherit;transition:border-color .2s}
        .hf-search:focus{border-color:#3D52F5}
        .hf-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
        .hf-tab{padding:7px 16px;border-radius:999px;border:1px solid;font-size:13px;font-weight:600;cursor:pointer;transition:all .18s ease;font-family:inherit}
        .hf-list{display:flex;flex-direction:column;gap:10px;margin-bottom:28px}
        .hf-item{border:1px solid;border-radius:16px;overflow:hidden}
        .hf-q{width:100%;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:18px 20px;background:transparent;border:none;cursor:pointer;text-align:left;font-size:15px;font-weight:600;font-family:inherit;line-height:1.4}
        .hf-icon{font-size:18px;flex-shrink:0;transition:transform .22s ease}
        .hf-a{padding:0 20px 18px;font-size:14px;line-height:1.75}
        .hf-contact{border:1px solid;border-radius:22px;padding:26px 30px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;animation:fadeUp .65s ease both}
        .hf-btn{background:#3D52F5;color:#fff;padding:12px 20px;border-radius:12px;text-decoration:none;font-weight:700;font-size:14px;white-space:nowrap;flex-shrink:0}
        .hf-btn:hover{background:#2B40D4}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:620px){.hf-contact{flex-direction:column}}
      `}</style>
    </SiteChrome>
  )
}
