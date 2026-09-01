import { SKILLS } from '../content'
import { Section } from '../components/Section'

export default function Skills() {
  return (
    <Section id="skills" path="skills" title="Skills">
      <div className="skill-groups">
        {SKILLS.map(g => (
          <div key={g.group} className="skill-group">
            <h3 className="skill-group-title">{g.group}</h3>
            <div className="skill-rows">
              {g.rows.map(r => (
                <div key={r.area} className="skill-row">
                  <span className="mono">{r.area}</span>
                  <div className="chips">
                    {r.items.map(i => <span key={i} className="chip">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
