export default function Card({ tone = 'paper', span = 4, label, className = '', children, ...rest }) {
  return (
    <section className={`card card--${tone} span-${span} ${className}`} {...rest}>
      {label && <p className="card-label">{label}</p>}
      {children}
    </section>
  )
}

export function Tags({ items }) {
  if (!items?.length) return null
  return (
    <ul className="tags">
      {items.map(t => <li key={t}>{t}</li>)}
    </ul>
  )
}
