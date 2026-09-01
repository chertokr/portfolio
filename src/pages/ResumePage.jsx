import { CONFIG } from '../siteConfig'
import { Section } from '../components/Section'

export default function ResumePage() {
  return (
    <Section id="resume" path="resume" title="Resume">
      <article className="entry">
        <div className="entry-when">Sep 2026</div>
        <div>
          <p className="body-text" style={{ marginBottom: 'var(--s-4)' }}>
            One page, kept current. The Google Doc is always the latest version.
          </p>
          <div className="resume-links">
            <a href={CONFIG.resumeEmbedUrl} target="_blank" rel="noreferrer">
              View resume (Google Doc)
            </a>
            <a href="/resume.pdf" download>
              Download PDF
            </a>
          </div>
        </div>
      </article>
    </Section>
  )
}
