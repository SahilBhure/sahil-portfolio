import React from 'react';
import { motion } from 'framer-motion';

const GameCharacter = () => {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.div
        className="relative"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Character Body */}
        <motion.div
          className="w-16 h-20 bg-gradient-to-b from-blue-500 to-purple-600 rounded-t-full relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Character Face */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-8 h-8 bg-yellow-300 rounded-full relative">
              {/* Eyes */}
              <motion.div
                className="absolute top-2 left-1 w-1 h-1 bg-black rounded-full"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute top-2 right-1 w-1 h-1 bg-black rounded-full"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.1 }}
              />
              {/* Smile */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-black rounded-full" />
            </div>
          </div>

          {/* Arms */}
          <motion.div
            className="absolute top-8 -left-2 w-4 h-2 bg-blue-400 rounded-full"
            animate={{ rotate: [0, 20, -20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-8 -right-2 w-4 h-2 bg-blue-400 rounded-full"
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Legs */}
        <div className="flex justify-center gap-1">
          <motion.div
            className="w-2 h-6 bg-purple-600 rounded-b-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <motion.div
            className="w-2 h-6 bg-purple-600 rounded-b-full"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        {/* Speech Bubble */}
        <motion.div
          className="absolute -top-12 -left-8 bg-white text-black text-xs px-2 py-1 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <div className="relative">
            Let's code! 🚀
            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-white transform rotate-45" />
          </div>
        </motion.div>

        {/* Particle Effects */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              top: `${10 + i * 5}px`,
              left: `${8 + i * 2}px`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default GameCharacter;