import { useEffect, useRef } from 'react';
import '../styles.css';

function Skills() {
  const skillRefs = useRef([]);

  // Animate skill bars and percentages on scroll
  useEffect(() => {
    const animateSkill = el => {
      const percent = parseInt(el.getAttribute('data-percent'));
      const progress = el.querySelector('.skill-progress');
      const percentText = el.querySelector('.skill-percent');

      let current = 0;
      const step = Math.ceil(percent / 40);

      const update = () => {
        current += step;
        if (current >= percent) {
          current = percent;
        }

        progress.style.width = current + '%';
        percentText.textContent = current + '%';

        if (current < percent) {
          requestAnimationFrame(update);
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateSkill(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.10 }
    );

    skillRefs.current.forEach(el => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">02</span>

          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Skills</span>
            <span className="title-bracket">/&gt;</span>
          </h2>

          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          {[
            {
              title: 'Frontend',
              skills: [
                { name: 'React Js', percent: 95 },
                { name: 'Bootstrap & jQuery', percent: 85 },
                { name: 'WordPress (Theme)', percent: 90 },
                { name: 'Angular Js', percent: 88 }
              ]
            },
            {
              title: 'Backend',
              skills: [
                { name: 'Node.js', percent: 92 },
                { name: 'ASP.NET', percent: 90 },
                { name: 'MongoDB & SQL Server', percent: 85 },
                { name: 'WordPress (PHP)', percent: 80 }
              ]
            },
            {
              title: 'Tools & Others',
              skills: [
                { name: 'Git & GitHub', percent: 95 },
                { name: 'Microsoft Office', percent: 75 },
                { name: 'Canva', percent: 70 },
                { name: 'Figma', percent: 88 }
              ]
            }
          ].map((category, cIndex) => (
            <div className="skill-category" key={cIndex}>
              <h3 className="category-title">{category.title}</h3>

              <div className="skill-items">
                {category.skills.map((skill, sIndex) => (
                  <div
                    className="skill-item"
                    data-percent={skill.percent}
                    key={sIndex}
                    ref={el => (skillRefs.current[cIndex * 10 + sIndex] = el)}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">0%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
