import '../styles.css';

function Home() {
    return (




        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="code-grid-bg"></div>
                <div className="floating-particles" id="particles"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-greeting">
                        <span className="greeting-text" >Hello, I'm</span>
                        <span className="greeting-cursor">|</span>
                    </div>

                    <h1 className="hero-name" id="heroName">
                        <span className="name-prefix">Samad</span>
                        <span className="name-operator">=</span>
                        <span className="name-value">Developer</span>
                        <span className="name-suffix">;</span>
                    </h1>

                    <div className="hero-title">
                        <span className="title-prefix">//</span>
                        <span className="title-text" data-text-en="Full Stack Developer & UI/UX Designer" data-text-ar="مطور Full Stack & مصمم UI/UX">WordPress & React Developer</span>
                    </div>

                    <p className="hero-description" data-text-en="Passionate developer creating exceptional digital experiences with modern technologies." data-text-ar="مطور شغوف بإنشاء تجارب رقمية استثنائية باستخدام التقنيات الحديثة.">
                        I’m a passionate WordPress and React developer dedicated to crafting fast, secure, and visually appealing websites and web applications using modern technologies.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <span data-text-en="Get In Touch" >Get In Touch</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <span data-text-en="View Projects" >View Projects</span>
                            <i className="fas fa-code"></i>
                        </a>
                    </div>

                    <div className="hero-social">
                        <a href="#" className="social-icon" title="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="social-icon" title="LinkedIn">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" className="social-icon" title="Twitter">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon" title="CodePen">
                            <i className="fab fa-codepen"></i>
                        </a>
                        <a href="#" className="social-icon" title="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <div className="profile-image-glow"></div>
                        <div className="profile-image-frame">
                            <div className="profile-image" id="profileImage">
                                <div className="profile-placeholder">
                                    <img src="WhatsApp Image 2026-03-25 at 12.20.07 PM.jpeg" alt="Profile Image" />
                                </div>
                            </div>
                        </div>
                        <div className="floating-badge badge-1">
                            <i className="fab fa-react"></i>
                            <div className="badge-content">
                                <span className="badge-title">React</span>
                                <span className="badge-libs">Api, Router, Hooks</span>
                            </div>
                        </div>
                        <div className="floating-badge badge-2">
                            <i className="fab fa-node-js"></i>
                            <div className="badge-content">
                                <span className="badge-title">Node.js</span>
                                <span className="badge-libs">Express, Socket.io, MongoDB</span>
                            </div>
                        </div>
                        <div className="floating-badge badge-3">
                            <i> <img src="output-onlinepngtools.png" alt="Wordpress" style={{ width: "30px" }} /></i>
                            <div className="badge-content">
                                <span className="badge-title">Wordpress</span>
                                <span className="badge-libs">Woo Commerce, Elementor</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <div className="scroll-mouse">
                        <div className="scroll-wheel"></div>
                    </div>
                    <span className="scroll-text" data-text-en="Scroll Down" data-text-ar="انتقل للأسفل">Scroll Down</span>
                </div>
            </div>
        </section>







    )

}

export default Home;