import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Learning from './components/Learning';
import Strengths from './components/Strengths';
import CareerObjective from './components/CareerObjective';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateScrollProgress = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-gray-300 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress" 
        style={{ transform: `scaleX(${scrollProgress})` }} 
      />

      {/* Subtle cursor glow backdrop (desktop only) */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block opacity-40"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.04), transparent 80%)`,
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Layout Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Learning />
        <Strengths />
        <CareerObjective />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
