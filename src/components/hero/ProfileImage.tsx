import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-xl mx-auto aspect-square"
    >
      <style>
        {`
          @keyframes slowPulse {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.1; }
          }
          .animate-slow-pulse {
            animation: slowPulse 4s ease-in-out infinite;
          }
        `}
      </style>
      <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue via-ctp-sapphire to-ctp-sky rounded-[40px] sm:rounded-[60px] rotate-6 blur-xl animate-slow-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-ctp-sky via-ctp-sapphire to-ctp-blue rounded-[40px] sm:rounded-[60px] -rotate-6 blur-xl animate-slow-pulse delay-[2000ms]" />
      <div className="relative bg-gradient-to-r from-ctp-surface0 to-ctp-surface1 rounded-[40px] sm:rounded-[60px] p-1.5 backdrop-blur-xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue to-ctp-sapphire rounded-[40px] sm:rounded-[60px] opacity-5" />
        <img
          src="/profile.jpeg"
          alt="Spencer Michaels"
          className="w-full h-full object-cover rounded-[40px] sm:rounded-[60px] shadow-inner"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;