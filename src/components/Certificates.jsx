import { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../data/constants';

export const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? CERTIFICATES : CERTIFICATES.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const certVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Certifications & Achievements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visibleCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="glass rounded-lg overflow-hidden hover-glow group"
              variants={certVariants}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400">Obtained: {cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && CERTIFICATES.length > 3 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 border-2 border-purple-500 rounded-lg font-semibold hover-glow transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
