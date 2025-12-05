import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const achievementsData = [
    {
        id: 1,
        title: 'CTPG Proof Of Concept 2025',
        award: '1st Prize Winner',
        date: '2025',
        description: 'Recognized for innovative solution design and execution in a competitive environment.',
        icon: Trophy,
        color: 'from-yellow-400 to-orange-500',
        lightColor: 'from-yellow-500 to-orange-600',
    },
    {
        id: 2,
        title: 'CTPG Ideathon 2025',
        award: '1st Prize Winner',
        date: '2025',
        description: 'Developed "Ease" App – an AI-powered waste management solution that won top honors.',
        icon: Star,
        color: 'from-blue-400 to-cyan-500',
        lightColor: 'from-blue-500 to-cyan-600',
    },
    {
        id: 3,
        title: 'KEC Hackathon 2025',
        award: '2nd Prize Winner',
        date: '2025',
        description: 'Secured 2nd place for developing a scalable web application under tight deadline constraints.',
        icon: Medal,
        color: 'from-gray-300 to-gray-500',
        lightColor: 'from-gray-400 to-gray-600',
    },
    {
        id: 4,
        title: 'ROBOTICS Workshop @ SKCET',
        award: 'Participant',
        date: 'September 2023',
        description: 'Actively participated in a hands-on workshop focused on robotics and automation.',
        icon: Star,
        color: 'from-purple-400 to-pink-500',
        lightColor: 'from-purple-500 to-pink-600',
    },
];

const AchievementsSection = () => {
    return (
        <div className="py-10">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievementsData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 p-6 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 blur-2xl rounded-full -mr-10 -mt-10 group-hover:opacity-20 transition-opacity`}></div>

                        <div className="relative z-10">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} p-2.5 mb-4 shadow-lg`}>
                                <item.icon className="w-full h-full text-white" />
                            </div>

                            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all">
                                {item.title}
                            </h4>

                            <div className="flex justify-between items-center mb-3">
                                <span className={`text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r ${item.lightColor} dark:${item.color}`}>
                                    {item.award}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-500 font-mono border border-gray-200 dark:border-gray-800 px-2 py-0.5 rounded">
                                    {item.date}
                                </span>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
