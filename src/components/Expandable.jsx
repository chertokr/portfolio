import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

export default function Expandable({ title, subtitle, children, startOpen = false }) {
  const [open, setOpen] = useState(startOpen)
  return (
    <div className={`expandable ${open ? 'open' : ''}`}>
      <button aria-expanded={open} className="expand-btn" onClick={() => setOpen(o => !o)}>
        <div className="expand-title">
          <div>
            <strong>{title}</strong>
            {subtitle ? <div className="expand-sub">{subtitle}</div> : null}
          </div>
          <div className="expand-caret">
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </div>
        </div>
      </button>
      <div className="expand-content" data-open={open ? 'true' : 'false'}>
        <div className="expand-inner">
          {children}
        </div>
      </div>
    </div>
  )
}
