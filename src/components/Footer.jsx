import { motion } from 'framer-motion';
import * as SiIcons from 'react-icons/si';
import * as FaIcons from 'react-icons/fa';

export const Footer = () => {
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass border-t border-white border-opacity-10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-2 font-heading text-light-primary">GVLA</h2>
            <p className="text-gray-400 text-light-secondary">Full Stack Developer & CS Student</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 text-light-primary">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm text-light-secondary"
                >
                  → {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4 text-light-primary">Connect</h3>
            <div className="flex gap-3 flex-wrap">
              {socialLinks.map((social) => {
                const IconComponent = getIcon(social.icon);
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-opacity-20 rounded-lg text-gray-300 hover:text-white hover-glow border border-blue-500 border-opacity-30 text-light-primary"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {IconComponent && <IconComponent size={18} className="text-light-primary" />}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-10 pt-8">
          <motion.p
            className="text-center text-gray-400 text-sm text-light-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} GVL Apoorva. All rights reserved. | Crafted with passion and code
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
