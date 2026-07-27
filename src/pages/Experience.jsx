const roles = [
  {
    logo: '/redhatlogo.png',
    alt: 'Red Hat',
    company: 'Red Hat',
    role: 'Product Management Intern',
    meta: 'RHEL Cloud Pod · Boston, MA · May 2026 to Present',
    bullets: [
      'Contributed to product strategy and roadmap discussions for RHEL across major hyperscalers, including AWS, Google Cloud, Oracle Cloud Infrastructure, and Microsoft Azure.',
      'Designed a cross-functional product dashboard consolidating roadmap milestones, financials, and engineering sprint data to improve team visibility and productivity.',
    ],
  },
  {
    logo: '/OasisLogo.png',
    alt: 'Oasis NEU',
    company: 'Oasis NEU',
    role: 'Executive Board President',
    meta: 'Student-led · Boston, MA · January 2024 to May 2026',
    bullets: [
      'Led a 150+ member programming club, coordinating events, technical mentorship, and beginner-friendly onboarding into software engineering.',
      'Guided development of 95+ React projects and organized events that grew engagement and technical skills.',
    ],
  },
  {
    logo: '/bevilogo.png',
    alt: 'Bevi',
    company: 'Bevi',
    role: 'Software / Beverage Product Management Co-op',
    meta: 'Boston, MA · July 2025 to December 2025',
    bullets: [
      'Analyzed 2M+ machine usage events in Snowflake and built interactive Looker dashboards so partner managers could track unit performance and flavor trends in real time.',
      'Drove a $300K revenue increase through a zero-cost product rebrand (Key Lime to Lime), using user research to align naming with customer expectations.',
      'Prototyped an AI-powered sales assistant on OpenAI’s API to generate machine and flavor recommendations by office size, layout, and industry.',
    ],
  },
  {
    logo: '/icons/neu-seal.png',
    alt: 'Northeastern University',
    company: 'Northeastern University',
    role: 'Markov Chain Research',
    meta: 'Research · Boston, MA · June 2025 to December 2025',
    bullets: [
      'Used Claude AI prompt engineering and Python (networkx, numpy) to model memory-aware Markov chains for predictive finance applications.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="experience page">
      <h2>Experience</h2>
      <div className="timeline" id="timeline">
        {roles.map((r) => (
          <article className="timeline-item" key={r.company + r.role}>
            <div className="timeline-card">
              <h3>
                <span className="company-icon-wrap">
                  <img src={r.logo} alt={r.alt} className="company-icon-img" />
                </span>
                {r.company}
              </h3>
              <p className="meta">{r.role} · {r.meta}</p>
              {r.bullets.length > 1 ? (
                <ul>
                  {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              ) : (
                <p>{r.bullets[0]}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
