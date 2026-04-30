import { useLanguage } from '../i18n/LanguageContext'

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  )
}

export default function Pricing() {
  const { t } = useLanguage()
  const p = t.pricing

  return (
    <section id="pricing" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#EEF0FF', borderRadius: 999, padding: '6px 14px', marginBottom: 16,
          }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{p.badge}</span>
          </div>
          <h2 className="section-title">
            {p.title1}{' '}
            <span style={{
              background: 'linear-gradient(135deg, #3D52F5, #9DA8F5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{p.title2}</span>
          </h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </div>

        {/* Cards */}
        <div className="pricing-grid">
          {p.plans.map((plan, i) => {
            const isPro = plan.popular
            return (
              <div
                key={i}
                className={`pricing-card${isPro ? ' pricing-card-pro' : ''}`}
              >
                {/* Popular badge */}
                {isPro && (
                  <div style={{
                    position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #3D52F5, #6A7BF7)',
                    color: '#fff', fontSize: 11, fontWeight: 700,
                    padding: '5px 16px', borderRadius: 999,
                    letterSpacing: '0.5px', whiteSpace: 'nowrap',
                    boxShadow: '0 4px 14px rgba(61,82,245,0.4)',
                  }}>{p.popular}</div>
                )}

                {/* Plan name */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{
                    fontSize: 13, fontWeight: 700, letterSpacing: '0.5px',
                    color: isPro ? '#3D52F5' : '#6B7080',
                    textTransform: 'uppercase', marginBottom: 12,
                  }}>{plan.name}</div>

                  {/* Price */}
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 8 }}>
                    <span style={{
                      fontSize: plan.price.startsWith('$') ? 52 : 40,
                      fontWeight: 800, color: '#1A1D2E', letterSpacing: '-1.5px', lineHeight: 1,
                    }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: '#6B7080', fontWeight: 500 }}>{plan.per}</span>
                  </div>

                  <p style={{ fontSize: 14, color: '#6B7080', lineHeight: 1.6 }}>{plan.desc}</p>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: isPro ? 'rgba(61,82,245,0.15)' : '#F0F1F6', margin: '20px 0' }} />

                {/* Features */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  {plan.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                        background: isPro ? '#EEF0FF' : '#F5F6FA',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: isPro ? '#3D52F5' : '#34C48C',
                      }}>
                        <CheckIcon />
                      </div>
                      <span style={{ fontSize: 14, color: '#1A1D2E', fontWeight: 500 }}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#download"
                  className={isPro ? 'pricing-btn-primary' : 'pricing-btn-outline'}
                  style={{ marginTop: 28 }}
                >
                  {plan.cta}
                  {isPro && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  )}
                </a>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          align-items: start;
        }

        .pricing-card {
          background: #fff;
          border: 1.5px solid #E8E9F0;
          border-radius: 24px;
          padding: 36px 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .pricing-card:hover {
          box-shadow: 0 16px 48px rgba(0,0,0,0.08);
          transform: translateY(-4px);
        }

        .pricing-card-pro {
          border-color: #3D52F5;
          background: linear-gradient(160deg, #fff 0%, #F4F6FF 100%);
          box-shadow: 0 8px 32px rgba(61,82,245,0.12);
          transform: translateY(-8px);
        }
        .pricing-card-pro:hover {
          box-shadow: 0 20px 56px rgba(61,82,245,0.2);
          transform: translateY(-12px);
        }

        .pricing-btn-primary {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #3D52F5, #6A7BF7);
          color: #fff; font-size: 14px; font-weight: 700;
          padding: 14px 24px; border-radius: 14px;
          text-decoration: none; transition: all 0.25s;
          box-shadow: 0 6px 20px rgba(61,82,245,0.35);
          letter-spacing: 0.2px;
        }
        .pricing-btn-primary:hover {
          background: linear-gradient(135deg, #2E3FD9, #5A6BF0);
          box-shadow: 0 10px 28px rgba(61,82,245,0.45);
          transform: translateY(-1px);
        }

        .pricing-btn-outline {
          display: flex; align-items: center; justify-content: center;
          background: transparent;
          color: #1A1D2E; font-size: 14px; font-weight: 600;
          padding: 14px 24px; border-radius: 14px;
          border: 1.5px solid #E8E9F0;
          text-decoration: none; transition: all 0.25s;
          letter-spacing: 0.2px;
        }
        .pricing-btn-outline:hover {
          border-color: #3D52F5; color: #3D52F5;
          background: #EEF0FF;
        }

        @media (max-width: 960px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
          .pricing-card-pro { transform: translateY(0); }
          .pricing-card-pro:hover { transform: translateY(-4px); }
        }
        @media (max-width: 520px) {
          .pricing-card { padding: 28px 22px; border-radius: 20px; }
        }
      `}</style>
    </section>
  )
}
