import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer',
      company: 'Ciklum, Pune',
      period: 'Jun 2024 - Present',
      description: [
        'Developed and optimized Unity-based games for mobile and desktop platforms',
        'Developed and maintained interactive 2D and 3D games using Unity Engine for cross-platform deployment',
        'Collaborated with game designers, artists, and backend developers to implement core gameplay mechanics, UI/UX, and multiplayer features'
      ]
    },
    {
      type: 'work',
      title: 'Unity Developer Intern',
      company: 'Infogen Labs, Pune',
      period: 'Aug 2023 - Nov 2023',
      description: [
        'Assisted in developing gameplay systems and UI components in Unity',
        'Gained experience with Unity Animator, Prefabs, and Particle Systems',
        'Worked under senior developers to debug and optimize code'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology',
      company: 'Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur',
      period: 'Aug 2021 - June 2024',
      description: [
        'Specialization in Computer Engineering',
        'Focused on software development and programming fundamentals',
        'Gained expertise in various programming languages and technologies'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Experience & Education 📚
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-2 md:-translate-x-1/2 z-10">
                <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                  {exp.type === 'work' ? (
                    <Briefcase size={8} className="text-blue-400" />
                  ) : (
                    <GraduationCap size={8} className="text-purple-400" />
                  )}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, rotateY: 5 }}
                className={`glass p-6 rounded-xl ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-blue-400" />
                  <span className="text-sm text-blue-400 font-medium">{exp.period}</span>
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-lg"
                  >
                    {exp.type === 'work' ? '⚡' : '🎓'}
                  </motion.span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                <h4 className="text-lg text-purple-400 mb-4">{exp.company}</h4>
                
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;