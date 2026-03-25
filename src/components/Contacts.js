import '../styles.css';

function Contacts(){
    return (
    
            <section id="contact" className="section contact-section">
                <div className="section-container">
                    <div className="section-header">
                        <span className="section-number">05</span>
                        <h2 className="section-title">
                            <span className="title-bracket">&lt;</span>
                            <span className="title-text" data-text-en="Contact" data-text-ar="التواصل">Contact</span>
                            <span className="title-bracket">/&gt;</span>
                        </h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="contact-details">
                                    <h4 className="contact-label" data-text-en="Email" data-text-ar="البريد الإلكتروني">Email</h4>
                                    <a href="mailto:samaddeveloper07@gmail.com" className="contact-value">samaddeveloper07@gmail.com</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="contact-details">
                                    <h4 className="contact-label" data-text-en="Phone" data-text-ar="الهاتف">Phone</h4>
                                    <a href="tel:+92 319 3175477" className="contact-value">+92 319 3175477</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="contact-details">
                                    <h4 className="contact-label" data-text-en="Location" data-text-ar="الموقع">Location</h4>
                                    <span className="contact-value" data-text-en="Riyadh, Saudi Arabia" data-text-ar="الرياض، المملكة العربية السعودية">Karachi, Pakistan</span>
                                </div>
                            </div>
                        </div>

                        <form className="contact-form" id="contactForm">
                            <div className="form-group">
                                <input type="text" className="form-input" placeholder="Name" data-placeholder-en="Name" data-placeholder-ar="الاسم" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-input" placeholder="Email" data-placeholder-en="Email" data-placeholder-ar="البريد الإلكتروني" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-input" placeholder="Subject" data-placeholder-en="Subject" data-placeholder-ar="الموضوع" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-input form-textarea" rows="5" placeholder="Message" data-placeholder-en="Message" data-placeholder-ar="الرسالة" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-submit">
                                <span data-text-en="Send Message" data-text-ar="إرسال الرسالة">Send Message</span>
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
    )
}

export default Contacts;