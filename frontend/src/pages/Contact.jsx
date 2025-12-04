import { useState } from 'react';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';
import API_BASE_URL from '../config';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('Message sent successfully!');
      setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
      setTimeout(() => setStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section premium-contact-section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <div className="contact-header">
            <h2 className="section-title premium-section-title">Contact</h2>
          </div>
        </ScrollAnimationWrapper>

        <div className="premium-contact-grid">
          <ScrollAnimationWrapper delay={100}>
            <form onSubmit={onSubmit} className="premium-contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name <span className="required">*</span></label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Kiruthik C"
                    required
                    className="premium-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email <span className="required">*</span></label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="kiruthik@gmail.com"
                    required
                    className="premium-input"
                  />
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="+91 9345304921"
                    className="premium-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Project Inquiry"
                    className="premium-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Ask me anything..."
                  required
                  rows="6"
                  className="premium-textarea"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="premium-submit-btn">
                <span className="btn-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="btn-arrow">→</span>
              </button>

              {status && (
                <div className={`status-message ${status.includes('success') ? 'success' : 'error'}`}>
                  <div className="status-text">{status}</div>
                </div>
              )}
            </form>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper delay={200}>
            <div className="premium-contact-info">
              <h3>Contact Information</h3>
              <div className="contact-info-items">
                <a href="mailto:kiruthikbairavan13@gmail.com" className="contact-info-item">
                  <div className="info-icon">📧</div>
                  <div className="info-content">
                    <div className="info-label">Email</div>
                    <div className="info-value">kiruthikbairavan13@gmail.com</div>
                  </div>
                </a>
                <a href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                  <div className="info-icon">💻</div>
                  <div className="info-content">
                    <div className="info-label">GitHub</div>
                    <div className="info-value">github.com/kiruthik13</div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b" target="_blank" rel="noopener noreferrer" className="contact-info-item">
                  <div className="info-icon">💼</div>
                  <div className="info-content">
                    <div className="info-label">LinkedIn</div>
                    <div className="info-value">Kiruthikbairavan C</div>
                  </div>
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </section>
  );
}