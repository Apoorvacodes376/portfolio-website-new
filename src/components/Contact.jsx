import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'apoorva@example.com' },
    { icon: FiPhone, label: 'Phone', value: '+91 XXXXXXXXXX' },
    { icon: FiMapPin, label: 'Location', value: 'India' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'FaLinkedin', url: '#' },
    { name: 'GitHub', icon: 'FaGithub', url: '#' },
    { name: 'LeetCode', icon: 'SiLeetcode', url: '#' },
    { name: 'Instagram', icon: 'FaInstagram', url: '#' },
    { name: 'Duolingo', icon: 'SiDuolingo', url: '#' },
  ];

  const getIcon = (iconName) => {
    const allIcons = { ...SiIcons, ...FaIcons };
    return allIcons[iconName];
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  className="glass p-6 rounded-lg hover-glow flex items-center gap-4"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <Icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Social Links */}
            <motion.div
              className="glass p-6 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-300 mb-4 font-semibold">Follow Me</p>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => {
                  const IconComponent = getIcon(social.icon);
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 rounded-lg text-white hover-glow border border-blue-500 border-opacity-30"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      title={social.name}
                    >
                      {IconComponent && <IconComponent size={20} />}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
              <motion.input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500"
                placeholder="Your name"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <motion.input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500"
                placeholder="your.email@example.com"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <motion.textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full glass rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none"
                placeholder="Your message here..."
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? 'Message Sent! ✓' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
