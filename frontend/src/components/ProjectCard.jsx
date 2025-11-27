import { motion } from 'framer-motion';

export default function ProjectCard({ project, onClick, idx }) {
  return (
    <motion.div
      className="relative group cursor-pointer overflow-hidden rounded-3xl shadow-xl bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.15, duration: 0.7, type: 'spring' }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,180,0.18)' }}
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
        <div className="text-white/80 text-sm mb-1">{project.client} &middot; {project.year}</div>
        <p className="text-white/90 text-base line-clamp-2">{project.description}</p>
      </div>
    </motion.div>
  );
} 