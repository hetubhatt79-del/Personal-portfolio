import React, { useState } from 'react';
import { Terminal, Code, Layout, GitBranch, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Skill } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web Development', 'Tools & Methods', 'AI & Future'];

  const filteredSkills = activeFilter === 'All'
    ? skills
    : skills.filter((s) => s.category === activeFilter);

  // Return appropriate Lucide icon per skill
  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'c-lang':
      case 'problem-solving':
        return <Code className="w-5 h-5 text-violet-400" />;
      case 'html5':
      case 'css3':
      case 'responsive-design':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'javascript':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'git-github':
        return <GitBranch className="w-5 h-5 text-purple-400" />;
      case 'ai-prompting':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-violet-400 mb-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[02] // TECHNICAL CAPABILITIES</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Current Skills &amp; <span className="gradient-text-primary">Learning Trajectory</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          Honest, transparent representation of where I stand in my first year. Focused on strong conceptual roots over superficial percentages.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              activeFilter === cat
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)] border border-white/20'
                : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill: Skill) => (
          <div
            key={skill.id}
            className="group relative glass-panel rounded-2xl p-6 border border-white/8 hover:border-violet-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_-10px_rgba(139,92,246,0.25)] flex flex-col justify-between"
          >
            {/* Top gradient glow on hover */}
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header with Icon and Honest Badge */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#0c122e] border border-white/10 group-hover:border-cyan-400/40 transition-colors shadow-inner">
                  {getSkillIcon(skill.id)}
                </div>

                {/* Honest Level Pill (No misleading percentages) */}
                <div className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-medium border flex items-center gap-1.5 ${skill.levelColor}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  <span>{skill.level}</span>
                </div>
              </div>

              {/* Skill Title & Category */}
              <div className="text-left mb-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  {skill.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed text-left mb-4">
                {skill.description}
              </p>
            </div>

            {/* Tags / Sub-competencies */}
            <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {skill.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Honest Note Card */}
      <div className="mt-12 p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 max-w-2xl mx-auto flex items-center gap-3 text-left">
        <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-slate-300 font-medium">Authenticity note:</span> I do not display arbitrary 80% or 95% proficiency bars. As a first-year student, my goal is consistent practice, solid conceptual clarity, and building hands-on projects every week.
        </p>
      </div>
    </section>
  );
};
