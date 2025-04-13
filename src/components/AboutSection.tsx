
import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/personalInfo';

// Skill icon component with tooltip
const SkillIcon = ({ skill, index }: { skill: string, index: number }) => {
  // Icon mappings for skills
  const getSkillIcon = (skill: string) => {
    const lowerSkill = skill.toLowerCase();
    
    if (lowerSkill.includes('html')) return renderIcon('html', 'code');
    if (lowerSkill.includes('css')) return renderIcon('css', 'code');
    if (lowerSkill.includes('javascript')) return renderIcon('javascript', 'code');
    if (lowerSkill.includes('react')) return renderIcon('react', 'code');
    if (lowerSkill.includes('python')) return renderIcon('python', 'code');
    if (lowerSkill.includes('java')) return renderIcon('java', 'code');
    if (lowerSkill.includes('c++') || lowerSkill === 'c') return renderIcon('c/c++', 'code');
    if (lowerSkill.includes('node')) return renderIcon('node.js', 'server');
    if (lowerSkill.includes('sql') || lowerSkill.includes('mysql')) return renderIcon('sql/mysql', 'database');
    if (lowerSkill.includes('aws') || lowerSkill.includes('cloud')) return renderIcon('aws/cloud', 'cloud');
    if (lowerSkill.includes('linux')) return renderIcon('linux', 'terminal');
    if (lowerSkill.includes('windows')) return renderIcon('windows', 'monitor');
    if (lowerSkill.includes('deep') || lowerSkill.includes('ai') || lowerSkill.includes('machine')) return renderIcon('ai/ml', 'brain');
    if (lowerSkill.includes('photoshop') || lowerSkill.includes('canva')) return renderIcon(skill, 'image');
    if (lowerSkill.includes('kafka') || lowerSkill.includes('spark') || lowerSkill.includes('hadoop')) return renderIcon(skill, 'database');
    if (lowerSkill.includes('ssl') || lowerSkill.includes('tcp')) return renderIcon(skill, 'shield');
    
    // Default icon
    return renderIcon(skill, 'circle');
  };
  
  const renderIcon = (skillName: string, iconName: string) => {
    return (
      <>
        <div className="text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {iconName === 'code' && <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />}
            {iconName === 'brain' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992Z" />}
            {iconName === 'database' && <path strokeLinecap="round" strokeLinejoin="round" d="M20 7h-3m-3 0H7m7 0v3m0-6v6m-3-3H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3m-7 3h7m-7 3h7m-7 3h7" />}
            {iconName === 'server' && <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M5 12a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2" />}
            {iconName === 'terminal' && <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />}
            {iconName === 'cloud' && <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />}
            {iconName === 'image' && <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />}
            {iconName === 'monitor' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />}
            {iconName === 'shield' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />}
            {iconName === 'circle' && <circle cx="12" cy="12" r="10" />}
          </svg>
        </div>
        <span className="text-white">{skillName}</span>
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.05 * index }}
      className="glass-card p-3 flex items-center gap-3 rounded-lg hover:shadow-lg hover:shadow-cyan-800/10 cursor-pointer transition-all hover:scale-105"
    >
      {getSkillIcon(skill)}
    </motion.div>
  );
};

const AboutSection = () => {
  // Flatten all skills into a single array for the skills grid
  // And remove duplicates
  const allSkills = [...new Set(personalInfo.skills.flatMap(skillCategory => 
    skillCategory.items
  ))];

  return (
    <section id="about" className="py-20 md:py-32 relative z-10">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {allSkills.map((skill, index) => (
                  <SkillIcon key={index} skill={skill} index={index} />
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
                className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-cyan-800/10 transition-all"
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
                className="bg-white/5 p-4 rounded-lg border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-800/10"
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
