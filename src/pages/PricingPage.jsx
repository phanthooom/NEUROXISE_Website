import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'
import { CheckCircleIcon } from '../components/Icons'

const COPY = {
  ru: {
    badge: 'Цены',
    title: 'Инвестируйте в свой мозг',
    subtitle: 'Начните с бесплатной базы или раскройте весь потенциал с подпиской Pro. Никаких скрытых платежей.',
    plans: [
      { 
        name: 'Starter', 
        price: 'Бесплатно', 
        period: 'навсегда',
        desc: 'Отличный старт для знакомства с тренировками.',
        features: ['Базовые упражнения', 'Простая статистика', '1 профиль', 'Поддержка по email'],
        cta: 'Начать бесплатно',
        highlight: false
      },
      { 
        name: 'Pro', 
        price: '$9', 
        period: 'в месяц',
        desc: 'Максимум возможностей для ежедневного роста.',
        features: ['Все упражнения (50+)', 'Персональная программа', 'Продвинутая аналитика', 'Без рекламы', 'Приоритетная поддержка'],
        cta: 'Попробовать Pro',
        highlight: true,
        popular: 'Популярный выбор'
      },
      { 
        name: 'Team', 
        price: 'По запросу', 
        period: 'гибкие условия',
        desc: 'Для школ, клиник и корпоративных команд.',
        features: ['От 5 до 1000+ профилей', 'Админ-панель', 'Выгрузка отчётов', 'Обучение команды', 'Персональный менеджер'],
        cta: 'Связаться с нами',
        highlight: false
      },
    ],
    faqTitle: 'Частые вопросы',
    faqs: [
      { q: 'Можно ли отменить подписку?', a: 'Да, вы можете отменить подписку в любой момент в настройках профиля, без штрафов и скрытых комиссий.' },
      { q: 'Есть ли бесплатный период у Pro?', a: 'Мы предоставляем 7-дневный пробный период для новых пользователей, чтобы вы могли оценить все преимущества.' },
    ]
  },
  en: {
    badge: 'Pricing',
    title: 'Invest in your mind',
    subtitle: 'Start with the free basics or unlock full potential with Pro. No hidden fees.',
    plans: [
      { 
        name: 'Starter', 
        price: 'Free', 
        period: 'forever',
        desc: 'A great starting point to explore brain training.',
        features: ['Basic exercises', 'Simple statistics', '1 profile', 'Email support'],
        cta: 'Start for free',
        highlight: false
      },
      { 
        name: 'Pro', 
        price: '$9', 
        period: 'per month',
        desc: 'Maximum capabilities for daily cognitive growth.',
        features: ['All exercises (50+)', 'Personalized plan', 'Advanced analytics', 'No ads', 'Priority support'],
        cta: 'Try Pro',
        highlight: true,
        popular: 'Most Popular'
      },
      { 
        name: 'Team', 
        price: 'Custom', 
        period: 'flexible terms',
        desc: 'For schools, clinics, and corporate teams.',
        features: ['From 5 to 1000+ profiles', 'Admin dashboard', 'Report exports', 'Team onboarding', 'Dedicated manager'],
        cta: 'Contact us',
        highlight: false
      },
    ],
    faqTitle: 'Frequently Asked Questions',
    faqs: [
      { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel your subscription at any time in your profile settings with no hidden fees.' },
      { q: 'Is there a free trial for Pro?', a: 'We offer a 7-day free trial for all new users to experience the full benefits.' },
    ]
  },
  uz: {
    badge: 'Narxlar',
    title: 'Miyangizga sarmoya kiriting',
    subtitle: 'Bepul asosdan boshlang yoki Pro bilan barcha imkoniyatlarni oching. Yashirin to‘lovlar yo‘q.',
    plans: [
      { 
        name: 'Starter', 
        price: 'Bepul', 
        period: 'doimiy',
        desc: 'Miya mashqlari bilan tanishish uchun ajoyib boshlanish.',
        features: ['Asosiy mashqlar', 'Oddiy statistika', '1 profil', 'Email yordam'],
        cta: 'Bepul boshlash',
        highlight: false
      },
      { 
        name: 'Pro', 
        price: '$9', 
        period: 'oyiga',
        desc: 'Har kungi kognitiv o‘sish uchun maksimal imkoniyatlar.',
        features: ['Barcha mashqlar (50+)', 'Shaxsiy dastur', 'Keng analitika', 'Reklamasiz', 'Tezkor yordam'],
        cta: 'Pro-ni sinab ko‘rish',
        highlight: true,
        popular: 'Eng ommabop'
      },
      { 
        name: 'Team', 
        price: 'Kelishuv', 
        period: 'moslashuvchan',
        desc: 'Maktablar, klinikalar va korporativ jamoalar uchun.',
        features: ['5 dan 1000+ profilgacha', 'Admin panel', 'Hisobotlarni yuklash', 'Jamoani o‘qitish', 'Shaxsiy menejer'],
        cta: 'Biz bilan bog‘lanish',
        highlight: false
      },
    ],
    faqTitle: 'Ko‘p so‘raladigan savollar',
    faqs: [
      { q: 'Obunani bekor qilsam bo‘ladimi?', a: 'Ha, istalgan vaqtda profil sozlamalaridan obunani bekor qilishingiz mumkin.' },
      { q: 'Pro uchun bepul sinov bormi?', a: 'Barcha afzalliklarni baholash uchun yangi foydalanuvchilarga 7 kunlik bepul sinov muddatini taqdim etamiz.' },
    ]
  },
}

export default function PricingPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru
  usePageMeta(t.badge, t.subtitle)

  return (
    <SiteChrome>
      <section style={{ padding: '120px 0 88px', background: c.pageBg }}>
        <div className="container">
          {/* Header */}
          <div className="pr-head">
            <div className="pr-badge" style={{ background: isDark ? 'rgba(61,82,245,.15)' : '#EEF0FF', color: '#3D52F5' }}>{t.badge}</div>
            <h1 style={{ color: c.text, fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 800, letterSpacing: '-1px', marginBottom: 16 }}>{t.title}</h1>
            <p style={{ color: c.text2, fontSize: 18, lineHeight: 1.6, maxWidth: 640, margin: '0 auto' }}>{t.subtitle}</p>
          </div>

          {/* Pricing Grid */}
          <div className="pr-grid">
            {t.plans.map((plan, i) => (
              <article 
                key={plan.name} 
                className={`pr-card ${plan.highlight ? 'pr-card-pro' : ''}`} 
                style={{ 
                  background: isDark ? (plan.highlight ? 'linear-gradient(180deg, #1A1D2E 0%, #141728 100%)' : '#141728') : '#fff', 
                  borderColor: plan.highlight ? '#3D52F5' : c.border, 
                  animationDelay: `${i * 100}ms` 
                }}
              >
                {plan.highlight && (
                  <div className="pr-popular" style={{ background: 'linear-gradient(135deg, #3D52F5, #6A7BF7)' }}>
                    {plan.popular}
                  </div>
                )}
                
                <div style={{ color: plan.highlight ? '#3D52F5' : c.text2, fontWeight: 700, fontSize: 16, marginBottom: 12, textTransform: 'uppercase', letterSpacing: 1 }}>
                  {plan.name}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
                  <span style={{ color: c.text, fontSize: 42, fontWeight: 800, letterSpacing: '-1px' }}>{plan.price}</span>
                  <span style={{ color: c.text2, fontSize: 15, fontWeight: 500 }}>/ {plan.period}</span>
                </div>
                
                <p style={{ color: c.text2, fontSize: 15, lineHeight: 1.6, marginBottom: 28, minHeight: 48 }}>{plan.desc}</p>
                
                <a href={plan.name === 'Team' ? '/contact' : '/download'} className={`pr-btn ${plan.highlight ? 'pr-btn-pro' : ''}`} style={{ 
                  background: plan.highlight ? '#3D52F5' : (isDark ? '#252840' : '#F5F6FA'),
                  color: plan.highlight ? '#fff' : c.text,
                }}>
                  {plan.cta}
                </a>

                <div style={{ marginTop: 32, paddingTop: 32, borderTop: `1px solid ${c.border}` }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map(feat => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'center', gap: 10, color: c.text, fontSize: 15, fontWeight: 500 }}>
                        <div style={{ display: 'flex', flexShrink: 0, color: plan.highlight ? '#3D52F5' : '#34C48C' }}>
                          <CheckCircleIcon size={20} strokeWidth={2.5} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="pr-faq">
            <h2 style={{ color: c.text, fontSize: 28, fontWeight: 800, textAlign: 'center', marginBottom: 40 }}>{t.faqTitle}</h2>
            <div className="pr-faq-grid">
              {t.faqs.map(faq => (
                <div key={faq.q} style={{ background: isDark ? '#141728' : '#F5F6FA', padding: 24, borderRadius: 20 }}>
                  <h3 style={{ color: c.text, fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{faq.q}</h3>
                  <p style={{ color: c.text2, fontSize: 15, lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <style>{`
        .pr-head{text-align:center;animation:fadeUp .55s ease both;margin-bottom:60px}
        .pr-badge{display:inline-flex;padding:6px 14px;border-radius:999px;font-size:13px;font-weight:700;margin-bottom:20px}
        
        .pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;margin-bottom:80px}
        
        .pr-card{position:relative;border:1px solid;border-radius:32px;padding:40px 32px;animation:fadeUp .6s ease both;transition:transform .3s cubic-bezier(0.4,0,0.2,1), box-shadow .3s cubic-bezier(0.4,0,0.2,1);display:flex;flex-direction:column}
        .pr-card:hover{transform:translateY(-8px)}
        
        .pr-card-pro{box-shadow:0 24px 48px rgba(61,82,245,.15);border-width:2px;padding:39px 31px}
        .pr-card-pro:hover{box-shadow:0 32px 64px rgba(61,82,245,.25)}
        
        .pr-popular{position:absolute;top:-14px;left:50%;transform:translateX(-50%);color:#fff;padding:6px 16px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;box-shadow:0 4px 12px rgba(61,82,245,.3)}
        
        .pr-btn{display:block;text-align:center;padding:14px;border-radius:14px;text-decoration:none;font-weight:700;font-size:16px;transition:all .2s ease}
        .pr-btn:hover{filter:brightness(0.95)}
        .pr-btn-pro:hover{filter:brightness(1.1);box-shadow:0 8px 24px rgba(61,82,245,.3)}
        
        .pr-faq{max-width:800px;margin:0 auto;animation:fadeUp .7s ease both}
        .pr-faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        
        @media (max-width:960px){
          .pr-grid{grid-template-columns:1fr;max-width:480px;margin-left:auto;margin-right:auto}
          .pr-faq-grid{grid-template-columns:1fr}
        }
      `}</style>
    </SiteChrome>
  )
}
