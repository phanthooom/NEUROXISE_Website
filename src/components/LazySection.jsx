import { lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import PageLoader from './PageLoader'
import SectionPlaceholder from './SectionPlaceholder'

/**
 * Defers loading a lazy chunk until the wrapper is near the viewport (IntersectionObserver).
 * @param {() => Promise<{ default: import('react').ComponentType}>} load — stable import function (module scope).
 * @param {string} [rootMargin='300px']
 * @param {string} [className]
 */
export default function LazySection({ load, rootMargin = '300px', className = '' }) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const rootRef = useRef(null)
  const LazyComponent = useMemo(() => lazy(load), [load])

  useEffect(() => {
    const el = rootRef.current
    if (!el || shouldLoad) return

    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.some(e => e.isIntersecting)
        if (hit) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold: 0.01 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin, shouldLoad])

  return (
    <div ref={rootRef} className={className}>
      {shouldLoad ? (
        <Suspense fallback={<PageLoader />}>
          <LazyComponent />
        </Suspense>
      ) : (
        <SectionPlaceholder />
      )}
    </div>
  )
}
