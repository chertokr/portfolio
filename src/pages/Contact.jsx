import { CONFIG } from '../siteConfig'

const links = [
  {
    label: 'Email',
    value: CONFIG.emailPrimary,
    href: `mailto:${CONFIG.emailPrimary}`,
    color: '#2563eb',
    icon: '✉',
    desc: 'Best for professional inquiries',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rachel-chertok',
    href: CONFIG.linkedin,
    color: '#0a66c2',
    icon: '💼',
    desc: 'Connect and follow my work',
  },
  {
    label: 'GitHub',
    value: 'github.com/chertokr',
    href: CONFIG.github,
    color: '#7c3aed',
    icon: '⌨',
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
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '18px 20px',
              borderRadius: 14,
              border: `1px solid ${l.color}22`,
              background: `linear-gradient(135deg, ${l.color}06, ${l.color}03)`,
              textDecoration: 'none',
              color: 'var(--text)',
              transition: 'transform 220ms, box-shadow 220ms, border-color 220ms',
              boxShadow: `0 2px 10px ${l.color}0a`,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = `0 8px 24px ${l.color}18`
              e.currentTarget.style.borderColor = `${l.color}44`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = `0 2px 10px ${l.color}0a`
              e.currentTarget.style.borderColor = `${l.color}22`
            }}
          >
            <span style={{
              width: 44, height: 44,
              borderRadius: 12,
              background: `linear-gradient(135deg, ${l.color}18, ${l.color}0a)`,
              border: `1px solid ${l.color}22`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0,
            }}>{l.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.07em', color: l.color, marginBottom: 2 }}>{l.label}</div>
              <div style={{ fontWeight: 600, fontSize: '0.97rem' }}>{l.value}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.83rem', marginTop: 1 }}>{l.desc}</div>
            </div>
            <span style={{ color: l.color, fontSize: 18, opacity: 0.5 }}>→</span>
          </a>
        ))}
      </div>
    </section>
  )
}
