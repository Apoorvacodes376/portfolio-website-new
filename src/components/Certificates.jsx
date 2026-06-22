import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { CERTIFICATES } from '../data/constants';

const CertificateModal = ({ certificate, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />

          <motion.div
            className="relative glass rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover-glow rounded-full z-10"
            >
              <FiX size={24} />
            </button>

            <div className="p-6 md:p-10">
              <motion.img
                src={certificate.image}
                alt={certificate.title}
                className="w-full rounded-lg mb-6 shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold gradient-text mb-4 font-heading text-light-primary">
                  {certificate.title}
                </h3>

                <div className="space-y-3">
                  <p className="text-lg text-light-primary">
                    <span className="text-gray-400 text-light-secondary">Issuer:</span> {certificate.issuer}
                  </p>
                  <p className="text-lg text-light-primary">
                    <span className="text-gray-400 text-light-secondary">Obtained:</span> {certificate.date}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
          Certifications
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              className="glass rounded-lg overflow-hidden hover-glow group cursor-pointer"
              variants={certVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <div className="relative h-40 overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%235B21B6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="24" fill="white" text-anchor="middle" dy=".3em"%3ECertificate%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 text-light-primary line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-sm text-gray-400 text-light-secondary mb-2">
                  {cert.issuer}
                </p>

                <p className="text-sm text-gray-500 text-light-tertiary">
                  {cert.date}
                </p>

                <motion.div
                  className="mt-4 text-blue-400 font-semibold text-sm"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  Click to view
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        isOpen={!!selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
};
