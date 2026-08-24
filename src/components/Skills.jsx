import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Code size={20} className="text-indigo-400" />,
    skills: [
      { name: 'C', status: 'Building' },
      { name: 'Python', status: 'Building' },
    ],
  },
  {
    title: 'Database',
    icon: <Database size={20} className="text-cyan-400" />,
    skills: [
      { name: 'SQL', status: 'Building' },
      { name: 'DBMS', status: 'Learning' },
    ],
  },
  {
    title: 'Core Skills',
    icon: <Cpu size={20} className="text-violet-400" />,
    skills: [
      { name: 'Programming Fundamentals', status: 'Building' },
      { name: 'Problem Solving', status: 'Building' },
    ],
  },
  {
    title: 'Areas of Interest',
    icon: <BrainCircuit size={20} className="text-emerald-400" />,
    skills: [
      { name: 'Artificial Intelligence', status: 'Exploring' },
      { name: 'Data Science', status: 'Exploring' },
      { name: 'IoT', status: 'Exploring' },
    ],
  },
];

const statusStyles = {
  Learning: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
  Building: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400',
  Exploring: 'bg-violet-500/10 border-violet-500/25 text-violet-400',
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">02. Abilities</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Technical Skills</h2>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="premium-card rounded-xl p-6 border border-white/5 bg-[#111219]/25 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    {category.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white">{category.title}</h3>
                </div>

                {/* Skills list inside category */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.02] hover:border-white/[0.05] transition-all duration-300"
                    >
                      <span className="font-sans font-medium text-gray-300 text-sm">{skill.name}</span>
                      <span
                        className={`px-2 py-0.5 rounded font-mono text-[10px] tracking-wide font-medium border uppercase ${
                          statusStyles[skill.status]
                        }`}
                      >
                        {skill.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
