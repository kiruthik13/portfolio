import { useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import StickyHeader from '../components/StickyHeader';

export default function ProjectDetailPage() {
  const { state } = useLocation();
  const project = state?.project;

  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
        <StickyHeader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <StickyHeader title={project.title} />
      {/* Parallax image or video */}
      <motion.div
        className="w-full h-[60vh] overflow-hidden flex items-center justify-center"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        {project.video ? (
          <video src={project.video} controls className="w-full h-full object-cover" />
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        )}
      </motion.div>
      <div className="max-w-3xl mx-auto py-16 px-4">
        <motion.h1 className="text-5xl font-extrabold mb-4 text-black dark:text-white" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          {project.title}
        </motion.h1>
        <div className="flex gap-6 text-lg text-gray-600 dark:text-gray-300 mb-6">
          <span>{project.client}</span>
          <span>{project.year}</span>
        </div>
        <motion.p className="text-xl text-gray-800 dark:text-gray-200 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          {project.description}
        </motion.p>
      </div>
    </div>
  );
} 