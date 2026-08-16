import React from 'react';
import { Filter, AlertOctagon, TrendingDown, Target, Zap, ArrowDown } from 'lucide-react';

interface Props {
  className?: string;
}

export const CollectionsProblemFunnelDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
            PROBLEM DIAGNOSTIC • CH-03
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            مخطط هدر التحصيل التقليدي واختناقات القرار (The Operational Friction Funnel)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Friction Points & Loss Analysis
        </span>
      </div>

      {/* Diagnostic Steps */}
      <div className="relative z-10 space-y-2.5 text-xs">
        <div className="p-3 rounded-lg bg-slate-900/90 border border-rose-500/30 flex items-start gap-3">
          <div className="w-7 h-7 rounded bg-rose-500/20 text-rose-300 border border-rose-500/40 flex items-center justify-center font-mono font-bold shrink-0">
            01
          </div>
          <div className="flex-1">
            <strong className="text-rose-300 text-sm block">المعاملة الموحدة للعملاء المتباينين (Choice & Tone Mismatch)</strong>
            <p className="text-slate-300 mt-0.5">
              تطبيق أسلوب الاتصال الضاغط نفسه على العميل المتعاون (CP-01) وعلى المتنازع (CP-06)، مما يخلق احتكاكًا غير ضروري ويزيد من معدل رفض المكالمات.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-amber-500/30 flex items-start gap-3">
          <div className="w-7 h-7 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-mono font-bold shrink-0">
            02
          </div>
          <div className="flex-1">
            <strong className="text-amber-300 text-sm block">حلقة الوعود الهشة المفرغة (The Broken Promise Loop)</strong>
            <p className="text-slate-300 mt-0.5">
              قبول وعود سداد شفهية من نمط التأجيل المتكرر (CP-04) دون دفعة تأكيد أولية، مما يؤدي لتأجيل التعثر وتراكم المديونية دون معالجة جذرية.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-indigo-500/30 flex items-start gap-3">
          <div className="w-7 h-7 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center justify-center font-mono font-bold shrink-0">
            03
          </div>
          <div className="flex-1">
            <strong className="text-indigo-300 text-sm block">إغفال القنوات الرقمية الذاتية (Neglected Self-Service Channels)</strong>
            <p className="text-slate-300 mt-0.5">
              إرهاق فرق التحصيل البشري بالاتصال بعملاء رقميين (CP-07) يفضلون روابط الدفع والإشعارات الفورية على تطبيق البنك، مما يرفع تكلفة التحصيل دون داعٍ.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-500/40 bg-emerald-950/20 flex items-start gap-3">
          <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center font-mono font-bold shrink-0">
            ✓
          </div>
          <div className="flex-1">
            <strong className="text-emerald-300 text-sm block">حل نموذج Collection Persona المعتمد</strong>
            <p className="text-slate-200 mt-0.5">
              توجيه كل حالة إلى مسارها المخصص (تخصيص القناة، التوقيت، ونوع الحل) مع استبعاد الموانع مسبقًا عبر بوابات الجاهزية (Decision Readiness).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
