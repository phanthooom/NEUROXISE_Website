import '@testing-library/jest-dom/vitest'

/** jsdom has no IntersectionObserver — App + Navbar use it for scroll UX */
class IntersectionObserverMock {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
globalThis.IntersectionObserver = IntersectionObserverMock
