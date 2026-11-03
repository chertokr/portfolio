import { useState } from 'react'
import { PROJECTS } from '../content'
import { Section, Tags } from '../components/Section'

const DETAIL = [
  ['Problem', 'problem'],
  ['Solution', 'solution'],
  ['Impact', 'impact'],
]

function Project({ project, open, onToggle }) {
  const { title, when, summary, stack, href, tags } = project
  return (
    <article className="project">
      <button className="project-head" onClick={onToggle} aria-expanded={open}>
        <span>
          <span className="entry-title project-title">{title}</span>
          <span className="project-summary">{summary}</span>
        </span>
        <span className="project-right">
          <span className="meta">{when}</span>
          <span className="project-toggle">{open ? '[ - ]' : '[ + ]'}</span>
        </span>
      </button>

      {open && (
        <div className="project-body">
          <p className="meta project-stack">{stack}</p>
          <div className="pisi">
            {DETAIL.map(([label, key]) => (
              <div key={key} className="pisi-row">
                <span className="mono">{label}</span>
                <p className="body-text">{project[key]}</p>
              </div>
            ))}
          </div>
          <Tags items={tags} />
          {href && (
            <p style={{ marginTop: 'var(--s-4)' }}>
              <a className="link meta" href={href} target="_blank" rel="noreferrer">
                View source on GitHub &rarr;
              </a>
            </p>
          )}
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  // all collapsed by default: the summary lines carry the section
  const [open, setOpen] = useState(null)
  return (
    <Section id="projects" path="projects" title="Projects">
      <div>
        {PROJECTS.map(p => (
          <Project
            key={p.title}
            project={p}
            open={open === p.title}
            onToggle={() => setOpen(open === p.title ? null : p.title)}
          />
        ))}
      </div>
    </Section>
  )
}
