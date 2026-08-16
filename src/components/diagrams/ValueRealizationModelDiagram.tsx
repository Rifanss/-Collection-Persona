import React from 'react';
import { DollarSign, TrendingUp, Sparkles, PieChart, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface Props {
  className?: string;
}

export const ValueRealizationModelDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
            FINANCIAL & OPERATIONAL VALUE • CH-32
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            نموذج تحقيق القيمة والعائد على الاستثمار (ROI & Value Realization Model)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Direct Recovery + Operational Efficiency
        </span>
      </div>

      {/* Dual Value Pillars */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
        {/* Pillar 1: Financial Recovery */}
        <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/20 text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-emerald-500/30 mb-2.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <strong className="text-white text-xs sm:text-sm">1. العائد المالي المباشر (Financial Recovery)</strong>
            </div>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>خفض معدلات الترحيل (Roll-rate Reduction):</strong> معالجة مبكرة للحالات القابلة للحل.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>رفع معدل استرداد المديونيات المتعثرة (Cash Recovery Rate):</strong> تخصيص الحل للقدرة الفعلية.</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                <span><strong>تحسين نسبة الالتزام بالوعود (Promise Kept Ratio - PKR):</strong> اشتراط دفعات تأكيد واقعية.</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 pt-2 border-t border-emerald-500/30 font-mono text-[10px] text-emerald-300 text-center">
            Target: +12% to +22% Higher Sustainable Cash Recovery
          </div>
        </div>

        {/* Pillar 2: Operational Efficiency */}
        <div className="p-3.5 rounded-lg border border-sky-500/40 bg-sky-950/20 text-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-2 border-b border-sky-500/30 mb-2.5">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <strong className="text-white text-xs sm:text-sm">2. الكفاءة التشغيلية والتجربة (Efficiency & CX)</strong>
            </div>
            <ul className="space-y-1.5 text-slate-300 text-[11px]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span><strong>خفض تكلفة الاتصال للحالة (Cost-to-Collect):</strong> أتمتة المسارات الرقمية الذاتية (CP-07).</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span><strong>تقليص النزاعات والشكاوى المصرفية:</strong> فرز حالات الاعتراض وعزلها فورًا (CP-06).</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                <span><strong>زيادة إنتاجية المفاوض البشري:</strong> تركيز الجهد على الحالات المعقدة (CP-08) والمتعثرة.</span>
              </li>
            </ul>
          </div>
          <div className="mt-3 pt-2 border-t border-sky-500/30 font-mono text-[10px] text-sky-300 text-center">
            Target: -30% Outbound Call Overhead • +40% Digital Share
          </div>
        </div>
      </div>
    </div>
  );
};
