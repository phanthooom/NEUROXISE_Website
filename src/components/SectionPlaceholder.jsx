/** Lightweight placeholder until a below-the-fold section is near the viewport. */
export default function SectionPlaceholder() {
  return (
    <div className="section-placeholder" aria-hidden="true">
      <div className="section-placeholder-inner">
        <div className="section-placeholder-line section-placeholder-line-lg shimmer" />
        <div className="section-placeholder-line section-placeholder-line-md shimmer" />
        <div className="section-placeholder-grid">
          <div className="section-placeholder-card shimmer" />
          <div className="section-placeholder-card shimmer" />
          <div className="section-placeholder-card shimmer" />
        </div>
      </div>
    </div>
  )
}
