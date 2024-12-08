import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FileText, Linkedin, Github } from 'lucide-react';

const Header = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }> = [];

    const colors = ['#f5c2e7', '#cba6f7', '#89b4fa', '#94e2d5'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(30, 30, 46, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.dx = -particle.dx;
        }
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.dy = -particle.dy;
        }

        // Connect particles
        particles.forEach((p2) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - p2.x, 2) + Math.pow(particle.y - p2.y, 2)
          );
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(205, 214, 244, ${1 - distance / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'transparent' }}
      />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-64 h-64"
          >
            <div className="absolute inset-0 bg-ctp-mauve rounded-full opacity-20 blur-xl animate-pulse" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-ctp-mauve">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Spencer Michaels"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <div className="flex-1 text-center md:text-left">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Spencer Michaels',
                1000,
              ]}
              wrapper="h1"
              className="text-4xl md:text-6xl font-bold text-ctp-text mb-4"
              speed={50}
              cursor={false}
            />
            <TypeAnimation
              sequence={[
                500,
                'A global citizen and interdisciplinary scholar committed to tackling the complex challenges posed by technological change.',
              ]}
              wrapper="p"
              className="text-xl text-ctp-subtext0 mb-8"
              speed={50}
              cursor={false}
            />
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a
                href="#"
                className="group relative flex items-center gap-2 px-6 py-3 bg-ctp-mauve hover:bg-ctp-pink transition-colors rounded-full text-ctp-base overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ctp-mauve to-ctp-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                <FileText size={20} className="relative z-10" />
                <span className="relative z-10">Resume</span>
              </a>
              <a
                href="#"
                className="group relative flex items-center gap-2 px-6 py-3 bg-ctp-blue hover:bg-ctp-sapphire transition-colors rounded-full text-ctp-base overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ctp-blue to-ctp-sapphire opacity-0 group-hover:opacity-100 transition-opacity" />
                <Linkedin size={20} className="relative z-10" />
                <span className="relative z-10">LinkedIn</span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-6 py-3 bg-ctp-teal hover:bg-ctp-sky transition-colors rounded-full text-ctp-base overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-ctp-teal to-ctp-sky opacity-0 group-hover:opacity-100 transition-opacity" />
                <Github size={20} className="relative z-10" />
                <span className="relative z-10">GitHub</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;