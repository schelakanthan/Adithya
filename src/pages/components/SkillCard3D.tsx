// src/pages/components/SkillCard3D.tsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCard3DProps {
  skill: {
    skill: string;
    level: number;
    icon: LucideIcon;
    color: string;
    description: string;
  };
  index: number;
}

const SkillCard3D: React.FC<SkillCard3DProps> = ({ skill, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    }
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const IconComponent = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-3">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{skill.skill}</h3>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
      <p className="text-gray-300 text-sm mt-2">{skill.level}% proficiency</p>
      <p className="text-gray-400 text-xs mt-3">{skill.description}</p>
    </motion.div>
  );
};

export default SkillCard3D;