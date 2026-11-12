import { useEffect, useRef, useState } from 'react'
import { TIMELINE, FILTERS } from '../content'

function Event({ event, dim }) {
  const { when, type, title, org, detail, metric, tags, links, status } = event
  return (
    <article
      className={`event event--${type} ${status ? `event--${status}` : ''} ${dim ? 'is-dim' : ''}`}
      data-year={event.year}
    >
      <span className="event-node" aria-hidden="true" />
      <div className="event-head">
        <span className="event-when">{when}</span>
        <span className="event-type">{type}</span>
      </div>
      <h3 className="event-title">{title}</h3>
      {org && <p className="event-org">{org}</p>}

      {metric && (
        <p className="metric">
          <span className="metric-value">{metric.value}</span>
          <span className="metric-label">{metric.label}</span>
        </p>
      )}

      {detail && <p className="event-detail">{detail}</p>}

      {links?.length > 0 && (
        <p className="event-links">
          {links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </p>
      )}

      {tags?.length > 0 && (
        <p className="event-tags">
          {tags.map(t => <span key={t}>{t}</span>)}
        </p>
      )}
    </article>
  )
}

const YEARS = [...new Set(TIMELINE.map(e => e.year))]

export default function Timeline() {
  const [year, setYear] = useState(TIMELINE[0].year)
  const [filter, setFilter] = useState('all')
  const spineRef = useRef(null)
  const fillRef = useRef(null)

  // the year in the rail follows whichever event is crossing the middle
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const hit = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setYear(hit.target.dataset.year)
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    document.querySelectorAll('.event').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // the spine fills as you walk down it
  useEffect(() => {
    const spine = spineRef.current
    const fill = fillRef.current
    if (!spine || !fill) return
    const onScroll = () => {
      const box = spine.getBoundingClientRect()
      const middle = window.innerHeight * 0.5
      const walked = (middle - box.top) / box.height
      fill.style.transform = `scaleY(${Math.min(1, Math.max(0, walked))})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const shown = filter === 'all' ? TIMELINE.length : TIMELINE.filter(e => e.type === filter).length

  return (
    <section id="timeline" className="timeline">
      <div className="filters">
        <div className="filters-inner">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={filter === f.id ? 'is-on' : ''}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label}
            </button>
          ))}
          <span className="filters-count">{shown} of {TIMELINE.length}</span>
        </div>
      </div>

      <div className="timeline-grid">
        <div className="year-rail">
          <span className="year" aria-hidden="true">{year}</span>
          <nav className="year-nav" aria-label="Jump to a year">
            {YEARS.map(y => (
              <button
                key={y}
                className={y === year ? 'is-on' : ''}
                onClick={() => {
                  const first = document.querySelector(`.event[data-year="${y}"]`)
                  first?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}
              >
                {y}
              </button>
            ))}
          </nav>
        </div>

        <div className="events" ref={spineRef}>
          <span className="spine" aria-hidden="true">
            <span className="spine-fill" ref={fillRef} />
          </span>
          {TIMELINE.map(e => (
            <Event key={e.id} event={e} dim={filter !== 'all' && e.type !== filter} />
          ))}
        </div>
      </div>
    </section>
  )
}
