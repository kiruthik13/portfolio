import { motion } from 'framer-motion';

const mockSkills = [
  { name: 'React.js', proficiency: 95, icon: '⚛️' },
  { name: 'Node.js', proficiency: 90, icon: '🟩' },
  { name: 'Tailwind CSS', proficiency: 85, icon: '💨' },
  { name: 'Framer Motion', proficiency: 80, icon: '🎞️' },
];

export default function SkillsBoard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {mockSkills.map((skill, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring' }}
          whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(80,80,180,0.18)' }}
          className="relative group rounded-2xl p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur border border-primary/20 shadow-lg cursor-pointer overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-primary group-hover:shadow-primary/30 group-hover:shadow-lg transition-all duration-300" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="text-5xl mb-2 drop-shadow">{skill.icon}</div>
            <div className="font-bold text-lg mb-2 text-primary drop-shadow">{skill.name}</div>
            <div className="w-full mt-2 h-3 bg-primary/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1 + idx * 0.2 }}
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
            <div className="opacity-0 group-hover:opacity-100 text-xs mt-2 transition-opacity bg-white/80 dark:bg-gray-800/80 px-2 py-1 rounded shadow absolute top-2 left-1/2 -translate-x-1/2 z-20 border border-primary/20">
              Proficiency: {skill.proficiency}%
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 