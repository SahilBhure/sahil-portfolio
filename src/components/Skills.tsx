import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { 
          name: 'Java', 
          icon: '☕',
          color: 'from-orange-500 to-red-500'
        },
        { 
          name: 'C#', 
          icon: '🔷',
          color: 'from-purple-500 to-blue-500'
        },
        { 
          name: 'JavaScript', 
          icon: '🟨',
          color: 'from-yellow-400 to-orange-400'
        },
        { 
          name: 'Python', 
          icon: '🐍',
          color: 'from-green-400 to-blue-400'
        },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { 
          name: 'Spring Boot', 
          icon: '🍃',
          color: 'from-green-500 to-emerald-500'
        },
        { 
          name: 'RESTful APIs', 
          icon: '🔗',
          color: 'from-blue-500 to-cyan-500'
        },
        { 
          name: 'Docker', 
          icon: '🐳',
          color: 'from-blue-400 to-blue-600'
        },
        { 
          name: 'Microservices', 
          icon: '⚙️',
          color: 'from-gray-500 to-gray-700'
        },
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { 
          name: 'Unity Engine', 
          icon: '🎮',
          color: 'from-purple-500 to-pink-500'
        },
        { 
          name: '2D/3D Games', 
          icon: '🎯',
          color: 'from-red-500 to-orange-500'
        },
        { 
          name: 'Game Physics', 
          icon: '⚡',
          color: 'from-yellow-400 to-red-400'
        },
        { 
          name: 'Multiplayer', 
          icon: '👥',
          color: 'from-indigo-500 to-purple-500'
        },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { 
          name: 'Git', 
          icon: '📝',
          color: 'from-orange-500 to-red-500'
        },
        { 
          name: 'Agile/Scrum', 
          icon: '🔄',
          color: 'from-blue-500 to-indigo-500'
        },
        { 
          name: 'Testing', 
          icon: '🧪',
          color: 'from-green-500 to-teal-500'
        },
        { 
          name: 'OOP', 
          icon: '🏗️',
          color: 'from-purple-500 to-blue-500'
        },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-black/20 relative overflow-hidden">
      {/* Gaming Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Game Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            {['🎮', '🕹️', '👾', '🎯', '⚡', '🚀', '💎', '🏆'][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            animate={{ 
              textShadow: [
                '0 0 10px rgba(102, 126, 234, 0.5)',
                '0 0 20px rgba(118, 75, 162, 0.5)',
                '0 0 10px rgba(102, 126, 234, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Skills & Arsenal 🎮
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit for building epic games and scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}
              className="glass p-6 rounded-2xl border border-purple-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">
                  {categoryIndex === 0 ? '💻' : categoryIndex === 1 ? '⚙️' : categoryIndex === 2 ? '🎮' : '🛠️'}
                </span>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative p-4 rounded-xl bg-gradient-to-br ${skill.color} group cursor-pointer overflow-hidden`}
                  >
                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="text-3xl mb-2"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: skillIndex * 0.2
                        }}
                      >
                        {skill.icon}
                      </motion.div>
                      <p className="text-white font-medium text-sm group-hover:text-yellow-200 transition-colors duration-200">
                        {skill.name}
                      </p>
                    </div>

                    {/* Particle effect on hover */}
                    <motion.div
                      className="absolute top-2 right-2 w-2 h-2 bg-yellow-300 rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ 
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                        x: [0, 10, 20],
                        y: [0, -10, -20]
                      }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gaming Achievement Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-2">
            <span className="text-3xl">🏆</span>
            Tech Stack Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'MongoDB', icon: '🍃', achievement: 'Database Master' },
              { name: 'MySQL', icon: '🐬', achievement: 'SQL Wizard' },
              { name: 'React', icon: '⚛️', achievement: 'Frontend Hero' },
              { name: 'Node.js', icon: '🟢', achievement: 'Backend Warrior' },
              { name: 'Unity Animator', icon: '🎭', achievement: 'Animation Expert' },
              { name: 'Particle Systems', icon: '✨', achievement: 'Effects Master' },
              { name: 'Prefabs', icon: '🧩', achievement: 'Component Pro' },
              { name: 'JSON/XML', icon: '📄', achievement: 'Data Parser' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  y: -10
                }}
                className="relative group"
              >
                <div className="px-4 py-3 glass rounded-full text-sm text-gray-300 hover:text-white cursor-default border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
                  <span className="mr-2 text-lg">{tech.icon}</span>
                  {tech.name}
                </div>
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: -5 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-purple-600 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  {tech.achievement}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;