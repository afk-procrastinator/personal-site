import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-xl mx-auto aspect-square"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue via-ctp-sapphire to-ctp-sky rounded-[60px] rotate-6 blur-2xl opacity-30 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-ctp-sky via-ctp-sapphire to-ctp-blue rounded-[60px] -rotate-6 blur-2xl opacity-30 animate-pulse delay-75" />
      <div className="relative bg-gradient-to-r from-ctp-surface0 to-ctp-surface1 rounded-[60px] p-1.5 backdrop-blur-xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue to-ctp-sapphire rounded-[60px] opacity-10" />
        <img
          src="/profile.jpeg"
          alt="Spencer Michaels"
          className="w-full h-full object-cover rounded-[60px] shadow-inner"
        />
      </div>
    </motion.div>
  );
};

export default ProfileImage;