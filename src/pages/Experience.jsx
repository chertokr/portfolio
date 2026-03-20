import React, { useEffect } from 'react'

export default function Experience(){
  // enable the timeline progress hook inside the component (valid hook usage)
  useTimelineProgress()

  return (
    <section className="experience page">
      <h2>Experience</h2>
      <div className="timeline" id="timeline">
        <div className="timeline-line" />

        {/* progress indicator (fixed) */}
        <div className="timeline-progress" id="timeline-progress">
          <div className="timeline-progress-fill" id="timeline-progress-fill" />
        </div>

        <article className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-card">
            <h3><span className="company-icon-wrap"><img src="/redhatlogo.png" alt="Red Hat" className="company-icon-img"/></span> Red Hat — Incoming Product Management Intern</h3>
            <p className="meta">May - July 2026 | Red Hat Enterprise Linux Public Cloud</p>
            <p>Working across cloud partners (AWS, GCP, Azure) on public cloud integrations and partner-facing product work.</p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-card">
            <h3><span className="company-icon-wrap"><img src="/bevilogo.png" alt="Bevi" className="company-icon-img"/></span> Bevi — Software / Beverage Product Management Co-op</h3>
            <p className="meta">July - December 2025</p>
            <ul>
              <li>Analyzed 2M+ machine usage events in Snowflake and built Looker dashboards to monitor unit performance and flavor trends.</li>
              <li>Drove a $300K revenue increase through zero-cost product rebranding (Key Lime → Lime) guided by user research.</li>
              <li>Initiated an AI-powered sales assistant using OpenAI to generate customized machine and flavor recommendations.</li>
            </ul>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-card">
            <h3><span className="company-icon-wrap"><img src="/OasisLogo.png" alt="Oasis NEU" className="company-icon-img"/></span> Oasis NEU — Executive Board President</h3>
            <p className="meta">January 2024 - Present</p>
            <p>Led a 150+ member programming club, guided development of 95+ React projects, and organized events to increase engagement and skills.</p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-card">
            <h3><span className="company-icon-wrap"><img src="/icons/neu-seal.png" alt="Northeastern University" className="company-icon-img"/></span> Markov Chain Research for Predictive Models</h3>
            <p className="meta">June 2025 - December 2025 | Research</p>
            <p>Used Claude AI prompt engineering and Python (networkx, numpy) to model memory-aware Markov Chains and analyze real-world citation networks for predictive accuracy in finance.</p>
          </div>
        </article>

      </div>
    </section>
  )
}

// update progress bar based on scroll within timeline
function useTimelineProgress(){
  useEffect(() => {
    const fill = document.getElementById('timeline-progress-fill')
    const timeline = document.getElementById('timeline')
    if(!fill || !timeline) return

    const onScroll = () => {
      const rect = timeline.getBoundingClientRect()
      const docTop = window.scrollY || window.pageYOffset
      const top = rect.top + docTop
      const height = timeline.offsetHeight
      const view = window.innerHeight
      const scrolled = (window.scrollY - top) / (height - view)
      const pct = Math.max(0, Math.min(1, scrolled))
      fill.style.height = `${pct * 100}%`
      fill.style.opacity = pct > 0 ? '1' : '0.6'
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}

// (no top-level hook calls remain)
