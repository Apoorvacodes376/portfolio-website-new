'use client';

import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { personalInfo } from '@/lib/data/constants';
import { scrollToElement } from '@/lib/utils/scrollUtils';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.p
              className="text-blue-500 font-semibold text-lg"
              variants={itemVariants}
            >
              Hello, I&apos;m {personalInfo.name.split(' ')[0]}
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-bold font-heading leading-tight gradient-text"
              variants={itemVariants}
            >
              {personalInfo.title}
            </motion.h1>

            <motion.p
              className="text-lg text-gray-400 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              {personalInfo.intro}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <motion.a
                href="/resume.pdf"
                download
                className="glass px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => scrollToElement('contact')}
                className="px-8 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} className="inline mr-2" />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Image */}
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-64 h-64 md:w-72 md:h-72"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500 animate-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />

              {/* Profile image placeholder */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-bold gradient-text font-heading">
                    GA
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
