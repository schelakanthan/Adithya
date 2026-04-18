// components/FloatingShapes.tsx
import React from 'react';
import { motion } from 'framer-motion';

const FloatingShapes: React.FC = () => {
  const shapes = [
    { id: 1, type: 'circle', size: 300, x: 10, y: 15, duration: 25, delay: 0, gradient: 'linear-gradient(135deg, #a855f7, #ec4899)' },
    { id: 2, type: 'square', size: 250, x: 75, y: 60, duration: 30, delay: 2, gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)' },
    { id: 3, type: 'circle', size: 200, x: 50, y: 40, duration: 28, delay: 1, gradient: 'linear-gradient(135deg, #10b981, #059669)' },
    { id: 4, type: 'square', size: 120, x: 20, y: 70, duration: 18, delay: 3, gradient: 'linear-gradient(135deg, #f59e0b, #ea580c)' },
    { id: 5, type: 'circle', size: 100, x: 85, y: 25, duration: 22, delay: 5, gradient: 'linear-gradient(135deg, #ef4444, #ec4899)' },
    { id: 6, type: 'square', size: 90, x: 65, y: 80, duration: 20, delay: 4, gradient: 'linear-gradient(135deg, #6366f1, #a855f7)' },
    { id: 7, type: 'circle', size: 60, x: 15, y: 85, duration: 15, delay: 7, gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)' },
    { id: 8, type: 'square', size: 50, x: 90, y: 45, duration: 17, delay: 8, gradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)' },
    { id: 9, type: 'circle', size: 45, x: 55, y: 95, duration: 19, delay: 9, gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
  ];

  const renderShape = (shape: typeof shapes[0]) => {
    const shapeStyles: React.CSSProperties = {
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      left: `${shape.x}%`,
      top: `${shape.y}%`,
      position: 'absolute',
      pointerEvents: 'none',
      background: shape.gradient,
      opacity: 0.15,
      borderRadius: shape.type === 'circle' ? '50%' : '1rem',
      filter: 'blur(40px)'
    };
    
    return (
      <motion.div
        key={shape.id}
        style={shapeStyles}
        animate={{
          y: ['0%', '-5%', '0%', '5%', '0%'],
          x: ['0%', '3%', '0%', '-3%', '0%'],
          rotate: [0, 360],
          scale: [1, 1.05, 1, 0.95, 1]
        }}
        transition={{
          duration: shape.duration,
          delay: shape.delay,
          repeat: Infinity,
          ease: 'easeInOut',
          rotate: { duration: shape.duration * 2, ease: 'linear' }
        }}
      />
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated gradient orbs */}
      <motion.div 
        style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          background: '#a855f7',
          opacity: 0.1,
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: '#ec4899',
          opacity: 0.1,
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '256px',
          height: '256px',
          borderRadius: '50%',
          background: '#06b6d4',
          opacity: 0.08,
          filter: 'blur(80px)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -60, 0],
          y: [0, -60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />

      {/* Floating shapes */}
      {shapes.map(shape => renderShape(shape))}
      
      {/* Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            borderRadius: '50%',
            background: 'white',
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            delay: Math.random() * 10,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;