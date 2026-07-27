import { CONFIG } from '../siteConfig'
import { Mail, Linkedin, Github } from 'lucide-react'

const links = [
  {
    label: 'Email',
    value: CONFIG.emailPrimary,
    href: `mailto:${CONFIG.emailPrimary}`,
    color: '#4338ca',
    Icon: Mail,
    desc: 'Best for professional inquiries',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rachel-chertok',
    href: CONFIG.linkedin,
    color: '#0a66c2',
    Icon: Linkedin,
    desc: 'Connect and follow my work',
  },
  {
    label: 'GitHub',
    value: 'github.com/chertokr',
    href: CONFIG.github,
    color: '#7c3aed',
    Icon: Github,
    desc: 'See my projects and code',
  },
]

export default function Contact() {
  return (
    <section className="contact page">
      <h2>Get in Touch</h2>
      <p style={{ color: 'var(--muted)', marginBottom: 28, fontSize: '1.05rem' }}>
        Open to full-time product management roles and good conversations.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="contact-link"
          >
            <span className="contact-icon">
              <l.Icon size={20} />
            </span>
            <div style={{ flex: 1 }}>
              <div className="ui-label" style={{ marginBottom: 4 }}>{l.label}</div>
              <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.05rem' }}>{l.value}</div>
              <div className="meta" style={{ marginTop: 2 }}>{l.desc}</div>
            </div>
            <span style={{ color: 'var(--accent)', fontSize: 20 }}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
