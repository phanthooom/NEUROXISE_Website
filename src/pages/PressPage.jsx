import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import SubPageLayout from '../components/SubPageLayout'

const COPY = {
  ru: {
    badge: 'Пресса',
    title: 'Для СМИ и партнёров',
    paragraphs: [
      'Запросы пресс-кита, логотипов и комментариев для публикаций принимаем по почте. Укажите издание, срок и формат материала.',
      'Коммерческие предложения и коллаборации — в письме кратко опишите идею и контакты ответственного лица.',
    ],
    emailHint: 'Пресса:',
    mediaKit: ['Логотипы', 'Описание продукта', 'Комментарий команды'],
  },
  en: {
    badge: 'Press',
    title: 'Media & partners',
    paragraphs: [
      'For press kits, logos, or statements, email us with your outlet, deadline, and format.',
      'For partnerships or commercial ideas, include a short brief and a contact person.',
    ],
    emailHint: 'Press inbox:',
    mediaKit: ['Logos', 'Product brief', 'Team commentary'],
  },
  uz: {
    badge: 'Matbuot',
    title: 'OAV va hamkorlar',
    paragraphs: [
      'Press-kit, logotip yoki izohlar uchun xatda nashr, muddat va formatni ko‘rsating.',
      'Hamkorlik yoki tijoriy takliflar uchun qisqa tavsif va mas’ul shaxs kontaktlarini yozing.',
    ],
    emailHint: 'Matbuot pochtasi:',
    mediaKit: ['Logotiplar', 'Mahsulot tavsifi', 'Jamoa izohi'],
  },
}

export default function PressPage() {
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
      <p style={{ fontSize: 16, color: c.text2, lineHeight: 1.75, marginBottom: 8 }}>{t.emailHint}</p>
      <p style={{ fontSize: 16, marginBottom: 16 }}>
        <a href="mailto:press@neuroxise.app?subject=Press%20inquiry" style={{ color: '#3D52F5', fontWeight: 600 }}>
          press@neuroxise.app
        </a>
      </p>
      <div className="press-kit">
        {t.mediaKit.map((item, i) => (
          <span key={item} className="press-chip" style={{ animationDelay: `${i * 70}ms` }}>{item}</span>
        ))}
      </div>
      <style>{`
        .press-kit{display:flex;gap:10px;flex-wrap:wrap}
        .press-chip{padding:8px 12px;border-radius:999px;background:${isDark ? 'rgba(61,82,245,.18)' : '#EEF0FF'};color:#3D52F5;font-weight:600;font-size:13px;animation:fadeUp .45s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      `}</style>
    </SubPageLayout>
  )
}
