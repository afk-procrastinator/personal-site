import React from 'react';
import { Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 text-ctp-subtext0 text-sm z-50">
      <a
        href="https://github.com/afk-procrastinator/personal-site"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ctp-surface0/50 backdrop-blur-sm opacity-75 hover:opacity-100 hover:bg-ctp-surface0/80 transition-all duration-200"
      >
        <Github size={16} />
        <span>I made this! See the code</span>
      </a>
    </div>
  );
};

export default Footer; 