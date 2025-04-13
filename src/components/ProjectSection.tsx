import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';
const ProjectSection = () => {
  return <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }} className="text-3xl font-bold mb-4 inline-block text-gradient-primary px-0 py-0 mx-0 md:text-3xl">
            My Projects
          </motion.h2>
          <motion.div className="h-1 w-20 bg-accent mx-auto rounded-full mb-8" initial={{
          width: 0
        }} whileInView={{
          width: 80
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}></motion.div>
          <motion.p className="text-gray-300 max-w-2xl mx-auto" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            Here are some of my recent projects that showcase my skills and experience.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalInfo.projects.map((project, index) => <motion.div key={index} className="glass-card rounded-xl overflow-hidden glow-effect group" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1 * index
        }}>
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-gradient text-center px-4">{project.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => <span key={i} className="text-xs bg-white/10 text-white px-3 py-1 rounded-full transition-colors group-hover:bg-primary/20">
                      {tag}
                    </span>)}
                </div>
                <div className="mt-6 flex justify-between items-center">
                  {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-white transition-colors">
                      View on GitHub
                    </a>}
                  <div className="flex space-x-2">
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>}
                  </div>
                </div>
              </div>
            </motion.div>)}
        </div>
        
        <div className="mt-12 text-center">
          <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full border border-white/20 hover:border-accent/50 text-white font-medium transition-all hover:bg-white/5">
            See More on GitHub
          </a>
        </div>
      </div>
    </section>;
};
export default ProjectSection;