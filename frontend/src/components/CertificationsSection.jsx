import { motion } from 'framer-motion';

const certifications = [
  'Cybersecurity certification from NPTEL',
  'Completed Infosys SpringBoard course on Bootstrap 4',
  'Completed Infosys SpringBoard course on Database and SQL',
];

export default function CertificationsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Certifications
      </motion.h2>
      <ul className="space-y-4">
        {certifications.map((cert, idx) => (
          <motion.li
            key={cert}
            className="bg-white/80 dark:bg-gray-900/80 rounded-xl shadow p-4 text-lg text-gray-800 dark:text-gray-200 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            {cert}
          </motion.li>
        ))}
      </ul>
    </section>
  );
} 