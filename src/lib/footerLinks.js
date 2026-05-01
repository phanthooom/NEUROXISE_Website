/** Internal routes; product links use dedicated pages (not bare href="#"). */

const PRODUCT_PATHS = ['/features', '/exercises', '/stats', '/pricing']

const COMPANY_PATHS = ['/about', '/blog', '/careers', '/press']

const SUPPORT_PATHS = ['/help', '/contact', '/privacy', '/terms']

const COMMUNITY_URLS = [
  'https://x.com/',
  'https://www.instagram.com/',
  'https://www.linkedin.com/',
  'https://discord.com/',
]

const LEGAL_PATHS = ['/privacy', '/terms', '/cookies']

export function getFooterColumnHref(sectionKey, index) {
  if (sectionKey === 'Product') return PRODUCT_PATHS[index] || '/features'
  if (sectionKey === 'Company') return COMPANY_PATHS[index] || '/about'
  if (sectionKey === 'Support') return SUPPORT_PATHS[index] || '/contact'
  if (sectionKey === 'Community') return COMMUNITY_URLS[index] || 'https://x.com/'
  return '/'
}

export function isFooterExternalUrl(sectionKey) {
  return sectionKey === 'Community'
}

export function getLegalHref(index) {
  return LEGAL_PATHS[index] || '/privacy'
}
