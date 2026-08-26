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

        <div className="internship-container-wrap">
          {internshipItems.map((item, idx) => (
            <ScrollAnimationWrapper key={`internship-${item.id || idx}`} delay={100}>
              <div className="internship-card">
                {/* Left Media Box */}
                <div className="internship-aside">
                  <div className="internship-logo-box">
                    <img
                      src={item.image}
                      alt={item.heading}
                      className="internship-logo"
                    />
                  </div>
                  {item.file && (
                    <a
                      className="btn-cert-view"
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>👁</span> View Certificate
                    </a>
                  )}
                </div>

                {/* Right Content Area */}
                <div className="internship-main">
                  <div className="internship-header-chips">
                    <span className="chip engagement-chip">{item.engagement}</span>
                    <span className="chip status-chip-completed">
                      ✓ Status: {item.status}
                    </span>
                  </div>

                  <h3 className="internship-role-title">
                    {item.subheading}
                  </h3>

                  <div className="internship-company-row">
                    <span className="company-label">Company:</span>{' '}
                    <strong className="company-name">{item.heading}</strong>
                  </div>

                  <div className="internship-meta-row">
                    <div className="meta-item">
                      <span>🗓 <strong>Period:</strong> {item.timeline}</span>
                    </div>
                    {item.location && (
                      <div className="meta-item">
                        <span>📍 <strong>Location:</strong> {item.location}</span>
                      </div>
                    )}
                  </div>

                  {item.authority && (
                    <div className="internship-authority-row">
                      <span>✍️ <strong>Issued by:</strong> {item.authority}</span>
                    </div>
                  )}

                  {item.points && (
                    <ul className="internship-highlights-list">
                      {item.points.map((point) => (
                        <li key={point} className="highlight-item">
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
