import { useState } from 'react';
import '../styles.css';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = e => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:samaddeveloper07@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  const sendWhatsApp = e => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const whatsappMessage = `Hello, my name is ${name}.%0AEmail: ${email}%0ASubject: ${subject}%0A%0A${message}`;
    const whatsappLink = `https://wa.me/923193175477?text=${whatsappMessage}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-number">05</span>

          <h2 className="section-title">
            <span className="title-bracket">&lt;</span>
            <span className="title-text">Contact</span>
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
                <h4 className="contact-label">Email</h4>
                <a
                  href="mailto:samaddeveloper07@gmail.com"
                  className="contact-value"
                >
                  samaddeveloper07@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4 className="contact-label">Phone</h4>
                <a href="tel:+923193175477" className="contact-value">
                  +92 319 3175477
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-details">
                <h4 className="contact-label">Location</h4>
                <span className="contact-value">Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-input"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                className="form-input form-textarea"
                rows="5"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="contact-buttons">
              <button
                type="button"
                onClick={sendEmail}
                className="btn btn-primary btn-submit"
              >
                <span>Send via Email</span>
                <i className="fas fa-paper-plane"></i>
              </button>

              <button
                type="button"
                onClick={sendWhatsApp}
                className="btn btn-secondary btn-submit"
                style={{marginLeft:10}}
              >
                <span>Send via WhatsApp</span>
                <i className="fab fa-whatsapp"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
