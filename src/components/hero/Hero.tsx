import React from 'react';
import InteractiveBackground from './InteractiveBackground';
import ProfileImage from './ProfileImage';
import HeroContent from './HeroContent';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-ctp-base overflow-hidden">
      <div className="absolute inset-0">
        <InteractiveBackground />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <ProfileImage />
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 -m-12">
                {/* Core blur area */}
                <div className="absolute inset-[20%] backdrop-blur-md" />
                {/* Intermediate blur layers */}
                <div className="absolute inset-[15%] backdrop-blur-[8px]" />
                <div className="absolute inset-[10%] backdrop-blur-[6px]" />
                <div className="absolute inset-[5%] backdrop-blur-[4px]" />
                {/* Edge blur */}
                <div className="absolute inset-0 backdrop-blur-[2px]" />
              </div>
              <div className="relative">
                <HeroContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;