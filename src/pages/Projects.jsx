import Expandable from '../components/Expandable'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    tag: 'Product Strategy',
    title: 'A Decision Dashboard for RHEL in Cloud',
    subtitle: 'Red Hat · RHEL Cloud Pod · PM',
    sections: [
      { label: 'Problem',  content: 'The RHEL Cloud Pod’s key metrics were trapped across Tableau, Jira, Salesforce, and manual spreadsheets, so go-to-market decisions were slow, low-confidence, and backward-looking.' },
      { label: 'Insight',  content: 'The data needed for full visibility already lived in Red Hat’s own RHUI update logs, and a single standardized access point could cut time-to-insight from days to seconds.' },
      { label: 'Solution', content: 'Designed a two-lens dashboard: a Cloud Admin view (QTD financials, escalations, and pipeline per hyperscaler) and an LOB Leader view (market trends mapped to the roadmap). Built as a static web app refreshed weekly via Python and GitLab CI, running locally inside the VPN at zero hosting cost.' },
      { label: 'Impact',   content: 'Replaces engineering-dependent, retrospective reporting with self-serve, real-time visibility PMs can use to validate hypotheses and track growth targets.' },
    ],
    skills: ['Product Strategy', 'Data Aggregation', 'Python', 'Chart.js', 'User Research', 'Roadmap Planning'],
  },
  {
    tag: 'SKU Optimization',
    title: 'Flavor Swaps & Voting',
    subtitle: 'Bevi · Data-driven SKU strategy',
    sections: [
      { label: 'Problem',  content: 'Low-performing SKUs occupied machine slots across partner accounts, capping concentrate consumption and revenue.' },
      { label: 'Insight',  content: 'Usage data in Snowflake showed exactly which SKUs to swap for high-usage replacements at minimal operational cost.' },
      { label: 'Solution', content: 'Built an AI-powered SKU optimization model in Python, Snowflake, and Looker within Hex, and piloted a flavor-voting program with a partner across 110 sites.' },
      { label: 'Impact',   content: 'Increased concentrate consumption by 30% across strategic partner accounts and validated a broader rollout.' },
    ],
    skills: ['Python', 'Snowflake', 'Looker', 'Hex', 'Data Analysis', 'Pilot Programs'],
  },
  {
    tag: 'Automation',
    title: 'Sales Mailer',
    subtitle: 'Personal project · React, Gmail API',
    link: 'https://github.com/chertokr/sales-mailer',
    sections: [
      { label: 'Problem',  content: 'Sales reps spent roughly four hours a day hand-drafting and tracking personalized pricing emails.' },
      { label: 'Insight',  content: 'Templating the content and automating the send workflow would recover hours and keep follow-ups consistent.' },
      { label: 'Solution', content: 'Built a React and Gmail API app to create, send, and track templated pricing emails, with send history for reuse.' },
      { label: 'Impact',   content: 'Cut drafting time by roughly 60% per rep.' },
    ],
    skills: ['React', 'Gmail API', 'Product Design', 'Automation'],
  },
]

function SectionList({ sections }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 4 }}>
      {sections.map((s) => (
        <div key={s.label}>
          <div className="ui-label" style={{ marginBottom: 4 }}>{s.label}</div>
          <p className="body-text" style={{ margin: 0 }}>{s.content}</p>
        </div>
      ))}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="projects page">
      <h2>Selected Projects</h2>
      <div>
        {projects.map((p) => (
          <Expandable
            key={p.title}
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
                <span className="work-tag">{p.tag}</span>
                {p.title}
              </span>
            }
            subtitle={p.subtitle}
          >
            <SectionList sections={p.sections} />
            <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {p.skills.map((sk) => (
                <span key={sk} className="skill-chip" style={{ fontSize: '0.9rem' }}>{sk}</span>
              ))}
            </div>
            {p.link && (
              <div style={{ marginTop: 16 }}>
                <a href={p.link} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={13} /> View on GitHub
                </a>
              </div>
            )}
          </Expandable>
        ))}
      </div>
    </section>
  )
}
