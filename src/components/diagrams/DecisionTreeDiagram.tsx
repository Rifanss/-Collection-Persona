import React from 'react';
import { GitFork, Check, X, ArrowDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const DecisionTreeDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
            DECISION TREE SPECIFICATION
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            شجرة القرار المرجعية (Reference Decision Tree Logic)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Appendix (ز) Reference
        </span>
      </div>

      {/* Tree Nodes Flow */}
      <div className="relative z-10 space-y-3 font-mono text-xs">
        {/* Node 1 */}
        <div className="p-3 rounded-lg border border-slate-700 bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-800 text-sky-400 flex items-center justify-center font-bold">1</span>
            <span className="font-bold text-white text-sm">هل البيانات الأساسية كافية وحديثة؟ (?Are required data available)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded">
              لا [NO] → DR-3 Information Required
            </span>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
              نعم [YES] ↓
            </span>
          </div>
        </div>

        {/* Node 2 */}
        <div className="p-3 rounded-lg border border-slate-700 bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold">2</span>
            <span className="font-bold text-white text-sm">هل توجد حالة تمنع القرار الاعتيادي؟ (?Is there a hard-stop condition)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded">
              نعم [YES] → Exception / Specialist Route
            </span>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
              لا [NO] ↓
            </span>
          </div>
        </div>

        {/* Node 3 */}
        <div className="p-3 rounded-lg border border-slate-700 bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-800 text-teal-400 flex items-center justify-center font-bold">3</span>
            <span className="font-bold text-white text-sm">هل Decision Readiness تسمح بالإجراء؟ (?Is Decision Readiness sufficient)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-1 bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded">
              لا [NO] → Review / Wait / Collect Data
            </span>
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
              نعم [YES] ↓
            </span>
          </div>
        </div>

        {/* Node 4 */}
        <div className="p-3.5 rounded-lg border border-emerald-500/50 bg-emerald-950/30">
          <div className="font-bold text-emerald-300 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">4</span>
            <span>مسار اتخاذ القرار التشغيلي وإصدار NBCA:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-slate-300 text-[11px]">
            <div className="p-2 rounded bg-slate-900 border border-slate-800">1. Identify Persona & Read Scores</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">2. Determine Eligible Actions</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">3. Apply Business Rules</div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800">4. Rank & Generate NBCA + Reason Codes</div>
          </div>
        </div>
      </div>
    </div>
  );
};
