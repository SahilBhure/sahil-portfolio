import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Sahil Bhure</h3>
            <p className="text-gray-400 mb-4">
              Software Engineer & Unity Developer passionate about creating scalable solutions and immersive experiences.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/SahilBhure"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 glass rounded-lg text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sahil-bhure-369657198"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 glass rounded-lg text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="mailto:Sahilbhure101@gmail.com"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 glass rounded-lg text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`#${item.toLowerCase()}`}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-all duration-200 block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 Sahilbhure101@gmail.com</p>
              <p>📱 +91 8975612785</p>
              <p>📍 Pune, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Sahil Bhure. Made with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-500" />
            </motion.span>
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;