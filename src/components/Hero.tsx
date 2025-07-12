import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50`}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-30"
            animate={{
              x: [0, 150, 0],
              y: [0, -150, 0],
              rotate: [0, 360, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
          >
            {['🎮', '🕹️', '👾', '🎯', '⚡', '🚀', '💎', '🏆', '🎪', '🎨', '🔥', '✨'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                background: 'linear-gradient(270deg, #667eea, #764ba2, #667eea)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sahil Bhure
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Software Engineer & Unity Developer
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Passionate about building scalable backend services and immersive gaming experiences
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <motion.a
              href="mailto:Sahilbhure101@gmail.com"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <Mail size={20} className="text-blue-400" />
              <span className="text-sm">Sahilbhure101@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:8975612785"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-white/20 transition-all duration-200"
            >
              <Phone size={20} className="text-green-400" />
              <span className="text-sm">8975612785</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://github.com/SahilBhure"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sahil-bhure-369657198"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 glass rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;