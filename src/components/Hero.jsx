import { motion } from 'framer-motion';
import { FiDownload, FiMail } from 'react-icons/fi';

const AnimatedGradientBlob = ({ delay, duration, size }) => (
  <motion.div
    className="absolute rounded-full mix-blend-screen blur-3xl opacity-30"
    style={{
      background: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.8))`,
      width: size,
      height: size,
    }}
    animate={{
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'loop',
    }}
  />
);

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated Blobs */}
      <AnimatedGradientBlob delay={0} duration={20} size="400px" />
      <AnimatedGradientBlob delay={2} duration={25} size="300px" />
      <AnimatedGradientBlob delay={4} duration={30} size="350px" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 p-1">
              <div className="w-full h-full rounded-full bg-dark flex items-center justify-center">
                <div className="w-44 h-44 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20" />
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-0"
              animate={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl font-bold mb-6 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          GVL Apoorva
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 font-light text-light-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Computer Science Student | Full Stack Developer
        </motion.p>

        <motion.p
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto text-light-tertiary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Building innovative digital solutions through full-stack development, machine learning, and AI
        </motion.p>

        <motion.div
          className="flex flex-col gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload /> Download Resume
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="relative flex items-center gap-2 px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail /> Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center text-light-tertiary">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};
