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
        Open to PM roles, internships, and interesting conversations.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {links.map(l => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            className="contact-link"
            style={{ '--link-color': l.color }}
          >
            <span className="contact-icon" style={{ background: `${l.color}14`, border: `1px solid ${l.color}22` }}>
              <l.Icon size={20} color={l.color} />
            </span>
            <div style={{ flex: 1 }}>
              <div className="ui-label" style={{ color: l.color, marginBottom: 2 }}>{l.label}</div>
              <div style={{ fontWeight: 600, fontSize: '0.97rem' }}>{l.value}</div>
              <div className="meta">{l.desc}</div>
            </div>
            <span style={{ color: l.color, opacity: 0.4, fontSize: 18 }}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
