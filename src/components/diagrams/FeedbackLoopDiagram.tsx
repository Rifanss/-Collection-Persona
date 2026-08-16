import React from 'react';
import { RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}

export const FeedbackLoopDiagram: React.FC<Props> = ({ className = '' }) => {
  const steps = [
    { en: 'Understand', ar: 'افهم العميل والسياق', color: 'border-sky-500 bg-sky-950/40 text-sky-200' },
    { en: 'Classify', ar: 'صنف الحالة في Persona', color: 'border-blue-500 bg-blue-950/40 text-blue-200' },
    { en: 'Quantify', ar: 'قِس الأبعاد بالـ Scores', color: 'border-indigo-500 bg-indigo-950/40 text-indigo-200' },
    { en: 'Assess', ar: 'قيّم الثقة والجاهزية', color: 'border-teal-500 bg-teal-950/40 text-teal-200' },
    { en: 'Decide', ar: 'قرر عبر محرك القرار', color: 'border-amber-500 bg-amber-950/40 text-amber-200' },
    { en: 'Act', ar: 'نفّذ الإجراء الأنسب', color: 'border-emerald-500 bg-emerald-950/40 text-emerald-200' },
    { en: 'Measure', ar: 'قِس النتيجة والأثر', color: 'border-cyan-500 bg-cyan-950/40 text-cyan-200' },
    { en: 'Learn', ar: 'تعلّم قبل القرار التالي', color: 'border-purple-500 bg-purple-950/40 text-purple-200' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded">
            LEARNING LIFECYCLE
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            دورة اتخاذ القرار والتعلم المستمر (Continuous Decision & Learning Loop)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Outcome as Evidence (New Evidence → New State)
        </span>
      </div>

      {/* 8 Stages Linear/Cyclic Flow */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((s, idx) => (
          <div
            key={s.en}
            className={`p-3.5 rounded-lg border ${s.color} relative flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono font-bold text-slate-300">0{idx + 1}</span>
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" dir="ltr">
                  {s.en}
                </span>
              </div>
              <p className="font-bold text-sm text-white">
                {s.ar}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-1.5">
              <span>المرحلة {idx + 1}</span>
              <span className="text-xs text-sky-400 font-bold">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Reassessment Banner */}
      <div className="relative z-10 mt-4 p-3.5 rounded-lg border border-purple-500/40 bg-purple-950/40 text-purple-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4 text-purple-300 shrink-0" />
          <span>
            <strong>حلقة التغذية العكسية المغلقة:</strong> كل نتيجة عملية (Outcome) تُسجل فورًا وتتحول إلى دليل جديد (Evidence) يُعيد ضبط فهم العميل والمؤشرات والقرار التالي.
          </span>
        </div>
        <div className="font-mono text-purple-300 font-bold whitespace-nowrap" dir="ltr">
          Persona(t+1) ≠ Persona(t)
        </div>
      </div>
    </div>
  );
};
