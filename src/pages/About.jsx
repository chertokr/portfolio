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
      <p className="body-text" style={{ marginBottom: 28 }}>
        Focused on product management at the intersection of data and user experience,
        I've shipped real product work at Bevi, driving $300K in projected revenue through
        a zero-cost rebrand, led a 100+ member web development student organization as President, and used data to optimize operations at both experiences.
      </p>

      {/* Education */}
      <div className="about-edu">
        <img src="/icons/neu-seal.png" alt="Northeastern" className="about-edu-logo" />
        <div>
          <div className="ui-label" style={{ color: 'var(--accent)', marginBottom: 5 }}>Education</div>
          <div style={{ fontWeight: 700, fontSize: 'var(--text-base)' }}>Northeastern University</div>
          <div className="meta">Khoury College · B.S. CS &amp; Business Administration · Fintech · May 2027</div>
          <div className="about-courses">
            {['OOD', 'Algorithms', 'Computer Systems', 'Database Design', 'Financial Management', 'Investments'].map(c => (
              <span key={c} className="about-course-chip">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills — 2-column grid */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 16 }}>Skills &amp; Tools</h3>
        <div className="skills-grid-2col">
          {skillGroups.map((g) => (
            <div key={g.label} className="skill-group-card">
              <div className="skill-group-label" style={{ color: g.color }}>{g.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.skills.map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
        <div className="ui-label" style={{ color: 'var(--muted)', marginBottom: 12 }}>Outside of Work</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {interests.map(i => (
            <span key={i} className="interest-chip">{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
