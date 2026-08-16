import React from 'react';
import { Gauge, Calculator, CheckSquare, Layers, Award } from 'lucide-react';

interface Props {
  className?: string;
}

export const PersonaScoringFrameworkDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded">
            SCORING BLUEPRINT • CH-16..18
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            هيكلية التقييم الكمي المقسم ومحددات الأولوية (Persona Scoring Framework)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Layer 4 Sub-Scores & Priority Matrix
        </span>
      </div>

      {/* Sub-Scores Decomposition */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 mb-3 text-xs text-center font-mono">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-500/40">
          <span className="text-slate-400 block text-[10px]">CAPACITY SCORE</span>
          <strong className="text-emerald-300 text-sm block my-1">CS (0-100)</strong>
          <span className="text-[10px] text-slate-400 font-sans">القدرة المالية الصافية</span>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-blue-500/40">
          <span className="text-slate-400 block text-[10px]">WILLINGNESS SCORE</span>
          <strong className="text-blue-300 text-sm block my-1">WS (0-100)</strong>
          <span className="text-[10px] text-slate-400 font-sans">الرغبة والتفاعل الإيجابي</span>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-cyan-500/40">
          <span className="text-slate-400 block text-[10px]">RESPONSE SCORE</span>
          <strong className="text-cyan-300 text-sm block my-1">RS (0-100)</strong>
          <span className="text-[10px] text-slate-400 font-sans">سرعة وجودة الاستجابة</span>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-purple-500/40">
          <span className="text-slate-400 block text-[10px]">COMPLEXITY SCORE</span>
          <strong className="text-purple-300 text-sm block my-1">XS (0-100)</strong>
          <span className="text-[10px] text-slate-400 font-sans">درجة التداخل والنزاع</span>
        </div>
        <div className="p-3 rounded-lg bg-slate-900/90 border border-sky-500/40 col-span-2 sm:col-span-1 md:col-span-1">
          <span className="text-slate-400 block text-[10px]">DIGITAL SCORE</span>
          <strong className="text-sky-300 text-sm block my-1">DS (0-100)</strong>
          <span className="text-[10px] text-slate-400 font-sans">الجاهزية الرقمية الذاتية</span>
        </div>
      </div>

      {/* Priority Score Output */}
      <div className="relative z-10 p-3 rounded-lg bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-violet-600 text-white font-mono font-bold text-[11px]">
            PRIORITY TIERS
          </span>
          <span className="text-slate-300">مستويات الأولوية التشغيلية:</span>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-600/40">P1: Urgent Action</span>
          <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-600/40">P2: Moderate Flow</span>
          <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-600/40">P3: Digital Self-Service</span>
          <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">P4: Strategic Hold</span>
        </div>
      </div>
    </div>
  );
};
