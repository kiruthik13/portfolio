import { useState } from 'react';

const resumeSections = [
  {
    title: 'Education',
    items: [
      {
        heading: 'Kongu Engineering College',
        subheading: 'M.Sc. Software Systems',
        timeline: '2025 — 2027',
        points: ['CGPA: 7.4', 'Specializing in Software Systems and Full-Stack Development'],
      },
      {
        heading: 'Vivekananda Vidyalaya Muthur',
        subheading: 'Higher Secondary Education',
        timeline: '2020 — 2022',
        points: ['Grade: 65%'],
      },
      {
        heading: 'Vivekananda Vidyalaya Muthur',
        subheading: 'SSLC',
        timeline: '2020',
        points: ['Grade: 84%'],
      },
    ],
  },
  {
    title: 'Achievements & Awards',
    items: [
      {
        heading: 'CTPG Proof Of Concept 2025',
        subheading: '1st Prize Winner',
        timeline: '2025',
        points: ['Recognized for innovative solution design and execution.'],
      },
      {
        heading: 'CTPG Ideathon 2025',
        subheading: '1st Prize Winner',
        timeline: '2025',
        points: ['Developed "Ease" App – an AI-powered waste management solution.'],
      },
      {
        heading: 'KEC Hackathon 2025',
        subheading: '2nd Prize Winner',
        timeline: '2025',
      },
      {
        heading: 'ROBOTICS Workshop @ SKCET',
        subheading: 'Participant',
        timeline: 'September 2023',
      },
    ],
  },
];

export default function Resume() {
  const [openSections, setOpenSections] = useState(resumeSections.map(() => false));

  const toggleSection = index => {
    setOpenSections(prev => prev.map((open, i) => (i === index ? !open : false)));
  };

  return (
    <section id="resume" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="grid grid-2" style={{ alignItems: 'start' }}>
          {resumeSections.map((section, index) => {
            const isOpen = openSections[index];
            return (
              <div
                key={section.title}
                className={`card resume-card ${isOpen ? 'open' : ''}`}
                onClick={() => toggleSection(index)}
                style={section.title === 'Certifications' || section.title === 'Internship' ? { gridColumn: '1 / -1' } : {}}
              >
                <div className="resume-card-header">
                  <h3>{section.title}</h3>
                  <span className="resume-card-toggle">{isOpen ? '−' : '+'}</span>
                </div>
                {isOpen && (
                  <div className="resume-card-body">
                    {section.items.map(item => (
                      <div key={`${section.title}-${item.heading}`} className="resume-card-item">
                        <div className="resume-card-heading">{item.heading}</div>
                        {item.subheading && <div className="resume-card-subheading">{item.subheading}</div>}
                        {item.timeline && <div className="resume-card-dates">{item.timeline}</div>}
                        {item.points && (
                          <ul className="resume-card-points">
                            {item.points.map(point => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

