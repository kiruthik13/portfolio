import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const internshipItems = [
  {
    id: 1,
    type: 'logo',
    heading: 'Twincord Technologies Private Limited',
    subheading: 'Intern – App Development',
    engagement: 'Industry Internship',
    timeline: '19th July 2025 — 17th October 2025',
    status: 'Completed',
    statusColor: 'green',
    location: 'Erode, Tamil Nadu',
    authority: 'Harrisjayakumar V (Founder & CEO)',
    points: [
      'Demonstrated strong dedication, professionalism, and technical proficiency in App Development under industry mentorship.',
      'Developed and optimized core mobile application features, ensuring responsive and scalable performance.',
      'Collaborated effectively to deliver clean code, secure workflows, and seamless user experiences.',
    ],
    image: '/twincord-logo.png',
    file: '/intern-letter.pdf',
  },
];

export default function Internships() {
  return (
    <section id="internships" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Internships</h2>
        </ScrollAnimationWrapper>
        <div className="internship-wrap">
          {internshipItems.map((item, idx) => (
            <ScrollAnimationWrapper key={`internship-${item.id || idx}`} delay={idx * 100}>
              <div className="cert-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div className="cert-media internship-media">
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="internship-logo-img"
                  />
                  {item.file && (
                    <a className="cert-view" href={item.file} target="_blank" rel="noopener noreferrer">
                      👁 View Full Certificate
                    </a>
                  )}
                </div>
                <div className="cert-card-body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <span className="chip">{item.engagement}</span>
                    {item.statusColor === 'green' ? (
                      <span className="chip" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.3)', fontWeight: 600 }}>
                        ✓ Status: {item.status}
                      </span>
                    ) : (
                      <span className="chip" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', borderColor: 'rgba(59, 130, 246, 0.3)', fontWeight: 600 }}>
                        🔵 Status: {item.status}
                      </span>
                    )}
                  </div>

                  <h4 className="cert-title" style={{ marginTop: 12, fontSize: '20px', fontWeight: 700 }}>
                    {item.subheading}
                  </h4>

                  <div className="cert-issuer" style={{ fontSize: '14px', lineHeight: 1.5 }}>
                    Company: <strong>{item.heading}</strong>
                  </div>

                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: '13px', color: 'var(--muted)', marginTop: 4 }}>
                    <span>🗓 <strong>Period:</strong> {item.timeline}</span>
                    {item.location && <span>📍 <strong>Location:</strong> {item.location}</span>}
                  </div>

                  {item.authority && (
                    <div style={{ fontSize: '13px', color: 'var(--muted)', marginTop: 2 }}>
                      ✍️ <strong>Issued by:</strong> {item.authority}
                    </div>
                  )}

                  {item.points && (
                    <ul style={{ fontSize: '13.5px', margin: '12px 0 0 18px', padding: 0, color: 'var(--muted)', lineHeight: 1.6, marginTop: 'auto' }}>
                      {item.points.map((point) => (
                        <li key={point} style={{ margin: '6px 0' }}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
