
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gradient mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {personalInfo.summary.split('.')[0]}.
            </p>
            <div className="flex space-x-4">
              <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-accent transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">{personalInfo.contact.email}</li>
              <li className="text-gray-300">{personalInfo.contact.phone}</li>
              <li className="text-gray-300">{personalInfo.contact.location}</li>
            </ul>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="text-gray-400 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
