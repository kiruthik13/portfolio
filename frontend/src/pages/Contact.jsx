import { useState } from 'react';
import API_BASE_URL from '../config';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
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
    }
  }

  return (
    <section id="contact" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container contact">
        <form onSubmit={onSubmit}>
          <h2 className="section-title">Contact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <input className="input" name="name" value={form.name} onChange={onChange} placeholder="Full Name" required />
            <input className="input" name="email" type="email" value={form.email} onChange={onChange} placeholder="Email Address" required />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 12 }}>
            <input className="input" name="phone" value={form.phone} onChange={onChange} placeholder="Phone Number" />
            <input className="input" name="subject" value={form.subject} onChange={onChange} placeholder="Subject" />
          </div>
          <div style={{ marginTop: 12 }}>
            <textarea className="textarea" name="message" value={form.message} onChange={onChange} placeholder="Message" required />
          </div>
          <div style={{ marginTop: 14 }}>
            <button className="btn btn-primary" style={{ background: '#ff0055', borderColor: '#ff0055' }}>Send Message</button>
          </div>
          {status && <div className="muted status">{status}</div>}
        </form>
        <aside className="contact-info">
          <h3 style={{ marginTop: 0 }}>Contact Details</h3>
          <div className="info-row">GitHub: <a className="nav-link" href="https://github.com/kiruthik13" target="_blank" rel="noopener noreferrer">github.com/kiruthik13</a></div>
          <div className="info-row">LinkedIn: <a className="nav-link" href="https://www.linkedin.com/in/kiruthikbairavan-c-3a35b626b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/kiruthikbairavan-c</a></div>
          <div className="info-row">X (Twitter): <a className="nav-link" href="https://x.com/KonguKiruthik?t=7xYaCumQOKhmPg0nqbMPGA&s=09" target="_blank" rel="noopener noreferrer">x.com/KonguKiruthik</a></div>
          <div className="info-row">Email: <a className="nav-link" href="mailto:kiruthikbairavan13@gmail.com">kiruthikbairavan13@gmail.com</a></div>
        </aside>
      </div>
    </section>
  );
} 