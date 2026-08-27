import { useEffect, useState } from 'react';

const NAV_SECTIONS = ['home', 'about', 'achievements', 'certificates', 'internships', 'skills', 'projects', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
    } catch (e) { }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    // apply theme to document body
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try { localStorage.setItem('theme', theme); } catch (e) { }
  }, [theme]);

  useEffect(() => {
    // Fallback: use scroll position to determine active section
    const getSections = () => NAV_SECTIONS.map(id => document.getElementById(id)).filter(Boolean);

    function onScroll() {
      const sections = getSections();
      if (sections.length === 0) return;

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
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <header className="navbar navbar-animate">
      <div className="container navbar-inner">
        <a href="#home" className="brand" onClick={(e) => handleNavClick(e, 'home')}>
          Kiruthik Chidambaram
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-nav">
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

        {/* Action Controls (Theme Toggle & Mobile Menu Button) */}
        <div className="navbar-controls" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            className="dark-toggle"
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            aria-label="Toggle color theme"
            title={theme === 'light' ? 'Switch to dark' : 'Switch to light'}
          >
            {theme === 'light' ? '🌞' : '🌙'}
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Drawer */}
      <div className={`mobile-nav-drawer ${isOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          {NAV_SECTIONS.map(section => (
            <a
              key={section}
              href={`#${section}`}
              className={`mobile-nav-link ${active === section ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, section)}
            >
              <span className="nav-indicator">•</span>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
