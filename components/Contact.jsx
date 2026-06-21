'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import * as Icons from 'lucide-react';
import { contactInfo, socialLinks } from '@/lib/data/social';

const iconMap = {
  Github: Icons.Code2,
  Linkedin: Icons.Briefcase,
  Twitter: Icons.MessageSquare,
  Instagram: Icons.Camera,
};

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (integrate with email service)
    console.log('[v0] Form submitted:', formState);
    setFormState({ name: '', email: '', message: '' });
  };

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold font-heading mb-16 text-center gradient-text"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Email */}
            <motion.div
              className="glass p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Icons.Mail size={24} className="text-blue-500 mb-3" />
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-white font-semibold hover:text-blue-400 transition-colors"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              className="glass p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Icons.Phone size={24} className="text-purple-500 mb-3" />
              <p className="text-gray-400 text-sm mb-1">Phone</p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="text-white font-semibold hover:text-purple-400 transition-colors"
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              className="glass p-6 rounded-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Icons.MapPin size={24} className="text-pink-500 mb-3" />
              <p className="text-gray-400 text-sm mb-1">Location</p>
              <p className="text-white font-semibold">{contactInfo.location}</p>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon] || Icons.ExternalLink;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-3 rounded-lg hover:bg-blue-500 hover:text-white transition-all"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={link.name}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="glass p-8 rounded-xl space-y-4"
            onSubmit={handleSubmit}
            variants={itemVariants}
          >
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full"
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full"
              />
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-semibold mb-2 text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows="5"
                className="w-full"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
