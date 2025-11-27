export default function Home() {
  return (
    <section id="home" className="section hero-section" style={{ scrollMarginTop: '90px' }}>
      <div className="container hero">
        <div>
          <h1>Kiruthikbairavan C</h1>
          <h2>Full-Stack Developer & Software Systems Student</h2>
          <p className="muted">Passionate about building innovative solutions that make a real-world impact. Winner of CTPG Ideathon 2025 and KEC Hackathon 2025. Specializing in React, Node.js, Flutter, and modern web technologies.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/resume.pdf" download="Kiruthik_Resume.pdf">Download Resume</a>
            <a className="btn btn-contact" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            <a className="social" href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
            <a className="social" href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
            <a className="social" href="https://x.com/KonguKiruthik?t=7xYaCumQOKhmPg0nqbMPGA&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">X</a>
          </div>
        </div>
        <div className="avatar-wrap">
          <div className="avatar">
            <img src="/profile.jpg" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}