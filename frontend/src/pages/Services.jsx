const services = [
  { title: 'Web Development', desc: 'Modern, fast, accessible websites.' },
  { title: 'UI/UX Design', desc: 'Human-centered, clean interfaces.' },
  { title: 'App Development', desc: 'Cross-platform mobile apps.' },
  { title: 'API Design', desc: 'Secure and scalable REST APIs.' },
  { title: 'Payment Integration', desc: 'Stripe, Razorpay, and more.' },
  { title: 'Mentorship', desc: 'Guidance for juniors and teams.' },
];

export default function Services() {
  return (
    <section id="services" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-3">
          {services.map(s => (
            <div key={s.title} className="card">
              <div style={{fontSize:28,color:'var(--pink)',marginBottom:8}}>★</div>
              <h3 style={{margin:'0 0 8px'}}>{s.title}</h3>
              <p className="muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

