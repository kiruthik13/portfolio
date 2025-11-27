export default function About() {
  return (
    <section id="about" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container about-grid">
        <div className="avatar">
          <img src="/profile.jpg" alt="About" />
        </div>
        <div>
          <h2 className="section-title">Driven, Innovative Software Engineer</h2>
          <p className="muted">
            I'm a Master's student in Software Systems at Kongu Engineering College, passionate about 
            building innovative solutions that make a real-world impact. With expertise in full-stack 
            development, I specialize in creating scalable web and mobile applications using modern 
            technologies like React, Node.js, MongoDB, and Flutter.
          </p>
          <p className="muted" style={{marginTop: '12px'}}>
            My journey includes winning prestigious hackathons like CTPG Ideathon 2025 (1st Prize) and 
            CTPG Proof Of Concept 2025 (1st Prize), where I developed the "Ease" App—a gamified 
            mobile application with AI waste detection for sustainable living. I'm always eager to 
            collaborate on challenging projects and contribute to meaningful solutions that drive 
            positive change.
          </p>
          <ul className="about-skills">
            {[
              'Web Development (React, Node.js, MongoDB)',
              'Application Development (Flutter, Mobile Apps)',
              'Java Programming & Problem Solving',
              'Full-Stack Development',
              'UI/UX Design (Figma)',
              'Oracle Certifications (Java SE17, Apex)'
            ].map(i=>(
              <li key={i}>✔ {i}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}