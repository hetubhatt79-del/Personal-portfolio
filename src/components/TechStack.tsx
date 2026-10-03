import React, { useState } from 'react';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { TechItem } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const { techStack } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web Development', 'Developer Tools', 'AI & Design'];

  const filteredItems = selectedCategory === 'All'
    ? techStack
    : techStack.filter((t) => t.category === selectedCategory);

  // SVG Brand / Tech Icons
  const renderTechIcon = (id: string) => {
    switch (id) {
      case 'c':
        return (
          <svg className="w-6 h-6 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 10a6 6 0 0 0-12 0v4a6 6 0 0 0 12 0" />
            <path d="M14 6.5h-4" />
          </svg>
        );
      case 'html5-tech':
        return (
          <svg className="w-6 h-6 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
            <path d="M7.5 7h9M8 11h8M8.5 15h7L12 18" />
          </svg>
        );
      case 'css3-tech':
        return (
          <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 3l1.5 17L12 22l6.5-2L20 3H4z" />
            <path d="M16 7H8v4h7v4l-3 1-3-1v-2" />
          </svg>
        );
      case 'js-tech':
        return (
          <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="4" />
            <path d="M16 8v8a2 2 0 0 1-2 2h-1" />
            <path d="M9 13c.5 1.5 1.5 2 2.5 1.5" />
          </svg>
        );
      case 'git-tech':
        return (
          <svg className="w-6 h-6 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="9" r="3" />
            <path d="M6 9v6M9 9l6-3" />
          </svg>
        );
      case 'github-tech':
        return (
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        );
      case 'vscode-tech':
        return (
          <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16.5 2l5.5 4.5v11L16.5 22 2 13.5V10.5L16.5 2z" />
            <path d="M16.5 6.5L6.5 12l10 5.5" />
          </svg>
        );
      case 'figma-tech':
        return (
          <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
            <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
            <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
            <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
            <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
          </svg>
        );
      case 'ai-tools-tech':
        return (
          <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a8 8 0 0 0-8 8c0 3 1.5 5.5 4 6.8V20h8v-3.2c2.5-1.3 4-3.8 4-6.8a8 8 0 0 0-8-8z" />
            <path d="M10 22h4" />
          </svg>
        );
      default:
        return <Terminal className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[03] // TECH ECOSYSTEM</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Tools &amp; <span className="gradient-text-cyan">Technologies I Explore</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          A clear categorization of tools in my daily workflow versus technologies I am actively studying.
        </p>
      </div>

      {/* Legend & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-4 border-b border-white/8">
        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-violet-600 text-white border border-violet-400/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Distinction Legend */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
            <span>Regularly Used</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
            <span>Currently Learning</span>
          </div>
        </div>
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((tech: TechItem) => {
          const isRegular = tech.status === 'Regularly Used';
          return (
            <div
              key={tech.id}
              className="group glass-panel rounded-xl p-5 border border-white/8 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(6,182,212,0.2)] text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-3 rounded-xl bg-[#070b1f] border border-white/10 group-hover:border-cyan-400/40 transition-colors shadow-inner">
                    {renderTechIcon(tech.id)}
                  </div>

                  {/* Status Indicator Pill */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium border ${
                      isRegular
                        ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
                        : 'border-amber-500/30 text-amber-400 bg-amber-500/10'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isRegular ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
                      }`}
                    />
                    {tech.status}
                  </span>
                </div>

                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {tech.category}
                </span>
                <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>CSE 1st Year</span>
                <span className="group-hover:text-cyan-400 transition-colors">Details &rarr;</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
