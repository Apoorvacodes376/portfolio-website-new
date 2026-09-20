import { motion } from 'framer-motion';
import { FiAward, FiTrendingUp, FiGlobe, FiUsers } from 'react-icons/fi';
import { RiFireLine } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";
import { GrDocumentText } from "react-icons/gr";
import { IoLanguageSharp } from "react-icons/io5";
import { GiVideoConference } from "react-icons/gi";

export const Achievements = () => {
  const achievements = [
    {
      icon: GrDocumentText,
      title: '1 Paper Published',
      description: 'Participated and presented and published a paper through an international conference',
    },
    {
      icon: TiGroupOutline,
      title: 'Tech Team Lead in ACM-SVCE',
      description: 'Managing and building websites',
    },
    {
      icon: TiGroupOutline,
      title: 'Design Team Head in IEEE-SVCE',
      description: 'Designing and creating visually appealing designs for the club',
    },
    {
      icon: RiFireLine,
      title: '150+ Day LeetCode Streak',
      description: 'With 150+ solved problems and consistent daily practice',
    },
    {
      icon: IoLanguageSharp,
      title: 'Learning German',
      description: 'Actively learning on Duolingo with regular progress for over 650+ days',
    },
    {
      icon: FiUsers,
      title: 'Web Development member in Developer Student Community',
      description: 'Worked on creating websites, designing and managing events',
    },
    {
      icon: IoLanguageSharp,
      title: '7 Languages Known',
      description: 'Telugu, Tamil, Sanskrit, English, Hindi, Kannada, German',
    },
    {
      icon: GiVideoConference,
      title: '2 Paper Conferences',
      description: 'Participated and presented in international conferences',
    },
    {
      icon: FiAward,
      title: '4 Hackathons',
      description: 'Actively participated in hackathons like SIH-26, DataSphere, YAH and HackHERthon',
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
                  className="md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6"
                  variants={itemVariants}
                >
                  <div className={`${isEven ? 'md:col-start-1 md:row-start-1 md:pr-6 md:text-right' : 'md:col-start-3 md:row-start-1 md:pl-6'}`}>
                    <motion.div
                      className="glass p-6 rounded-lg hover-glow"
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:justify-end' : ''}`}>
                        <Icon className="w-6 h-6 shrink-0 text-blue-400" />
                        <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                      </div>
                      <p className="text-gray-400">{achievement.description}</p>
                    </motion.div>
                  </div>

                  <motion.div
                    className="hidden md:flex md:col-start-2 md:row-start-1 justify-center"
                    whileHover={{ scale: 1.3 }}
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ring-4 ring-gray-900" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
