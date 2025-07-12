import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Gamepad2 } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code, title: 'Backend Development', desc: 'Java, Spring Boot, RESTful APIs' },
    { icon: Database, title: 'Database & DevOps', desc: 'Docker, Microservices, Testing' },
    { icon: Gamepad2, title: 'Game Development', desc: 'Unity 2D/3D, C#, Game Mechanics' },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me 🎯
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Java Backend Developer with hands-on experience building scalable RESTful APIs and backend services using Java, Spring Boot, and Docker. Additionally skilled in Unity-based 2D/3D game development.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Strong grasp of OOP principles, debugging, testing, and agile practices. Eager to contribute backend expertise to tech-driven teams while exploring the creative world of game development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Currently working as a Software Engineer at Ciklum, where I develop and optimize Unity-based games for multiple platforms while collaborating with cross-functional teams.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon size={24} className="text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {skill.title}
                    </h4>
                    <p className="text-gray-300">{skill.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;