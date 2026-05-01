import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }) {
  const { key } = useLocation()

  return (
    <div key={key} className="page-transition">
      {children}
      <style>{`
        .page-transition {
          animation: ptFadeUp 0.38s cubic-bezier(.25,.46,.45,.94) both;
        }
        @keyframes ptFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
