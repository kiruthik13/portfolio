import { useEffect, useState } from 'react';

const NAV_SECTIONS = ['home', 'about', 'resume', 'certificates', 'internships', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
    } catch (e) {}
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    // apply theme to document body
    if (theme === 'light') document.documentElement.classList.add('light');
    else document.documentElement.classList.remove('light');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  useEffect(() => {
    // Fallback: use scroll position to determine active section. This is robust across layouts.
    const getSections = () => NAV_SECTIONS.map(id => document.getElementById(id)).filter(Boolean);

    function onScroll() {
      const sections = getSections();
      if (sections.length === 0) return;

      // Position to check: a bit below the top so shorter headers don't mis-trigger
      const checkY = window.scrollY + window.innerHeight * 0.25;

      let found = sections[0].id;
      for (const el of sections) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (checkY >= top && checkY < bottom) {
          found = el.id;
          break;
        }
      }

      setActive(prev => (prev === found ? prev : found));
    }

    // Run once to initialize
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  function handleNavClick(e, id) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={(e) => handleNavClick(e, 'home')}>Kiruthik</a>
        <nav className="nav-links">
          {NAV_SECTIONS.map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={`nav-link ${active === section ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <button
              className="dark-toggle"
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              aria-label="Toggle color theme"
              title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
            >
              {theme === 'light' ? '🌞' : '🌙'}
            </button>
          </div>
      </div>
    </header>
  );
}

