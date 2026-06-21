import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8 text-light-primary">
              I'm a passionate Computer Science student interested in full-stack development, machine learning, AI, and creating meaningful digital experiences with a 
            </p>

            <div className="space-y-4">
              <div className="glass p-6 rounded-lg hover-glow">
                <h3 className="font-semibold text-lg mb-2 text-light-primary">Education</h3>
                <p className="text-gray-400 text-light-secondary">Bachelor of Engineering in Computer Science and Engineering</p>
              </div>

              <div className="glass p-6 rounded-lg hover-glow">
                <h3 className="font-semibold text-lg mb-2 text-light-primary">Experience</h3>
                <p className="text-gray-400 text-light-secondary">Student Developer | Multiple Internships</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="glass p-8 rounded-lg text-center hover-glow"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-gray-400 text-light-tertiary">Projects</p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-lg text-center hover-glow"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">15+</div>
              <p className="text-gray-400 text-light-tertiary">Certifications</p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-lg text-center hover-glow"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">2+</div>
              <p className="text-gray-400 text-light-tertiary">Internships and Hackathons</p>
            </motion.div>

            <motion.div
              className="glass p-8 rounded-lg text-center hover-glow"
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="text-4xl font-bold gradient-text mb-2">7</div>
              <p className="text-gray-400 text-light-tertiary">Languages</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
