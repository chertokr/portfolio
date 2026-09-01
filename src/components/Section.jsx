export function Section({ id, path, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span className="idx">~/{path}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
}

export function Tags({ items }) {
  if (!items?.length) return null
  return (
    <div className="tags">
      {items.map(t => <span key={t} className="chip">{t}</span>)}
    </div>
  )
}

/** Dated entry used by Experience, Research, and Student Organizations. */
export function Entry({ when, title, org, note, bullets, tags }) {
  return (
    <article className="entry">
      <div className="entry-when">{when}</div>
      <div>
        <h3 className="entry-title">{title}</h3>
        <div className="entry-org">
          {org}
          {note && <><span className="sep">/</span>{note}</>}
        </div>
        <ul className="bullets">
          {bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
        <Tags items={tags} />
      </div>
    </article>
  )
}
