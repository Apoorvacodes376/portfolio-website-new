'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as Icons from 'lucide-react';
import { certificatesData } from '@/lib/data/certificates';

const iconMap = {
  Award: Icons.Award,
  Shield: Icons.Shield,
  Database: Icons.Database,
  TrendingUp: Icons.TrendingUp,
};

export default function Certificates() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {certificatesData.map((cert) => {
            const Icon = iconMap[cert.icon] || Icons.Award;

            return (
              <motion.div
                key={cert.id}
                className="glass p-6 rounded-xl text-center hover:scale-110 transition-all cursor-pointer group"
                variants={itemVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
                  y: -5,
                }}
              >
                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Icon size={40} className="text-purple-500 group-hover:text-blue-500 transition-colors" />
                </motion.div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-gray-400 text-sm mb-4">{cert.issuer}</p>

                {/* Button */}
                <motion.button
                  className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-sm font-semibold text-blue-300 hover:bg-blue-500 hover:text-white transition-all w-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
