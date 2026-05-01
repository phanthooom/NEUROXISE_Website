import { useState } from 'react'
import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'

const UI = {
  ru: {
    badge: 'Контакты',
    title: 'Свяжитесь с нами',
    subtitle: 'Отвечаем на общие вопросы в рабочие дни. По срочным медицинским вопросам обращайтесь к врачу.',
    channels: [
      { icon: '✉️', label: 'Общие вопросы', email: 'hello@neuroxise.app', note: 'Ответ в течение 1–2 дней' },
      { icon: '🤝', label: 'Партнёрства', email: 'partners@neuroxise.app', note: 'B2B, клиники, школы' },
      { icon: '📰', label: 'Пресса', email: 'press@neuroxise.app', note: 'СМИ и публикации' },
    ],
    formTitle: 'Написать напрямую',
    fields: {
      name: 'Ваше имя',
      email: 'Email',
      topic: 'Тема',
      message: 'Сообщение',
      topicOptions: ['Общий вопрос', 'Техническая проблема', 'Партнёрство', 'Пресса', 'Другое'],
    },
    send: 'Отправить',
    sent: 'Сообщение отправлено!',
    sentSub: 'Мы получили вашу форму и ответим в рабочие дни.',
    notice: 'Этот сайт не предназначен для экстренных медицинских консультаций. При необходимости обратитесь к специалисту.',
  },
  en: {
    badge: 'Contact',
    title: 'Get in touch',
    subtitle: 'We reply to general questions on business days. For urgent medical issues, please contact your clinician.',
    channels: [
      { icon: '✉️', label: 'General inquiries', email: 'hello@neuroxise.app', note: 'Response within 1–2 days' },
      { icon: '🤝', label: 'Partnerships', email: 'partners@neuroxise.app', note: 'B2B, clinics, schools' },
      { icon: '📰', label: 'Press', email: 'press@neuroxise.app', note: 'Media and publications' },
    ],
    formTitle: 'Send a message',
    fields: {
      name: 'Your name',
      email: 'Email',
      topic: 'Topic',
      message: 'Message',
      topicOptions: ['General question', 'Technical issue', 'Partnership', 'Press', 'Other'],
    },
    send: 'Send',
    sent: 'Message sent!',
    sentSub: 'We received your form and will reply on business days.',
    notice: 'This website is not for urgent medical advice. Please contact a qualified professional if needed.',
  },
  uz: {
    badge: 'Aloqa',
    title: "Biz bilan bog'laning",
    subtitle: "Ish kunlarida umumiy savollarga javob beramiz. Shoshilinch tibbiy masalalar uchun shifokoringizga murojaat qiling.",
    channels: [
      { icon: '✉️', label: 'Umumiy savollar', email: 'hello@neuroxise.app', note: '1–2 kun ichida javob' },
      { icon: '🤝', label: 'Hamkorlik', email: 'partners@neuroxise.app', note: 'B2B, klinikalar, maktablar' },
      { icon: '📰', label: 'Matbuot', email: 'press@neuroxise.app', note: 'OAV va nashrlar' },
    ],
    formTitle: 'Xabar yuborish',
    fields: {
      name: 'Ismingiz',
      email: 'Email',
      topic: 'Mavzu',
      message: 'Xabar',
      topicOptions: ['Umumiy savol', 'Texnik muammo', 'Hamkorlik', 'Matbuot', 'Boshqa'],
    },
    send: 'Yuborish',
    sent: 'Xabar yuborildi!',
    sentSub: "Formangizni oldik, ish kunlarida javob beramiz.",
    notice: "Bu sayt shoshilinch tibbiy maslahatlar uchun mo'ljallanmagan. Zarur bo'lsa mutaxassisga murojaat qiling.",
  },
}

export default function ContactPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = UI[lang] || UI.ru
  const f = t.fields

  const [form, setForm] = useState({ name: '', email: '', topic: f.topicOptions[0], message: '' })
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.topic}] ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`)
    window.location.href = `mailto:hello@neuroxise.app?subject=${subject}&body=${body}`
    setSent(true)
  }

  const inp = { background: isDark ? '#0C0E1A' : '#fff', borderColor: c.border, color: c.text }

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">

          {/* Header */}
          <div className="ct-head" style={{ animation: 'fadeUp .5s ease both' }}>
            <div style={{ display: 'inline-flex', padding: '6px 14px', borderRadius: 999, background: '#EEF0FF', color: '#3D52F5', fontSize: 13, fontWeight: 700, marginBottom: 16 }}>{t.badge}</div>
            <h1 style={{ fontSize: 'clamp(30px, 4.8vw, 52px)', color: c.text, lineHeight: 1.1, marginBottom: 14 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 17, lineHeight: 1.75, maxWidth: 560 }}>{t.subtitle}</p>
          </div>

          <div className="ct-layout">
            {/* Channel cards */}
            <div className="ct-channels">
              {t.channels.map((ch, i) => (
                <a key={ch.email} href={`mailto:${ch.email}`} className="ct-channel" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border, animationDelay: `${i * 90}ms` }}>
                  <span style={{ fontSize: 26 }}>{ch.icon}</span>
                  <div>
                    <div style={{ color: c.text, fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{ch.label}</div>
                    <div style={{ color: '#3D52F5', fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{ch.email}</div>
                    <div style={{ color: c.text2, fontSize: 12 }}>{ch.note}</div>
                  </div>
                </a>
              ))}

              {/* Notice */}
              <div className="ct-notice" style={{ background: isDark ? 'rgba(220,38,38,.1)' : '#FFF5F5', borderColor: isDark ? 'rgba(220,38,38,.25)' : '#FECACA' }}>
                <span style={{ fontSize: 18 }}>⚠️</span>
                <p style={{ color: isDark ? '#FCA5A5' : '#B91C1C', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.notice}</p>
              </div>
            </div>

            {/* Form */}
            <div className="ct-form-wrap" style={{ background: isDark ? '#141728' : '#fff', borderColor: c.border }}>
              {sent ? (
                <div className="ct-sent">
                  <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                  <h3 style={{ color: c.text, fontSize: 22, marginBottom: 8 }}>{t.sent}</h3>
                  <p style={{ color: c.text2, fontSize: 15 }}>{t.sentSub}</p>
                </div>
              ) : (
                <>
                  <h2 style={{ color: c.text, fontSize: 20, fontWeight: 700, marginBottom: 22 }}>{t.formTitle}</h2>
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                    <div className="ct-row">
                      <div className="ct-field">
                        <label className="ct-label" style={{ color: c.text2 }}>{f.name}</label>
                        <input required className="ct-inp" style={inp} value={form.name} onChange={set('name')} placeholder={f.name} />
                      </div>
                      <div className="ct-field">
                        <label className="ct-label" style={{ color: c.text2 }}>{f.email}</label>
                        <input required type="email" className="ct-inp" style={inp} value={form.email} onChange={set('email')} placeholder={f.email} />
                      </div>
                    </div>
                    <div className="ct-field">
                      <label className="ct-label" style={{ color: c.text2 }}>{f.topic}</label>
                      <select className="ct-inp" style={inp} value={form.topic} onChange={set('topic')}>
                        {f.topicOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div className="ct-field">
                      <label className="ct-label" style={{ color: c.text2 }}>{f.message}</label>
                      <textarea required className="ct-inp ct-textarea" style={inp} value={form.message} onChange={set('message')} placeholder={f.message} />
                    </div>
                    <button type="submit" className="ct-submit">{t.send} →</button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .ct-head{margin-bottom:44px}
        .ct-layout{display:grid;grid-template-columns:320px 1fr;gap:22px;align-items:start}
        .ct-channels{display:flex;flex-direction:column;gap:14px}
        .ct-channel{border:1px solid;border-radius:18px;padding:18px 20px;display:flex;align-items:flex-start;gap:14px;text-decoration:none;animation:fadeUp .6s ease both;transition:transform .2s ease}
        .ct-channel:hover{transform:translateY(-3px)}
        .ct-notice{border:1px solid;border-radius:14px;padding:14px 16px;display:flex;gap:10px;align-items:flex-start}
        .ct-form-wrap{border:1px solid;border-radius:24px;padding:30px;animation:fadeUp .6s ease both}
        .ct-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .ct-field{display:flex;flex-direction:column;gap:6px}
        .ct-label{font-size:13px;font-weight:600}
        .ct-inp{padding:11px 14px;border-radius:11px;border:1px solid;font-size:14px;outline:none;font-family:inherit;transition:border-color .2s}
        .ct-inp:focus{border-color:#3D52F5}
        .ct-textarea{resize:vertical;min-height:120px}
        .ct-submit{background:#3D52F5;color:#fff;border:none;padding:13px;border-radius:12px;font-weight:700;font-size:15px;cursor:pointer;transition:background .2s}
        .ct-submit:hover{background:#2B40D4}
        .ct-sent{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:260px;text-align:center;animation:fadeUp .5s ease both}
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        @media(max-width:960px){.ct-layout{grid-template-columns:1fr}.ct-row{grid-template-columns:1fr}}
      `}</style>
    </SiteChrome>
  )
}
