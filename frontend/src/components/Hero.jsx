import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import profilePic from '../assets/profile.jpg'; // Place your profile photo here

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-[90vh] overflow-hidden text-center bg-white dark:bg-black">
      <motion.img
        src={profilePic}
        alt="Kiruthikbairavan C"
        className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-4 text-primary drop-shadow-lg"
      >
        Kiruthikbairavan C
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-200 font-medium max-w-2xl mx-auto"
      >
        To leverage my technical skills and problem-solving abilities to contribute to innovative software solutions.
      </motion.p>
      <motion.a
        href="/resume.pdf" // Place your resume PDF in public/resume.pdf
        download
        className="inline-block px-8 py-3 rounded-full bg-primary text-white font-bold shadow-lg hover:bg-accent transition text-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
} 