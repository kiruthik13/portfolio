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
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container contact">
        <ScrollAnimationWrapper>
          <form onSubmit={onSubmit}>
            <h2 className="section-title">Contact</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <input
                className="input"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Full Name"
                required
                style={{ transition: 'all 0.3s ease' }}
              />
              <input
                className="input"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="Email Address"
                required
                style={{ transition: 'all 0.3s ease' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
              <input
                className="input"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="Phone Number"
                style={{ transition: 'all 0.3s ease' }}
              />
              <input
                className="input"
                name="subject"
                value={form.subject}
                onChange={onChange}
                placeholder="Subject"
                style={{ transition: 'all 0.3s ease' }}
              />
            </div>
            <div style={{ marginTop: 12 }}>
              <textarea
                className="textarea"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Message"
                required
                style={{ transition: 'all 0.3s ease' }}
              />
            </div>
            <div style={{ marginTop: 14 }}>
              <button
                className="btn btn-primary"
                style={{
                  background: isSubmitting ? '#999' : '#ff0055',
                  borderColor: isSubmitting ? '#999' : '#ff0055',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status && (
              <div
                className="muted status"
                style={{
                  animation: 'fadeInUp 0.3s ease-out',
                  color: status.includes('success') ? '#10B981' : 'var(--muted)'
                }}
              >
                {status}
              </div>
            )}
          </form>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper delay={200}>
          <aside className="contact-info">
            <h3 style={{ marginTop: 0 }}>Contact Details</h3>
            <div className="info-row">GitHub: <a className="nav-link" href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer">github.com/kiruthik13</a></div>
            <div className="info-row">LinkedIn: <a className="nav-link" href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/kiruthikbairavan-c</a></div>
            <div className="info-row">X (Twitter): <a className="nav-link" href="https://x.com/KonguKiruthik?t=7xYaCumQOKhmPg0nqbMPGA&s=09" target="_blank" rel="noopener noreferrer">x.com/KonguKiruthik</a></div>
            <div className="info-row">Email: <a className="nav-link" href="mailto:kiruthikbairavan13@gmail.com">kiruthikbairavan13@gmail.com</a></div>
          </aside>
        </ScrollAnimationWrapper>
      </div>

      <style>{`
        .input:focus, .textarea:focus {
          outline: none;
          border-color: var(--pink) !important;
          box-shadow: 0 0 0 3px rgba(255, 0, 85, 0.1) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
}