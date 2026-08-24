import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Linkedin } from './CustomIcons';

export default function Contact() {
  const contactMethods = [
    {
      name: 'Email',
      value: 'nn.rushik06@gmail.com',
      href: 'mailto:nn.rushik06@gmail.com',
      icon: <Mail size={22} className="text-indigo-400" />,
      label: 'Send an email',
    },
    {
      name: 'Phone',
      value: '7411631645',
      href: 'tel:7411631645',
      icon: <Phone size={22} className="text-cyan-400" />,
      label: 'Call or message',
    },
    {
      name: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: '#',
      icon: <Linkedin size={22} className="text-violet-400" />,
      label: 'Connect professionally',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[#090a0f] z-0" />
      <div className="absolute inset-0 bg-grid-dots z-0 opacity-50" />
      
      <div className="relative max-w-4xl mx-auto px-6 z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">07. Communication</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">Let's Connect</h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
            Have an opportunity or project in mind? Let's connect.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Visual border glow */}
                <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                <a
                  href={method.href}
                  onClick={method.isPlaceholder ? (e) => e.preventDefault() : undefined}
                  className={`relative block rounded-xl border border-white/5 bg-[#111219]/40 p-6 text-center hover:border-white/10 hover:bg-[#111219]/60 transition-all duration-300 ${
                    method.isPlaceholder ? 'cursor-not-allowed opacity-80' : 'cursor-pointer'
                  }`}
                >
                  {/* Icon */}
                  <div className="p-3.5 rounded-full bg-white/[0.02] border border-white/[0.05] w-fit mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    {method.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                    {method.name}
                  </h3>

                  {/* Value */}
                  <p className="font-display font-semibold text-white text-sm md:text-base tracking-wide flex items-center justify-center gap-1">
                    {method.value}
                    {!method.isPlaceholder ? (
                      <ArrowUpRight size={14} className="text-gray-500 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <span className="text-[10px] text-gray-500 font-mono font-normal tracking-wide normal-case">(Placeholder)</span>
                    )}
                  </p>

                  {/* Action helper label */}
                  <span className="text-[11px] font-sans text-gray-400 mt-2 block">
                    {method.label}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Small branding label */}
        <div className="mt-16 text-center text-xs font-mono text-white/20">
          <span>7411631645 • nn.rushik06@gmail.com • RUSHIK NN</span>
        </div>
      </div>
    </section>
  );
}
