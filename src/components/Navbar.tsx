import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const downloadCV = () => {
    // Create a simple CV content
    const cvContent = `
SAHIL BHURE
Software Engineer & Unity Developer

Contact Information:
Email: Sahilbhure101@gmail.com
Phone: 8975612785
GitHub: https://github.com/SahilBhure
LinkedIn: https://linkedin.com/in/sahil-bhure-369657198

EXPERIENCE:
Software Engineer – Ciklum, Pune (Jun 2024 - Present)
- Developed and optimized Unity-based games for mobile and desktop platforms
- Developed and maintained interactive 2D and 3D games using Unity Engine
- Collaborated with game designers, artists, and backend developers

Unity Developer Intern – Infogen Labs, Pune (Aug 2023 - Nov 2023)
- Assisted in developing gameplay systems and UI components in Unity
- Gained experience with Unity Animator, Prefabs, and Particle Systems
- Worked under senior developers to debug and optimize code

EDUCATION:
Bachelor of Technology - Computer Engineering
Rashtrasant Tukdoji Maharaj Nagpur University, Nagpur (Aug 2021 - June 2024)

ABOUT:
Java Backend Developer with hands-on experience building scalable RESTful APIs and backend services using Java, Spring Boot, and Docker. Additionally skilled in Unity-based 2D/3D game development. Strong grasp of OOP principles, debugging, testing, and agile practices.
    `;

    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sahil_Bhure_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            SB
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                onClick={downloadCV}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden glass"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                downloadCV();
                setIsOpen(false);
              }}
              className="w-full text-left bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;