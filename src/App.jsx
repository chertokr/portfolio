import { useEffect, useState } from 'react'
import { CONFIG } from './siteConfig'
import { PROFILE, INTRO, HOW_I_WORK, INTERESTS } from './content'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Organizations from './pages/Organizations'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import ResumePage from './pages/ResumePage'
import Contact from './pages/Contact'

const NAV = [
  { id: 'top',           label: 'Intro' },
  { id: 'experience',    label: 'Experience' },
  { id: 'education',     label: 'Education' },
  { id: 'organizations', label: 'Organizations' },
  { id: 'projects',      label: 'Projects' },
  { id: 'skills',        label: 'Skills' },
  { id: 'resume',        label: 'Resume' },
  { id: 'contact',       label: 'Contact' },
]

/** Sticky left column: who she is, what she wants, where to go. */
function Rail({ active }) {
  return (
    <aside className="rail">
      <div className="rail-inner">
        <div className="rail-id">
          <img
            className="rail-photo"
            src={CONFIG.headshot}
            alt="Rachel Chertok"
            onError={e => { e.target.style.display = 'none' }}
          />
          <div>
            <h1 className="rail-name">
              {PROFILE.name}
              <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="rail-title">{PROFILE.title}</p>
            <p className="rail-location meta">{PROFILE.location}</p>
          </div>
        </div>

        <p className="availability">
          <span className="dot" aria-hidden="true" />
          {PROFILE.availability}
        </p>

        <p className="rail-opento">{PROFILE.openTo}</p>

        <nav className="rail-nav">
          {NAV.map((s, i) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
              <span className="rail-nav-idx">{String(i).padStart(2, '0')}</span>
              <span className="rail-nav-label">{s.label}</span>
            </a>
          ))}
        </nav>

        <div className="rail-links">
          <a href={`mailto:${CONFIG.emailPrimary}`}>Email</a>
          <a href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="/resume.pdf" download>Resume</a>
        </div>
      </div>
    </aside>
  )
}

function Intro() {
  return (
    <section id="top" className="section section--paper intro-section">
      <div className="section-inner">
        {/* same two column grid as every dated entry, so all copy lines up */}
        <article className="entry">
        <div className="entry-when">Intro</div>
        <div>
          <p className="lead">{PROFILE.lead}</p>
          <p className="body-text intro">{INTRO}</p>

          <div className="panel panel-accent">
            <span className="mono">How I work</span>
            <ul className="panel-list">
              {HOW_I_WORK.map(h => (
                <li key={h.label}>
                  <span className="panel-label">{h.label}</span>
                  <span className="panel-value">{h.value}</span>
                </li>
              ))}
            </ul>
          </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default function App() {
  const [active, setActive] = useState('top')

  // A reload should start at the top. Without this, the browser restores the
  // old scroll position (or an old #hash) and the page opens mid document.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname)
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-10% 0px -75% 0px' }
    )
    NAV.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, o) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('reveal-in'); o.unobserve(e.target) }
      }),
      { threshold: 0.05 }
    )
    document.querySelectorAll('.section').forEach(el => {
      el.classList.add('reveal')
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <div className="shell">
      <Rail active={active} />

      <main className="content">
        <Intro />
        <Experience />
        <Education />
        <Organizations />
        <Projects />
        <Skills />
        <ResumePage />
        <Contact />

        <footer className="footer">
          <div className="section-inner">
          <div className="footer-row">
            <span>&copy; {new Date().getFullYear()} Rachel Chertok, graduating May 2027</span>
            <span>Built with React, no template</span>
          </div>
          <div className="footer-interests">
            <span className="mono">Off the clock</span>
            <span>{INTERESTS.join(' / ')}</span>
          </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
