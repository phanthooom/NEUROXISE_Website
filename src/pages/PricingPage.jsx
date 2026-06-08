import SiteChrome from '../layouts/SiteChrome'
import { useLanguage } from '../i18n/LanguageContext'
import { mkC } from '../theme'
import { usePageMeta } from '../hooks/usePageMeta'
import { CheckCircleIcon } from '../components/Icons'

const COPY = {
  ru: {
    badge: 'Цены',
    title: 'Верните контроль над движениями и речью.',
    subtitle: 'Каждый день — это шаг вперед. Восстановите движения, речь, когнитивные функции и уверенность вместе с NEUROXISE.',
    plans: [
      { 
        name: 'Standart', 
        oldPrice: '$15',
        price: 'Бесплатно', 
        period: 'навсегда',
        desc: 'Базовый курс упражнений для самостоятельного домашнего восстановления.',
        features: [
          'Доступ к базовым модулям мелкой моторики и речи (Афазия)',
          'Стартовая оценка двигательных и речевых функций',
          'Локальное сохранение результатов тренировок на устройстве',
          'Ежедневный контроль регулярности занятий',
          'Стартовый скрининг для определения типа афазии и дефицитов'
        ],
        trial: '14-дневный пробный период',
        cta: 'Начать бесплатно',
        highlight: false
      },
      { 
        name: 'Premium', 
        price: '$ 30', 
        period: '/ месяц',
        desc: 'Комплексная индивидуальная программа реабилитации для пациента и поддержка близких.',
        features: [
          'Полный доступ ко всем 4 модулям платформы (включая когнитивный)',
          'Доступ к библиотеке видеоуроков по крупной моторике для близких',
          'Развернутая автоматическая диагностика речевых и моторных дефицитов',
          'Динамическая адаптация сложности заданий под состояние пациента',
          'Экспорт структурированных отчетов для демонстрации лечащему врачу',
          'Приоритетная техническая поддержка',
          'Развернутая экспертная диагностика речевых нарушений с определением формы афазии'
        ],
        trial: '14-дневный пробный период',
        cta: 'Оформить Premium',
        highlight: true,
        popular: 'Популярный'
      },
      { 
        name: 'ENTERPRISE', 
        price: 'По запросу', 
        period: '',
        desc: 'Интеграция платформы в практику медицинских центров и работу профильных специалистов.',
        features: [
          'Все возможности тарифа Премиум',
          'Панель врача для одновременного ведения и мониторинга множества пациентов',
          'Возможность ручной корректировки протоколов занятий реабилитологом',
          'Экспорт данных для интеграции с внутренними медицинскими картами',
          'Персональный менеджер внедрения и техническое сопровождение',
          'Обучение медицинского персонала работе с платформой'
        ],
        cta: 'Связаться с отделом продаж',
        highlight: false
      },
    ],
  },
  en: {
    badge: 'Pricing',
    title: 'Regain control over movement and speech.',
    subtitle: 'Every day is a step forward. Restore movements, speech, cognitive functions, and confidence with NEUROXISE.',
    plans: [
      { 
        name: 'Standart', 
        oldPrice: '$15',
        price: 'Free', 
        period: 'forever',
        desc: 'Basic exercise course for independent home recovery.',
        features: [
          'Access to basic fine motor and speech modules (Aphasia)',
          'Initial assessment of motor and speech functions',
          'Local storage of training results on device',
          'Daily tracking of session regularity',
          'Initial screening to determine aphasia type and deficits'
        ],
        trial: '14-day free trial',
        cta: 'Start for free',
        highlight: false
      },
      { 
        name: 'Premium', 
        price: '$ 30', 
        period: '/ month',
        desc: 'Comprehensive individual rehabilitation program for the patient and support for loved ones.',
        features: [
          'Full access to all 4 platform modules (including cognitive)',
          'Access to gross motor video lesson library for relatives',
          'Detailed automated diagnostics of speech and motor deficits',
          'Dynamic adaptation of task difficulty to patient state',
          'Export of structured reports to show the attending physician',
          'Priority technical support',
          'Detailed expert diagnostics of speech disorders determining aphasia form'
        ],
        trial: '14-day free trial',
        cta: 'Get Premium',
        highlight: true,
        popular: 'Popular'
      },
      { 
        name: 'ENTERPRISE', 
        price: 'On request', 
        period: '',
        desc: 'Platform integration into medical centers and specialized professionals\' workflow.',
        features: [
          'All Premium plan features',
          'Doctor dashboard for simultaneous management and monitoring of multiple patients',
          'Ability for manual adjustment of session protocols by a rehabilitologist',
          'Data export for integration with internal electronic health records',
          'Dedicated implementation manager and technical support',
          'Training of medical staff to work with the platform'
        ],
        cta: 'Contact Sales',
        highlight: false
      },
    ],
  },
  uz: {
    badge: 'Narxlar',
    title: 'Harakat va nutq ustidan nazoratni qaytaring.',
    subtitle: 'Har bir kun — bu oldinga qadam. NEUROXISE bilan harakatlar, nutq, kognitiv funksiyalar va ishonchni tiklang.',
    plans: [
      { 
        name: 'Standart', 
        oldPrice: '$15',
        price: 'Bepul', 
        period: 'doimiy',
        desc: 'Uy sharoitida mustaqil tiklanish uchun asosiy mashqlar kursi.',
        features: [
          'Asosiy nozik motorika va nutq (Afaziya) modullariga kirish',
          'Harakat va nutq funksiyalarini dastlabki baholash',
          'Mashg\'ulot natijalarini qurilmada lokal saqlash',
          'Mashg\'ulotlar muntazamligini kundalik nazorat qilish',
          'Afaziya turi va nuqsonlarni aniqlash uchun dastlabki skrining'
        ],
        trial: '14 kunlik bepul sinov muddati',
        cta: 'Bepul boshlash',
        highlight: false
      },
      { 
        name: 'Premium', 
        price: '$ 30', 
        period: '/ oy',
        desc: 'Bemor uchun kompleks individual reabilitatsiya dasturi va yaqinlari uchun yordam.',
        features: [
          'Platformaning barcha 4 ta moduliga to\'liq kirish (jumladan, kognitiv)',
          'Yaqinlar uchun yirik motorika bo\'yicha videodarslar kutubxonasiga kirish',
          'Nutq va motor nuqsonlarining batafsil avtomatlashtirilgan diagnostikasi',
          'Vazifalar murakkabligini bemor holatiga dinamik moslashtirish',
          'Davolovchi shifokorga ko\'rsatish uchun tizimlashtirilgan hisobotlarni yuklab olish',
          'Tezkor texnik yordam',
          'Afaziya shaklini aniqlaydigan nutq buzilishlarining batafsil ekspert diagnostikasi'
        ],
        trial: '14 kunlik bepul sinov muddati',
        cta: 'Premiumga o\'tish',
        highlight: true,
        popular: 'Ommabop'
      },
      { 
        name: 'ENTERPRISE', 
        price: 'So\'rov bo\'yicha', 
        period: '',
        desc: 'Platformani tibbiyot markazlari amaliyotiga va mutaxassislar ishiga integratsiya qilish.',
        features: [
          'Premium tarifining barcha imkoniyatlari',
          'Bir nechta bemorlarni bir vaqtda kuzatish va boshqarish uchun shifokor paneli',
          'Reabilitolog tomonidan mashg\'ulot protokollarini qo\'lda o\'zgartirish imkoniyati',
          'Ichki tibbiy kartalar bilan integratsiya qilish uchun ma\'lumotlarni yuklab olish',
          'Shaxsiy joriy etish menejeri va texnik yordam',
          'Tibbiyot xodimlarini platforma bilan ishlashga o\'rgatish'
        ],
        cta: 'Sotuv bo\'limi bilan bog\'lanish',
        highlight: false
      },
    ],
  },
}

export default function PricingPage() {
  const { lang, isDark } = useLanguage()
  const c = mkC(isDark)
  const t = COPY[lang] || COPY.ru
  usePageMeta(t.badge, t.subtitle)

  return (
    <SiteChrome>
      <section style={{ padding: '100px 0 88px', background: c.pageBg }}>
        <div className="container">
          
          <div className="pr-head" style={{ marginBottom: 64, textAlign: 'center' }}>
            <h1 className="pr-title" style={{ color: c.text, fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, margin: '0 auto 16px', letterSpacing: '-0.5px' }}>
              {t.title}
            </h1>
            <p className="pr-subtitle" style={{ color: c.text2, fontSize: '17px', lineHeight: 1.6, margin: '0 auto', maxWidth: 700 }}>
              {t.subtitle}
            </p>
          </div>

          <div className="pr-grid">
            {t.plans.map((plan, i) => (
              <article 
                key={plan.name} 
                className={`pr-card ${plan.highlight ? 'pr-card-pro' : ''}`} 
                style={{ 
                  background: isDark ? (plan.highlight ? '#1A1D2E' : '#141728') : '#fff', 
                  borderColor: plan.highlight ? '#6A7BF7' : c.border, 
                  animationDelay: `${i * 100}ms` 
                }}
              >
                {plan.highlight && (
                  <div className="pr-popular" style={{ background: '#6A7BF7' }}>
                    {plan.popular}
                  </div>
                )}
                
                <div style={{ background: '#0047AB', color: '#fff', padding: '16px', textAlign: 'center', fontWeight: 600, fontSize: 18, marginBottom: 20 }}>
                  {plan.name}
                </div>
                
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6, marginBottom: 8, flexWrap: 'wrap', padding: '0 20px' }}>
                  {plan.oldPrice && (
                    <span style={{ color: c.text2, fontSize: 20, fontWeight: 700, textDecoration: 'line-through', opacity: 0.6, marginRight: 4 }}>{plan.oldPrice}</span>
                  )}
                  <span style={{ color: c.text, fontSize: 40, fontWeight: 800, letterSpacing: '-1px' }}>{plan.price}</span>
                  {plan.period && <span style={{ color: c.text2, fontSize: 16, fontWeight: 500 }}>{plan.period}</span>}
                </div>
                
                <p style={{ color: c.text2, fontSize: 14, lineHeight: 1.5, marginBottom: 20, minHeight: 44, textAlign: 'center', padding: '0 20px' }}>{plan.desc}</p>
                
                <div style={{ background: '#0047AB', flexGrow: 1, padding: '24px 20px', color: '#fff' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                    {plan.features.map(feat => (
                      <li key={feat} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, fontWeight: 400, lineHeight: 1.5 }}>
                        <div style={{ display: 'flex', flexShrink: 0, marginTop: 2, color: '#fff' }}>
                          <span style={{ fontSize: 18, lineHeight: 1 }}>•</span>
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  
                  {plan.trial && (
                    <div style={{ textAlign: 'center', fontSize: 13, marginTop: 24, opacity: 0.9 }}>
                      {plan.trial}
                    </div>
                  )}
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      <style>{`
        .pr-head{animation:fadeUp .55s ease both;display:flex;flex-direction:column;align-items:center}
        
        .pr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;align-items:stretch;max-width:1100px;margin:0 auto}
        
        .pr-card{position:relative;border:1px solid;border-radius:16px;overflow:hidden;animation:fadeUp .6s ease both;display:flex;flex-direction:column;box-shadow:0 10px 30px rgba(0,0,0,0.05)}
        
        .pr-card-pro{border-width:2px;transform:translateY(-8px)}
        
        .pr-popular{position:absolute;top:-1px;left:50%;transform:translateX(-50%);color:#fff;padding:6px 24px;border-radius:0 0 12px 12px;font-size:13px;font-weight:600;z-index:2}
        
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        
        @media (max-width:960px){
          .pr-grid{grid-template-columns:1fr;max-width:440px}
          .pr-card-pro{transform:none}
        }
      `}</style>
    </SiteChrome>
  )
}
