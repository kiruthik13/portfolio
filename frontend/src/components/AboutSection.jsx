import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="max-w-3xl mx-auto py-16 px-4 text-center">
      <motion.h2
        className="text-4xl font-extrabold mb-4 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        38, Muralikattuthottam, Valliyampalayampudhur, Thandapalayam, <br />
        kiruthikbairavanc.22msc@kongu.edu | 9345304921 | DoB: 13-04-2002
      </p>
      <p className="text-xl text-gray-800 dark:text-gray-200 mb-8">
        To leverage my technical skills and problem-solving abilities to contribute to innovative software solutions.
      </p>
    </section>
  );
} 