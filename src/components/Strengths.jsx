import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flame, Terminal, RefreshCw } from 'lucide-react';

const strengthsList = [
  {
    title: 'Problem Solving',
    desc: 'Approaching technical challenges with a structured, analytical mindset.',
    icon: <Target className="text-indigo-400" size={24} />,
  },
  {
    title: 'Continuous Learning',
    desc: 'Constantly expanding technical knowledge and experimenting with new technologies.',
    icon: <Flame className="text-cyan-400" size={24} />,
  },
  {
    title: 'Hands-on Building',
    desc: 'Learning through building practical projects rather than theory alone.',
    icon: <Terminal className="text-violet-400" size={24} />,
  },
  {
    title: 'Adaptability',
    desc: 'Willing to explore new tools, modern frameworks, and diverse technical approaches.',
    icon: <RefreshCw className="text-emerald-400" size={24} />,
  },
];

export default function Strengths() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#090a0f]/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">06. Attributes</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Core Strengths</h2>
        </div>

        {/* Strengths Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strengthsList.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card rounded-xl p-6 border border-white/5 bg-[#111219]/30 hover:bg-[#111219]/60 backdrop-blur-md flex flex-col justify-start text-left"
            >
              {/* Icon Container */}
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.05] w-fit mb-5">
                {strength.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base text-white mb-2">
                {strength.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-gray-400 font-sans leading-relaxed">
                {strength.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
