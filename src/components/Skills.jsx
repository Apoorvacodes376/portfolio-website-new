import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

const getIcon = (iconName) => {
  const allIcons = { ...SiIcons, ...FaIcons };
  return allIcons[iconName] || null;
};

export const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', icon: 'SiC' },
        { name: 'C++', icon: 'SiCplusplus' },
        { name: 'Python', icon: 'SiPython' },
        { name: 'Java', icon: 'SiJava' },
        { name: 'JavaScript', icon: 'SiJavascript' },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: 'SiHtml5' },
        { name: 'CSS3', icon: 'SiCss3' },
        { name: 'React', icon: 'SiReact' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'SiNodedotjs' },
        { name: 'Express', icon: 'SiExpress' },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'MongoDB', icon: 'SiMongodb' },
        { name: 'MySQL', icon: 'SiMysql' },
      ],
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Canva', icon: 'SiCanva' },
        { name: 'Power BI', icon: 'SiPowerbi' },
      ],
    },
    {
      title: 'Domains',
      skills: [
        { name: 'Machine Learning', icon: 'FaBrain' },
        { name: 'AI', icon: 'FaRobot' },
        { name: 'NLP', icon: 'FaLanguage' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">{category.title}</h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, skillIdx) => {
                  const IconComponent = getIcon(skill.icon);
                  return (
                    <motion.div
                      key={skillIdx}
                      className="glass p-6 rounded-lg flex flex-col items-center justify-center text-center hover-glow group"
                      variants={skillVariants}
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {IconComponent && (
                        <IconComponent className="w-12 h-12 mb-4 group-hover:text-purple-400 transition-colors" style={{ color: '#64a6f8' }} />
                      )}
                      <p className="text-sm font-semibold text-gray-300">{skill.name}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
