const skillGroups = [
  {
    label: 'Languages',
    color: '#2563eb',
    skills: ['Python', 'SQL', 'Java', 'HTML/CSS', 'C++', 'R', 'MySQL'],
  },
  {
    label: 'Tools & Platforms',
    color: '#7c3aed',
    skills: ['Snowflake', 'Looker', 'Hex', 'Git/GitHub', 'Jira', 'Google Suite', 'VS Code'],
  },
  {
    label: 'AI & Data',
    color: '#0891b2',
    skills: ['OpenAI API', 'Claude AI', 'Copilot', 'Data Analysis', 'A/B Testing'],
  },
  {
    label: 'Product',
    color: '#059669',
    skills: ['Product Strategy', 'User Research', 'Roadmap Planning', 'Stakeholder Communication', 'Decision Frameworks'],
  },
]

const interests = ['Chi Omega', 'Russian', 'Italian', 'Star Wars', 'Lord of the Rings', 'Skiing', 'Baking']

export default function About() {
  return (
    <section className="about page">
      <h2>About</h2>

      {/* Bio */}
      <p className="body-text" style={{ marginBottom: 20 }}>
        Focused on product management at the intersection of data and user experience, I've shipped real product work at Bevi, driving $300K in projected revenue through a zero-cost rebrand, building accessibility programs, and using Snowflake and Looker to turn 2M+ machine events into actionable insights.
        <br /><br />
        <strong>Next up:</strong> PM intern at Red Hat on the Enterprise Linux Public Cloud team.
      </p>

      {/* Education */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20, padding: '16px 18px', borderRadius: 12, background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.08)' }}>
        <img src="/icons/neu-seal.png" alt="Northeastern" style={{ width: 52, height: 52, objectFit: 'contain', flexShrink: 0, marginTop: 2 }} />
        <div>
          <div className="ui-label" style={{ color: 'var(--accent)', marginBottom: 4 }}>Education</div>
          <div style={{ fontWeight: 700, fontSize: 'var(--text-base)', marginBottom: 2 }}>Northeastern University</div>
          <div className="meta">Khoury College of Computer Science</div>
          <div className="meta">B.S. CS & Business Administration · Fintech · May 2027</div>
          <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['OOD', 'Algorithms', 'Computer Systems', 'Database Design', 'Financial Management', 'Investments'].map(c => (
              <span key={c} style={{ background: 'rgba(37,99,235,0.07)', color: 'var(--accent)', fontSize: '0.78rem', fontWeight: 600, padding: '3px 9px', borderRadius: 99 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills grouped */}
      <div style={{ marginBottom: 20 }}>
        <h3 style={{ marginBottom: 14 }}>Skills & Tools</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {skillGroups.map((g) => (
            <div key={g.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, flexWrap: 'wrap' }}>
              <span style={{
                minWidth: 130,
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: g.color,
                paddingTop: 6,
                flexShrink: 0,
              }}>{g.label}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, flex: 1 }}>
                {g.skills.map((s) => (
                  <span key={s} className="skill-chip" style={{
                    borderLeft: `3px solid ${g.color}22`,
                    fontSize: '0.83rem',
                    padding: '5px 11px',
                  }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div style={{ borderTop: '1px solid rgba(15,23,36,0.06)', paddingTop: 16 }}>
        <div className="ui-label" style={{ color: 'var(--muted)', marginBottom: 10 }}>Outside of Work</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {interests.map((i) => (
            <span key={i} style={{
              background: 'rgba(37,99,235,0.04)',
              border: '1px solid rgba(37,99,235,0.08)',
              borderRadius: 99,
              padding: '4px 12px',
              fontSize: '0.85rem',
              color: 'var(--muted)',
            }}>{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
