import { EXPERIENCE } from '../content'
import { Section, Entry } from '../components/Section'

export default function Experience() {
  return (
    <Section id="experience" path="work" title="Experience">
      <div className="entries">
        {EXPERIENCE.map(e => <Entry key={e.title} {...e} />)}
      </div>
    </Section>
  )
}
