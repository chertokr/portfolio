import { Download } from 'lucide-react'

export default function ResumePage({ embedUrl }) {
  const src = embedUrl || '/resume.pdf'
  return (
    <section className="resume page">
      <h2>Resume</h2>
      <a className="download" href="/resume.pdf" download>
        <Download size={15} /> Download Resume (PDF)
      </a>
      <div style={{ marginTop: 16 }}>
        <iframe title="Resume preview" src={src} style={{ width: '100%', height: '720px', borderRadius: 8, border: 'none' }} />
      </div>
    </section>
  )
}
