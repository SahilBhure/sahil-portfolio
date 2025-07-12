import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Gamepad2, Server, Globe, Code } from 'lucide-react';

const Projects = () => {
  const categories = [
    { name: 'Full Stack', icon: Globe, color: 'from-green-500 to-teal-500' },
    { name: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: Server, color: 'from-orange-500 to-red-500' },
    { name: 'Game Dev', icon: Gamepad2, color: 'from-purple-500 to-pink-500' },
  ];

  const projects = [
    {
      title: "Tank's Multiplayer Game",
      description: "A multiplayer tank combat game where multiple players can join and fight against each other in real-time battles. Built with Unity and featuring networked gameplay mechanics.",
      category: 'Game Dev',
      technologies: ['Unity', 'C#', 'Multiplayer Networking', 'Game Physics'],
      github: 'https://github.com/SahilBhure',
      live: null,
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    // Add more projects here as needed
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my work across different domains - from multiplayer games to scalable backend services
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory('All')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                : 'glass text-gray-300 hover:text-white'
            }`}
          >
            All Projects
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.name
                  ? `bg-gradient-to-r ${category.color} text-white`
                  : 'glass text-gray-300 hover:text-white'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                rotateX: 10,
                rotateY: 10,
                scale: 1.05,
                boxShadow: '0 25px 50px rgba(0,0,0,0.5)'
              }}
              className="glass rounded-2xl overflow-hidden group border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Gaming overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Floating game icons on hover */}
                <motion.div
                  className="absolute top-2 left-2 text-2xl opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  🎮
                </motion.div>
                
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${
                    categories.find(c => c.name === project.category)?.color || 'from-gray-500 to-gray-600'
                  } text-white`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-medium transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">
              No projects found in this category. More projects coming soon!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;