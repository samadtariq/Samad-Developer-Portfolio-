import '../styles.css';

function Experience() {
  return (
    <section id="experience" className="section experience-section">

      <div className="section-container">

        <div className="section-header">
          <span className="section-number">03</span>

          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Experience</span>
            <span className="title-bracket">/&gt;</span>
          </h2>

          <div className="section-line"></div>
        </div>

        <div className="timeline">

          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-year">2026 — 1 Month</div>
                <div className="timeline-badge">Past</div>
              </div>

              <h3 className="timeline-title">
                WordPress Developer (Remote)
              </h3>

              <div className="timeline-company">
                <i className="fas fa-building"></i>
                Ziauddin Board Admission Website
              </div>

              <p className="timeline-description">
                Worked remotely as a WordPress developer to build and customize
                the Ziauddin Board admission portal using Elementor Pro. Designed
                responsive pages, implemented dynamic forms, and optimized the
                site for performance and user experience.
              </p>

              <div className="timeline-achievements">
                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    Developed admission portal using WordPress and Elementor Pro
                  </span>
                </div>

                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>
                    Designed responsive layouts and optimized user flow
                  </span>
                </div>
              </div>

              <div className="timeline-tags">
                <span className="tag">WordPress</span>
                <span className="tag">Elementor Pro</span>
                <span className="tag">PHP</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-year">Dec 2024 - Jan 2025</div>
                <div className="timeline-badge">Past</div>
              </div>

              <h3 className="timeline-title">
                Frontend Team Lead
              </h3>

              <div className="timeline-company">
                <i className="fas fa-building"></i>
                Aptech – E-Project
              </div>

              <p className="timeline-description">
                Led the frontend development of a floral e-commerce website,
                building responsive layouts and interactive UI using HTML, CSS,
                and JavaScript.
              </p>

              <div className="timeline-achievements">
                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Led team of 5 developers</span>
                </div>

                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Improved performance by 40%</span>
                </div>

                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Deployed 1 production apps</span>
                </div>
              </div>

              <div className="timeline-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Responsive Design</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>

            <div className="timeline-content">
              <div className="timeline-header">
                <div className="timeline-year">2025</div>
                <div className="timeline-badge">Past</div>
              </div>

              <h3 className="timeline-title">
                Participant
              </h3>

              <div className="timeline-company">
                <i className="fas fa-building"></i>
                Techwiz Web Development Competition
              </div>

              <p className="timeline-description">
                Participated in a competitive team-based web development challenge,
                collaborating to design and present a complete web solution.
              </p>

              <div className="timeline-achievements">
                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Completed 30+ projects</span>
                </div>

                <div className="achievement-item">
                  <i className="fas fa-check-circle"></i>
                  <span>Learned modern frameworks</span>
                </div>
              </div>

              <div className="timeline-tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JavaScript</span>
                <span className="tag">jQuery</span>
                <span className="tag">Bootstrap</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;