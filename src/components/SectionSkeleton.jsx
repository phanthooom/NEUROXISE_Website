const SECTION_THEMES = {
  stats: { bg: 'linear-gradient(160deg, #1A1D2E 0%, #2A2D4E 50%, #1A1D2E 100%)', tone: 'dark' },
}

export default function SectionSkeleton({ sectionId }) {
  const theme = SECTION_THEMES[sectionId] || { bg: '#F5F6FA', tone: 'light' }
  const isDarkTone = theme.tone === 'dark'
  const block = isDarkTone ? 'rgba(255,255,255,0.14)' : '#E8E9F0'
  const subBlock = isDarkTone ? 'rgba(255,255,255,0.1)' : '#DDE1EC'

  return (
    <section aria-hidden="true" className="section-skeleton" style={{ background: theme.bg }}>
      <div className="container">
        <div className="skeleton-badge shimmer" style={{ background: block }} />
        <div className="skeleton-title shimmer" style={{ background: block }} />
        <div className="skeleton-subtitle shimmer" style={{ background: subBlock }} />

        <div className="skeleton-grid">
          {[0, 1, 2].map(item => (
            <div key={item} className="skeleton-card">
              <div className="skeleton-icon shimmer" style={{ background: block }} />
              <div className="skeleton-line shimmer" style={{ background: block }} />
              <div className="skeleton-line short shimmer" style={{ background: subBlock }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
