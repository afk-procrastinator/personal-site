import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/hero/Hero';
import Works from './components/Works';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import MapVisualization from './components/MapVisualization';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import { Bookshelf } from './components/Bookshelf';

const LoadingAnimation = () => (
  <div className="fixed inset-0 bg-ctp-base flex items-center justify-center z-50">
    <motion.div 
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="w-12 h-12 border-4 border-ctp-surface0 border-t-ctp-blue rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p 
        className="text-ctp-subtext1 text-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  </div>
);

function HomePage() {
  return (
    <>
      <Hero />
      <div className="relative z-10">
        <Works />
        <Experience />
        <Expertise />
        <Skills />
        <MapVisualization />
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate checking if all resources are loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Minimum loading time of 1 second
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-ctp-base text-ctp-text">
        <AnimatePresence>
          {isLoading && <LoadingAnimation />}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/bookshelf" element={<Bookshelf />} />
          </Routes>
          <Footer />
        </motion.div>
      </div>
    </Router>
  );
}

export default App;