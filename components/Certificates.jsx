'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { certificatesData } from '@/lib/data/certificates';

export default function Certificates() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll
    ? certificatesData
    : certificatesData.slice(0, 3);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
          Certifications
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {visibleCertificates.map((cert) => (
            <motion.div
              key={cert.id}
              className="glass rounded-xl overflow-hidden group"
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {certificatesData.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-xl border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}