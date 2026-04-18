// components/ExperienceTimeline.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Experience } from '../data/portfolioData';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div>
      {experiences.map((exp, idx) => (
        <ExperienceItem key={idx} exp={exp} index={idx} />
      ))}
    </div>
  );
};

const ExperienceItem: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 pb-8 border-l-2 border-purple-400/30 last:border-l-0"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 hover:bg-white/10 transition-all duration-300">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
          <span className="text-sm text-purple-300 font-mono">{exp.period}</span>
        </div>
        <p className="text-cyan-400 mb-3 font-medium">{exp.company}</p>
        <ul className="space-y-2 text-gray-300 text-sm">
          {exp.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceTimeline;