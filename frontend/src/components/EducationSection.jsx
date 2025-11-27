import { motion } from 'framer-motion';

const education = [
  {
    school: "Kongu Engineering College",
    degree: "MSC SOFTWARE SYSTEMS",
    score: "7.50",
    period: "08/22 - present"
  },
  {
    school: "Vivekananda Vidyalaya Matric Higher Secondary School",
    degree: "HSC",
    score: "65"
  },
  {
    school: "Vivekananda Vidyalaya Matric Higher Secondary School",
    degree: "SSLC",
    score: "84"
  }
];

export default function EducationSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Education
      </motion.h2>
      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div key={idx} className="bg-white/70 dark:bg-gray-900/70 rounded-xl shadow p-6 text-left"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <div className="font-bold text-lg text-primary">{edu.school}</div>
            <div className="text-gray-700 dark:text-gray-300">{edu.degree} <span className="font-semibold">{edu.score}</span></div>
            {edu.period && <div className="text-sm text-gray-500">{edu.period}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  );
} 