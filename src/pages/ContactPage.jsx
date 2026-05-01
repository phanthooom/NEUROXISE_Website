import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Контакты',
    title: 'Связаться с NEUROXISE',
    paragraphs: [
      'Общие вопросы по продукту и сайту — напишите на адрес ниже. Мы ответим в рабочие дни.',
      'Срочные медицинские вопросы этот канал не заменяет — обратитесь к своему врачу или в службу неотложной помощи.',
    ],
    primary: 'Общие запросы:',
    channels: ['Почта', 'Партнёрства', 'Пресса'],
  },
  en: {
    badge: 'Contact',
    title: 'Contact NEUROXISE',
    paragraphs: [
      'For general questions about the product or this website, use the address below. We reply on business days.',
      'This channel is not for urgent medical issues—please contact your clinician or emergency services.',
    ],
    primary: 'General inquiries:',
    channels: ['Email', 'Partnerships', 'Press'],
  },
  uz: {
    badge: 'Aloqa',
    title: 'NEUROXISE bilan bog‘lanish',
    paragraphs: [
      'Mahsulot yoki sayt bo‘yicha savollar uchun quyidagi manzilga yozing. Ish kunlarida javob beramiz.',
      'Shoshilinch tibbiy masalalar uchun bu kanal o‘rin emas — shifokoringiz yoki tez yordam xizmatiga murojaat qiling.',
    ],
    primary: 'Umumiy savollar:',
    channels: ['Email', 'Hamkorlik', 'Matbuot'],
  },
}

export default function ContactPage() {
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
      <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 8 }}>{t.primary}</p>
      <p style={{ fontSize: 16, marginBottom: 16 }}>
        <a href="mailto:hello@neuroxise.app?subject=Contact%20from%20website" style={{ color: '#3D52F5', fontWeight: 600 }}>
          hello@neuroxise.app
        </a>
      </p>
      <div className="contact-row">
        {t.channels.map((item, i) => (
          <div key={item} className="contact-pill" style={{ animationDelay: `${i * 80}ms` }}>{item}</div>
        ))}
      </div>
      <style>{`
        .contact-row{display:flex;gap:10px;flex-wrap:wrap}
        .contact-pill{padding:8px 12px;border-radius:999px;background:${isDark ? 'rgba(61,82,245,.18)' : '#EEF0FF'};color:#3D52F5;font-weight:600;font-size:13px;animation:fadeUp .45s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </SubPageLayout>
  )
}
