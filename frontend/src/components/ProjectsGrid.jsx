import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const mockProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio built with React.',
    techStack: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Chatbot App',
    description: 'A chatbot powered by GPT.',
    techStack: ['Node.js', 'Express', 'OpenAI'],
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function ProjectsGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockProjects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8, scale: 1.03, boxShadow: '0 8px 32px rgba(80,80,180,0.15)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 cursor-pointer transition-all"
            onClick={() => setSelected(project)}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map(tech => (
                <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-6 max-w-lg w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-xl font-bold"
                onClick={() => setSelected(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={selected.image} alt={selected.title} className="w-full h-48 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-200">{selected.description}</p>
              <div className="flex flex-wrap gap-2">
                {selected.techStack.map(tech => (
                  <span key={tech} className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 