import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiGlobe, FiUsers } from 'react-icons/fi';

export const Achievements = () => {
  const achievements = [
    {
      icon: FiTrendingUp,
      title: '50+ Day LeetCode Streak',
      description: 'With 60 solved problems and consistent daily practice',
    },
    {
      icon: FiGlobe,
      title: 'Learning German',
      description: 'Actively learning on Duolingo with regular progress',
    },
    {
      icon: FiUsers,
      title: '7 Languages Known',
      description: 'Telugu, Tamil, Sanskrit, English, Hindi, Kannada, German',
    },
    {
      icon: FiAward,
      title: '2 Paper Conferences',
      description: 'Participated and presented in international conferences',
    },
    {
      icon: FiAward,
      title: '2 Hackathons',
      description: 'Active participant in YAH and HackHERthon events',
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Achievements & Milestones
        </motion.h2>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500" />

          <div className="space-y-8 md:space-y-12">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  className={`md:flex ${idx === 1 || idx === 3 ? 'md:flex-col md:items-end' : 'md:items-center'}`}
                  variants={itemVariants}
                >
                  {/* Left Content (Desktop) / Content (Mobile) */}
                  <div className={`md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className="glass p-6 rounded-lg hover-glow"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                      </div>
                      <p className="text-gray-400">{achievement.description}</p>
                    </motion.div>
                  </div>

                  {/* Center Dot (Desktop Only) */}
                  <motion.div
                    className="hidden md:flex md:w-0 justify-center"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-gray-900" />
                  </motion.div>

                  {/* Right Content Placeholder (Desktop) */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
