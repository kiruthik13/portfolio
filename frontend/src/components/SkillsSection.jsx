import { motion } from 'framer-motion';

const skills = [
  'Web Development',
  'Mobile App Development',
  'Time Management',
  'Active Listening',
];

export default function SkillsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Key Skills
      </motion.h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, idx) => (
          <motion.div
            key={skill}
            className="px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold text-lg shadow hover:bg-primary hover:text-white transition cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 