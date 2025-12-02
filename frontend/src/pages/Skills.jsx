import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const skills = [
  'DevOps', 'Java', 'React', 'Bootstrap', 'Figma', 'MongoDB', 'Firebase', 'Vercel'
];

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Skills</h2>
        </ScrollAnimationWrapper>
        <div className="skills-grid">
          {skills.map((s, index) => (
            <ScrollAnimationWrapper key={s} delay={index * 50}>
              <div className="skill-box">
                <div className="skill-logo" style={{ fontSize: '32px' }}>⚙</div>
                <div style={{ position: 'relative', zIndex: 1 }}>{s}</div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
