import { motion } from 'framer-motion';

const languages = [
  { name: 'Tamil', proficiency: 'R,W,S' },
  { name: 'English', proficiency: 'R,W,S' },
  { name: 'Hindi', proficiency: 'R,W' },
];

export default function LanguagesSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Languages
      </motion.h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {languages.map((lang, idx) => (
          <motion.div
            key={lang.name}
            className="px-6 py-3 rounded-xl bg-white/80 dark:bg-gray-900/80 shadow text-lg font-semibold text-gray-800 dark:text-gray-200 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {lang.name} <span className="text-sm text-gray-500">({lang.proficiency})</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 