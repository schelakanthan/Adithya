// src/data/portfolioData.ts
import { LucideIcon } from 'lucide-react';
import { 
  Code, 
  Terminal, 
  Database, 
  Smartphone, 
  Users, 
  MessageSquare,
  Layers,
  ShoppingBag
} from 'lucide-react';

export interface Skill {
  skill: string;
  level: number;
  icon: LucideIcon;  // Change from string to LucideIcon
  color: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  gradient: string;
  icon: string;
  features: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export const skills: Skill[] = [
  { 
    skill: "React & Next.js", 
    level: 90, 
    icon: Code,  // Now using the actual icon component
    color: "from-blue-500 to-cyan-500", 
    description: "Modern frontend frameworks for blazing fast UIs" 
  },
  { 
    skill: "Python / Flask", 
    level: 85, 
    icon: Terminal, 
    color: "from-green-500 to-emerald-500", 
    description: "Backend APIs and AI integration" 
  },
  { 
    skill: "MERN Stack", 
    level: 88, 
    icon: Database, 
    color: "from-orange-500 to-red-500", 
    description: "Full-stack MongoDB, Express, React, Node.js" 
  },
  { 
    skill: "Mobile Dev", 
    level: 80, 
    icon: Smartphone, 
    color: "from-purple-500 to-pink-500", 
    description: "React Native cross-platform apps" 
  },
  { 
    skill: "Leadership", 
    level: 90, 
    icon: Users, 
    color: "from-yellow-500 to-orange-500", 
    description: "Team management and mentorship" 
  },
  { 
    skill: "Communication", 
    level: 92, 
    icon: MessageSquare, 
    color: "from-indigo-500 to-purple-500", 
    description: "Client and stakeholder communication" 
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "GPT Physics",
    description: "Online marketplace for UK curriculum notes with secure transactions",
    fullDescription: "GPT Physics is a comprehensive online marketplace that connects students with high-quality educational notes for UK curricula (GCSE, IGCSE, A-Levels, IB).",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    gradient: "from-blue-500 to-cyan-500",
    icon: "layers",
    features: ["Secure payment integration", "User review system", "Advanced search filters"]
  },
  {
    id: 2,
    title: "AI Interview Mocker",
    description: "AI-powered interview simulation with intelligent feedback",
    fullDescription: "An innovative AI-driven platform that helps job seekers prepare for interviews using natural language processing.",
    tech: ["React", "Python", "Flask", "OpenAI API"],
    gradient: "from-purple-500 to-pink-500",
    icon: "layers",
    features: ["Realistic interview simulations", "AI-powered feedback", "Performance tracking"]
  },
  {
    id: 3,
    title: "Scalable API Architecture",
    description: "High-performance RESTful APIs with JWT authentication",
    fullDescription: "A robust backend architecture built for high-traffic applications.",
    tech: ["Node.js", "Express", "MongoDB", "Redis"],
    gradient: "from-green-500 to-teal-500",
    icon: "layers",
    features: ["JWT authentication", "Rate limiting", "API documentation"]
  },
  {
    id: 4,
    title: "Aditiya Shoes",
    description: "Complete e-commerce platform for shoe manufacturing company",
    fullDescription: "Aditiya Shoes is a full-featured e-commerce solution for a shoe manufacturing company.",
    tech: ["React", "Next.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-amber-500 to-orange-500",
    icon: "shopping",
    features: ["Product catalog", "Inventory tracking", "Order processing"]
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Aslan Ai · Colombo, Sri Lanka",
    period: "2024 - 2025",
    responsibilities: [
      "Developed scalable applications using MERN, Next.js, and Python",
      "Managed product development and client communication",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed · Remote",
    period: "2022 - Present",
    responsibilities: [
      "Built scalable full-stack and AI-based web applications",
      "Designed APIs and system architectures for diverse clients",
      "Managed end-to-end project delivery"
    ]
  }
];