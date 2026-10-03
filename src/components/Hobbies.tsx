import React from 'react';
import { Terminal, Compass, Cpu, Code, Wrench, Headphones, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Hobby } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  const { hobbies } = portfolioData;

  const renderHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-violet-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-pink-400" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-cyan-300" />;
      default:
        return <Sparkles className="w-6 h-6 text-violet-400" />;
    }
  };

  return (
    <section id="hobbies" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-violet-400 mb-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[06] // BEYOND THE TERMINAL</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Hobbies &amp; <span className="gradient-text-primary">Personal Interests</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          Things that fuel my curiosity, keep me inspired, and balance my technical coursework.
        </p>
      </div>

      {/* Grid of Hobbies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby: Hobby) => (
          <div
            key={hobby.id}
            className="group relative glass-panel rounded-2xl p-6 border border-white/8 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.2)] text-left flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle Gradient Backdrop Accent */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${hobby.accent} rounded-full blur-2xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-[#0b1029] border border-white/10 group-hover:border-cyan-400/40 transition-colors shadow-inner">
                  {renderHobbyIcon(hobby.iconName)}
                </div>

                {/* Animated visual accent for headphones/music */}
                {hobby.iconName === 'Headphones' ? (
                  <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-black/40 border border-amber-500/30">
                    <span className="w-1 bg-amber-400 rounded-full animate-bounce h-3" />
                    <span className="w-1 bg-amber-300 rounded-full animate-bounce h-5" style={{ animationDelay: '0.2s' }} />
                    <span className="w-1 bg-amber-500 rounded-full animate-bounce h-2" style={{ animationDelay: '0.4s' }} />
                    <span className="w-1 bg-yellow-400 rounded-full animate-bounce h-4" style={{ animationDelay: '0.1s' }} />
                  </div>
                ) : (
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Interest
                  </span>
                )}
              </div>

              <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                {hobby.title}
              </h3>

              <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed">
                {hobby.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-slate-400">
              <span className="text-slate-400">#Curiosity</span>
              <span className="text-cyan-400/80 group-hover:text-cyan-300 transition-colors">Active passion</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
