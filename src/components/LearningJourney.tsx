import React from 'react';
import { Terminal, CheckCircle2, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Milestone } from '../data/portfolioData';

export const LearningJourney: React.FC = () => {
  const { journey } = portfolioData;

  const getStatusBadge = (status: Milestone['status']) => {
    switch (status) {
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3 h-3" />
            <span>Mastered Phase</span>
          </span>
        );
      case 'In Progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>Active Focus</span>
          </span>
        );
      case 'Upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-500/10 text-slate-400 border border-slate-500/30">
            <Clock className="w-3 h-3" />
            <span>Upcoming Horizon</span>
          </span>
        );
    }
  };

  return (
    <section id="journey" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[05] // LEARNING ROADMAP</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Milestones &amp; <span className="gradient-text-cyan">Academic Trajectory</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          A transparent chronological progression of my growth as a first-year Computer Science undergraduate.
        </p>
      </div>

      {/* Vertical Timeline Container */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-32 md:ml-40 space-y-12 pl-6 sm:pl-10">
        {journey.map((item: Milestone) => {
          const isCurrent = item.status === 'In Progress';
          return (
            <div key={item.id} className="relative group text-left">
              {/* Timeline Stage Left Marker (Desktop) */}
              <div className="hidden sm:block absolute -left-48 md:-left-52 top-1 text-right w-36">
                <span className="font-mono text-xs text-cyan-400 font-semibold block">
                  {item.stage}
                </span>
                <span className="font-mono text-[11px] text-slate-500 block mt-0.5">
                  {item.period}
                </span>
              </div>

              {/* Glowing Node on Timeline Axis */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  isCurrent
                    ? 'border-cyan-400 bg-cyan-950 shadow-[0_0_15px_#22d3ee]'
                    : item.status === 'Completed'
                    ? 'border-emerald-400 bg-emerald-950'
                    : 'border-slate-600 bg-slate-900'
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    isCurrent
                      ? 'bg-cyan-300 animate-ping'
                      : item.status === 'Completed'
                      ? 'bg-emerald-400'
                      : 'bg-slate-500'
                  }`}
                />
              </div>

              {/* Milestone Card */}
              <div
                className={`glass-panel rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
                  isCurrent
                    ? 'border-cyan-500/40 shadow-[0_10px_30px_-10px_rgba(6,182,212,0.2)] bg-[#0c132f]/80'
                    : 'border-white/8 hover:border-violet-500/30'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="sm:hidden font-mono text-xs text-cyan-400 font-semibold">
                    {item.stage} • {item.period}
                  </span>
                  <div className="ml-auto sm:ml-0">{getStatusBadge(item.status)}</div>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-4">
                  {item.description}
                </p>

                {/* Skills Gained Tags */}
                <div className="pt-3 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400">Key competencies:</span>
                  {item.skillsGained.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/8 text-slate-300 group-hover:border-cyan-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
