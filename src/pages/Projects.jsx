import { useState } from 'react'
import { PROJECTS } from '../content'
import { Section, Tags } from '../components/Section'

const PISI = [
  ['Problem', 'problem'],
  ['Insight', 'insight'],
  ['Solution', 'solution'],
  ['Impact', 'impact'],
]

function Project({ project, open, onToggle }) {
  const { title, when, stack, href, tags } = project
  return (
    <article className="project">
      <button className="project-head" onClick={onToggle} aria-expanded={open}>
        <span>
          <span className="entry-title project-title">{title}</span>
          <span className="meta">{stack}</span>
        </span>
        <span className="project-right">
          <span className="meta">{when}</span>
          <span className="project-toggle">{open ? '[ - ]' : '[ + ]'}</span>
        </span>
      </button>

      {open && (
        <div className="project-body">
          <div className="pisi">
            {PISI.map(([label, key]) => (
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
  const [open, setOpen] = useState(PROJECTS[0].title)
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
