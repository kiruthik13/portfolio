import { useState } from 'react';

const projects = [
  {
    title: 'Fencing Business Management Application',
    desc: 'Full-stack React/Node.js/MongoDB platform for managing fencing project orders, customer details, material tracking, staff assignments, billing, and real-time project progress. Includes an admin dashboard, secure authentication, automated email notifications, and fully responsive UI.',
    image: '/fencing-dashboard.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    category: 'Web App',
    featured: true,
    liveUrl: 'https://fencing-business-management-applica.vercel.app'
  },
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
    title: 'MindAid – Counselling & Well-Being Hub',
    desc: 'A modern mental wellness platform built with React, Firebase, and a premium UI. MindAid enables users to connect with licensed counsellors, book secure sessions, track their mood, and explore curated well-being resources. Includes full role-based authentication, admin dashboards, resource management, and counsellor availability scheduling.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80',
    tech: ['React', 'Firebase', 'Firestore', 'TailwindCSS', 'Vercel'],
    category: 'Web App',
    featured: true,
    liveUrl: 'https://mind-aid-counselling-and-well-being.vercel.app'
  },
  {
    title: 'Student Attendance Tracker',
    desc: 'Full-stack React/Node.js/MongoDB dashboard with role-based access, real-time attendance tracking, analytics/exports, and secure campus-restricted submission.',
    image: '/attendance-dashboard-creative.png',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    category: 'Web App',
    featured: true,
    liveUrl: 'https://attendance-kiruthik.vercel.app'
  },
  {
    title: 'Organic Products E-Commerce App',
    desc: 'Mobile-based Flutter application providing customers with a convenient way to shop for natural and eco-friendly products.',
    image: '/valari-ecommerce.png',
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

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-btn"
                  >
                    🔗 Live Preview
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
