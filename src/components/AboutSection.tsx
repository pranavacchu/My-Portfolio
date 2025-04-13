
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

const AboutSection = () => {
  // Take the first 5 skills categories for the skill bars
  const topSkills = personalInfo.skills.slice(0, 5).flatMap(skillCategory => 
    skillCategory.items.slice(0, 2).map((item, i) => ({
      name: item,
      level: 90 - (i * 5) // Give varying levels for visual interest
    }))
  ).slice(0, 5);

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="h-1 w-20 bg-accent mx-auto rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card rounded-2xl p-6 space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              {personalInfo.education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-1 border-l-2 border-accent pl-4 pb-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <h4 className="text-lg font-semibold text-white">{edu.institution}</h4>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-accent">{edu.grade}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white">Computer Science Student & Developer</h3>
            <p className="text-gray-300">
              {personalInfo.summary}
            </p>
            
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-4 text-white">My Skills</h4>
              <div className="space-y-4">
                {topSkills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary/50 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">My Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInfo.experience.map((exp, index) => (
              <motion.div 
                key={index} 
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">{exp.role}</h4>
                {exp.period && <p className="text-accent mb-4">{exp.period}</p>}
                <ul className="list-disc list-inside space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-gray-300 text-sm">{resp}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalInfo.achievements.map((achievement, index) => (
              <motion.div 
                key={index} 
                className="bg-white/5 p-4 rounded-lg border border-white/10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
