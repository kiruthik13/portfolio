import { motion } from 'framer-motion';

const mockTimeline = [
  {
    year: '2023',
    title: 'MSc Software Systems',
    location: 'UASD, Dharwad',
    description: 'Graduated with distinction...'
  },
  {
    year: '2021',
    title: 'BSc Computer Science',
    location: 'XYZ College',
    description: 'Completed undergraduate studies.'
  }
];

export default function TimelineMap() {
  return (
    <div className="relative border-l-4 border-primary/30 pl-8">
      {mockTimeline.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.15, duration: 0.7, type: 'spring' }}
          className="relative mb-12 last:mb-0 group"
        >
          {/* Timeline step icon */}
          <div className="absolute -left-10 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg">
            {item.year.slice(2)}
          </div>
          {/* Glassy card */}
          <div className="rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur border border-primary/20 shadow-lg p-6">
            <div className="text-xl font-bold text-primary mb-1 drop-shadow">{item.title}</div>
            <div className="text-sm text-accent font-semibold mb-2">{item.location}</div>
            <div className="text-gray-700 dark:text-gray-200">{item.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 