import { EDUCATION, EDUCATION_HONORS, COURSEWORK, RESEARCH } from '../content'
import { Section, Entry } from '../components/Section'

export default function Education() {
  return (
    <Section id="education" path="education" title="Education and Coursework">
      <article className="entry">
        <div className="entry-when">{EDUCATION.when}</div>
        <div>
          <h3 className="entry-title">{EDUCATION.school}</h3>
          <div className="entry-org">
            {EDUCATION.degree}
            <span className="sep">/</span>{EDUCATION.concentration}
          </div>
          <p className="meta">{EDUCATION.location}</p>
          <div className="tags">
            {EDUCATION_HONORS.map(h => <span key={h} className="chip">{h}</span>)}
          </div>

          <div className="course-groups">
            {COURSEWORK.map(g => (
              <div key={g.area} className={g.current ? 'course-group is-current' : 'course-group'}>
                <span className="mono">{g.area}</span>
                <ul className="course-list">
                  {g.courses.map(c => (
                    <li key={c.code}>
                      <span className="code">{c.code}</span>
                      <span className="course-title">{c.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </article>

      <div className="subhead">
        <span className="mono">Research</span>
      </div>
      <div className="entries">
        <Entry {...RESEARCH} />
      </div>
    </Section>
  )
}
