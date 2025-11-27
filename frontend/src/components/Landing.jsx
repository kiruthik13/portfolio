import { motion } from 'framer-motion';

export default function Landing({ onEnter }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white mb-8"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
      >
        Kiruthikbairavan C
      </motion.h1>
      <motion.button
        className="px-8 py-4 text-lg font-bold rounded-full bg-black text-white dark:bg-white dark:text-black shadow-lg hover:scale-105 transition-transform"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.98 }}
        onClick={onEnter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Enter Portfolio
      </motion.button>
    </motion.section>
  );
} 