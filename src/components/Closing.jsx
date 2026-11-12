import { CONFIG } from '../siteConfig'
import { SKILLS, INTERESTS, PROFILE } from '../content'

export default function Closing() {
  return (
    <>
      <section id="toolkit" className="closing">
        <h2 className="closing-title">Toolkit</h2>
        <div className="skills">
          {SKILLS.map(s => (
            <div key={s.area} className="skill">
              <span className="skill-area">{s.area}</span>
              <p className="skill-items">
                {s.items.map(i => <span key={i}>{i}</span>)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="contact-kicker">{PROFILE.availability}</p>
        <h2 className="contact-title">
          Say hi
          <a className="contact-mail" href={`mailto:${CONFIG.emailPrimary}`}>
            {CONFIG.emailPrimary}
          </a>
        </h2>

        <div className="contact-links">
          <a href={CONFIG.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={CONFIG.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={CONFIG.resumeEmbedUrl} target="_blank" rel="noreferrer">Resume</a>
          <a href="/resume.pdf" download>Resume PDF</a>
          <a href={`mailto:${CONFIG.emailSecondary}`}>Personal email</a>
        </div>

        <footer className="footer">
          <span>&copy; {new Date().getFullYear()} Rachel Chertok</span>
          <span>{INTERESTS.join(' / ')}</span>
        </footer>
      </section>
    </>
  )
}
