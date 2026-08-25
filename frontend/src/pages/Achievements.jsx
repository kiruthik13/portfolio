import { motion } from 'framer-motion';
import AchievementsSection from '../components/AchievementsSection';

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ scrollMarginTop: '90px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Achievements & Awards</h2>
        </motion.div>

        <AchievementsSection />
      </div>
    </section>
  );
}
