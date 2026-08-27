import Carousel from '../components/Carousel';
import ScrollAnimationWrapper from '../components/ScrollAnimationWrapper';

const certificateItems = [
  {
    heading: 'Oracle',
    subheading: 'Oracle Certified Java SE 17 Developer',
    file: '/java%20se%2017.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Oracle Certified APEX Cloud Developer',
    file: '/apex.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
    file: '/ai%20vector.jpg',
    year: '2025'
  },
  {
    heading: 'NVIDIA',
    subheading: 'NVIDIA Certification',
    file: '/nvidia.jpg',
    year: '2025'
  },
  {
    heading: 'Deloitte',
    subheading: 'Deloitte Certification',
    file: '/delottie.jpg',
    year: '2025'
  },
  {
    heading: 'Oracle',
    subheading: 'Gen AI Certification',
    file: '/gen%20ai.jpg',
    year: '2025'
  },
];

export default function Certificates() {
  // Mobile Carousel: 1 certificate per slide for perfectly compact and swipeable mobile view
  const carouselSlides = certificateItems.map((item, idx) => (
    <div key={`slide-${idx}`} style={{ padding: '0 6px', maxWidth: '380px', margin: '0 auto', width: '100%' }}>
      <div className="cert-card" style={{ height: '100%' }}>
        <div className="cert-media">
          <img src={item.file || '/resume.pdf'} alt={item.subheading || item.heading} />
          <a className="cert-view" href={item.file || '#'} target="_blank" rel="noopener noreferrer">👁 View Full</a>
        </div>
        <div className="cert-card-body">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="chip">Professional Certification</span>
            {item.year && <span className="chip year">{item.year}</span>}
          </div>
          <h4 className="cert-title" style={{ marginTop: 10 }}>{item.subheading}</h4>
          <div className="cert-issuer">Issued by <strong>{item.heading}</strong></div>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="certificates" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <ScrollAnimationWrapper>
          <h2 className="section-title">Certifications</h2>
        </ScrollAnimationWrapper>

        {/* Desktop: Grid View with Scroll Animations */}
        <div className="cert-grid" style={{ display: 'none' }}>
          {certificateItems.map((item, idx) => (
            <ScrollAnimationWrapper key={`cert-${idx}`} delay={idx * 100}>
              <div className="cert-card">
                <div className="cert-media">
                  <img src={item.file || '/resume.pdf'} alt={item.subheading || item.heading} />
                  <a className="cert-view" href={item.file || '#'} target="_blank" rel="noopener noreferrer">👁 View Full</a>
                </div>
                <div className="cert-card-body">
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="chip">Professional Certification</span>
                    {item.year && <span className="chip year">{item.year}</span>}
                  </div>
                  <h4 className="cert-title" style={{ marginTop: 10 }}>{item.subheading}</h4>
                  <div className="cert-issuer">Issued by <strong>{item.heading}</strong></div>
                </div>
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>

        {/* Carousel View for Mobile/Tablet */}
        <div style={{ display: 'block' }}>
          <Carousel
            items={carouselSlides}
            autoPlay={true}
            interval={5000}
            showDots={true}
            showArrows={true}
          />
        </div>
      </div>

      <style>{`
        @media (min-width: 980px) {
          .cert-grid {
            display: grid !important;
          }
          .cert-grid + div {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
