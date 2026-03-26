import { useEffect, useRef } from 'react';
import '../styles.css';

function About() {
  const titleRef = useRef(null);
  const statsRef = useRef([]);

  // Fade-up animation for section title
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-up-visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation for stats
  useEffect(() => {
    const animateCounter = el => {
      const target = parseInt(el.getAttribute('data-target'));
      let count = 0;
      const increment = Math.ceil(target / 40);

      const update = () => {
        count += increment;
        if (count >= target) {
          el.textContent = target;
        } else {
          el.textContent = count;
          requestAnimationFrame(update);
        }
      };

      update();
    };

    const statsObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach(el => el && statsObserver.observe(el));

    return () => statsObserver.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="section-container">
        <div className="section-header" ref={titleRef}>
          <span className="section-number">01</span>

          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">About</span>
            <span className="title-bracket">/&gt;</span>
          </h2>

          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text-wrapper">
            <div className="about-intro">
              <p className="about-text">
                I’m a passionate WordPress and React developer with a strong focus
                on building modern, fast, and user-friendly websites. I enjoy
                turning ideas into real-world digital experiences using clean code
                and creative design.
              </p>
            </div>

            <div className="about-stats">
              {[
                { value: 20, label: 'Projects' },
                { value: 2, label: 'Years Experience' },
                { value: 5, label: 'Clients' }
              ].map((stat, index) => (
                <div className="stat-item" key={index}>
                  <div
                    className="stat-number"
                    data-target={stat.value}
                    ref={el => (statsRef.current[index] = el)}
                  >
                    0
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image-container">
              <div className="code-block">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-brace">{'{'}</span>
                </div>

                <div className="code-line indent">
                  <span className="code-property">name</span>
                  <span className="code-operator">:</span>
                  <span className="code-string">'Samad Developer'</span>
                  <span className="code-comma">,</span>
                </div>

                <div className="code-line indent">
                  <span className="code-property">skills</span>
                  <span className="code-operator">:</span>
                  <span className="code-bracket">[</span>
                  <span className="code-string">'React'</span>
                  <span className="code-comma">,</span>
                  <span className="code-string">'WordPress'</span>
                  <span className="code-comma">,</span>
                  <span className="code-string">'ASP.NET'</span>
                  <span className="code-bracket">]</span>
                  <span className="code-comma">,</span>
                </div>

                <div className="code-line indent">
                  <span className="code-property">passion</span>
                  <span className="code-operator">:</span>
                  <span className="code-string">'Coding'</span>
                </div>

                <div className="code-line">
                  <span className="code-brace">{'}'}</span>
                  <span className="code-semicolon">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
