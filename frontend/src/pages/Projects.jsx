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
    award: '🏆 CTPG Ideathon 2025 Winner',
    githubUrl: 'https://github.com/kiruthik13/EASE.git'
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
    category: 'Mobile App',
    githubUrl: 'https://github.com/kiruthik13/estore_valari.git'
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

                <div className="project-actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn live-btn"
                    >
                      🔗 Live Preview
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn github-btn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.87 8.166 6.84 9.49.5.09.68-.217.68-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
