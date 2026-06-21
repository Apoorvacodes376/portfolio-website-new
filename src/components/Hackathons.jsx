import { motion } from 'framer-motion';
import { FiCode, FiMic, FiMessageCircle, FiTrendingUp, FiFileText, FiMusic } from 'react-icons/fi';

export const Hackathons = () => {
  const activities = [
    {
      icon: FiCode,
      title: 'Web Development Member',
      org: 'Developer Student Community',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FiMic,
      title: 'Tech Team Member',
      org: 'Speakers Forum',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FiMessageCircle,
      title: 'Debate Committee Member',
      org: 'Speakers Forum',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: FiTrendingUp,
      title: '2 Hackathons Participated',
      org: 'YAH & HackHERthon',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FiFileText,
      title: '2 Paper Conferences',
      org: 'ICICRCET\'26, ICSEES\'26',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: FiMusic,
      title: 'Learning German on Duolingo',
      org: '50+ Day Streak',
      color: 'from-indigo-500 to-indigo-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hackathons" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Hackathons & Activities
        </motion.h2>

        {/* Zig-Zag Layout */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-8">
            {activities.map((activity, idx) => {
              const Icon = activity.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className={`glass p-8 rounded-lg hover-glow bg-gradient-to-r ${activity.color} bg-opacity-5 border border-current border-opacity-20`}
                      whileHover={{ scale: 1.05, x: isLeft ? 10 : -10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${activity.color} text-white flex-shrink-0`}>
                          <Icon size={24} />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-1">{activity.title}</h3>
                          <p className="text-gray-400">{activity.org}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Languages Section */}
        <motion.div
          className="mt-16 glass p-8 rounded-lg hover-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">Languages I Speak</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Telugu', 'Tamil', 'Sanskrit', 'English', 'Hindi', 'Kannada', 'German'].map((lang) => (
              <motion.div
                key={lang}
                className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 rounded-lg text-center hover-glow"
                whileHover={{ scale: 1.05 }}
              >
                {lang}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
