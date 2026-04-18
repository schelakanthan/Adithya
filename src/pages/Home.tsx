// src/pages/HomePage.tsx - Fix imports at the top
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Database, 
  Users, 
  MessageSquare, 
  Zap, 
  Mail, 
  Star, 
  Award, 
  Globe, 
  Terminal, 
  Layers, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Download, 
  Eye, 
  ShoppingBag,
  Github, 
  Linkedin, 
  ArrowRight, 
  Cloud, 
  Cpu, 
  Shield,
  Calendar,
  Clock,
  CheckCircle,
  ExternalLink,
  Share2,
  Copy,
  Check,
  Menu,
  X,
  Home,
  User,
  Send,
  AlertCircle,
  FileText,

} from 'lucide-react';
import Navbar from './Navbar';
import FloatingShapes from './components/FloatingShapes';
import SkillCard3D from './components/SkillCard3D';
import ProjectCard3D from './components/ProjectCard3D';
import Hero3D from './components/Hero3D';
import { projects, skills, experiences } from './data/portfolioData';
import ExperienceTimeline from './components/ExperienceTimeline';
import jsPDF from "jspdf";

import pr from './im/profile.jpg'
const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

 
const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf"; // file from public folder
  link.download = "Zujanshan_CV.pdf";
  link.click();
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-x-hidden">
      <FloatingShapes />
      <Navbar />
      
      {/* Hero Section with 3D */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Hero3D />
        </motion.div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 text-center lg:text-left"
            >
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <div className="px-4 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-sm inline-flex items-center gap-2">
                  <Sparkles className="w-3 h-3" /> Available for opportunities
                </div>
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Chelakanthan{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Zujanshan
                </span>
              </h1>
              
              <div className="flex flex-wrap gap-3 mb-6 justify-center lg:justify-start">
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm border border-purple-400/30">Software Engineer</span>
                <span className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-300 text-sm border border-blue-400/30">First Class Honours</span>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-green-300 text-sm border border-green-400/30">GPA: 3.8/4.0</span>
              </div>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Results-driven Software Engineer with hands-on experience in AI-driven and full-stack development. 
                Focused on building high-performance and impactful technology solutions.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/projects">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25"
                  >
                    View Projects <Eye className="w-4 h-4" />
                  </motion.button>
                </Link>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  className="px-6 py-3 rounded-full border-2 border-purple-400 text-purple-300 font-medium hover:bg-purple-500/20 transition flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Download CV
                </motion.button>
              </div>
              
              <div className="mt-10 flex justify-center lg:justify-start gap-8">
                {[
                  { value: 5, label: "Projects", suffix: "+" },
                  { value: 3, label: "Years Exp", suffix: "+" },
                  { value: 10, label: "Technologies", suffix: "+" }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white">{stat.value}{stat.suffix}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-4 mt-8 justify-center lg:justify-start">
                <motion.a whileHover={{ y: -3 }} href="#" className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition">
                  {/* <Github className="w-5 h-5" /> */}
                </motion.a>
                <motion.a whileHover={{ y: -3 }} href="#" className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition">
                  {/* <Linkedin className="w-5 h-5" /> */}
                </motion.a>
                <motion.a whileHover={{ y: -3 }} href="#" className="p-2 rounded-full bg-white/10 text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 transition">
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Side - Profile Image with 3D effect */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="lg:w-1/2 flex justify-center perspective-1000"
            >
              <div 
                className="relative group"
                style={{
                  transform: `rotateY(${(mousePosition.x - window.innerWidth/2) * 0.01}deg) rotateX(${(mousePosition.y - window.innerHeight/2) * -0.01}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition duration-500 animate-spin-slow"></div>
                <div className="relative w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                    <img 
                      src={pr}
                      alt="Zujanshan"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Orbiting elements */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 bg-purple-500 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 120 + Date.now() * 0.05}deg) translateX(160px)`,
                      transition: 'transform 0.1s linear'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section with 3D Cards */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 mb-4">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Core Competencies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical & Professional Skills</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Constantly evolving toolkit to build robust, scalable solutions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <SkillCard3D key={idx} skill={skill} index={idx} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              { lang: "English", level: "Fluent", color: "cyan" },
              { lang: "Tamil", level: "Fluent", color: "green" },
              { lang: "German", level: "Basics", color: "yellow" }
            ].map((lang, idx) => (
              <div key={idx} className={`px-4 py-2 rounded-full bg-${lang.color}-500/10 border border-${lang.color}-400/30 text-${lang.color}-300 flex items-center gap-2`}>
                <Globe className="w-4 h-4" /> {lang.lang} ({lang.level})
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section with 3D Timeline */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 mb-4">
              <Briefcase className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm">Professional Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          </motion.div>
          
          <ExperienceTimeline experiences={experiences} />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-xl bg-purple-500/20">
                <Heart className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Volunteering · Yarl Salesforce Ohana</h3>
                <p className="text-gray-400 text-sm">2020 - 2025</p>
                <p className="text-gray-300 mt-2">Participated in community workshops, contributed to mentoring and tech events, engaged in Salesforce ecosystem activities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 mb-4">
              <Code className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">AI-driven platforms, scalable architectures, and real-world solutions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project, idx) => (
              <ProjectCard3D key={idx} project={project} index={idx} />
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/projects">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full border border-purple-400 text-purple-300 hover:bg-purple-500/20 transition flex items-center gap-2 mx-auto"
              >
                View All Projects <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Education & Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <GraduationCap className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-cyan-400 font-semibold">2025 - Present</p>
                  <p className="text-white font-medium">Umwelt-Campus Birkenfeld</p>
                  <p className="text-gray-400 text-sm">Bachelor of Sustainable Business & Technology (SBT)</p>
                </div>
                <div>
                  <p className="text-cyan-400 font-semibold">2022 - 2025 · First Class</p>
                  <p className="text-white font-medium">University of Bedfordshire</p>
                  <p className="text-gray-400 text-sm">BSc (Hons) Software Engineering and Computer Science · GPA: 3.8/4.0</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-500/20">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              </div>
              <p className="text-gray-300 mb-6">Open to collaborations, freelance opportunities, and innovative projects.</p>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center justify-center gap-2"
                >
                  Get In Touch <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 text-sm">© 2025 Chelakanthan Zujanshan · Software Engineer</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;