import '../styles.css';
function Test() {


  return (
    <>
  
    <footer className="main-footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-text-wrapper">
                    <p className="footer-text">
                        <span className="footer-copyright">© 2026 Developer Portfolio</span>
                        <span className="footer-divider">•</span>
                        <span className="footer-built">Built with passion and code</span>
                    </p>
                    <p className="footer-author">
                        <span className="footer-by-text" data-text-en="by" data-text-ar="بواسطة">by</span>
                        <a href="https://www.linkedin.com/in/abdul-samad-01b285336/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="footer-author-link">
                            <i className="fas fa-code"></i>
                            <span>Samad Developer</span>
                        </a>
                    </p>
                </div>
                <div className="footer-social">
                    <a href="https://www.linkedin.com/in/abdul-samad-01b285336/?skipRedirect=true" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/samadtariq" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="footer-social-link" title="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>



    </>
  )
}
export default Test;