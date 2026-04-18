// components/ProjectCard3D.tsx
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Star, Layers, ShoppingBag } from 'lucide-react';

interface ProjectCard3DProps {
  project: {
    id: number;
    title: string;
    description: string;
    tech: string[];
    gradient: string;
    icon: string;
    image?: string;
  };
  index: number;
}

const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 400, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 400, damping: 30 });
  const scale = useSpring(1, { stiffness: 400, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
      scale.set(1.02);
    }
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };
  
  const IconComponent = project.icon === 'shopping' ? ShoppingBag : Layers;
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateY: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/project/${project.id}`}>
        <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 cursor-pointer overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-purple-600/0 to-purple-600/10 group-hover:translate-x-full transition-transform duration-700"></div>
          <div className="flex justify-between items-start mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">
                {tech}
              </span>
            ))}
            {project.tech.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-700 text-gray-300">+{project.tech.length - 3}</span>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Featured Project</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard3D;