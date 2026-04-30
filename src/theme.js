export function mkC(isDark) {
  return {
    pageBg:  isDark ? '#0C0E1A' : '#F5F6FA',
    pageBg2: isDark ? '#0F1120' : '#ffffff',
    cardBg:  isDark ? '#141728' : '#ffffff',
    cardBg2: isDark ? '#1A1D2E' : '#F5F6FA',
    border:  isDark ? '#252840' : '#E8E9F0',
    text:    isDark ? '#E8EAFF' : '#1A1D2E',
    text2:   isDark ? '#8B90B8' : '#6B7080',
    badge:   isDark ? 'rgba(61,82,245,0.22)' : '#EEF0FF',
  }
}
