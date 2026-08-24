import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Terminal, Cpu } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href) => {
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#090a0f] z-0" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-dots z-0 opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent z-0" />

      {/* Futuristic Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/10 blur-[120px] animate-pulse z-0" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse z-0" style={{ animationDuration: '12s' }} />

      {/* Content Container */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center justify-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wide text-gray-300 uppercase">
            Currently Learning & Building
          </span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-display tracking-tight text-white mb-4"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Rushik NN
          </span>
        </motion.h1>

        {/* Role Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl font-mono text-gray-400 font-medium mb-6 tracking-wide flex items-center justify-center gap-2"
        >
          <Cpu size={20} className="text-cyan-400" />
          B.Tech — Artificial Intelligence & Data Science
        </motion.h2>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed font-sans"
        >
          Building my foundation in programming, data, and emerging technologies through hands-on projects and continuous learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScroll('#projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-medium text-sm transition-all duration-300 hover:opacity-95 hover:shadow-lg hover:shadow-indigo-500/10 flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] text-white border border-white/10 hover:border-white/20 font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            Let's Connect
          </button>
        </motion.div>
      </div>

      {/* Floating Section Details */}
      <div className="absolute bottom-10 left-10 hidden xl:flex items-center gap-2 font-mono text-xs text-white/25">
        <Terminal size={14} />
        <span>REVA_UNIVERSITY_B.TECH.2026</span>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
        onClick={() => handleScroll('#about')}
      >
        <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase">Scroll</span>
        <ChevronDown size={16} className="text-gray-500" />
      </motion.div>
    </section>
  );
}
