import React from 'react';
import { publicationMeta } from '../data/publicationData';
import { Layers, ShieldCheck, Cpu, Database, Award } from 'lucide-react';

export const PrintCoverPage: React.FC = () => {
  return (
    <div className="a4-screen-page print-page bg-slate-950 text-slate-100 flex flex-col justify-between p-5 sm:p-8 md:p-14 relative overflow-hidden page-break-after border-none shadow-2xl">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />
      
      {/* Decorative technical corner accents */}
      <div className="hidden sm:block absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-sky-400/50" />
      <div className="hidden sm:block absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-sky-400/50" />
      <div className="hidden sm:block absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-sky-400/50" />
      <div className="hidden sm:block absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-sky-400/50" />

      {/* Top Metadata Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
            ™COLLECTION PERSONA FRAMEWORK
          </span>
          <span className="text-[11px] sm:text-xs text-slate-400 font-mono">EDITION 2026</span>
        </div>
        <div className="text-[11px] sm:text-xs text-slate-400 font-mono text-left" dir="ltr">
          APPLIED RESEARCH PUBLICATION
        </div>
      </div>

      {/* Center Title Block */}
      <div className="relative z-10 my-auto py-6 sm:py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold rounded-full bg-slate-800/90 text-sky-400 border border-slate-700 mb-4 sm:mb-6">
          <Layers className="w-3.5 h-3.5" />
          <span>منظومة دعم القرار والتحليل متعدد الأبعاد للتحصيل المصرفي</span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-3 sm:mb-4">
          {publicationMeta.title}
        </h1>

        <p className="text-sm sm:text-lg md:text-xl text-sky-200/90 font-medium leading-relaxed max-w-3xl mb-6 sm:mb-8">
          {publicationMeta.subtitle}
        </p>

        {/* Blueprint Summary Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-800/80">
          <div className="p-2.5 sm:p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono">CORE MODEL</div>
            <div className="font-bold text-xs sm:text-sm text-white mt-0.5">8 Personas (CP-01..08)</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono">ARCHITECTURE</div>
            <div className="font-bold text-xs sm:text-sm text-white mt-0.5">8 Integrated Layers</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono">GOVERNANCE</div>
            <div className="font-bold text-xs sm:text-sm text-white mt-0.5">Decision Readiness & Logs</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-slate-900/80 border border-slate-800">
            <div className="text-[10px] sm:text-xs text-slate-400 font-mono">CYCLE</div>
            <div className="font-bold text-xs sm:text-sm text-white mt-0.5">Continuous Learning Loop</div>
          </div>
        </div>
      </div>

      {/* Footer Author & Edition */}
      <div className="relative z-10 pt-4 sm:pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="text-[11px] sm:text-xs text-slate-400">إعداد وتأليف:</div>
          <div className="text-base sm:text-lg font-bold text-white">{publicationMeta.author}</div>
          <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{publicationMeta.type}</div>
        </div>
        <div className="text-right sm:text-left font-mono text-[11px] sm:text-xs text-slate-400" dir="ltr">
          <div>ISBN / Registered Classification (2026)</div>
          <div className="text-sky-400 font-semibold mt-0.5">Saudi / Regional Banking Benchmark</div>
        </div>
      </div>
    </div>
  );
};
