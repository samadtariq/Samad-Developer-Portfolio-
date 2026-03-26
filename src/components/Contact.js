import { useState } from "react";
import "../styles.css";

function Contact() {
    const [menuOpen, setMenuOpen] = useState(false);

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
            
            <div className={`nav-menu ${menuOpen ? "active" : ""}`} id="navMenu">
                <a href="#home" className="nav-link active" data-section="home">
                    <i className="fas fa-home"></i>
                    <span className="nav-text" data-text-en="Home" data-text-ar="الرئيسية">Home</span>
                </a>
                <a href="#about" className="nav-link" data-section="about">
                    <i className="fas fa-user"></i>
                    <span className="nav-text" data-text-en="About" data-text-ar="عني">About</span>
                </a>
                <a href="#skills" className="nav-link" data-section="skills">
                    <i className="fas fa-code"></i>
                    <span className="nav-text" data-text-en="Skills" data-text-ar="المهارات">Skills</span>
                </a>
                <a href="#experience" className="nav-link" data-section="experience">
                    <i className="fas fa-briefcase"></i>
                    <span className="nav-text" data-text-en="Experience" data-text-ar="الخبرة">Experience</span>
                </a>
                <a href="#projects" className="nav-link" data-section="projects">
                    <i className="fas fa-rocket"></i>
                    <span className="nav-text" data-text-en="Projects" data-text-ar="المشاريع">Projects</span>
                </a>
                <a href="#contact" className="nav-link" data-section="contact">
                    <i className="fas fa-envelope"></i>
                    <span className="nav-text" data-text-en="Contact" data-text-ar="التواصل">Contact</span>
                </a>
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