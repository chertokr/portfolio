const skillGroups = [
  {
    label: 'Product',
    skills: ['Product Strategy', 'User Research', 'Roadmap Planning', 'Data Analysis', 'A/B Testing', 'Stakeholder Communication'],
  },
  {
    label: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'HTML/CSS', 'C++', 'R', 'MySQL'],
  },
  {
    label: 'Tools',
    skills: ['Jira', 'Slack', 'Trello', 'Google Suite', 'Snowflake', 'Looker', 'Hex', 'Git/GitHub', 'VS Code', 'Claude Code', 'Copilot', 'Cursor'],
  },
]

const courses = [
  'Object-Oriented Design', 'Programming with Data', 'Algorithms', 'Computer Systems',
  'Database Design', 'Financial Management', 'Managerial Accounting', 'Corporate Finance', 'Management Information Systems',
]

const interests = ['Chi Omega', 'Russian', 'Italian', 'Star Wars', 'Lord of the Rings', 'Skiing', 'Baking']

export default function About() {
  return (
    <section className="about page">
      <h2>About</h2>

      {/* Bio */}
      <p className="body-text" style={{ marginBottom: 28 }}>
        Dean’s List Computer Science and Business Administration student who pairs
        technical depth with product management experience. I focus on data-driven
        products and AI-powered tools that move real business metrics, from a $300K
        rebrand at Bevi to a decision dashboard for RHEL in the public cloud.
      </p>

      {/* Education */}
      <div className="about-edu">
        <img src="/icons/neu-seal.png" alt="Northeastern" className="about-edu-logo" />
        <div>
          <div className="ui-label" style={{ marginBottom: 6 }}>Education</div>
          <div style={{ fontFamily: 'var(--display)', fontWeight: 700, fontSize: '1.15rem' }}>Northeastern University</div>
          <div className="meta">Khoury College · B.S. CS &amp; Business Administration · Fintech · Expected May 2027</div>
          <div className="about-courses">
            {courses.map(c => (
              <span key={c} className="about-course-chip">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <div style={{ marginBottom: 28 }}>
        <h3 style={{ marginBottom: 16 }}>Skills &amp; Tools</h3>
        <div className="skills-grid-2col">
          {skillGroups.map((g) => (
            <div key={g.label} className="skill-group-card">
              <div className="skill-group-label">{g.label}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
                {g.skills.map(s => (
                  <span key={s} className="skill-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div style={{ borderTop: '2px solid var(--hair)', paddingTop: 20 }}>
        <div className="ui-label" style={{ marginBottom: 12 }}>Outside of Work</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 0 }}>
          {interests.map(i => (
            <span key={i} className="interest-chip">{i}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
