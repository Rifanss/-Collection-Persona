import React from 'react';
import { Database, FileCode, CheckCircle2, ShieldCheck, Activity, Smartphone, Landmark, History } from 'lucide-react';

interface Props {
  className?: string;
}

export const DataTaxonomyDiagram: React.FC<Props> = ({ className = '' }) => {
  const dataDimensions = [
    {
      title: 'البيانات المالية والائتمانية',
      enTitle: 'Financial & Credit Data',
      icon: Landmark,
      color: 'border-sky-500/40 text-sky-300',
      badge: 'D-01',
      items: ['قيمة المديونية ونوع المنتج', 'التدفقات النقدية وتحويل الراتب', 'التاريخ الائتماني (SIMAH)', 'نسبة الاستقطاع والالتزامات'],
    },
    {
      title: 'البيانات السلوكية والأنماط',
      enTitle: 'Behavioral & Action Data',
      icon: Activity,
      color: 'border-indigo-500/40 text-indigo-300',
      badge: 'D-02',
      items: ['الاستجابة للاتصالات والمراسلات', 'سجل الوفاء بالوعود (PTP)', 'طبيعة الردود والاعتراضات', 'تكرار التأخر ومواسم التعثر'],
    },
    {
      title: 'البيانات الرقمية وتفاعل القنوات',
      enTitle: 'Digital & Channel Data',
      icon: Smartphone,
      color: 'border-cyan-500/40 text-cyan-300',
      badge: 'D-03',
      items: ['معدل تسجيل الدخول للتطبيق', 'الاستجابة لروابط الدفع الرقمي', 'القناة المفضلة تاريخيًا للتواصل', 'زمن الاستجابة للرسائل التفاعلية'],
    },
    {
      title: 'البيانات الديموغرافية والمهنية',
      enTitle: 'Demographic & Employment Data',
      icon: History,
      color: 'border-teal-500/40 text-teal-300',
      badge: 'D-04',
      items: ['قطاع العمل (حكومي / خاص / أعمال)', 'المدينة والمنطقة الجغرافية', 'مدة الخدمة والاستقرار الوظيفي', 'قنوات الاتصال المحدثة المعتمدة'],
    },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded">
            DATA BLUEPRINT • CH-04
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            تصنيف أبعاد طبقة البيانات ومصادر التغذية (Multi-Source Ingestion Taxonomy)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Layer 1 Data Architecture
        </span>
      </div>

      {/* 4 Dimensions Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {dataDimensions.map((dim) => {
          const Icon = dim.icon;
          return (
            <div key={dim.badge} className={`p-3.5 rounded-lg border ${dim.color} bg-slate-900/80 flex flex-col justify-between`}>
              <div>
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <strong className="text-xs sm:text-sm text-white">{dim.title}</strong>
                  </div>
                  <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-400">
                    {dim.badge}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 mb-2" dir="ltr">
                  {dim.enTitle}
                </div>
                <ul className="space-y-1 text-xs text-slate-300">
                  {dim.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quality Gate Bar */}
      <div className="relative z-10 p-2.5 rounded bg-slate-900 border border-slate-800 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-300">
        <span className="font-bold text-sky-300">ضوابط سلامة البيانات (Data Quality & Freshness):</span>
        <div className="flex flex-wrap gap-2 text-[11px] font-mono">
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">Completeness &gt; 90%</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">Freshness &lt; 24h</span>
          <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300">Lineage Verified</span>
        </div>
      </div>
    </div>
  );
};
