'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { skillsData } from '@/lib/data/skills';

const iconMap = {
  Code: Icons.Code,
  Palette: Icons.Palette,
  Box: Icons.Box,
  Server: Icons.Server,
  Database: Icons.Database,
  GitBranch: Icons.GitBranch,
  Github: Icons.Code2,
  Figma: Icons.Layers,
};

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  const SkillCard = ({ skill }) => {
    const Icon = iconMap[skill.icon] || Icons.Code;

    return (
      <motion.div
        className="glass p-6 rounded-xl flex flex-col items-center gap-3 hover:scale-110 transition-all cursor-pointer group"
        variants={itemVariants}
        whileHover={{
          scale: 1.1,
          boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)',
        }}
      >
        <Icon size={32} className="text-blue-500 group-hover:text-purple-500 transition-colors" />
        <p className="font-semibold text-center">{skill.name}</p>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          ref={ref}
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {Object.entries(skillsData).map(([category, skills]) => (
            <motion.div key={category} variants={itemVariants}>
              <h3 className="text-2xl font-heading font-bold capitalize mb-6 text-blue-400">
                {category === 'frontend'
                  ? 'Frontend'
                  : category === 'backend'
                  ? 'Backend'
                  : category === 'database'
                  ? 'Database'
                  : category}
              </h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
