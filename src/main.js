import React, { useEffect, useState, useRef } from 'react';

export default function PortfolioApp() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      sectionsRef.current.forEach(section => {
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollPosition >= top && scrollPosition < top + height) {
          const links = document.querySelectorAll('.nav-link');
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`[data-section="${id}"]`);
          if (active) active.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = id => {
    const section = document.getElementById(id);
    const header = document.querySelector('.main-header');
    if (!section || !header) return;

    const top = section.offsetTop - header.offsetHeight;

    window.scrollTo({ top, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <header className="main-header">
        <nav className="nav">
          <button id="menuToggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map(sec => (
              <li key={sec}>
                <button
                  className="nav-link"
                  data-section={sec}
                  onClick={() => scrollToSection(sec)}
                >
                  {sec}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {['home', 'about', 'skills', 'projects', 'contact'].map((sec, i) => (
          <section
            key={sec}
            id={sec}
            ref={el => (sectionsRef.current[i] = el)}
            className="section"
          >
            <h2>{sec}</h2>
            <p>This is the {sec} section.</p>
          </section>
        ))}
      </main>
    </div>
  );
}
