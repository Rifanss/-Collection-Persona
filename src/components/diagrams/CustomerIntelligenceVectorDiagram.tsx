import React from 'react';
import { Brain, Layers, Gauge, Shield, Award, ArrowUpRight } from 'lucide-react';

interface Props {
  className?: string;
}

export const CustomerIntelligenceVectorDiagram: React.FC<Props> = ({ className = '' }) => {
  const dimensions = [
    {
      num: 'Dim 1',
      title: 'القدرة المالية على السداد (Financial Capacity)',
      score: '0 - 100',
      desc: 'حجم الدخل الفعلي مقارنة بالالتزامات الشهرية والسيولة النقدية المتاحة.',
      color: 'border-emerald-500/40 text-emerald-300',
    },
    {
      num: 'Dim 2',
      title: 'الرغبة في المعالجة والتعاون (Willingness)',
      score: '0 - 100',
      desc: 'مستوى الجدية، المبادرة، والتاريخ السابق للوفاء بالالتزامات والتواصل الإيجابي.',
      color: 'border-blue-500/40 text-blue-300',
    },
    {
      num: 'Dim 3',
      title: 'سرعة وجودة الاستجابة (Responsiveness)',
      score: '0 - 100',
      desc: 'معدل التجاوب مع التنبيهات، زمن الرد على المراسلات، وتأكيد المواعيد.',
      color: 'border-cyan-500/40 text-cyan-300',
    },
    {
      num: 'Dim 4',
      title: 'مستوى التعقيد والتداخل (Complexity & Friction)',
      score: '0 - 100',
      desc: 'تعدد المنتجات المتعثرة، وجود نزاعات قائمة، أو متطلبات تسوية هيكلية.',
      color: 'border-purple-500/40 text-purple-300',
    },
    {
      num: 'Dim 5',
      title: 'الاستعداد والجاهزية الرقمية (Digital Readiness)',
      score: '0 - 100',
      desc: 'مدى الاعتماد على التطبيق والقنوات الذاتية وتفضيل الدفع الرقمي الفوري.',
      color: 'border-sky-500/40 text-sky-300',
    },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded">
            INTELLIGENCE BLUEPRINT • CH-05
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            المتجه السلوكي والمالي الخماسي لذكاء العميل (5-D Customer Intelligence Vector)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Layer 2 Multi-Dimensional Profiling
        </span>
      </div>

      {/* 5 Dimensions Vector Stack */}
      <div className="relative z-10 space-y-2.5">
        {dimensions.map((d, i) => (
          <div key={d.num} className={`p-3 rounded-lg border ${d.color} bg-slate-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs`}>
            <div className="flex items-start sm:items-center gap-2.5">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                {d.num}
              </span>
              <div>
                <strong className="text-sm text-white block">{d.title}</strong>
                <p className="text-slate-300 mt-0.5">{d.desc}</p>
              </div>
            </div>
            <div className="self-end sm:self-center font-mono text-[11px] px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-sky-400 font-bold shrink-0">
              Score: {d.score}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
