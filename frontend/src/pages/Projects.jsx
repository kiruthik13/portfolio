import { useState } from 'react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const projects = [
  {
    title: 'Environment Waste Management System - "Ease" App',
    desc: 'Gamified mobile app with AI waste detection, eco-points rewards, and recycling locator to promote sustainable living. Winner of CTPG Ideathon 2025.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'Firebase', 'Google Maps API'],
    category: 'Mobile App',
    featured: true,
    award: '🏆 CTPG Ideathon 2025 Winner',
    url: '#'
  },
  {
    title: 'Student Attendance Tracker',
    desc: 'Full-stack React/Node.js/MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission.',
    image: '/Attendance-tracker.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    category: 'Web App',
    featured: true,
    url: '#'
  },
  {
    title: 'Wool Monitoring System (Farm to Fabric)',
    desc: 'Application designed, developed, and tested within a team of 6 using Figma and MIT Tools for monitoring wool production from farm to fabric.',
    image: '/fleece.jpg',
    tech: ['Figma', 'MIT App Inventor', 'Firebase'],
    category: 'Mobile App',
    url: '#'
  },
  {
    title: 'Organic Products E-Commerce App',
    desc: 'Mobile-based Flutter application providing customers with a convenient way to shop for natural and eco-friendly products.',
    image: '/online ecommerce app.jpg',
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Firestore'],
    category: 'Mobile App',
    url: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web App', 'Mobile App'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section premium-projects-section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <div className="projects-header">
            <h2 className="section-title premium-section-title">Projects</h2>
          </div>
        </ScrollAnimationWrapper>

        {/* Filter Tabs */}
        <ScrollAnimationWrapper delay={100}>
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
        </ScrollAnimationWrapper>

        {/* Projects Grid */}
        <div className="premium-projects-grid">
          {filteredProjects.map((project, index) => (
            <ScrollAnimationWrapper key={project.title} delay={index * 100}>
              <article className={`premium-project-card ${project.featured ? 'featured' : ''}`}>
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      {project.url !== '#' && (
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">⭐ Featured</div>
                  )}
                  <div className="category-badge">{project.category}</div>
                </div>

                <div className="project-content">
                  {project.award && (
                    <div className="project-award">{project.award}</div>
                  )}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.desc}</p>

                  <div className="tech-stack">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
