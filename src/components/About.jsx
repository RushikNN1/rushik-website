import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Award, Activity } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: <Award className="text-indigo-400" size={20} />,
      title: 'Education',
      desc: 'B.Tech — Artificial Intelligence & Data Science',
    },
    {
      icon: <MapPin className="text-cyan-400" size={20} />,
      title: 'University',
      desc: 'REVA University, Bengaluru',
    },
    {
      icon: <BookOpen className="text-violet-400" size={20} />,
      title: 'Focus',
      desc: 'Programming • Data • AI • IoT',
    },
    {
      icon: <Activity className="text-emerald-400" size={20} />,
      title: 'Status',
      desc: 'Currently Learning',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#090a0f]/40">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">01. Biography</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Console Card */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 premium-card rounded-xl p-6 border border-white/5 bg-[#111219]/60 backdrop-blur-md overflow-hidden relative group"
          >
            {/* Window header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/85"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/85"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/85"></span>
              </div>
              <span className="text-[11px] font-mono text-gray-500">profile.json</span>
            </div>

            {/* Console Content */}
            <div className="font-mono text-sm text-gray-300 space-y-3 leading-relaxed">
              <div>
                <span className="text-indigo-400">const</span>{' '}
                <span className="text-cyan-400">developer</span> = {'{'}
              </div>
              <div className="pl-4">
                <span className="text-gray-400">name:</span>{' '}
                <span className="text-amber-300">"Rushik NN"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">education:</span>{' '}
                <span className="text-amber-300">"REVA University"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">degree:</span>{' '}
                <span className="text-amber-300">"B.Tech AI & Data Science"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">location:</span>{' '}
                <span className="text-amber-300">"Bengaluru, India"</span>,
              </div>
              <div className="pl-4">
                <span className="text-gray-400">focus:</span>{' '}
                <span className="text-amber-300">"Programming, AI, Data"</span>
              </div>
              <div>{'};'}</div>
              
              <div className="pt-4 border-t border-white/5 mt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px]">Learning</span>
                  <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px]">Building</span>
                  <span className="px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-[10px]">Exploring</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text Bio and Info Cards */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-gray-300 leading-relaxed font-sans text-base space-y-4"
            >
              <p>
                I am a B.Tech Artificial Intelligence & Data Science student at REVA University, Bengaluru, currently building a strong foundation in programming, databases, and emerging technologies.
              </p>
              <p>
                I enjoy learning by building practical projects and experimenting with technology. My current focus is on strengthening my skills in C, Python, SQL, DBMS, Artificial Intelligence, Data Science, and IoT.
              </p>
              <p className="text-white font-medium border-l-2 border-indigo-500 pl-4 italic">
                "I believe the best way to improve technically is to build, break, learn, and build again."
              </p>
            </motion.div>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-5 rounded-lg border border-white/5 bg-[#111219]/30 hover:border-white/10 hover:bg-[#111219]/50 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-mono tracking-widest text-gray-500 uppercase mb-1">{card.title}</h3>
                    <p className="text-sm font-semibold text-white leading-snug">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
