import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, BrainCircuit, Terminal } from 'lucide-react';

const learningTopics = [
  {
    title: 'C Programming',
    icon: <Code2 className="text-indigo-400" size={22} />,
    phase: 'Building Practical Projects',
    focus: ['Memory Management', 'Pointers & Structs', 'Algorithm Implementation'],
    step: 2,
  },
  {
    title: 'Python Programming',
    icon: <Code2 className="text-cyan-400" size={22} />,
    phase: 'Integrating Applications',
    focus: ['Object-Oriented Python', 'Data Analysis Libraries', 'Scripting Automation'],
    step: 3,
  },
  {
    title: 'Database Management Systems',
    icon: <Database className="text-violet-400" size={22} />,
    phase: 'Studying Core Architecture',
    focus: ['Relational Schema Design', 'Normalization', 'Transaction Management'],
    step: 1,
  },
  {
    title: 'SQL',
    icon: <Database className="text-emerald-400" size={22} />,
    phase: 'Writing Complex Queries',
    focus: ['Subqueries & Joins', 'Aggregations', 'Database Indexing'],
    step: 2,
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    icon: <BrainCircuit className="text-rose-400" size={22} />,
    phase: 'Exploring Core Concepts',
    focus: ['Search Algorithms', 'Knowledge Representation', 'Basic Machine Learning'],
    step: 1,
  },
  {
    title: 'Data Science Fundamentals',
    icon: <BrainCircuit className="text-amber-400" size={22} />,
    phase: 'Exploring Methodology',
    focus: ['Data Cleaning', 'Statistical Foundations', 'Data Visualization'],
    step: 1,
  },
];

export default function Learning() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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
    <section id="learning" className="py-24 relative overflow-hidden bg-grid-dots">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">05. Growth</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Currently Learning</h2>
        </div>

        {/* Learning Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {learningTopics.map((topic, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="premium-card rounded-xl p-6 border border-white/5 bg-[#111219]/30 hover:bg-[#111219]/60 backdrop-blur-md flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                    {topic.icon}
                  </div>
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-wider flex items-center gap-1">
                    <Terminal size={10} /> Active
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-base md:text-lg text-white mb-1">
                  {topic.title}
                </h3>
                
                {/* Current Learning Phase */}
                <p className="text-xs font-mono text-indigo-400 mb-6">
                  {topic.phase}
                </p>

                {/* Key focus bullets */}
                <ul className="space-y-1.5 mb-8">
                  {topic.focus.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual progression bar */}
              <div className="space-y-2 border-t border-white/5 pt-4 mt-auto">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500 uppercase">
                  <span>Progress Stage</span>
                  <span>{topic.step === 1 ? 'Foundations' : topic.step === 2 ? 'Application' : 'Integration'}</span>
                </div>
                {/* Multi-step progress bar */}
                <div className="grid grid-cols-3 gap-1">
                  <div className={`h-1.5 rounded-sm ${topic.step >= 1 ? 'bg-indigo-500/80 shadow-sm shadow-indigo-500/30' : 'bg-white/5'}`} />
                  <div className={`h-1.5 rounded-sm ${topic.step >= 2 ? 'bg-cyan-500/80 shadow-sm shadow-cyan-500/30' : 'bg-white/5'}`} />
                  <div className={`h-1.5 rounded-sm ${topic.step >= 3 ? 'bg-violet-500/80 shadow-sm shadow-violet-500/30' : 'bg-white/5'}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
