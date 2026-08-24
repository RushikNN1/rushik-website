import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-[#090a0f] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding Info */}
        <div className="text-center md:text-left">
          <a
            href="#home"
            onClick={scrollToTop}
            className="font-display font-bold text-lg text-white hover:opacity-90 transition-opacity"
          >
            Rushik NN
          </a>
          <p className="text-xs text-gray-500 font-mono mt-1">
            B.Tech — Artificial Intelligence & Data Science
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all cursor-not-allowed"
            title="LinkedIn (Placeholder)"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-white/10 transition-all cursor-not-allowed"
            title="GitHub (Placeholder)"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:nn.rushik06@gmail.com"
            className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:border-indigo-500/25 hover:text-indigo-400 transition-all"
            title="Send Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
          <span className="text-xs text-gray-500 font-sans">
            © 2026 Rushik NN. All rights reserved.
          </span>
          <a
            href="#home"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all"
            title="Scroll to Top"
          >
            <ArrowUp size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
}
