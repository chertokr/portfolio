import { useEffect } from 'react'
import { CONFIG } from './siteConfig'
import {
  PROFILE, HEADLINE, METRICS, WORK, PROJECTS,
  EDUCATION, COURSEWORK, RESEARCH, ORGS, SKILLS, INTERESTS, LANGUAGES,
} from './content'
import Card, { Tags } from './components/Card'
import ProjectCard from './components/ProjectCard'
import { Rise, Bars, Donut, Cut, Clouds, Growth } from './components/Spark'

const NAV = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'school', label: 'School' },
  { id: 'orgs', label: 'Orgs' },
  { id: 'toolkit', label: 'Toolkit' },
]

const METRIC_CHART = {
  '2M+': <Bars fill="#fff" />,
  '+30%': <Donut pct={30} />,
  '95+': <Growth />,
  '60%': <Cut left={40} />,
}

export default function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    if (window.location.hash) window.history.replaceState(null, '', window.location.pathname)
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <nav className="nav">
        <a className="nav-name" href="#top">Rachel Chertok</a>
        <div className="nav-links">
          {NAV.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
        </div>
        <a className="nav-cta" href={`mailto:${CONFIG.emailPrimary}`}>Say hi</a>
      </nav>

      <main className="grid" id="top">
        {/* ---------- hello ---------- */}
        <Card tone="yellow" span={8} label="Hello" className="hero">
          <img
            className="hero-photo"
            src={CONFIG.headshot}
            alt="Rachel Chertok"
            onError={e => { e.target.style.display = 'none' }}
          />
          <h1 className="hero-name">Rachel<br />Chertok</h1>
          <p className="hero-blurb">{PROFILE.blurb}</p>
          <p className="sticker">{PROFILE.availability}</p>
          <p className="hero-where">{PROFILE.openTo}</p>
        </Card>

        <Card tone="pink" span={4} label={HEADLINE.label}>
          <p className="big">{HEADLINE.value}</p>
          <Rise />
          <p className="card-text">{HEADLINE.note}</p>
        </Card>

        {/* ---------- numbers ---------- */}
        {METRICS.map(m => (
          <Card key={m.value} tone={m.tone || 'paper'} span={3} label={m.label}>
            <p className="big">{m.value}</p>
            <p className="card-meta">{m.note}</p>
            {METRIC_CHART[m.value]}
          </Card>
        ))}

        {/* ---------- work ---------- */}
        <h2 className="row-head" id="work">Where I have worked</h2>
        {WORK.map(w => (
          <Card key={w.org} span={6} label={w.when}>
            <h3 className="card-title">{w.role}</h3>
            <p className="card-meta">{w.org}. {w.place}.</p>
            <ul className="bullets">
              {w.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
            {w.stat && (
              <div className="stat">
                <p className="stat-value">{w.stat.value}</p>
                <Cut left={2} />
                <p className="card-meta">{w.stat.note}</p>
              </div>
            )}
            <Tags items={w.tags} />
          </Card>
        ))}

        {/* ---------- projects ---------- */}
        <h2 className="row-head" id="projects">What I have built</h2>
        <ProjectCard project={PROJECTS[0]} chart={<Clouds />} />
        <ProjectCard project={PROJECTS[1]} chart={<Cut left={40} />} />
        <ProjectCard project={PROJECTS[2]} chart={<Donut pct={30} />} />

        {/* ---------- school ---------- */}
        <h2 className="row-head" id="school">School</h2>
        <Card span={8} label="Education">
          <h3 className="card-title">{EDUCATION.school}</h3>
          <p className="card-meta">{EDUCATION.degree}. {EDUCATION.concentration}.</p>
          <p className="chips">
            <span>{EDUCATION.when}</span>
            <span>{EDUCATION.honors}</span>
          </p>
          <div className="courses">
            {COURSEWORK.map(g => (
              <div key={g.area} className={g.now ? 'course-group is-now' : 'course-group'}>
                <p className="course-area">{g.area}</p>
                <ul>
                  {g.courses.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card span={4} label="Research">
          <h3 className="card-title">{RESEARCH.title}</h3>
          <p className="card-meta">{RESEARCH.when}</p>
          <p className="card-text">{RESEARCH.detail}</p>
          <Tags items={RESEARCH.tags} />
        </Card>

        {/* ---------- orgs ---------- */}
        <h2 className="row-head" id="orgs">Student organizations</h2>
        <Card tone="ink" span={7} label="Oasis NEU">
          <h3 className="card-title">{ORGS[0].role}</h3>
          <p className="card-meta">{ORGS[0].when}</p>
          <Growth fill="#f5f1e8" />
          <p className="card-text">{ORGS[0].detail}</p>
        </Card>
        <Card span={5} label="Chi Omega">
          <h3 className="card-title">{ORGS[1].role}</h3>
          <p className="card-meta">{ORGS[1].when}</p>
          <p className="card-text">{ORGS[1].detail}</p>
        </Card>

        {/* ---------- toolkit and resume ---------- */}
        <h2 className="row-head" id="toolkit">Toolkit</h2>
        <Card tone="green" span={8} label="What I work in">
          <div className="skills">
            {SKILLS.map(s => (
              <div key={s.area}>
                <p className="course-area">{s.area}</p>
                <ul className="skill-list">
                  {s.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card tone="blue" span={4} label="Resume">
          <p className="card-text" style={{ color: 'inherit' }}>
            One page, kept current. The Google Doc is always the latest.
          </p>
          <div className="project-foot">
            <a className="btn btn--on-dark" href={CONFIG.resumeEmbedUrl} target="_blank" rel="noreferrer">Google Doc</a>
            <a className="btn btn--on-dark" href="/resume.pdf" download>PDF</a>
          </div>
        </Card>

        {/* ---------- say hi ---------- */}
        <Card tone="yellow" span={12} label="Say hi" className="contact">
          <a className="contact-mail" href={`mailto:${CONFIG.emailPrimary}`}>{CONFIG.emailPrimary}</a>
          <div className="project-foot">
            <a className="btn" href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="btn" href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={`mailto:${CONFIG.emailSecondary}`}>Northeastern email</a>
          </div>
          <p className="hero-where">{PROFILE.openTo}</p>
        </Card>

        <footer className="footer">
          <div className="footer-group">
            <p className="card-label">Off the clock</p>
            <p>{INTERESTS.join(', ')}</p>
            <p className="card-label footer-sub">Languages</p>
            <p>{LANGUAGES.join(', ')}</p>
          </div>
          <span className="footer-copy">&copy; {new Date().getFullYear()} Rachel Chertok</span>
        </footer>
      </main>
    </>
  )
}
