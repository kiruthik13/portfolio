import { useState } from 'react';

const projects = [
  {
    title: 'Environment Waste Management System - "Ease" App',
    desc: 'Gamified mobile app with AI waste detection, eco-points rewards, and recycling locator to promote sustainable living. Winner of CTPG Ideathon 2025.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Google Maps API'],
    category: 'Mobile App',
    featured: true,
    award: '🏆 CTPG Ideathon 2025 Winner'
  },
  {
    title: 'Student Attendance Tracker',
    desc: 'Full-stack React/Node.js/MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission.',
    image: '/Attendance-tracker.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    category: 'Web App',
    featured: true
  },
  {
    title: 'Wool Monitoring System (Farm to Fabric)',
    desc: 'Application designed, developed, and tested within a team of 6 using Figma and MIT Tools for monitoring wool production from farm to fabric.',
    image: '/fleece.jpg',
    tech: ['Figma', 'MIT App Inventor', 'Firebase'],
    category: 'Mobile App'
  },
  {
    title: 'Organic Products E-Commerce App',
    desc: 'Mobile-based Flutter application providing customers with a convenient way to shop for natural and eco-friendly products.',
    image: '/online ecommerce app.jpg',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore'],
    category: 'Mobile App'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile App'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Filter Buttons */}
        <div className="project-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
                {project.featured && (
                  <span className="featured-badge">⭐ Featured</span>
                )}
                <span className="category-badge">{project.category}</span>
              </div>

              <div className="project-info">
                {project.award && (
                  <div className="project-award">{project.award}</div>
                )}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>

                <div className="tech-tags">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
