import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  brightness: number;
  brightnessDelta: number;
  originalSize: number;
  speedX: number;
  speedY: number;
  originX: number;
  originY: number;
  lastMoved: number;
}

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const animationFrameRef = useRef<number>();
  const backgroundColorRef = useRef({ r: 17, g: 24, b: 39, a: 0.95 }); // Store background color

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const createStars = () => {
      starsRef.current = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 6000);
      
      for (let i = 0; i < numStars; i++) {
        const size = Math.random() * 3 + 1;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        starsRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          size,
          brightness: Math.random() * 0.5 + 0.3,
          brightnessDelta: (Math.random() - 0.5) * 0.03,
          originalSize: size,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: (Math.random() - 0.5) * 0.4,
          lastMoved: 0
        });
      }
    };

    const drawStars = () => {
      const now = Date.now();
      let anyStarMoving = false;

      // Update background color based on star movement
      starsRef.current.forEach(star => {
        const speed = Math.sqrt(star.speedX * star.speedX + star.speedY * star.speedY);
        if (speed > 0.1) {
          star.lastMoved = now;
          anyStarMoving = true;
        }
      });

      // Gradually restore background color if no stars are moving
      if (!anyStarMoving) {
        const targetAlpha = 0.95;
        const transitionSpeed = 0.02;
        backgroundColorRef.current.a += (targetAlpha - backgroundColorRef.current.a) * transitionSpeed;
      } else {
        // Make background more transparent during movement
        backgroundColorRef.current.a = 0.7;
      }

      // Create fade effect with current background color
      ctx.fillStyle = `rgba(30, 30, 46, ${backgroundColorRef.current.a})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw connections between nearby stars
      starsRef.current.forEach((star, i) => {
        starsRef.current.slice(i + 1).forEach(otherStar => {
          const dx = otherStar.x - star.x;
          const dy = otherStar.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(203, 166, 247, ${opacity})`; // Catppuccin mauve
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      // Update and draw stars
      starsRef.current.forEach(star => {
        // Basic movement
        star.x += star.speedX;
        star.y += star.speedY;

        // Mouse repulsion and return to origin behavior
        if (mouseRef.current.isActive) {
          const dx = mouseRef.current.x - star.x;
          const dy = mouseRef.current.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const repulsionRadius = 150;

          if (distance < repulsionRadius) {
            const force = (1 - distance / repulsionRadius) * 2; // Reduced force multiplier
            star.x -= (dx / distance) * force * 5; // Reduced movement multiplier
            star.y -= (dy / distance) * force * 5;
            star.size = star.originalSize * (1 + force * 0.5); // Reduced size change
            star.brightness = Math.min(1, star.brightness + 0.3);
          }
        }

        // Return to origin behavior
        const dxOrigin = star.originX - star.x;
        const dyOrigin = star.originY - star.y;
        const distanceToOrigin = Math.sqrt(dxOrigin * dxOrigin + dyOrigin * dyOrigin);
        
        if (distanceToOrigin > 1) { // Only apply if star is significantly away from origin
          const returnForce = 0.02; // Adjust this value to control return speed
          star.speedX += dxOrigin * returnForce * 0.01;
          star.speedY += dyOrigin * returnForce * 0.01;
        }

        // Apply friction to slow down movement
        star.speedX *= 0.98;
        star.speedY *= 0.98;

        // Speed limit
        const speed = Math.sqrt(star.speedX * star.speedX + star.speedY * star.speedY);
        if (speed > 2) {
          star.speedX = (star.speedX / speed) * 2;
          star.speedY = (star.speedY / speed) * 2;
        }

        // Wrap around edges with origin update
        if (star.x < 0) {
          star.x = canvas.width;
          star.originX = star.x;
        }
        if (star.x > canvas.width) {
          star.x = 0;
          star.originX = star.x;
        }
        if (star.y < 0) {
          star.y = canvas.height;
          star.originY = star.y;
        }
        if (star.y > canvas.height) {
          star.y = 0;
          star.originY = star.y;
        }

        // Update star brightness
        star.brightness += star.brightnessDelta;
        if (star.brightness > 0.8 || star.brightness < 0.2) {
          star.brightnessDelta *= -1;
        }

        // Draw star with improved glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Main star color
        const starColor = `rgba(186, 194, 222, ${star.brightness})`; // Catppuccin subtext0
        ctx.fillStyle = starColor;
        ctx.fill();

        // Enhanced glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 3
        );
        gradient.addColorStop(0, `rgba(203, 166, 247, ${star.brightness * 0.3})`); // Catppuccin mauve
        gradient.addColorStop(0.5, `rgba(203, 166, 247, ${star.brightness * 0.1})`);
        gradient.addColorStop(1, 'rgba(203, 166, 247, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections to mouse
      if (mouseRef.current.isActive) {
        starsRef.current.forEach(star => {
          const dx = mouseRef.current.x - star.x;
          const dy = mouseRef.current.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            
            // Create gradient for lines
            const gradient = ctx.createLinearGradient(
              star.x, star.y,
              mouseRef.current.x, mouseRef.current.y
            );
            gradient.addColorStop(0, `rgba(99, 102, 241, ${opacity})`); // Indigo color
            gradient.addColorStop(1, `rgba(99, 102, 241, ${opacity * 0.5})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(drawStars);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const newX = event.clientX - rect.left;
      const newY = event.clientY - rect.top;
      
      mouseRef.current = {
        x: newX,
        y: newY,
        isActive: true
      };
    };

    const handleMouseLeave = () => {
      console.log('Mouse leave event triggered'); // Debug log
      mouseRef.current.isActive = false;
    };

    // Initialize
    console.log('Initializing canvas and events'); // Debug log
    resizeCanvas();
    createStars();
    drawStars();

    // Event listeners - attach to window instead of canvas
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
    });

    // Log canvas dimensions
    console.log('Canvas dimensions:', {
      width: canvas.width,
      height: canvas.height,
      styleWidth: canvas.style.width,
      styleHeight: canvas.style.height
    });

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ 
        background: '#1e1e2e',
        cursor: 'crosshair'
      }}
    />
  );
};

export default InteractiveBackground; 