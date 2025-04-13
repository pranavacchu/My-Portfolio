
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Framer Motion', level: 70 },
  ];

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
            <div className="glass-card rounded-2xl p-1">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-secondary to-accent/20 rounded-xl flex items-center justify-center">
                  <div className="text-5xl font-bold text-white flex items-center justify-center h-full">
                    <span className="text-gradient">Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-white">Front-end Developer & UI/UX Enthusiast</h3>
            <p className="text-gray-300">
              I'm a passionate developer with a keen eye for design and a love for creating smooth, 
              interactive digital experiences. With several years of experience in web development, 
              I specialize in building modern applications using React and other cutting-edge technologies.
            </p>
            <p className="text-gray-300">
              My approach combines technical expertise with creative problem-solving to deliver solutions 
              that are both functional and visually appealing. I'm constantly exploring new technologies 
              and techniques to enhance my skills.
            </p>
            
            <div className="mt-4">
              <h4 className="text-xl font-semibold mb-4 text-white">My Skills</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
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
      </div>
    </section>
  );
};

export default AboutSection;
