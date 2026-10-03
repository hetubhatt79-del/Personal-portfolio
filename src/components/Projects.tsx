import React, { useState } from 'react';
import { Terminal, ExternalLink, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState<'All' | 'Active' | 'Practice' | 'In Progress'>('All');

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'Active Project':
        return 'border-cyan-500/40 text-cyan-300 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]';
      case 'Practice Project':
        return 'border-violet-500/40 text-violet-300 bg-violet-500/10';
      case 'In Progress':
        return 'border-amber-500/40 text-amber-300 bg-amber-500/10';
      case 'Planned':
        return 'border-slate-500/40 text-slate-300 bg-slate-500/10';
      default:
        return 'border-white/20 text-slate-300 bg-white/5';
    }
  };

  const filteredProjects = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return p.status === 'Active Project';
    if (filter === 'Practice') return p.status === 'Practice Project';
    if (filter === 'In Progress') return p.status === 'In Progress';
    return true;
  });

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-12">
        <div className="flex items-center gap-2 font-mono text-xs text-violet-400 mb-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[04] // PROJECTS &amp; LABS</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Featured Projects &amp; <span className="gradient-text-primary">Experiments</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          Tangible demonstrations of my first-year engineering progress, clearly labeled by development stage.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
        {(['All', 'Active', 'Practice', 'In Progress'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
              filter === tab
                ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] border border-white/20'
                : 'glass-panel text-slate-400 hover:text-white'
            }`}
          >
            {tab === 'All' ? 'All Projects' : tab}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project: Project) => (
          <div
            key={project.id}
            className="group relative glass-panel rounded-2xl p-6 sm:p-8 border border-white/8 hover:border-violet-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)] flex flex-col justify-between overflow-hidden"
          >
            {/* Animated Cyber Gradient Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header with Folder Icon and Status Badge */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 rounded-xl bg-[#090e24] border border-white/10 text-cyan-400 group-hover:border-cyan-400/50 transition-colors shadow-inner">
                  <FolderGit2 className="w-6 h-6" />
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium border flex items-center gap-1.5 ${getStatusColor(
                    project.status
                  )}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {project.status}
                </span>
              </div>

              {/* Title and Tagline */}
              <div className="text-left mb-3">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-violet-300/80 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed text-left mb-6">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6 text-left">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-mono">
                    <span className="text-cyan-400 mt-0.5">▹</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Technologies Used */}
              <div className="pt-4 border-t border-white/8 flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/8 text-slate-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Action Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-[#0e142e] hover:bg-[#162046] border border-white/10 hover:border-violet-400/50 shadow-sm transition-all duration-200"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <svg className="w-4 h-4 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <span>Source Code</span>
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 border border-cyan-400/30 shadow-md shadow-violet-500/20 transition-all duration-200"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
