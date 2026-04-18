// pages/ProjectDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 

  ExternalLink, 
  Calendar, 
  Star, 
  Users,
  Cpu,
  Shield,
  Zap,
  Clock,
  CheckCircle,
  Layers,
  ShoppingBag,
  Heart,
  Copy,
  Check
} from 'lucide-react';
import Navbar from './Navbar';
import FloatingShapes from './components/FloatingShapes';
import { projects } from './data/portfolioData';
import { Project } from './data/portfolioData';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(id || '0'));
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300">Loading project details...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Navbar />
        <div className="pt-32 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-6xl mb-6">🔍</div>
            <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-300 mb-8">The project you're looking for doesn't exist or has been moved.</p>
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  const getIcon = () => {
    if (project.icon === 'shopping') return ShoppingBag;
    return Layers;
  };

  const IconComponent = getIcon();

  const stats = [
    { label: "Development Time", value: "3 months", icon: Clock, color: "blue" },
    { label: "Team Size", value: "2-3 developers", icon: Users, color: "green" },
    { label: "Tech Stack", value: `${project.tech.length}+ technologies`, icon: Cpu, color: "purple" },
    { label: "Performance", value: "99.9% uptime", icon: Zap, color: "orange" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FloatingShapes />
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 md:pt-32 pb-16 px-6 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/projects')}
            className="mb-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${project.gradient} mb-6`}>
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm border border-white/10 hover:border-purple-400/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full border-2 border-gray-600 text-gray-300 font-medium hover:border-purple-400 hover:text-white transition flex items-center gap-2"
                >
                 
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-2xl opacity-40 group-hover:opacity-70 transition duration-500" />
                <div className="relative bg-gray-800 rounded-2xl overflow-hidden border border-white/10">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                    <IconComponent className="w-24 h-24 text-white/30" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>Featured Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Statistics */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              const colorMap: Record<string, string> = {
                blue: "from-blue-500/10 to-blue-500/5 border-blue-500/20 text-blue-400",
                green: "from-green-500/10 to-green-500/5 border-green-500/20 text-green-400",
                purple: "from-purple-500/10 to-purple-500/5 border-purple-500/20 text-purple-400",
                orange: "from-orange-500/10 to-orange-500/5 border-orange-500/20 text-orange-400"
              };
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${colorMap[stat.color]} rounded-2xl p-4 text-center border hover:scale-105 transition-transform duration-300`}
                >
                  <StatIcon className={`w-6 h-6 ${colorMap[stat.color].split(' ')[2]} mx-auto mb-2`} />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              What makes this project stand out from the rest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Project
            </motion.a>
            
            <motion.a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 font-medium hover:border-purple-400 hover:text-white transition flex items-center gap-2"
            >
             
              Source Code
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLike}
              className={`px-8 py-4 rounded-full border-2 transition flex items-center gap-2 ${
                liked 
                  ? 'border-pink-500 bg-pink-500/20 text-pink-400' 
                  : 'border-gray-600 text-gray-300 hover:border-pink-500 hover:text-pink-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${liked ? 'fill-pink-500' : ''}`} />
              {liked ? 'Liked' : 'Like Project'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyLink}
              className="px-8 py-4 rounded-full border-2 border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition flex items-center gap-2"
            >
              {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              {copied ? 'Copied!' : 'Share'}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              You Might <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Also Like</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore more of my featured projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.filter(p => p.id !== project.id).slice(0, 3).map((relatedProject, idx) => {
              const RelatedIcon = relatedProject.icon === 'shopping' ? ShoppingBag : Layers;
              return (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link to={`/project/${relatedProject.id}`}>
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-400/50 transition-all group cursor-pointer">
                      <div className={`p-2 rounded-xl bg-gradient-to-br ${relatedProject.gradient} w-10 h-10 flex items-center justify-center mb-3`}>
                        <RelatedIcon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">{relatedProject.title}</h3>
                      <p className="text-gray-400 text-sm">{relatedProject.description.substring(0, 80)}...</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;