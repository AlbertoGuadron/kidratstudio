'use client'

import React, { useState, useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  shape: string;
  rotation: number;
  bounceDirection: number;
}

interface Explosion {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Pixel {
  id: number;
  x: number;
  y: number;
  active: boolean;
  intensity: number;
}

const KidRatStudioBanner = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [powerLevel, setPowerLevel] = useState<number>(0);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const [gameScore, setGameScore] = useState<number>(0);
  const [comboMultiplier, setComboMultiplier] = useState<number>(1);
  const [pixelGrid, setPixelGrid] = useState<Pixel[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Detectar si es móvil después del primer render
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generar partículas estilo 8-bit
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 25; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 4,
          speed: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          color: ['#ffffff', '#4f4f4f'][Math.floor(Math.random() * 2)],
          shape: ['square', 'diamond', 'triangle'][Math.floor(Math.random() * 3)],
          rotation: Math.random() * 360,
          bounceDirection: Math.random() > 0.5 ? 1 : -1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Generar grid de píxeles
  useEffect(() => {
    const generatePixelGrid = () => {
      const grid = [];
      for (let i = 0; i < 50; i++) {
        grid.push({
          id: i,
          x: (i % 10) * 10 + 5,
          y: Math.floor(i / 10) * 20 + 10,
          active: false,
          intensity: 0,
        });
      }
      setPixelGrid(grid);
    };

    generatePixelGrid();
  }, []);

  // Power-up system
  useEffect(() => {
    if (!isHovered) {
      setPowerLevel(0);
      setGameScore(0);
      setComboMultiplier(1);
      return;
    }

    const powerInterval = setInterval(() => {
      setPowerLevel(prev => Math.min(prev + 10, 100));
      setGameScore(prev => prev + (10 * comboMultiplier));
      setComboMultiplier(prev => Math.min(prev + 0.1, 5));
    }, 200);

    return () => clearInterval(powerInterval);
  }, [isHovered, comboMultiplier]);

  // Animaciones de partículas estilo arcade
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prevParticles =>
        prevParticles.map(particle => ({
          ...particle,
          x: (particle.x + particle.speed * particle.bounceDirection) % 100,
          y: particle.y + Math.sin(Date.now() * 0.005 + particle.id) * 2,
          rotation: particle.rotation + (isHovered ? 5 : 1),
          bounceDirection: particle.x > 95 || particle.x < 5 ? -particle.bounceDirection : particle.bounceDirection,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Explosiones al hacer clic
  const createExplosion = (x: number, y: number) => {
    const newExplosion: Explosion = {
      id: Date.now(),
      x,
      y,
      size: 0,
      opacity: 1,
    };
    
    setExplosions(prev => [...prev, newExplosion]);
    
    setTimeout(() => {
      setExplosions(prev => prev.filter(exp => exp.id !== newExplosion.id));
    }, 500);
  };

  // Manejar clics/toques
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return;
    
    const rect = bannerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    createExplosion(x, y);
    setGameScore(prev => prev + (50 * comboMultiplier));
    setComboMultiplier(prev => Math.min(prev + 0.5, 10));
    
    // Vibración para móvil
    if (navigator.vibrate) {
      navigator.vibrate([50, 30, 50]);
    }
  };

  // Seguir el mouse
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bannerRef.current) return;
    
    const rect = bannerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x, y });
    
    // Activar píxeles cercanos
    setPixelGrid(prev => prev.map(pixel => {
      const distance = Math.sqrt(Math.pow(pixel.x - x, 2) + Math.pow(pixel.y - y, 2));
      return {
        ...pixel,
        active: distance < 15,
        intensity: Math.max(0, 1 - distance / 20),
      };
    }));
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 2000);
  };

  return (
    <div 
      ref={bannerRef}
      className="relative overflow-hidden bg-black border-4 border-gray-800 rounded-xl shadow-2xl cursor-crosshair select-none transition-all duration-300 mt-32"
      style={{ 
        height: isMobile ? '250px' : '350px',
        backgroundColor: isHovered ? '#0a0a0a' : '#000000',
        borderColor: isHovered ? '#ffffff' : '#4f4f4f',
        boxShadow: isHovered 
          ? '0 0 40px rgba(255, 255, 255, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)' 
          : '0 0 20px rgba(0, 0, 0, 0.8)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* HUD Gaming */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 font-mono text-xs text-white z-10">
        <div className="bg-black bg-opacity-70 p-1 sm:p-2 rounded border border-gray-600">
          <div className="text-xs sm:text-sm">SCORE: {gameScore.toLocaleString()}</div>
          <div className="text-xs sm:text-sm">COMBO: x{comboMultiplier.toFixed(1)}</div>
          <div className="mt-1">
            <div className="text-gray-400 text-xs">POWER</div>
            <div className="w-16 sm:w-20 h-1 sm:h-2 bg-gray-700 rounded overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-200"
                style={{ width: `${powerLevel}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid de píxeles reactivo */}
      {pixelGrid.map((pixel) => (
        <div
          key={pixel.id}
          className="absolute w-2 h-2 transition-all duration-100"
          style={{
            left: `${pixel.x}%`,
            top: `${pixel.y}%`,
            backgroundColor: pixel.active ? '#ffffff' : '#4f4f4f',
            opacity: pixel.active ? pixel.intensity : 0.3,
            transform: pixel.active ? `scale(${1 + pixel.intensity})` : 'scale(0.5)',
            boxShadow: pixel.active ? `0 0 10px rgba(255, 255, 255, ${pixel.intensity})` : 'none',
          }}
        />
      ))}

      {/* Partículas gaming */}
      {particles.map((particle) => {
        const getShape = () => {
          switch (particle.shape) {
            case 'diamond':
              return 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)';
            case 'triangle':
              return 'polygon(50% 0%, 0% 100%, 100% 100%)';
            default:
              return 'none';
          }
        };

        return (
          <div
            key={particle.id}
            className="absolute transition-all duration-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              opacity: isHovered ? particle.opacity : particle.opacity * 0.5,
              transform: `rotate(${particle.rotation}deg) scale(${isHovered ? 1.5 : 1})`,
              clipPath: particle.shape !== 'square' ? getShape() : 'none',
              boxShadow: isHovered ? `0 0 15px ${particle.color}` : 'none',
            }}
          />
        );
      })}

      {/* Explosiones */}
      {explosions.map((explosion) => (
        <div
          key={explosion.id}
          className="absolute pointer-events-none"
          style={{
            left: `${explosion.x}%`,
            top: `${explosion.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white"
              style={{
                transform: `rotate(${i * 45}deg) translateX(${20 + Math.sin(Date.now() * 0.01) * 10}px)`,
                opacity: Math.max(0, 1 - (Date.now() % 500) / 500),
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            />
          ))}
        </div>
      ))}

      {/* Texto principal con efecto gaming */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white transition-all duration-200 transform px-4"
          style={{
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
            transform: isHovered 
              ? `scale(1.05) perspective(1000px) rotateX(${Math.sin(Date.now() * 0.003) * 5}deg) rotateY(${Math.cos(Date.now() * 0.002) * 5}deg)` 
              : 'scale(1)',
            textShadow: isHovered 
              ? `0 0 20px rgba(255, 255, 255, 0.8), 
                 1px 1px 0px #4f4f4f, 
                 2px 2px 0px #2f2f2f,
                 3px 3px 0px #1f1f1f` 
              : '1px 1px 0px #4f4f4f',
            filter: powerLevel > 50 ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))' : 'none',
          }}
        >
          {['K', 'i', 'd', ' ', 'R', 'a', 't', ' ', 'S', 't', 'u', 'd', 'i', 'o'].map((letter, index) => (
            <span
              key={index}
              className="inline-block transition-all duration-200"
              style={{
                transform: isHovered 
                  ? `translateY(${Math.sin(Date.now() * 0.006 + index * 0.5) * (isMobile ? 8 : 15)}px) 
                     translateX(${Math.cos(Date.now() * 0.004 + index * 0.3) * (isMobile ? 2 : 5)}px)
                     rotate(${Math.sin(Date.now() * 0.005 + index) * 3}deg)` 
                  : 'none',
                color: powerLevel > 75 && index % 2 === 0 ? '#ffffff' : '#ffffff',
                textShadow: powerLevel > 75 && index % 2 === 0 
                  ? '0 0 30px rgba(255, 255, 255, 1)' 
                  : 'inherit',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>
      </div>

      {/* Elementos decorativos gaming */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
        <div 
          className="w-4 h-4 sm:w-8 sm:h-8 bg-white transition-all duration-300"
          style={{
            transform: isHovered ? 'rotate(45deg) scale(1.5)' : 'rotate(0deg) scale(1)',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            boxShadow: isHovered ? '0 0 20px rgba(255, 255, 255, 0.8)' : 'none',
          }}
        />
      </div>

      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
        <div 
          className="w-6 h-6 sm:w-10 sm:h-10 border border-white sm:border-2 transition-all duration-300"
          style={{
            transform: isHovered ? 'rotate(-180deg) scale(1.3)' : 'rotate(0deg) scale(1)',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            boxShadow: isHovered ? '0 0 15px rgba(255, 255, 255, 0.6)' : 'none',
          }}
        />
      </div>

      {/* Líneas de energía */}
      <div className="absolute inset-0 pointer-events-none">
        {isHovered && (
          <>
            <div 
              className="absolute w-full h-0.5 bg-white opacity-60"
              style={{
                top: '25%',
                animation: 'pulse 0.5s infinite',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            />
            <div 
              className="absolute w-full h-0.5 bg-white opacity-60"
              style={{
                bottom: '25%',
                animation: 'pulse 0.5s infinite 0.25s',
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
              }}
            />
          </>
        )}
      </div>

      {/* Indicador gaming */}
      <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 font-mono text-xs text-gray-400">
        <span className="hidden sm:inline">
          {isHovered ? '[GAMING MODE ACTIVE]' : '[CLICK TO PLAY]'}
        </span>
        <span className="sm:hidden">
          {isHovered ? '[ACTIVE]' : '[TAP]'}
        </span>
      </div>

      {/* Cursor personalizado */}
      <div 
        className="absolute pointer-events-none transition-all duration-100"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {isHovered && (
          <div className="w-6 h-6 border-2 border-white rounded-full animate-spin">
            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default KidRatStudioBanner;