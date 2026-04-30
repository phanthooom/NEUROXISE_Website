import { useLanguage } from '../i18n/LanguageContext'
import { TagIcon, SmartphoneIcon, LockIcon, GlobeIcon } from './Icons'

const FEATURE_ICONS = [TagIcon, SmartphoneIcon, LockIcon, GlobeIcon]
const FEATURE_COLORS = ['#34C48C', '#3D52F5', '#9B59F5', '#F5A623']

export default function Download() {
  const { t } = useLanguage()
  const d = t.download

  return (
    <section id="download" style={{ padding: '96px 0', background: '#fff' }}>
      <div className="container">
        <div className="download-card">
          <div style={{ position: 'absolute', top: -80, right: '28%', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', bottom: -60, right: '8%',  width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none' }} />

          {/* Text */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.2)', borderRadius: 999, padding: '6px 14px', marginBottom: 20 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>{d.badge}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.8px', lineHeight: 1.15, marginBottom: 16 }}>
              {d.title}
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, marginBottom: 36, maxWidth: 460 }}>
              {d.desc}
            </p>

            <div className="store-btns">
              <a href="#" className="store-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7 }}>{d.appStore}</div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{d.appStoreSub}</div>
                </div>
              </a>
              <a href="#" className="store-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.37.21.8.22 1.19.05L15.34 12 4.37.19C3.98.02 3.55.03 3.18.24 2.44.65 2 1.42 2 2.28v19.44c0 .86.44 1.63 1.18 2.04z"/>
                  <path d="M16.43 13.09L6.16 23.36l9.07-5.24 1.2-5.03zM21.5 10.5L18.43 8.7 17 12l1.43 3.3 3.07-1.8c.88-.52.88-2.48 0-3z"/>
                  <path d="M6.16.64L16.43 10.91l-1.2-4.97L6.16.64z" opacity=".7"/>
                </svg>
                <div>
                  <div style={{ fontSize: 10, opacity: 0.7 }}>{d.playStore}</div>
                  <div style={{ fontSize: 15, fontWeight: 700 }}>{d.playStoreSub}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Feature list */}
          <div style={{ position: 'relative', zIndex: 1 }} className="download-features">
            {d.features.map((item, i) => {
              const FeatureIcon = FEATURE_ICONS[i]
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.12)', borderRadius: 14, padding: '14px 18px', marginBottom: 10, backdropFilter: 'blur(8px)' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 10,
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FeatureIcon size={20} color="#fff" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)' }}>{item.sub}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .download-card {
          background: linear-gradient(135deg, #3D52F5 0%, #6A7BF7 50%, #9DA8F5 100%);
          border-radius: 32px; padding: 72px 60px;
          display: grid; grid-template-columns: 1fr auto;
          gap: 60px; align-items: center;
          position: relative; overflow: hidden;
        }
        .store-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .store-btn {
          display: flex; align-items: center; gap: 12px;
          background: #fff; color: #1A1D2E;
          padding: 14px 22px; border-radius: 14px;
          text-decoration: none; transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .store-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.22); }

        @media (max-width: 960px) {
          .download-card { grid-template-columns: 1fr; padding: 48px 36px; gap: 36px; }
          .download-features { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .download-features > div { margin-bottom: 0 !important; }
        }
        @media (max-width: 600px) {
          .download-card    { padding: 36px 24px; border-radius: 24px; }
          .download-features{ grid-template-columns: 1fr; }
          .store-btn        { flex: 1; justify-content: center; min-width: 140px; }
        }
      `}</style>
    </section>
  )
}
