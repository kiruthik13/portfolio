const projects = [
  {
    title: 'Environment Waste Management System - "Ease" App',
    desc: 'Gamified mobile app with AI waste detection, eco-points rewards, and recycling locator to promote sustainable living. Winner of CTPG Ideathon 2025.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tech: 'Flutter, Dart, TensorFlow Lite / ML Kit, Firebase Auth, Firestore, Google Maps API',
    url: '#'
  },
  {
    title: 'Student Attendance Tracker',
    desc: 'Full-stack React/Node.js/MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission. Deployed on Vercel and Render.',
    image: '/Attendance-tracker.png',
    tech: 'React, Node.js, Express, MongoDB, Vercel, Render',
    url: '#'
  },
  {
    title: 'Wool Monitoring System (Farm to Fabric)',
    desc: 'Application designed, developed, and tested within a team of 6 using Figma and MIT Tools for monitoring wool production from farm to fabric.',
    image: '/fleece.jpg',
    tech: 'Figma, MIT App Inventor, Firebase',
    url: '#'
  },
  {
    title: 'Organic Products E-Commerce App',
    desc: 'Mobile-based Flutter application providing customers with a convenient way to shop for natural and eco-friendly products. Complete online retail ecosystem for both customers and administrators.',
    image: '/online%20ecommerce%20app.jpg',
    tech: 'Flutter, Dart, Firebase Auth, Firestore, Firebase Storage.',
    url: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <article className="card project-card" key={p.title}>
              <img src={p.image} alt={p.title} />
              <div className="project-title">
                <h3 style={{ margin: 0 }}>{p.title}</h3>
                {p.url !== '#' && <a className="external" href={p.url} target="_blank" rel="noopener noreferrer" aria-label="Open project">↗</a>}
              </div>
              <p className="muted">{p.desc}</p>
              {p.tech && <p style={{ marginTop: '8px', fontSize: '13px', color: 'var(--pink)' }}><strong>Tech Stack:</strong> {p.tech}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

