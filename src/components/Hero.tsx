import React from 'react';
import { Code2, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const { personal } = portfolioData;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none animate-ambient-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none animate-ambient-glow"
        style={{ animationDelay: '4s' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Animated Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-xs text-slate-300 tracking-wide">
                BTech CSE Student • <span className="text-cyan-300 font-medium">{personal.classYear}</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm text-violet-400 tracking-widest uppercase flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>// INTRODUCING</span>
              </p>
              <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Hey, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 underline decoration-cyan-500/30 decoration-wavy decoration-2">
                  {personal.name}
                </span>
                <span className="text-cyan-400">.</span>
              </h1>

              <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-200 mt-2">
                {personal.tagline}
              </h2>
            </div>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              {personal.shortBio}
            </p>

            {/* Developer Metadata Chip */}
            <div className="p-3 rounded-xl bg-[#0a0f24]/80 border border-white/8 backdrop-blur-md inline-flex items-center gap-3 font-mono text-xs text-slate-300 shadow-inner">
              <span className="text-violet-400 font-semibold">const</span>
              <span className="text-cyan-300">student</span>
              <span className="text-slate-400">=</span>
              <span className="text-amber-300">"{personal.role.split('|')[0].trim()}"</span>
              <span className="text-slate-500">;</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:from-violet-500 hover:to-cyan-600 border border-violet-400/40 shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Explore My Work</span>
                <ChevronRight className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-slate-200 bg-[#0d132b]/80 hover:bg-[#131b3e] border border-white/10 hover:border-cyan-400/60 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>Let's Connect</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </button>
            </div>

            {/* Quick Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/8 max-w-lg">
              <div className="space-y-1">
                <span className="font-heading text-lg sm:text-xl font-bold text-white">1st Year</span>
                <p className="text-xs text-slate-400 font-mono">BTech CSE</p>
              </div>
              <div className="space-y-1">
                <span className="font-heading text-lg sm:text-xl font-bold text-cyan-300">RBSE</span>
                <p className="text-xs text-slate-400 font-mono">Senior Secondary</p>
              </div>
              <div className="space-y-1">
                <span className="font-heading text-lg sm:text-xl font-bold text-violet-400">100%</span>
                <p className="text-xs text-slate-400 font-mono">Curiosity Driven</p>
              </div>
            </div>
          </div>

          {/* Right Column: 3D-Inspired Abstract Cyber Core Orb with Profile Image */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600/20 via-transparent to-cyan-500/20 blur-2xl animate-ambient-glow" />

              {/* Outer Cyber Ring 1 */}
              <div
                className="absolute inset-2 sm:inset-4 rounded-full border border-dashed border-violet-500/30 animate-spin-slow"
                style={{ animationDuration: '36s' }}
              />

              {/* Middle Cyber Ring with cyan tick marks */}
              <div
                className="absolute inset-8 sm:inset-12 rounded-full border border-cyan-500/30 animate-spin-reverse-slow"
                style={{ animationDuration: '28s' }}
              />

              {/* Tilted Ellipse Ring 1 */}
              <div
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-violet-400/40 pointer-events-none"
                style={{
                  transform: 'rotateX(65deg) rotateY(25deg)',
                  boxShadow: '0 0 25px rgba(139,92,246,0.3)',
                }}
              />

              {/* Tilted Ellipse Ring 2 (Counter) */}
              <div
                className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-cyan-400/40 pointer-events-none"
                style={{
                  transform: 'rotateX(25deg) rotateY(65deg)',
                  boxShadow: '0 0 25px rgba(6,182,212,0.3)',
                }}
              />

              {/* Central Abstract Digital Core Sphere with Profile Avatar */}
              <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl bg-gradient-to-br from-[#121938] via-[#090e24] to-[#040612] border border-cyan-400/40 shadow-[0_0_40px_rgba(139,92,246,0.4),inset_0_0_30px_rgba(6,182,212,0.25)] flex flex-col items-center justify-center p-3 backdrop-blur-xl group hover:border-cyan-300 transition-colors duration-500 animate-float overflow-hidden">
                {/* Profile Photo Avatar */}
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-violet-500/30 mb-2">
                  <img
                    src={personal.avatar || '/profile.jpg'}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black shadow-[0_0_6px_#34d399]" />
                </div>

                <span className="font-mono text-[11px] text-cyan-300 font-medium tracking-wide">
                  &lt;hetu.bhatt /&gt;
                </span>
                <span className="font-mono text-[9px] text-slate-400 mt-0.5">
                  Core CSE // 2029
                </span>

                {/* Corner Tech Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-cyan-400" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-cyan-400" />
              </div>

              {/* Orbiting Satellite Chip: C Language */}
              <div className="absolute -top-2 left-6 sm:left-10 px-3 py-1.5 rounded-lg bg-[#0e142e]/90 border border-violet-500/40 shadow-lg shadow-violet-500/20 backdrop-blur-md flex items-center gap-1.5 font-mono text-[11px] text-violet-300 animate-float">
                <Code2 className="w-3.5 h-3.5 text-violet-400" />
                <span>#include &lt;stdio.h&gt;</span>
              </div>

              {/* Orbiting Satellite Chip: Web */}
              <div
                className="absolute -bottom-3 right-6 sm:right-10 px-3 py-1.5 rounded-lg bg-[#0e142e]/90 border border-cyan-500/40 shadow-lg shadow-cyan-500/20 backdrop-blur-md flex items-center gap-1.5 font-mono text-[11px] text-cyan-300 animate-float"
                style={{ animationDelay: '2.5s' }}
              >
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>&lt;frontend_dev /&gt;</span>
              </div>

              {/* Orbiting Satellite Chip: AI */}
              <div
                className="absolute top-1/2 -right-4 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#0e142e]/90 border border-purple-500/40 shadow-md backdrop-blur-md flex items-center gap-1.5 font-mono text-[10px] text-purple-300 animate-float"
                style={{ animationDelay: '1.2s' }}
              >
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>AI.explore()</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center text-slate-400 hover:text-cyan-300 transition-colors">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-2"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono text-[11px] tracking-widest uppercase text-slate-400 group-hover:text-cyan-400 transition-colors">
              Scroll To Discover
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
              <div className="w-1.5 h-2.5 bg-gradient-to-b from-violet-400 to-cyan-400 rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
