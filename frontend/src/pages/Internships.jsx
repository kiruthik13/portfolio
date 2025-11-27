const internshipItems = [
  {
    heading: 'Twincord Technologies',
    subheading: 'Full Stack Developer Intern',
    timeline: '19 July 2025 — 17 October 2025',
    points: [
      'Worked on end-to-end web application features across frontend and backend.',
      'Collaborated with the product team to deliver secure and scalable experiences.',
    ],
    file: '/intern-letter.pdf',
  },
];

export default function Internships() {
  return (
    <section id="internships" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Internships</h2>
        <div className="cert-grid">
          {internshipItems.map((item, idx) => (
            <div className="cert-card" key={`internship-${idx}`}>
              <div className="cert-media">
                <img src="/intern-certificate.png" alt={item.heading} />
                <a className="cert-view" href={item.file || '#'} target="_blank" rel="noopener noreferrer">👁 View Letter</a>
              </div>
              <div className="cert-card-body">
                <div style={{display:'flex',gap:8,alignItems:'center',flexWrap:'wrap'}}>
                  <span className="chip">Internship Experience</span>
                </div>
                <h4 className="cert-title" style={{marginTop:10}}>{item.subheading}</h4>
                <div className="cert-issuer">Company: <strong>{item.heading}</strong></div>
                {item.timeline && <div className="cert-issuer" style={{fontSize:'12px',marginTop:4}}>{item.timeline}</div>}
                {item.points && (
                  <ul style={{fontSize:'13px',margin:'8px 0 0 16px',padding:0,color:'var(--muted)'}}>
                    {item.points.map(point => (
                      <li key={point} style={{margin:'4px 0'}}>{point}</li>
                    ))}
                  </ul>
                )}
                <div style={{marginTop:12}}>
                  <a className="btn" href={item.file} target="_blank" rel="noopener noreferrer" style={{marginRight:8}}>View</a>
                  <a className="btn btn-primary" href={item.file} download="Intern_Completion_Letter.pdf">Download</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
