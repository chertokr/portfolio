import React from 'react'

export default function ResumePage({embedUrl}){
  const src = embedUrl || '/resume.pdf'
  return (
    <section className="resume page">
      <h2>Resume</h2>
      <p>Download a compact resume tailored for Product Manager roles.</p>
      <a className="download" href="/resume.pdf" download>Download Resume (PDF)</a>
      <div style={{marginTop:12}}>
        <iframe title="Resume preview" src={src} style={{width:'100%',height:'720px',borderRadius:8,border:'none'}} />
      </div>
    </section>
  )
}
