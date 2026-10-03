import React from 'react';
import { GraduationCap, MapPin, Sparkles, BookOpen, Terminal, Code, Cpu, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-16">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>[01] // ABOUT ME</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Curiosity Driven, <span className="gradient-text-cyan">Foundation Focused</span>.
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
          An honest snapshot of who I am, my current academic stage, and my engineering aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Editorial Column: Profile Photo Card & Code Console */}
        <div className="lg:col-span-5 space-y-6">
          {/* Cyberpunk Framed Profile Photo Card */}
          <div className="relative glass-panel rounded-2xl p-3 border border-white/10 group hover:border-cyan-400/50 transition-all duration-500 overflow-hidden shadow-[0_15px_35px_-10px_rgba(0,0,0,0.7)]">
            {/* Top Glowing Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 z-20" />

            {/* Cyber Corner Bracket Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 z-20" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 z-20" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 z-20" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 z-20" />

            <div className="relative aspect-[4/4.6] rounded-xl overflow-hidden bg-[#070b1f]">
              <img
                src={personal.avatar || '/profile.jpg'}
                alt={personal.name}
                className="w-full h-full object-cover object-top filter brightness-100 contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-[#050814]/30 to-transparent opacity-90" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>First-Year Active</span>
              </div>

              {/* Monogram Stamp */}
              <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-cyan-400/40 flex items-center justify-center font-heading font-black text-sm text-cyan-300 shadow-lg">
                {personal.monogram}
              </div>

              {/* Bottom Card Identity Details */}
              <div className="absolute bottom-3 left-4 right-4 z-10 text-left">
                <h3 className="font-heading font-bold text-2xl text-white drop-shadow-md">
                  {personal.name}
                </h3>
                <p className="text-xs font-mono text-cyan-300 drop-shadow">
                  {personal.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono mt-1 drop-shadow">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                  <span>{personal.education.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Academic Foundation Card */}
          <div className="glass-panel rounded-2xl p-6 border border-white/8 space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Degree &amp; Program</h4>
                <p className="text-sm font-medium text-slate-200">{personal.education.degree}</p>
                <p className="text-xs text-slate-400">{personal.education.major}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Academic Foundation</h4>
                <p className="text-sm font-medium text-slate-200">{personal.education.seniorSecondary}</p>
                <p className="text-xs text-slate-400">RBSE • Banswada, Rajasthan</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Engineering Stage</h4>
                <p className="text-sm font-medium text-slate-200">{personal.stage}</p>
                <p className="text-xs text-slate-400">{personal.classYear}</p>
              </div>
            </div>
          </div>

          {/* Interactive Code Console Card */}
          <div className="glass-panel rounded-2xl p-5 border border-white/8 relative">
            <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70"></span>
                <span className="ml-2 text-slate-400">journey_init.c</span>
              </div>
              <span className="text-[10px] text-cyan-400">C99</span>
            </div>
            <pre className="mt-3 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed p-1 text-left">
              <code>
                <span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;stdio.h&gt;</span>{'\n'}
                <span className="text-cyan-400">int</span> <span className="text-yellow-300">main</span>() &#123;{'\n'}
                {'  '}<span className="text-slate-400">// First-year student, infinite curiosity</span>{'\n'}
                {'  '}<span className="text-yellow-300">printf</span>(<span className="text-emerald-300">"Learning Today. Building Tomorrow.\n"</span>);{'\n'}
                {'  '}<span className="text-purple-400">return</span> <span className="text-amber-400">0</span>;{'\n'}
                &#125;
              </code>
            </pre>
          </div>
        </div>

        {/* Right Story & Editable Information Cards */}
        <div className="lg:col-span-7 space-y-6 text-left">
          {/* Main Editorial Text */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
            <h3 className="font-heading text-xl sm:text-2xl font-semibold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Building Strong Foundations from Day One
            </h3>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              {personal.fullBio.map((paragraph, idx) => (
                <p key={idx} className="text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/8 flex flex-wrap gap-2">
              {personal.interests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
                >
                  #{interest}
                </span>
              ))}
            </div>
          </div>

          {/* 3 Modular Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel rounded-xl p-5 border border-white/8 hover:border-violet-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 flex items-center justify-center mb-3">
                <Code className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-semibold text-white text-base">Software Dev</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Passionate about clean code, logical architecture, and solving real user problems.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-5 border border-white/8 hover:border-cyan-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-semibold text-white text-base">AI &amp; Tech</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Exploring generative tools, prompt crafting, and intelligent systems shaping tomorrow.
              </p>
            </div>

            <div className="glass-panel rounded-xl p-5 border border-white/8 hover:border-emerald-500/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <BookOpen className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-semibold text-white text-base">Growth Mindset</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Committed to daily practice, documentation, and continuous technical exploration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
