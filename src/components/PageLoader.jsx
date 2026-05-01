/** Lightweight full-route / suspense fallback (no extra deps). */
export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="page-loader-inner">
        <span className="page-loader-bar" />
        <span className="page-loader-bar" />
        <span className="page-loader-bar" />
      </div>
    </div>
  )
}
