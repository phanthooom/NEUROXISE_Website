import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { BrainIcon, MicIcon, EyeIcon, BookOpenIcon, CheckSquareIcon } from './Icons'

// Maps category index → SVG icon component
const CAT_ICONS = [BrainIcon, MicIcon, EyeIcon, BookOpenIcon, CheckSquareIcon]

const diffColor = { Easy: '#34C48C', Medium: '#F5A623', Hard: '#F55454', Oson: '#34C48C', "O'rta": '#F5A623', Qiyin: '#F55454', Легко: '#34C48C', Средне: '#F5A623', Сложно: '#F55454' }
const diffBg    = { Easy: '#E8FAF3', Medium: '#FEF4E2', Hard: '#FEF0F0', Oson: '#E8FAF3', "O'rta": '#FEF4E2', Qiyin: '#FEF0F0', Легко: '#E8FAF3', Средне: '#FEF4E2', Сложно: '#FEF0F0' }

export default function Exercises() {
  const { t } = useLanguage()
  const ex = t.exercises
  const cats = ex.categories

  const [activeIdx, setActiveIdx] = useState(0)
  const cat = cats[activeIdx]
  const CatIcon = CAT_ICONS[activeIdx]

  const getDiffLabel = (diff) => ex.diff[diff] || diff
  const getDiffColor = (diff) => diffColor[diff] || diffColor[ex.diff[diff]] || '#6B7080'
  const getDiffBg    = (diff) => diffBg[diff]    || diffBg[ex.diff[diff]]    || '#F5F6FA'

  return (
    <section id="exercises" style={{ padding: '96px 0', background: '#F5F6FA' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#EEF0FF', borderRadius: 999, padding: '6px 14px', marginBottom: 16 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#3D52F5' }}>{ex.badge}</span>
          </div>
          <h2 className="section-title">
            {ex.title1}{' '}
            <span style={{ color: '#3D52F5' }}>{ex.title2}</span>
          </h2>
          <p className="section-subtitle">{ex.subtitle}</p>
        </div>

        {/* Category tabs */}
        <div className="cat-tabs">
          {cats.map((c, i) => {
            const TabIcon = CAT_ICONS[i]
            const isActive = activeIdx === i
            return (
              <button key={i} onClick={() => setActiveIdx(i)} className="cat-tab"
                style={{
                  background: isActive ? c.color : '#fff',
                  color:      isActive ? '#fff'  : '#6B7080',
                  borderColor:isActive ? c.color : '#E8E9F0',
                  boxShadow:  isActive ? `0 4px 14px ${c.color}40` : 'none',
                }}>
                <TabIcon size={16} color={isActive ? '#fff' : '#9DA8F5'} strokeWidth={1.8} />
                <span className="tab-label">{c.key}</span>
              </button>
            )
          })}
        </div>

        {/* Detail card */}
        <div className="cat-detail">
          <div className="cat-detail-left">
            <div style={{
              width: 72, height: 72, borderRadius: 20,
              background: cat.bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 20,
              border: `1.5px solid ${cat.color}25`,
              boxShadow: `0 8px 24px ${cat.color}18`,
            }}>
              <CatIcon size={36} color={cat.color} strokeWidth={1.5} />
            </div>
            <h3 style={{ fontSize: 26, fontWeight: 800, color: '#1A1D2E', marginBottom: 12 }}>{cat.key}</h3>
            <p style={{ fontSize: 15, color: '#6B7080', lineHeight: 1.7, marginBottom: 28 }}>{cat.desc}</p>
            <a href="#download" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: cat.color, color: '#fff', fontSize: 15, fontWeight: 600,
              padding: '12px 24px', borderRadius: 12, transition: 'all 0.2s', textDecoration: 'none',
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {ex.tryBtn} {cat.key}
            </a>
          </div>

          <div className="cat-detail-right">
            {cat.exercises.map((exItem, i) => (
              <div key={i} className="ex-row"
                onMouseEnter={e => { e.currentTarget.style.borderColor = cat.color; e.currentTarget.style.background = cat.bg }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8E9F0'; e.currentTarget.style.background = '#F5F6FA' }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 10, background: cat.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: cat.color, fontSize: 14, flexShrink: 0,
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#1A1D2E' }}>{exItem.name}</div>
                  <div style={{ fontSize: 12, color: '#6B7080', marginTop: 2 }}>{exItem.time}</div>
                </div>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: getDiffColor(exItem.diff), background: getDiffBg(exItem.diff),
                  padding: '3px 10px', borderRadius: 999, whiteSpace: 'nowrap',
                }}>
                  {getDiffLabel(exItem.diff)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cat-tabs { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-bottom: 36px; }
        .cat-tab {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 999px;
          font-size: 14px; font-weight: 600; border: 2px solid;
          transition: all 0.25s; cursor: pointer; font-family: inherit;
        }
        .cat-tab:hover { transform: translateY(-1px); }

        .cat-detail {
          display: grid; grid-template-columns: 1fr 1fr; gap: 40px;
          background: #fff; border-radius: 24px; padding: 40px;
          border: 1px solid #E8E9F0; box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .cat-detail-left  { display: flex; flex-direction: column; }
        .cat-detail-right { display: flex; flex-direction: column; gap: 10px; }

        .ex-row {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 16px; background: #F5F6FA;
          border-radius: 14px; border: 1px solid #E8E9F0;
          transition: all 0.2s; cursor: pointer;
        }

        @media (max-width: 820px) {
          .cat-detail { grid-template-columns: 1fr; padding: 28px 24px; gap: 28px; }
        }
        @media (max-width: 520px) {
          .tab-label { display: none; }
          .cat-tab   { padding: 10px 12px; }
          .cat-detail{ padding: 20px 16px; border-radius: 18px; }
        }
      `}</style>
    </section>
  )
}
