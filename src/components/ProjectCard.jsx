import { useState } from 'react'
import Card, { Tags } from './Card'

const DETAIL = [['Problem', 'problem'], ['Solution', 'solution'], ['Impact', 'impact']]

export default function ProjectCard({ project, chart, span = 4, now = false, stat }) {
  const [open, setOpen] = useState(false)
  const { title, org, summary, tags, links } = project

  return (
    <Card span={span} label={now ? 'Project, in progress' : 'Project'} className="project">
      <h3 className="card-title">{title}</h3>
      <p className="card-meta">{org}</p>
      {now && <p className="sticker sticker--sm">Building this now</p>}
      {chart}
      <p className="card-text">{summary}</p>
      {stat && <p className="project-stat">{stat}</p>}

      {open && (
        <div className="project-detail">
          {DETAIL.map(([label, key]) => (
            <p key={key}><b>{label}.</b> {project[key]}</p>
          ))}
        </div>
      )}

      <div className="project-foot">
        <button className="btn" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? 'Less' : now ? 'Where it stands' : 'How it went'}
        </button>
        {links?.map(l => (
          <a key={l.href} className="btn btn--link" href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>

      <Tags items={tags} />
    </Card>
  )
}
