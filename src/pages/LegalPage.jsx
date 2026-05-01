import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'

const DOCS = {
  ru: {
    privacy: {
      title: 'Политика конфиденциальности',
      body: [
        'Эта страница — информационный шаблон для публичного лендинга NEUROXISE. Здесь должен быть размещён финальный текст политики конфиденциальности, согласованный с юридическим консультантом.',
        'На текущей версии сайта не собираются персональные данные через формы, не выполняется вход в аккаунт и не передаются медицинские сведения через веб-интерфейс.',
        'При появлении регистрации, оплаты, аналитики или обратной связи этот документ нужно обновить: указать цели обработки, правовые основания, сроки хранения, права субъекта данных и контакты ответственного лица.',
      ],
    },
    terms: {
      title: 'Условия использования',
      body: [
        'Эта страница — шаблон условий использования сайта и описания продукта NEUROXISE. Перед публикацией замените текст на утверждённый юридически.',
        'Контент лендинга носит информационный характер и не заменяет консультацию специалиста по здравоохранению.',
        'При запуске мобильного приложения, подписок или API добавьте разделы про лицензию, ограничение ответственности, интеллектуальную собственность и разрешение споров.',
      ],
    },
    cookies: {
      title: 'Файлы cookie',
      body: [
        'Краткий шаблон политики cookie. После подключения аналитики или рекламных пикселей обновите список используемых cookie и сроков хранения.',
        'Сейчас сайт работает как статическая SPA без собственных форм входа. Сторонние сервисы (например, хостинг или шрифты) могут иметь собственные политики.',
        'Вы можете настроить предпочтения в браузере: отключение сторонних cookie может ограничить часть функций сторонних встраиваний.',
      ],
    },
    placeholder: {
      title: 'Скоро',
      body: [
        'Раздел в подготовке. Для публикации добавьте актуальный контент.',
        'Вернуться на главную можно по ссылке ниже.',
      ],
    },
  },
  en: {
    privacy: {
      title: 'Privacy Policy',
      body: [
        'This page is a placeholder for the NEUROXISE public landing site. Replace it with a final privacy policy reviewed by qualified legal counsel.',
        'The current static site does not include login forms or health data collection through the web UI.',
        'If you add accounts, payments, analytics, or contact forms, update this document with purposes of processing, legal bases, retention, data subject rights, and a contact point.',
      ],
    },
    terms: {
      title: 'Terms of Service',
      body: [
        'This page is a placeholder for terms governing use of this website and the NEUROXISE product description. Replace with approved legal text before relying on it.',
        'Landing content is informational and does not replace professional medical or therapeutic advice.',
        'When you ship a mobile app, subscriptions, or APIs, add sections on licensing, liability, intellectual property, and dispute resolution.',
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      body: [
        'Short cookie policy template. After enabling analytics or marketing tags, list each cookie, purpose, and duration.',
        'This SPA does not implement its own authentication cookies. Third parties (e.g. font CDN or hosting) may have separate policies.',
        'Browser settings can block third-party cookies; some embeds may degrade accordingly.',
      ],
    },
    placeholder: {
      title: 'Coming soon',
      body: [
        'This section is under construction.',
        'Use the link below to return to the home page.',
      ],
    },
  },
  uz: {
    privacy: {
      title: 'Maxfiylik siyosati',
      body: [
        'Bu sahifa NEUROXISE ochiq landing uchun namuna matn. Yakuniy matnni huquqiy maslahatchi bilan tasdiqlang.',
        'Hozirgi statik saytda akkaunt, shakllar yoki tibbiy maʼlumotlarni yigʻish yo‘q.',
        'Roʻyxatdan oʻtish, toʻlov, analitika yoki aloqa formasi qoʻshilsa, hujjatni yangilang: maqsadlar, saqlash muddati, foydalanuvchi huquqlari va masʼul shaxs.',
      ],
    },
    terms: {
      title: 'Foydalanish shartlari',
      body: [
        'Sayt va mahsulot boʻyicha shartlar uchun namuna. Ishonchli huquqiy matn bilan almashtiring.',
        'Landing maʼlumot xarakterida va shifokor maslahatining oʻrnini bosmaydi.',
        'Ilova, obuna yoki API paydo boʻlganda litsenziya, javobgarlik cheklovlari va nizolar boʻlimlarini qoʻshing.',
      ],
    },
    cookies: {
      title: 'Cookie fayllari',
      body: [
        'Cookie siyosati namunasi. Analitika yoki reklama qoʻshilgach, har bir cookie va muddatni koʻrsating.',
        'SPA oʻz cookie autentifikatsiyasidan foydalanmaydi. Uchinchi tomonlar alohida siyosatga ega boʻlishi mumkin.',
        'Brauzer sozlamalari orqali cookie cheklanishi mumkin.',
      ],
    },
    placeholder: {
      title: 'Tez orada',
      body: [
        'Boʻlim tayyorlanmoqda.',
        'Bosh sahifaga havola ostida.',
      ],
    },
  },
}

export default function LegalPage({ slug }) {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const locale = DOCS[lang] || DOCS.ru
  const doc = locale[slug] || locale.placeholder
  usePageMeta(doc.title)

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '120px 24px 80px',
        background: isDark
          ? 'linear-gradient(160deg, #0C0E1A 0%, #111428 50%, #0C0E1A 100%)'
          : 'linear-gradient(160deg, #fff 0%, #F0F2FF 50%, #F5F6FA 100%)',
      }}
    >
      <article className="container" style={{ maxWidth: 720 }}>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, color: c.text, marginBottom: 20, letterSpacing: '-0.5px' }}>
          {doc.title}
        </h1>
        {doc.body.map((p, i) => (
          <p key={i} style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 16 }}>
            {p}
          </p>
        ))}
        <p style={{ marginTop: 32 }}>
          <Link
            to="/"
            style={{
              color: '#3D52F5',
              fontWeight: 600,
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            ← NEUROXISE
          </Link>
        </p>
      </article>
    </div>
  )
}
