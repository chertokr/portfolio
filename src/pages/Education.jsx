import React from 'react'

export default function Education(){
  return (
    <section className="education page">
      <h2>Education</h2>
      <div className="edu-summary">
        <h3>Northeastern University — Khoury College of Computer Science</h3>
        <p className="meta">B.S. in Computer Science and Business Administration | Concentration in Fintech — Expected May 2027</p>
        <p className="meta">Relevant coursework: Object-Oriented Design, Programming with Data, Algorithms, Database Design, Marketing, Financial Management</p>
      </div>

      <div className="research">
        <h3>Research — Markov Chain Research for Predictive Models</h3>
        <p className="meta">June 2025 - December 2025</p>
        <p>Used Claude AI prompt engineering and Python (networkx, numpy) to model memory-aware Markov Chains and analyze citation networks for predictive finance applications.</p>
      </div>
    </section>
  )
}
