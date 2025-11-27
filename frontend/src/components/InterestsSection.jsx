import { motion } from 'framer-motion';

const interests = [
  'Animation',
  'Web development',
  'Cyber security',
  'Mobile app development',
];

export default function InterestsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Interests
      </motion.h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {interests.map((interest, idx) => (
          <motion.div
            key={interest}
            className="px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold text-lg shadow hover:bg-accent hover:text-white transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {interest}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 