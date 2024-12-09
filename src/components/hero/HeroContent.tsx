import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Linkedin, Github, BookOpen } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, text }) => (
  <div className="group relative">
    {children}
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 px-3 py-2 bg-ctp-surface0 text-ctp-text rounded-lg text-sm font-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-lg">
      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-ctp-surface0 rotate-45" />
      {text}
    </div>
  </div>
);

const HeroContent = () => {
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
        className="flex gap-6 flex-wrap"
      >
        <Tooltip text="View my resume">
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
        </Tooltip>

        <Tooltip text="Check out what I'm reading">
          <Link
            to="/bookshelf"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-ctp-mauve rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-ctp-mauve/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ctp-mauve/0 via-white/25 to-ctp-mauve/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <BookOpen className="w-6 h-6 text-ctp-base" />
            <span className="text-base font-medium text-ctp-base">Bookshelf</span>
          </Link>
        </Tooltip>

        <Tooltip text="Connect with me on LinkedIn">
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
        </Tooltip>

        <Tooltip text="View my projects on GitHub">
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
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default HeroContent;