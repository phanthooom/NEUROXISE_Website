import { Link } from 'react-router-dom'
import logo from '../logo/NEUROXISE_LOGO.jpg'
import { useLanguage } from '../i18n/LanguageContext'
import { getFooterColumnHref, getLegalHref, isFooterExternalUrl } from '../lib/footerLinks'

/** RR expects `hash` without leading `#` */
function routerTo(href) {
  if (typeof href === 'string' && href.startsWith('/#') && href.length > 2) {
    return { pathname: '/', hash: href.slice(2) }
  }
  return href
}

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer

  const sectionKeys = ['Product', 'Company', 'Support', 'Community']

  return (
    <footer style={{ background: '#1A1D2E', padding: '72px 0 32px', color: 'rgba(255,255,255,0.6)' }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <img
                src={logo}
                alt="NEUROXISE"
                loading="lazy"
                decoding="async"
                style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }}
              />
              <span style={{ fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>
                NEURO<span style={{ color: '#9DA8F5' }}>XISE</span>
              </span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, maxWidth: 240, marginBottom: 20, color: 'rgba(255,255,255,0.5)' }}>
              {f.tagline}
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(61,82,245,0.2)', border: '1px solid rgba(61,82,245,0.3)', borderRadius: 999, padding: '5px 12px' }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34C48C', display: 'inline-block' }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: '#9DA8F5' }}>{f.badge}</span>
            </div>
          </div>

          {/* Link columns */}
          {sectionKeys.map(key => (
            <div key={key} className="footer-col">
              <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '1px' }}>
                {f.sections[key]}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {f.links[key].map((item, i) => {
                  const href = getFooterColumnHref(key, i)
                  const external = isFooterExternalUrl(key)
                  if (external) {
                    return (
                      <li key={i}>
                        <a
                          href={href}
                          className="footer-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  }
                  return (
                    <li key={i}>
                      <Link to={routerTo(href)} className="footer-link">{item}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 28, marginTop: 60, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>{f.copyright}</div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {f.legal.map((l, i) => (
              <Link key={i} to={routerTo(getLegalHref(i))} className="footer-link" style={{ fontSize: 13 }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        .footer-link {
          font-size: 14px; color: rgba(255,255,255,0.45);
          text-decoration: none; transition: color 0.2s;
        }
        .footer-link:hover { color: #9DA8F5; }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 380px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  )
}
