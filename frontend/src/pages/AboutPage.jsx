import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-black dark:text-white">About Me</h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I'm Kiruthikbairavan C, a passionate developer focused on building beautiful, performant, and user-centric web experiences. I love minimal design, bold typography, and subtle motion.
        </p>
      </motion.div>
    </section>
  );
} 