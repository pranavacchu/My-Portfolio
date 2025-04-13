
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import GradientBackground from '../components/GradientBackground';

const Home = () => {
  // Smooth scroll to section when URL has hash
  useEffect(() => {
    const { hash } = window.location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GradientBackground />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </motion.div>
  );
};

export default Home;
