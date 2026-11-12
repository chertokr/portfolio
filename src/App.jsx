import { useEffect } from 'react'
import { CONFIG } from './siteConfig'
import { PROFILE } from './content'
import Timeline from './components/Timeline'
import Closing from './components/Closing'

function Hero() {
  return (
    <header className="hero">
      <div className="hero-top">
        <span className="hero-role">{PROFILE.role}</span>
        <span className="hero-where">Boston</span>
      </div>

      <h1 className="hero-name">
        <span>Rachel</span>
        <span className="hero-name-2">
          Chertok
          <img
            className="hero-photo"
            src={CONFIG.headshot}
            alt="Rachel Chertok"
            onError={e => { e.target.style.display = 'none' }}
          />
        </span>
      </h1>

      <div className="hero-foot">
        <p className="hero-blurb">{PROFILE.blurb}</p>
        <p className="hero-open">
          <span className="dot" aria-hidden="true" />
          {PROFILE.availability}
          <span className="hero-open-where">{PROFILE.openTo}</span>
        </p>
      </div>

      <a className="hero-scroll" href="#timeline">
        2023 to now
        <span aria-hidden="true">&darr;</span>
      </a>
    </header>
  )
}

export default function App() {
  // a reload starts at the top, not wherever the browser left off
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Hero />
      <Timeline />
      <Closing />
    </main>
  )
}
