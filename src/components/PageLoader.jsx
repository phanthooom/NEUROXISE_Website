export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="pl-content">
        <div className="pl-logo">
          NEURO<span>XISE</span>
        </div>
        <div className="pl-track">
          <div className="pl-fill" />
        </div>
        <div className="pl-dots">
          <span className="pl-dot" />
          <span className="pl-dot" />
          <span className="pl-dot" />
        </div>
      </div>
    </div>
  )
}
