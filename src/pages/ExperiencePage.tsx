// src/pages/ExperiencePage.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Award,
  Code,
  Users,
  Rocket,
  Coffee,
  Heart,
  Star,
  Trophy,
  Zap
} from 'lucide-react';
import Navbar from './Navbar';
import FloatingShapes from './components/FloatingShapes';

const ExperiencePage: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Aslan Ai",
      location: "Colombo, Sri Lanka",
      period: "2024 - 2025",
      type: "Full-time",
      description: "Developed scalable applications and led technical initiatives for AI-driven products.",
      responsibilities: [
        "Developed scalable applications using MERN, Next.js, and Python",
        "Managed product development lifecycle and client communication",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 40%",
        "Collaborated with cross-functional teams to deliver features on time"
      ],
      achievements: [
        "Successfully delivered 5+ major features",
        "Improved application performance by 35%",
        "Recognized as Top Performer for Q4 2024"
      ],
      technologies: ["React", "Node.js", "Python", "MongoDB", "AWS"],
      icon: Code,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Freelance Software Engineer",
      company: "Self-Employed",
      location: "Remote",
      period: "2022 - Present",
      type: "Freelance",
      description: "Built full-stack and AI-based web applications for diverse clients globally.",
      responsibilities: [
        "Built scalable full-stack and AI-based web applications",
        "Designed APIs and system architectures for diverse clients",
        "Managed end-to-end project delivery from concept to deployment",
        "Increased client satisfaction through iterative development",
        "Provided technical consulting and maintenance services"
      ],
      achievements: [
        "Completed 15+ successful projects",
        "Maintained 98% client satisfaction rate",
        "Delivered projects 20% ahead of schedule"
      ],
      technologies: ["React", "Next.js", "Flask", "PostgreSQL", "Docker"],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Sustainable Business & Technology (SBT)",
      institution: "Umwelt-Campus Birkenfeld",
      location: "Germany",
      period: "2025 - Present",
      description: "Pursuing sustainable business practices combined with cutting-edge technology.",
      achievements: ["Focus on sustainable innovation", "Green technology integration"]
    },
    {
      id: 2,
      degree: "BSc (Hons) Software Engineering and Computer Science",
      institution: "University of Bedfordshire",
      location: "United Kingdom",
      period: "2022 - 2025",
      description: "First Class Honours with specialization in software development and AI.",
      achievements: ["GPA: 3.8/4.0", "First Class Honours", "Dean's List"]
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 90, color: "blue" },
    { name: "Python/Flask", level: 85, color: "green" },
    { name: "Node.js/Express", level: 88, color: "orange" },
    { name: "TypeScript", level: 85, color: "purple" },
    { name: "MongoDB/PostgreSQL", level: 82, color: "cyan" },
    { name: "AWS/Docker", level: 75, color: "red" }
  ];

const certifications = [
  { name: "UKI Coding School", issuer: "UKI Coding School", year: "2022" },
  { name: "Future Clicks WordPress", issuer: "Future Clicks", year: "2023" },
  { name: "Codecademy", issuer: "Codecademy", year: "2022" },
  { name: "FreeCodeCamp", issuer: "freeCodeCamp", year: "2022" },
  { name: "YIT Startup Program", issuer: "YIT Startup Program", year: "2025" }
];

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
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Professional Journey</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A timeline of my professional journey, skills, and achievements
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-purple-400" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={exp.id} experience={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-green-400" />
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <EducationCard key={edu.id} education={edu} index={idx} />
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, idx) => (
                <SkillCard key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </div>

          {/* Certifications & Volunteering */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <div>
                      <p className="text-white font-medium">{cert.name}</p>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-purple-400 text-sm">{cert.year}</span>
                  </div>
                ))}
              </div>
            </motion.div>

  {/* Volunteering  */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
>
  <div className="flex items-center gap-3 mb-4">
    <div className="p-2 rounded-lg bg-pink-500/20">
      <Heart className="w-5 h-5 text-pink-400" />
    </div>
    <h3 className="text-xl font-bold text-white">Volunteering</h3>
  </div>
  <div className="space-y-4">
    {/* Yarl Salesforce Ohana */}
    <div className="pb-3 border-b border-white/10">
      <p className="text-white font-medium">Yarl Salesforce Ohana</p>
      <p className="text-gray-400 text-sm">2020 - 2025</p>
      <p className="text-gray-300 text-sm mt-2">
        Participated in community workshops, contributed to mentoring and tech events, 
        engaged in Salesforce ecosystem activities.
      </p>
    </div>
    
    {/* Startup Land Germany 2026 */}
    <div className="pb-3 border-b border-white/10">
      <p className="text-white font-medium">Startup Land Germany</p>
      <p className="text-gray-400 text-sm">March 2026 - Köln, Germany</p>
      <p className="text-gray-300 text-sm mt-2">
        Volunteered at Startup Land Germany 2026 in Cologne, assisting with event organization, 
        participant coordination, and supporting startup founders during networking sessions 
        and pitch competitions.
      </p>
    </div>
    
    {/* YGC Innovation Festival - NEW */}
    <div>
      <p className="text-white font-medium">YGC Innovation Festival</p>
      <p className="text-gray-400 text-sm">2024 - Jaffna, Sri Lanka</p>
      <p className="text-gray-300 text-sm mt-2">
        Volunteered at YGC Innovation Festival, contributing to event setup, 
        coordinating workshop sessions, assisting speakers and participants, 
        and supporting innovation showcases and tech demonstrations.
      </p>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Experience Card Component
const ExperienceCard: React.FC<{ experience: any; index: number }> = ({ experience, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = experience.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start mb-4">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${experience.gradient}`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{experience.title}</h3>
              <p className="text-purple-400">{experience.company}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {experience.period}
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <MapPin className="w-3 h-3" /> {experience.location}
            </span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-4">{experience.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Key Responsibilities:</h4>
          <ul className="space-y-1">
            {experience.responsibilities.map((resp: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                <ChevronRight className="w-3 h-3 text-purple-400 mt-0.5 flex-shrink-0" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">Achievements:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.achievements.map((achievement: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
                {achievement}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, i: number) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Education Card Component
const EducationCard: React.FC<{ education: any; index: number }> = ({ education, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{education.degree}</h3>
          <p className="text-green-400">{education.institution}</p>
        </div>
        <span className="text-sm text-gray-400 flex items-center gap-1">
          <Calendar className="w-3 h-3" /> {education.period}
        </span>
      </div>
      <p className="text-gray-400 text-sm flex items-center gap-1 mb-3">
        <MapPin className="w-3 h-3" /> {education.location}
      </p>
      <p className="text-gray-300 text-sm mb-3">{education.description}</p>
      <div className="flex flex-wrap gap-2">
        {education.achievements.map((achievement: string, i: number) => (
          <span key={i} className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-300">
            {achievement}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

// Skill Card Component
const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const colorMap: Record<string, string> = {
    blue: "from-blue-500 to-cyan-500",
    green: "from-green-500 to-emerald-500",
    orange: "from-orange-500 to-red-500",
    purple: "from-purple-500 to-pink-500",
    cyan: "from-cyan-500 to-blue-500",
    red: "from-red-500 to-pink-500"
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-purple-400 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[skill.color]}`}
        />
      </div>
    </motion.div>
  );
};

export default ExperiencePage;