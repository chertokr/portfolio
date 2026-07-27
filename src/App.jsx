import { useEffect, useState, useRef } from 'react'
import { Mail, ArrowDown, Code2 } from 'lucide-react'
import { CONFIG } from './siteConfig'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import ResumePage from './pages/ResumePage'
import Contact from './pages/Contact'
import Splash from './components/Splash'

const NAV = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'resume',     label: 'Resume' },
  { id: 'contact',    label: 'Contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Header({ active }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <button className="header-name-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Rachel Chertok
        </button>

        <nav className="top-nav">
          {NAV.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              onClick={e => { e.preventDefault(); scrollTo(s.id) }}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="socials">
          <a href={CONFIG.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Code2 size={18} />
          </a>
          <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" width={18} height={18} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <div className="hero">
      <img
        className="hero-photo"
        src={CONFIG.headshot}
        alt="Rachel Chertok"
        onError={e => { e.target.style.display = 'none' }}
      />
      <div className="hero-text">
        <p className="hero-label">A Product Manager Profile</p>
        <h1 className="hero-name">Rachel Chertok</h1>
        <p className="hero-bio">
          Product manager who turns data into product decisions. CS and Business
          Administration at Northeastern (May 2027), with PM experience at Red Hat
          and Bevi. Seeking full-time product roles.
        </p>
        <div className="hero-stat">
          <b>$300K</b>
          <span>revenue increase from a zero-cost rebrand at Bevi</span>
        </div>
        <div className="hero-links">
          <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="hero-link">
            <img src="/icons/linkedin.svg" width={15} height={15} alt="" style={{ filter: 'brightness(0) invert(1)' }} /> LinkedIn
          </a>
          <a href={CONFIG.github} target="_blank" rel="noreferrer" className="hero-link">
            <Code2 size={15} /> GitHub
          </a>
          <a href={`mailto:${CONFIG.emailPrimary}`} className="hero-link">
            <Mail size={15} /> Email
          </a>
        </div>
      </div>
      <button
        className="hero-scroll-hint"
        onClick={() => scrollTo('about')}
        aria-label="Scroll to About"
      >
        <span>scroll to explore</span>
        <ArrowDown size={14} />
      </button>
    </div>
  )
}

export default function App() {
  // Show the intro once per browser session; return visits go straight in
  const [showSplash, setShowSplash] = useState(() => {
    try { return sessionStorage.getItem('splashSeen') !== '1' } catch { return true }
  })
  const [active, setActive]         = useState('about')
  const progressRef                 = useRef(null)

  // Reading progress bar
  useEffect(() => {
    const bar = progressRef.current
    if (!bar) return
    const onScroll = () => {
      const doc    = document.documentElement
      const total  = doc.scrollHeight - doc.clientHeight
      const pct    = total > 0 ? (window.scrollY / total) * 100 : 0
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    if (showSplash) return
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -80% 0px', threshold: 0 }
    )
    NAV.forEach(s => {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [showSplash])

  // Reveal animations
  useEffect(() => {
    if (showSplash) return
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )
    document.querySelectorAll('section, .card').forEach(el => {
      el.classList.add('reveal')
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [showSplash])

  // Shrink header on scroll
  useEffect(() => {
    const header = document.querySelector('.site-header')
    if (!header) return
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 72)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Single source of truth: preview and download are the same PDF (no Doc auth-wall drift)
  const embed = '/resume.pdf'

  const dismissSplash = () => {
    try { sessionStorage.setItem('splashSeen', '1') } catch { /* ignore */ }
    window.scrollTo(0, 0)
    setShowSplash(false)
  }

  return (
    <>
      {showSplash && <Splash onDone={dismissSplash} />}

      <Header active={active} />

      {/* reading progress bar sits just below header */}
      <div className="progress-track">
        <div className="progress-fill" ref={progressRef} />
      </div>

      <div className="container large">
        <main>
          <Hero />
          <div id="about"      className="section-anchor"><About /></div>
          <div id="experience" className="section-anchor"><Experience /></div>
          <div id="projects"   className="section-anchor"><Projects /></div>
          <div id="resume"     className="section-anchor"><ResumePage embedUrl={embed} /></div>
          <div id="contact"    className="section-anchor"><Contact /></div>
        </main>
        <footer className="site-footer">
          © {new Date().getFullYear()} Rachel Chertok · Product Manager
        </footer>
      </div>
    </>
  )
}
