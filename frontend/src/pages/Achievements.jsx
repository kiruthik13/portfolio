import { motion } from 'framer-motion';
import AchievementsSection from '../components/AchievementsSection';

export default function Achievements() {
    return (
        <section id="achievements" className="section bg-gray-50 dark:bg-black text-gray-900 dark:text-white py-20 transition-colors duration-300" style={{ scrollMarginTop: '90px' }}>
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title text-center mb-12 text-4xl font-bold">Achievements & Awards</h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <AchievementsSection />
                </div>
            </div>
        </section>
    );
}
