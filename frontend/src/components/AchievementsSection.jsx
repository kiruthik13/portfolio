import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: 'CTPG Ideathon 2025',
    award: '1st Prize Winner',
    date: '2025',
    description: 'Developed "Ease" App – an AI-powered waste management solution that won top honors.',
    image: '/ideathon-winner.jpg',
    imagePosition: 'center 45%',
    icon: Trophy,
    theme: 'gold',
  },
  {
    id: 2,
    title: 'KEC Hackathon 2025',
    award: '2nd Prize Winner',
    date: '2025',
    description: 'Secured 2nd place for developing a scalable web application under tight deadline constraints.',
    image: '/kec-hackathon.png',
    imagePosition: 'center 75%',
    icon: Medal,
    theme: 'silver',
  },
  {
    id: 3,
    title: 'CTPG Proof Of Concept 2025',
    award: '1st Prize Winner',
    date: '2025',
    description: 'Recognized for innovative solution design and execution in a competitive environment.',
    icon: Star,
    theme: 'blue',
  },
  {
    id: 4,
    title: 'ROBOTICS Workshop @ SKCET',
    award: 'Participant',
    date: 'September 2023',
    description: 'Actively participated in a hands-on workshop focused on robotics and automation.',
    icon: Star,
    theme: 'purple',
  },
];

const AchievementsSection = () => {
  return (
    <div className="achievements-wrap">
      <div className="achievements-grid">
        {achievementsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="achievement-card"
          >
            <div className="achievement-card-inner">
              {item.image && (
                <div className="achievement-image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="achievement-image"
                    style={{ objectPosition: item.imagePosition || 'center center' }}
                  />
                </div>
              )}

              <div className="achievement-header">
                <div className={`achievement-icon-box achievement-icon-${item.theme}`}>
                  <item.icon className="achievement-icon" />
                </div>
                <span className="achievement-date-chip">
                  {item.date}
                </span>
              </div>

              <h3 className="achievement-title">
                {item.title}
              </h3>

              <div className="achievement-award-wrap">
                <span className={`achievement-award-badge achievement-badge-${item.theme}`}>
                  {item.award}
                </span>
              </div>

              <p className="achievement-desc">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
