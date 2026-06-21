import { useState, useEffect } from "react";
import "../styles.css";

function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu when a nav link is clicked
    const handleNavClick = () => {
        setMenuOpen(false);
    };

    // Close menu on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuOpen && !e.target.closest('.nav-container')) {
                setMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, [menuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Highlight active nav link on scroll
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const links = document.querySelectorAll('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    links.forEach(link => link.classList.remove('active'));
                    const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        }, { threshold: 0.4 });

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <header className="main-header" id="header">
            <nav className="nav-container">
                <div className="nav-brand">
                    <div className="brand-logo">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-text">Samad</span>
                        <span className="logo-bracket">/&gt;</span>
                    </div>
                </div>

                {/* Overlay behind menu on mobile */}
                {menuOpen && (
                    <div
                        className="nav-overlay"
                        onClick={() => setMenuOpen(false)}
                    />
                )}

                <div className={`nav-menu ${menuOpen ? "active" : ""}`} id="navMenu">
                    {[
                        { href: '#home', icon: 'fa-home', label: 'Home', section: 'home' },
                        { href: '#about', icon: 'fa-user', label: 'About', section: 'about' },
                        { href: '#skills', icon: 'fa-code', label: 'Skills', section: 'skills' },
                        { href: '#experience', icon: 'fa-briefcase', label: 'Experience', section: 'experience' },
                        { href: '#projects', icon: 'fa-rocket', label: 'Projects', section: 'projects' },
                        { href: '#contact', icon: 'fa-envelope', label: 'Contact', section: 'contact' },
                    ].map(({ href, icon, label, section }) => (
                        <a
                            key={section}
                            href={href}
                            className="nav-link"
                            data-section={section}
                            onClick={handleNavClick}
                        >
                            <i className={`fas ${icon}`}></i>
                            <span className="nav-text">{label}</span>
                        </a>
                    ))}
                </div>

                <div className="nav-controls">
                    <button
                        className="lang-toggle"
                        title="Download CV"
                        onClick={() => {
                            const link = document.createElement("a");
                            link.href = "/Samad Developer CV.pdf";
                            link.download = "Samad Developer CV.pdf";
                            link.click();
                        }}
                    >
                        <i className="fas fa-download"></i>
                        <span className="lang-text">Download CV</span>
                    </button>

                    <button
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Contact;
