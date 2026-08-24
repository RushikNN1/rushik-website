import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#090a0f]/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">04. Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Education</h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical progression line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />

          {/* Timeline Item */}
          <div className="relative flex flex-col sm:flex-row items-start sm:justify-between mb-12">
            
            {/* Timeline center node */}
            <div className="absolute left-4 sm:left-1/2 -translate-x-[9px] top-1 z-10 w-[18px] h-[18px] rounded-full border-2 border-indigo-500 bg-[#090a0f] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            </div>

            {/* Left Column - duration */}
            <div className="hidden sm:block w-[45%] text-right pr-8 pt-1">
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-500 uppercase tracking-widest">
                <Calendar size={12} className="inline" /> 2023 — Present
              </span>
            </div>

            {/* Right Column - Card content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-[45%] pl-10 sm:pl-8 sm:pr-0"
            >
              <div className="premium-card rounded-xl p-6 border border-white/5 bg-[#111219]/40 backdrop-blur-md relative">
                
                {/* Mobile-only duration indicator */}
                <div className="flex sm:hidden items-center gap-1.5 font-mono text-xs text-gray-500 uppercase tracking-widest mb-3">
                  <Calendar size={12} /> 2023 — Present
                </div>

                {/* Institution Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-white">
                      REVA University
                    </h3>
                    <p className="font-mono text-xs text-indigo-400 mt-1 flex items-center gap-1">
                      <GraduationCap size={13} />
                      B.Tech — Artificial Intelligence & Data Science
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-400 font-sans mb-4">
                  <MapPin size={13} className="text-gray-500" />
                  <span>Bengaluru, Karnataka</span>
                </div>

                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-[10px] tracking-wider uppercase font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Currently Pursuing
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
