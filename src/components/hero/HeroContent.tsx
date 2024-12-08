import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Github } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const HeroContent: React.FC = () => {
  return (
    <div className="text-left max-w-3xl">
      <div className="text-5xl md:text-7xl font-bold text-ctp-text mb-8 relative">
        <style>
          {`
            .custom-type-cursor::after {
              content: '';
              display: inline-block;
              width: 2px;
              height: 1.2em;
              background-color: currentColor;
              margin-left: 4px;
              animation: blink 1s step-start infinite;
              vertical-align: text-top;
              position: relative;
              top: 0.1em;
            }
            @keyframes blink {
              50% { opacity: 0; }
            }
          `}
        </style>
        <TypeAnimation
          sequence={[
            500, // Initial delay
            "Hi, I'm Spencer Michaels",
          ]}
          speed={50}
          cursor={false}
          repeat={0}
          wrapper="span"
          className="custom-type-cursor"
        />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-lg md:text-xl text-ctp-subtext1 mb-10 leading-relaxed max-w-2xl"
      >
        A global citizen and interdisciplinary scholar committed to tackling the complex challenges posed by technological change. My mission is to leverage my skills and experiences to contribute to meaningful solutions that shape a more secure, equitable, and resilient future for our globalized world.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.5 }}
        className="flex gap-6"
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ctp-blue rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ctp-blue/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue/0 via-white/25 to-ctp-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <FileText className="w-6 h-6 text-ctp-base" />
          <span className="text-base font-medium text-ctp-base">Resume</span>
        </a>
        <a
          href="https://linkedin.com/in/spencer-michaels/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ctp-sapphire rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ctp-sapphire/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ctp-sapphire/0 via-white/25 to-ctp-sapphire/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <Linkedin className="w-6 h-6 text-ctp-base" />
          <span className="text-base font-medium text-ctp-base">LinkedIn</span>
        </a>
        <a
          href="https://github.com/afk-procrastinator"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ctp-teal rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ctp-teal/25"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-ctp-teal/0 via-white/25 to-ctp-teal/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
          <Github className="w-6 h-6 text-ctp-base" />
          <span className="text-base font-medium text-ctp-base">GitHub</span>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroContent;