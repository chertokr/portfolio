import Expandable from '../components/Expandable'
import { ExternalLink } from 'lucide-react'

const salesMailerSections = [
  { label: 'Problem',  content: 'Sales reps spent hours drafting personalized outreach templates and tracking sends manually.' },
  { label: 'Insight',  content: 'Automating template creation and send workflows would save time and increase consistent follow-ups.' },
  { label: 'Solution', content: 'Built a React app integrating the Gmail API to create, send, and track templated outreach with reusable components.' },
  { label: 'Impact',   content: 'Reduced drafting time by ~60% per rep; estimated ~2.4 hours saved per rep per day in pilot.' },
]

const caseStudies = [
  {
    tag: 'Revenue Growth',
    tagColor: '#22c55e',
    title: 'A Name Change That Generated $300K',
    subtitle: 'Key Lime to Lime Rebranding · Bevi · PM',
    heroMetric: '$300K',
    heroLabel: 'Projected Revenue (Finance Team)',
    sections: [
      { label: 'Problem',  content: "A flavor was chronically underperforming despite tasting well in blind tests, with user research pointing to a perception mismatch between the name and customer expectations." },
      { label: 'Insight',  content: 'Usage data and qualitative interviews confirmed the name, not the formula, was the barrier, with competitor analysis showing simpler flavor names consistently outperform descriptive ones in this category.' },
      { label: 'Solution', content: 'Led a zero-cost software rename from Key Lime to Lime across all machines, coordinating with engineering and marketing to deploy the update with no reformulation required.' },
      { label: 'Impact',   content: 'The finance team projected $300K in incremental revenue in the following year based on usage trends unlocked by the rename.' },
    ],
    skills: ['User Research', 'Data Analysis', 'Cross-functional Execution', 'Revenue Strategy'],
  },
  {
    tag: 'SKU Optimization',
    tagColor: '#3b82f6',
    title: 'Flavor Swaps & Voting',
    subtitle: 'SKU Optimization · Bevi · PM · July – August 2025',
    heroMetric: '+30%',
    heroLabel: 'Concentrate Consumption',
    sections: [
      { label: 'Problem',  content: 'Low-performing beverage SKUs were occupying machine slots across partner accounts, reducing concentrate consumption and limiting revenue potential.' },
      { label: 'Insight',  content: 'Usage data in Snowflake revealed clear patterns of underperformance by SKU and site, and that swapping to high-usage replacements could meaningfully lift consumption with minimal operational cost.' },
      { label: 'Solution', content: 'Developed and deployed an AI-powered SKU optimization algorithm using Python, Snowflake, and Looker within Hex notebooks to identify low-performing SKUs and recommend high-usage replacements. Piloted a flavor voting program across 110 sites with one partner to collect quantitative and qualitative feedback.' },
      { label: 'Impact',   content: 'Increased concentrate consumption by 30% across strategic partner accounts. Pilot data validated the algorithm and informed a broader rollout strategy.' },
    ],
    skills: ['Python', 'Snowflake', 'Looker', 'Hex', 'Data Analysis', 'Algorithm Design', 'Pilot Programs'],
  },
  {
    tag: 'Product Strategy',
    tagColor: '#f59e0b',
    title: 'Rethinking a Struggling Flavor Portfolio',
    subtitle: 'SKU Discontinuation Strategy · Bevi · PM',
    heroMetric: '4',
    heroLabel: 'Strategic Paths Evaluated',
    sections: [
      { label: 'Problem',  content: 'Two flavors were underperforming across every key metric, and an upcoming product line launch threatened to cannibalize their already-low demand, making a portfolio decision unavoidable.' },
      { label: 'Insight',  content: 'Data showed one flavor still held meaningful machine share, and qualitative pilot feedback pointed to a formula issue rather than a category problem, opening a reformulation path alongside retirement.' },
      { label: 'Solution', content: 'Built a decision framework evaluating four paths: full retirement, restriction to existing machines, reclassification into the new product line, or reformulation, each mapped against financials, operational complexity, and user sentiment.' },
      { label: 'Impact',   content: 'Delivered a data-backed recommendation that resolved a long-debated internal decision, with the framework becoming reusable for future flavor portfolio reviews.' },
    ],
    skills: ['Portfolio Strategy', 'Data Analysis', 'Financial Modeling', 'Stakeholder Communication', 'Decision Frameworks'],
  },
]

function SectionList({ sections }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
      {sections.map((s) => (
        <div key={s.label}>
          <div className="ui-label" style={{ color: 'var(--accent)', marginBottom: 4 }}>{s.label}</div>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

        <Expandable
          title={
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ background: '#8b5cf618', color: '#8b5cf6', fontSize: 10, fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 99 }}>Automation</span>
              Sales Mailer
            </span>
          }
          subtitle="React · Gmail API · Product design"
        >
          <SectionList sections={salesMailerSections} />
          <div style={{ marginTop: 14 }}>
            <a
              href="https://github.com/chertokr/sales-mailer"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <ExternalLink size={13} /> View on GitHub
            </a>
          </div>
        </Expandable>

        {caseStudies.map((c) => (
          <Expandable
            key={c.title}
            title={
              <span style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                <span style={{
                  background: c.tagColor + '18',
                  color: c.tagColor,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  borderRadius: 99,
                  flexShrink: 0,
                }}>{c.tag}</span>
                {c.title}
              </span>
            }
            subtitle={c.subtitle}
          >
            <SectionList sections={c.sections} />
            <div style={{ marginTop: 14, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {c.skills.map((sk) => (
                <span key={sk} className="skill-chip" style={{ fontSize: '0.78rem', padding: '4px 10px' }}>{sk}</span>
              ))}
            </div>
          </Expandable>
        ))}

      </div>
    </section>
  )
}
