import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { CONFIG, getDrivePreview } from './siteConfig'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import CaseStudies from './pages/CaseStudies'
import ResumePage from './pages/ResumePage'
import Contact from './pages/Contact'
import Splash from './components/Splash'

function Header() {
  // removed theme toggle per user request

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-left">
          <img className="headshot" alt="Rachel Chertok" src={CONFIG.headshot} onError={(e)=>{e.target.style.display='none'}} />
          <div>
            <h1 className="name">Rachel Chertok</h1>
            <p className="tagline">Third Year Computer Science and Business Administration Student</p>
          </div>
        </div>
        <nav className="top-nav">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="socials">
            <a href={CONFIG.github} target="_blank" rel="noreferrer"><img src="/icons/github.svg" className="icon" alt="GitHub"/></a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer"><img src="/icons/linkedin.svg" className="icon" alt="LinkedIn"/></a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function App(){
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('section, .card, .site-header').forEach((el) => {
      el.classList.add('reveal')
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])

  // shrink header on scroll
  useEffect(() => {
    const header = document.querySelector('.site-header')
    if (!header) return
    const onScroll = () => {
      if (window.scrollY > 72) header.classList.add('scrolled')
      else header.classList.remove('scrolled')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const embed = getDrivePreview(CONFIG.resumeEmbedUrl) || '/resume.pdf'
  return (
    <>
      {showSplash && <Splash onDone={() => setShowSplash(false)} />}
      <Header />
      <div className="container large">
        <main>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/case-studies" element={<CaseStudies/>} />
          <Route path="/resume" element={<ResumePage embedUrl={embed} />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </main>
        <footer className="site-footer">© {new Date().getFullYear()} Rachel Chertok — Product Manager Candidate</footer>
      </div>
    </>
  )
}
