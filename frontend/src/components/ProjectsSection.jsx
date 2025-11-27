import { motion } from 'framer-motion';

const projects = [
  {
    title: "Application Development For Monitoring Of Wool From Farm To Fabric",
    description: "Designed, developed, and tested within a team of 6 using Figma and MIT Tools."
  },
  {
    title: "Turf Booking Application",
    description: "Designed, developed, and tested using Flutter in a team of 5."
  },
  {
    title: "Mobile Application For Direct Access To Contract Farmers",
    description: "Sole contributor handling design, development, and testing using Bootstrap 5 and MongoDB."
  }
];

export default function ProjectsSection() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4">
      <motion.h2 className="text-3xl font-bold mb-6 text-primary" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        Projects
      </motion.h2>
      <div className="space-y-6">
        {projects.map((proj, idx) => (
          <motion.div key={idx} className="bg-white/70 dark:bg-gray-900/70 rounded-xl shadow p-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
            <div className="font-bold text-lg text-primary">{proj.title}</div>
            <div className="text-gray-700 dark:text-gray-300">{proj.description}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 