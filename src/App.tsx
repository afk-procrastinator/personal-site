import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/hero/Hero';
import Works from './components/Works';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import MapVisualization from './components/MapVisualization';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import { Bookshelf } from './components/Bookshelf';

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
  return (
    <Router>
      <div className="min-h-screen bg-ctp-base text-ctp-text">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;