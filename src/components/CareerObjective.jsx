import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export default function CareerObjective() {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-lines">
      {/* Glow highlight behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full bg-indigo-600/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Decorative Mini Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] mb-8 font-mono text-[10px] text-gray-400 uppercase tracking-widest"
        >
          <Compass size={12} className="text-indigo-400" />
          Mission & Vision
        </motion.div>

        {/* Typography Treatment */}
        <div className="space-y-4">
          <h2 className="text-xs font-mono text-gray-500 uppercase tracking-[0.2em] mb-4">What I'm Working Toward</h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight leading-relaxed md:leading-normal"
          >
            "My goal is to develop{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 font-extrabold">
              strong technical expertise
            </span>{' '}
            in software development, data, and emerging technologies by working on real-world projects and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-extrabold">
              continuously improving
            </span>{' '}
            my programming and problem-solving abilities."
          </motion.p>
        </div>
      </div>
    </section>
  );
}
