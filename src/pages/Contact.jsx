import { CONFIG } from '../siteConfig'
import { Section } from '../components/Section'

const LINKS = [
  { label: 'School',   value: CONFIG.emailPrimary,              href: `mailto:${CONFIG.emailPrimary}` },
  { label: 'Personal', value: CONFIG.emailSecondary,            href: `mailto:${CONFIG.emailSecondary}` },
  { label: 'LinkedIn', value: 'linkedin.com/in/rachel-chertok', href: CONFIG.linkedin },
  { label: 'GitHub',   value: 'github.com/chertokr',            href: CONFIG.github },
]

export default function Contact() {
  return (
    <Section id="contact" path="contact" title="Contact">
      <p className="body-text" style={{ marginBottom: 'var(--s-5)' }}>
        I graduate in May 2027 and am actively looking for full-time product management roles in tech and fintech, in Boston, New York, Chicago, Texas, California, or fully remote. Always happy to talk about product, data, or cloud. The fastest way to reach me is email.
      </p>
      <div className="contact-list">
        {LINKS.map(l => (
          <a
            key={l.label}
            className="contact-row"
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
          >
            <span className="mono">{l.label}</span>
            <span className="value">{l.value}</span>
            <span className="arrow">&rarr;</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
