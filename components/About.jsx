'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo, stats, education, experience } from '@/lib/data/constants';

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left - Description */}
          <motion.div
            className="glass p-8 rounded-2xl"
            variants={itemVariants}
          >
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              {personalInfo.about}
            </p>

            {/* Education Card */}
            <motion.div
              className="glass p-4 rounded-lg mb-4"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-heading font-bold text-blue-500 mb-2">Education</h3>
              <p className="text-gray-300">{education.degree}</p>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              className="glass p-4 rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="font-heading font-bold text-purple-500 mb-2">Experience</h3>
              <p className="text-gray-300">{experience.title}</p>
            </motion.div>
          </motion.div>

          {/* Right - Statistics */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-8 rounded-2xl text-center hover:scale-105 transition-transform"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
                }}
              >
                <motion.p
                  className="text-5xl font-bold gradient-text font-heading mb-2"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-gray-400 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
