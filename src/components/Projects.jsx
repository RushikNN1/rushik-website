import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Info, Sliders, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';

export default function Projects() {
  const [intensity, setIntensity] = useState(70);
  const [isAuto, setIsAuto] = useState(false);
  const [ambientLight, setAmbientLight] = useState(30);

  // Auto-mode simulator: adapts intensity based on ambient light
  useEffect(() => {
    let interval;
    if (isAuto) {
      interval = setInterval(() => {
        // Randomly fluctuate ambient light a tiny bit to simulate environment changes
        setAmbientLight((prev) => {
          const change = Math.floor(Math.random() * 9) - 4; // -4 to +4
          const next = Math.max(10, Math.min(90, prev + change));
          // Intensity is inversely proportional to ambient light
          setIntensity(100 - next);
          return next;
        });
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAuto]);

  const handleIntensityChange = (e) => {
    if (!isAuto) {
      setIntensity(Number(e.target.value));
    }
  };

  const keyFeatures = [
    'Environmental condition-based lighting control using light sensors.',
    'Intensity control loop to dynamically adjust lighting brightness.',
    'Hands-on experience with hardware components, sensors, and microcontrollers.',
    'Full hardware-software integration utilizing custom embedded programming.'
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#090a0f]/20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-indigo-400 tracking-widest uppercase block mb-2">03. Works</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">Featured Project</h2>
        </div>

        {/* Project Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 premium-card rounded-xl p-8 border border-white/5 bg-[#111219]/40 flex flex-col justify-between"
          >
            <div>
              {/* Category */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  IoT
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  Automation
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-[10px] uppercase tracking-wider font-semibold">
                  Embedded Systems
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4 leading-tight">
                Automated Lighting System with Intensity Control
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed font-sans mb-6 text-sm md:text-base">
                Developed an IoT-based automated lighting system designed to control lighting based on environmental conditions. The system incorporates intensity control to adjust lighting brightness and provided hands-on experience with sensors, automation, hardware, programming, and system integration.
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-mono tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                  <Info size={12} /> Key Project Pillars
                </h4>
                <ul className="space-y-2">
                  {keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div>
              <button
                disabled
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white/[0.02] border border-white/5 text-gray-500 font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>

          {/* Right Column - Interactive CSS Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 premium-card rounded-xl p-8 border border-white/5 bg-[#111219]/60 backdrop-blur-md flex flex-col justify-between overflow-hidden relative"
          >
            {/* Visual Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sliders size={12} /> Hardware Simulator
              </span>
              <button
                onClick={() => setIsAuto(!isAuto)}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-[11px] font-mono text-gray-300 hover:text-white transition-colors"
              >
                Mode: {isAuto ? 'Auto (Sensor)' : 'Manual'}
                {isAuto ? <ToggleRight size={16} className="text-cyan-400" /> : <ToggleLeft size={16} className="text-gray-500" />}
              </button>
            </div>

            {/* Light Bulb Visualization Container */}
            <div className="flex flex-col items-center justify-center py-6 relative">
              {/* Dynamic Glow overlay behind lightbulb */}
              <div
                className="absolute w-40 h-40 rounded-full blur-[40px] pointer-events-none transition-all duration-300"
                style={{
                  backgroundColor: `rgba(250, 204, 21, ${intensity / 180})`,
                  transform: 'scale(' + (0.5 + intensity / 150) + ')',
                }}
              />

              {/* Lightbulb icon */}
              <div className="relative z-10 mb-4">
                <Lightbulb
                  size={84}
                  className="transition-colors duration-200"
                  style={{
                    stroke: intensity > 10 ? '#facc15' : '#475569',
                    fill: `rgba(250, 204, 21, ${intensity / 100})`,
                  }}
                />
              </div>

              {/* Intensity Indicators */}
              <div className="text-center font-mono z-10">
                <span className="text-2xl font-bold text-white">{intensity}%</span>
                <span className="text-xs text-gray-500 block">LIGHT OUTPUT</span>
              </div>
            </div>

            {/* Control Slider */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              {isAuto ? (
                <div className="bg-white/[0.01] border border-white/[0.03] p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-1.5 text-xs text-cyan-400 font-mono mb-1">
                    <Sparkles size={12} className="animate-spin" style={{ animationDuration: '4s' }} />
                    LDR SENSOR FEEDBACK
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                    <span>Ambient Light: {ambientLight}%</span>
                    <span>Required Brightness: {100 - ambientLight}%</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center text-xs font-mono text-gray-400 mb-2">
                    <span>Adjust Output</span>
                    <span>Manual Override</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={intensity}
                    onChange={handleIntensityChange}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500 outline-none"
                  />
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
