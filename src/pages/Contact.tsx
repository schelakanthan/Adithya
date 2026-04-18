// src/pages/ContactPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Sparkles,
  Clock,
  Globe,
  Download,
  FileText,
  Award,
  Briefcase,
  Code,
  GraduationCap,
  Languages,
  Heart,
  Calendar
} from 'lucide-react';
import Navbar from './Navbar';
import FloatingShapes from './components/FloatingShapes';

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+49 178 3564213",
      link: "tel:+491783564213",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "schelakanthan@gmail.com",
      link: "mailto:schelakanthan@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Grubenstraße 36, 66280, Sulzbach/Saar, Saarland, Germany",
      link: "https://maps.google.com/?q=Grubenstraße+36+66280+Sulzbach+Saarland+Germany",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      link: null,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/schelakanthan", color: "from-gray-600 to-gray-400", username: "@zujanshan" },
    { icon: Linkedin, name: "LinkedIn", url: "https://www.linkedin.com/in/zujanshan-cj/", color: "from-blue-600 to-blue-400", username: "Chelakanthan Zujanshan" },
    { icon: Twitter, name: "Twitter", url: "https://x.com/CjShayn", color: "from-sky-500 to-blue-500", username: "@zujanshan" },
    { icon: Globe, name: "Portfolio", url: "https://zujanshan.dev", color: "from-purple-500 to-pink-500", username: "zujanshan.dev" }
  ];

  const cvHighlights = [
    {
      category: "Education",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
      items: [
        "BSc (Hons) Software Engineering - First Class (GPA: 3.8/4.0)",
        "University of Bedfordshire (2022-2025)",
        "Bachelor of Sustainable Business & Technology",
        "Umwelt-Campus Birkenfeld, Germany (2025-Present)"
      ]
    },
    {
      category: "Work Experience",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
      items: [
        "Software Engineer at Aslan Ai (2024-2025) - Colombo, Sri Lanka",
        "Freelance Software Engineer (2022-Present) - Remote",
        "Developed scalable MERN, Next.js, and Python applications",
        "Managed product development and client communication"
      ]
    },
    {
      category: "Technical Skills",
      icon: Code,
      color: "from-green-500 to-emerald-500",
      items: [
        "React & Next.js, Python/Flask, MERN Stack",
        "Mobile App Development, Database Management",
        "Project Management, Leadership, Teamwork",
        "AWS, Docker, CI/CD Pipelines"
      ]
    },
    {
      category: "Languages",
      icon: Languages,
      color: "from-orange-500 to-red-500",
      items: [
        "English - Fluent",
        "Tamil - Fluent",
        "German - Basics"
      ]
    },
    {
      category: "Projects",
      icon: Award,
      color: "from-cyan-500 to-blue-500",
      items: [
        "GPT Physics - Online marketplace for UK curriculum notes",
        "AI Interview Mocker - AI-powered interview simulation",
        "Aditiya Shoes - E-commerce for shoe manufacturing",
        "Scalable API Architecture - High-performance RESTful APIs"
      ]
    },
    {
      category: "Volunteering",
      icon: Heart,
      color: "from-pink-500 to-rose-500",
      items: [
        "Yarl Salesforce Ohana (2020-2025)",
        "Community workshop participation",
        "Mentoring and tech events",
        "Salesforce ecosystem activities"
      ]
    }
  ];

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv.pdf"; // file from public folder
  link.download = "Zujanshan_CV.pdf";
  link.click();
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <FloatingShapes />
      <Navbar />
      
      <div className="relative z-10 pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 mb-4">
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have a project in mind? Looking for collaboration? I'd love to hear from you!
            </p>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center gap-2 shadow-lg shadow-purple-500/25 hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              Download Full CV
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Contact Information
                </h2>
              </motion.div>

              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} target={info.link.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" className="text-white font-medium hover:text-purple-400 transition">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Connect on Social</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={idx}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${social.color} opacity-80 group-hover:opacity-100 transition-all`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-medium text-sm">{social.name}</p>
                            <p className="text-gray-400 text-xs">{social.username}</p>
                          </div>
                        </div>
                        <span className="text-gray-500 group-hover:text-purple-400 transition">→</span>
                      </a>
                    );
                  })}
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-300 text-sm">Available for work</span>
                  </div>
                  <Calendar className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-gray-400 text-sm mt-3">
                  Open to freelance projects, collaborations, and full-time opportunities.
                </p>
              </motion.div>
            </div>

            {/* CV Highlights Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-purple-400" />
                  CV Highlights
                </h2>
              </motion.div>

              <div className="space-y-4">
                {cvHighlights.map((highlight, idx) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${highlight.color}`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{highlight.category}</h3>
                      </div>
                      <ul className="space-y-2">
                        {highlight.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-purple-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>

              {/* Download CV Button Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-6"
              >
                <button
                  onClick={handleDownloadCV}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all group"
                >
                  <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Download Complete CV (PDF)
                </button>
              </motion.div>
            </div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-white text-center mb-6">My Location</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d7.05!3d49.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b6b8d8f8f8f8%3A0x0!2zNDnCsDE4JzAwLjAiTiA3wrAwMycwMC4wIkU!5e0!3m2!1sen!2sde!4v1700000000000!5m2!1sen!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                  className="rounded-xl"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                📍 Grubenstraße 36, 66280, Sulzbach/Saar, Saarland, Germany
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;