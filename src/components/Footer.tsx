import React from 'react';
import { Code2, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/8 bg-[#030612] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        {/* Left: Branding & Tagline */}
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center border border-white/20">
              <span className="font-heading font-black text-sm text-white">
                {personal.monogram}
              </span>
            </div>
            <span className="font-heading font-bold text-lg text-white">
              {personal.name}
            </span>
          </div>

          <p className="font-mono text-xs text-slate-400">
            "{personal.tagline}"
          </p>
          <p className="text-xs text-slate-400">
            BTech CSE Core • {personal.classYear} • RBSE, Banswada
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Tech Stack</a>
          <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        {/* Right: Back to Top & Build Tag */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Engineered with React + Tailwind CSS</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
        <p className="text-slate-400">Designed with a minimal cyberpunk aesthetic for engineering learners.</p>
      </div>
    </footer>
  );
};
