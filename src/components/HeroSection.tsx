
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-pattern">
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
            className="mb-4 font-medium text-accent"
          >
            Hello, I'm a
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Creative</span>{" "}
            <span className="block mt-2">Developer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-300 mb-8 max-w-md"
          >
            I create engaging and interactive digital experiences, bringing ideas to life with code and creativity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium glow-effect transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 rounded-full border border-white/20 hover:border-accent/50 text-white font-medium transition-all hover:bg-white/5"
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
            <div className="rounded-full overflow-hidden h-72 w-72 md:h-96 md:w-96 relative border border-white/20 glow-effect bg-black/30">
              <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-gradient-primary">
                Portfolio
              </div>
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
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 animate-float"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white"
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
