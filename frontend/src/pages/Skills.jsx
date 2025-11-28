const skills = [
  'DevOps', 'Java', 'React', 'Bootstrap', 'Figma', 'MongoDB', 'Firebase', 'Vercel'
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div key={s} className="skill-box">
              <div className="skill-logo">⚙</div>
              <div>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

