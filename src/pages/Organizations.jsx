import { ORGS } from '../content'
import { Section, Entry } from '../components/Section'

export default function Organizations() {
  return (
    <Section id="organizations" path="orgs" title="Student Organizations">
      <div className="entries">
        {ORGS.map(o => <Entry key={o.org} {...o} />)}
      </div>
    </Section>
  )
}
