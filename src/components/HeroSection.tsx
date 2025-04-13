
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row gap-10 md:gap-16">
        <motion.div 
          className="flex flex-col flex-1 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-4 font-medium text-cyan-400"
          >
            Hello, I'm
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white to-cyan-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-300 mb-8 max-w-md"
          >
            I don't just code — I create. From dynamic web apps to cutting-edge AI, I build powerful tech with bold ideas. Ready to push boundaries and redefine what's possible.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-5"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transform duration-300 relative overflow-hidden border border-cyan-500/20"
            >
              <span className="relative z-10">View My Work</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/80 to-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-cyan-500/30 hover:border-cyan-400 text-white font-medium transition-all hover:bg-cyan-900/20 hover:scale-105 transform duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
            <div className="rounded-full overflow-hidden h-72 w-72 md:h-96 md:w-96 relative border-2 border-cyan-500/20 shadow-lg shadow-cyan-500/20">
              <img 
                src="/lovable-uploads/69a92b0b-721a-4ede-85ea-5fb4a4e41741.png" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <a
          href="#about"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500/30 animate-float group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
