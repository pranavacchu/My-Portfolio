import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner";
import { personalInfo } from '../data/personalInfo';

// Declare global window type
declare global {
  interface Window {
    sendEmail: (formData: {
      name: string;
      email: string;
      subject: string;
      message: string;
    }) => Promise<{ status: number }>;
  }
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    // Load EmailJS script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    document.body.appendChild(script);

    // Load our custom script
    const customScript = document.createElement('script');
    customScript.src = '/script.js';
    customScript.async = true;
    document.body.appendChild(customScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(customScript);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (typeof window.sendEmail === 'function') {
        const response = await window.sendEmail(formData);
        
        if (response.status === 200) {
          toast.success("Message sent successfully!");
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      } else {
        toast.error("Email service not initialized. Please try refreshing the page and try again.");
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error("Failed to send message. Please try refreshing the page and try again.");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gradient-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Contact Information</h3>
            <p className="text-gray-300">
              Fill out the form or reach out directly through the following contact information.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Phone</h4>
                  <p className="text-gray-400">{personalInfo.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">{personalInfo.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">{personalInfo.contact.location}</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a href={personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary/20 flex items-center justify-center transition-colors text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/50 transition-colors"
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-medium glow-effect transition-all hover:shadow-lg hover:shadow-primary/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
