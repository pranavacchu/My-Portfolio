import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl mb-4 inline-block text-gradient-primary mx-0 font-bold px-0 py-[4px] md:text-4xl"
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-accent mx-auto rounded-full mb-8" 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Here are some of my recent projects that showcase my skills and experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalInfo.projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden group relative transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Project Header */}
              <div className="relative h-48 bg-gradient-to-br from-cyan-600/20 to-blue-600/10 group-hover:from-cyan-600/30 group-hover:to-blue-600/20 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative z-10 text-2xl font-bold text-gradient text-center px-4 h-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">{project.title}</h3>
              </div>
              
              {/* Project Content */}
              <div className="p-6 relative z-10 bg-gradient-to-b from-transparent to-black/5 group-hover:to-black/10 transition-colors duration-500">
                <p className="text-gray-300 mb-4 transform group-hover:translate-y-[-2px] transition-transform duration-500">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-white/10 text-white px-3 py-1 rounded-full transition-all duration-300 
                               group-hover:bg-cyan-500/20 hover:bg-cyan-500/30 hover:scale-105 hover:shadow-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="mt-6 flex justify-between items-center">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-accent hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      View on GitHub
                    </a>
                  )}
                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-10 h-10 rounded-full bg-white/5 hover:bg-cyan-500/20 flex items-center justify-center 
                                 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 transition-transform duration-300 group-hover:rotate-3" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href={personalInfo.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 rounded-full border border-cyan-500/20 hover:border-cyan-400/50 text-white font-medium 
                     transition-all duration-500 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 
                     hover:scale-105 hover:px-10"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
