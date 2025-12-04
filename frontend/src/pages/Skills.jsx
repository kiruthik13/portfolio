import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const skillsData = [
  {
    category: "Frontend Development",
    icon: "💻",
    color: "#6366f1",
    skills: ["React", "HTML5", "CSS", "JavaScript"]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "#8b5cf6",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "Java"]
  },
  {
    category: "Mobile Development",
    icon: "📱",
    color: "#ec4899",
    skills: ["Flutter", "Dart"]
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    color: "#10b981",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section premium-skills-section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <h2 className="section-title premium-section-title">Skills</h2>
        </ScrollAnimationWrapper>

        <div className="premium-skills-grid-v2">
          {skillsData.map((category, index) => (
            <ScrollAnimationWrapper key={category.category} delay={index * 100}>
              <div className="skill-category-card-v2">
                <div className="category-header-v2">
                  <div className="category-icon-v2" style={{ background: `${category.color}15` }}>
                    <span style={{ fontSize: '32px' }}>{category.icon}</span>
                  </div>
                  <h3 className="category-title-v2">{category.category}</h3>
                </div>

                <div className="skills-tags-grid">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="skill-tag-v2"
                      style={{
                        borderColor: `${category.color}30`,
                        background: `${category.color}08`
                      }}
                    >
                      <span className="skill-tag-text">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
