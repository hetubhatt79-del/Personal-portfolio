import React from 'react';
import { Radar, Activity } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { RadarItem } from '../data/portfolioData';

export const CurrentlyExploring: React.FC = () => {
  const { currentlyExploring } = portfolioData;

  const renderVisualElement = (type: RadarItem['type']) => {
    switch (type) {
      case 'terminal':
        return (
          <div className="rounded-lg bg-[#060a1e] border border-violet-500/30 p-2.5 font-mono text-[11px] text-slate-300 space-y-1">
            <div className="flex items-center justify-between text-[10px] text-slate-500 pb-1 border-b border-white/5">
              <span>memory_inspect.c</span>
              <span className="text-violet-400">gcc -Wall</span>
            </div>
            <p className="text-slate-400">$ ./pointer_lab</p>
            <p className="text-emerald-400">&gt; address: 0x7ffd9b • val: 42</p>
            <p className="text-cyan-300 flex items-center gap-1">
              <span>&gt; memory alloc</span>
              <span className="w-1.5 h-3 bg-cyan-400 inline-block animate-pulse" />
            </p>
          </div>
        );
      case 'visual':
        return (
          <div className="rounded-lg bg-[#060a1e] border border-cyan-500/30 p-3 flex flex-col gap-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
              <span>CSS Grid &amp; Modern Flex</span>
              <span>100% Fluid</span>
            </div>
            {/* Animated Layout Wireframe */}
            <div className="grid grid-cols-3 gap-1.5 h-12">
              <div className="bg-violet-600/30 border border-violet-400/40 rounded flex items-center justify-center text-[9px] font-mono text-violet-300">
                flex: 1
              </div>
              <div className="col-span-2 bg-cyan-600/25 border border-cyan-400/40 rounded flex items-center justify-center text-[9px] font-mono text-cyan-300 animate-pulse">
                grid-col: 2 / span 2
              </div>
            </div>
          </div>
        );
      case 'nodes':
        return (
          <div className="rounded-lg bg-[#060a1e] border border-emerald-500/30 p-3 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-emerald-400 block">Prompt Crafting</span>
              <span className="text-xs font-mono text-slate-300">Context &rarr; Persona &rarr; Prompt</span>
            </div>
            {/* Mini Neural Node Cluster */}
            <div className="relative w-12 h-10 flex items-center justify-center">
              <div className="absolute w-2 h-2 rounded-full bg-cyan-400 top-1 left-1 animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_8px_#a855f7]" />
              <div className="absolute w-2 h-2 rounded-full bg-emerald-400 bottom-1 right-1" />
              <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin-slow" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center sm:items-start mb-14">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 mb-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20">
          <Radar className="w-3.5 h-3.5 animate-spin-slow" />
          <span>[07] // WHAT'S ON MY RADAR</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Currently Exploring <span className="gradient-text-cyan">&amp; Deepening</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl text-left">
          A real-time snapshot of the conceptual domains, technical problems, and tools commanding my attention right now.
        </p>
      </div>

      {/* 3 Featured Radar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentlyExploring.map((item: RadarItem) => (
          <div
            key={item.id}
            className="group relative glass-panel rounded-2xl p-7 border border-white/8 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.25)] flex flex-col justify-between text-left"
          >
            {/* Top Accent Strip */}
            <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 opacity-70 group-hover:opacity-100 transition-opacity" />

            <div>
              {/* Header with Status Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                  {item.status}
                </span>

                <span className="font-mono text-xs text-slate-500">
                  FOCUS
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-violet-400 mt-1 mb-3">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Mini Animated Visual Element */}
              <div className="mb-6">
                {renderVisualElement(item.type)}
              </div>
            </div>

            {/* Topics Covered */}
            <div className="pt-4 border-t border-white/8">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                Active Study Topics
              </span>
              <div className="flex flex-wrap gap-1.5">
                {item.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/8 text-slate-300 group-hover:border-cyan-500/30 group-hover:text-cyan-200 transition-colors"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
