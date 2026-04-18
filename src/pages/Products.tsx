// pages/ProjectsPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ProjectCard3D from './components/ProjectCard3D';
import FloatingShapes from './components/FloatingShapes';
import { projects } from './data/portfolioData';

const ProjectsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FloatingShapes />
      <Navbar />
      
      <div className="pt-28 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore my latest work in AI, full-stack development, and e-commerce solutions
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard3D key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;