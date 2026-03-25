
import '../styles.css';
function About(){
    return (
        
            <section id="about" className="section about-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">01</span>
                        <h2 className="section-title">
                            <span className="title-bracket">&lt;</span>
                            <span className="title-text" data-text-en="About Me" data-text-ar="عني">About Me</span>
                            <span className="title-bracket">/&gt;</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="about-content">
                        <div className="about-text-wrapper">
                            <div className="about-intro">
                                <p className="about-text" data-text-en="I'm a passionate Full Stack Developer with over 5 years of experience in building modern web applications and mobile solutions. I specialize in JavaScript technologies, React, Node.js, and creating beautiful user interfaces." data-text-ar="أنا مطور Full Stack شغوف مع أكثر من 5 سنوات من الخبرة في بناء تطبيقات الويب الحديثة والحلول الجوالة. أتخصص في تقنيات JavaScript، React، Node.js، وإنشاء واجهات مستخدم جميلة.">
                                    I'm a passionate WordPress and React developer with over 2 years of experience building modern, responsive websites and web applications. I specialize in creating high-performance WordPress solutions, dynamic React interfaces, and user-focused designs.

                                </p>

                            </div>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <div className="stat-number" data-count="20">0</div>
                                    <div className="stat-label" data-text-en="Projects" data-text-ar="مشروع">Projects</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" data-count="2">0</div>
                                    <div className="stat-label" data-text-en="Years Experience" data-text-ar="سنوات خبرة">Years Experience</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number" data-count="5">0</div>
                                    <div className="stat-label" data-text-en="Happy Clients" data-text-ar="عميل سعيد">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        <div className="about-image-wrapper">
                            <div className="about-image-container">
                                <div className="code-block">
                                    <div className="code-line">
                                        <span className="code-keyword">const</span>
                                        <span className="code-variable"> developer</span>
                                        <span className="code-operator">=</span>
                                        <span className="code-brace">{ }</span>
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
                                        <span className="code-brace">{ }</span>
                                        <span className="code-semicolon">;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    )
}
export default About;