import { useState } from 'react';

const certificateItems = [
  {
    heading: 'Oracle',
    subheading: 'Oracle Certified Java SE 17 Developer',
    file: '/java%20se%2017.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Oracle Certified APEX Cloud Developer',
    file: '/apex.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    file: '/ai%20vector.jpg',
    year: '2025'
  },
  {
    heading: 'NVIDIA',
    subheading: 'NVIDIA Certification',
    file: '/nvidia.jpg',
    year: '2025'
  },
  {
    heading: 'Deloitte',
    subheading: 'Deloitte Certification',
    file: '/delottie.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Gen AI Certification',
    file: '/gen%20ai.jpg',
    year: '2025'
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certificateItems.map((item, idx) => (
            <div className="cert-card" key={`cert-${idx}`}>
              <div className="cert-media">
                <img src={item.file || '/resume.pdf'} alt={item.subheading || item.heading} />
                <a className="cert-view" href={item.file || '#'} target="_blank" rel="noopener noreferrer">👁 View Full</a>

              </div>
              <div className="cert-card-body">
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                  <span className="chip">Professional Certification</span>
                  {item.year && <span className="chip year">{item.year}</span>}
                </div>
                <h4 className="cert-title" style={{ marginTop: 10 }}>{item.subheading}</h4>
                <div className="cert-issuer">Issued by <strong>{item.heading}</strong></div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
