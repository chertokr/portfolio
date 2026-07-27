import { useState, useEffect, useRef } from 'react'

const AUTO_DISMISS_MS = 3800

export default function Splash({ onDone }) {
  const [hiding, setHiding] = useState(false)
  const doneRef = useRef(false)

  const dismiss = () => {
    if (doneRef.current) return
    doneRef.current = true
    setHiding(true)
    setTimeout(onDone, 550)
  }

  // Keyboard escape hatch + auto-dismiss so no one is ever trapped on the cover
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        dismiss()
      }
    }
    window.addEventListener('keydown', onKey)
    const timer = setTimeout(dismiss, AUTO_DISMISS_MS)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(timer)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`splash${hiding ? ' hiding' : ''}`} onClick={dismiss}>
      <div className="cover-head" aria-hidden="true">
        <span>The Feature Profile</span>
        <span>Boston · MMXXVI</span>
      </div>

      <div className="cover-main">
        <div className="cover-kicker">Product Manager</div>
        <h1 className="cover-name">Rachel<br />Chertok</h1>
        <p className="cover-sub">
          Building at the intersection of data and user experience.
          <span className="cover-wave"> 👋</span>
        </p>
      </div>

      <div className="cover-foot">
        <span aria-hidden="true">Product Manager · Boston, MA</span>
        <button
          type="button"
          className="splash-cta"
          onClick={(e) => { e.stopPropagation(); dismiss() }}
        >
          Read the issue →
        </button>
      </div>
    </div>
  )
}
