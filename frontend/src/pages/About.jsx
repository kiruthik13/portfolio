import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

export default function About() {
  return (
    <section id="about" className="section premium-about-section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <h2 className="section-title premium-section-title">About Me</h2>
        </ScrollAnimationWrapper>

        <div className="about-grid premium-about-grid">
          {/* Premium Image Section */}
          <ScrollAnimationWrapper animation="fade-in-left">
            <div className="premium-about-image">
              {/* Geometric Frame */}
              <div className="geometric-frame">
                <div className="frame-corner corner-tl"></div>
                <div className="frame-corner corner-tr"></div>
                <div className="frame-corner corner-bl"></div>
                <div className="frame-corner corner-br"></div>
              </div>

              {/* Image Container */}
              <div className="about-image-container">
                <img src="/profile.jpg" alt="Kiruthikbairavan C" />
              </div>

              {/* Decorative Dots */}
              <div className="decorative-dots dots-1"></div>
              <div className="decorative-dots dots-2"></div>

              {/* Info Badge */}
              <div className="about-info-badge">
                <div className="badge-icon">💼</div>
                <div className="badge-text">
                  <div className="badge-label">Open to Work</div>
                  <div className="badge-sublabel">Full-Stack Developer</div>
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Content Section */}
          <div className="premium-about-content">
            <ScrollAnimationWrapper delay={100}>
              <h3 className="about-heading">Driven, Innovative Software Engineer</h3>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={200}>
              <p className="about-text">
                I'm a Master's student in Software Systems at Kongu Engineering College, passionate about
                building innovative solutions that make a real-world impact. With expertise in full-stack
                development, I specialize in creating scalable web and mobile applications using modern
                technologies like React, Node.js, MongoDB, and Flutter.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={300}>
              <p className="about-text">
                My journey includes winning prestigious hackathons like CTPG Ideathon 2025 (1st Prize) and
                CTPG Proof Of Concept 2025 (1st Prize), where I developed the "Ease" App—a gamified
                mobile application with AI waste detection for sustainable living. I'm always eager to
                collaborate on challenging projects and contribute to meaningful solutions that drive
                positive change.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper delay={400}>
              <div className="about-skills-grid">
                {[
                  { icon: '🌐', skill: 'Web Development', detail: 'React, Node.js, MongoDB' },
                  { icon: '📱', skill: 'Mobile Apps', detail: 'Flutter, Cross-platform' },
                  { icon: '☕', skill: 'Java Programming', detail: 'Problem Solving' },
                  { icon: '🎨', skill: 'UI/UX Design', detail: 'Figma, User-Centered' },
                  { icon: '🔧', skill: 'Full-Stack', detail: 'End-to-End Development' },
                  { icon: '🏆', skill: 'Certifications', detail: 'Oracle Java SE17, Apex' }
                ].map((item, index) => (
                  <div key={index} className="skill-badge">
                    <div className="skill-icon">{item.icon}</div>
                    <div className="skill-info">
                      <div className="skill-name">{item.skill}</div>
                      <div className="skill-detail">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}