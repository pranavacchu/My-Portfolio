
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from './Home';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Home />
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
};

export default Index;
