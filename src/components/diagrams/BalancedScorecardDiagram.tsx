import React from 'react';
import { DollarSign, Activity, UserCheck, ShieldCheck } from 'lucide-react';

interface Props {
  className?: string;
}

export const BalancedScorecardDiagram: React.FC<Props> = ({ className = '' }) => {
  const pillars = [
    {
      title: 'الأثر المالي (Financial Impact)',
      icon: DollarSign,
      color: 'border-emerald-500/50 bg-emerald-950/30 text-emerald-300',
      badge: 'bg-emerald-500/20 text-emerald-300',
      metrics: [
        { name: 'Recovery Rate', desc: 'معدل التحصيل من إجمالي المديونيات المؤهلة' },
        { name: 'Incremental Recovery', desc: 'الأثر التحصيلي الإضافي مقارنة بالمجموعة الضابطة' },
        { name: 'Cost-to-Collect', desc: 'تكلفة التحصيل التشغيلية لكل ريال محصل' },
        { name: 'Resolution Value', desc: 'إجمالي القيمة المستردة عبر التسويات المستدامة' },
      ],
    },
    {
      title: 'الكفاءة التشغيلية (Operational Efficiency)',
      icon: Activity,
      color: 'border-sky-500/50 bg-sky-950/30 text-sky-300',
      badge: 'bg-sky-500/20 text-sky-300',
      metrics: [
        { name: 'Attempts per Resolution (APR)', desc: 'عدد المحاولات اللازمة لإنجاز كل تسوية' },
        { name: 'Time to Resolution', desc: 'الزمن المستغرق من بدء التعثر حتى الإغلاق' },
        { name: 'Right-Party Contact Rate', desc: 'نسبة الوصول الفعلي للعميل المعني' },
        { name: 'Promise Kept Rate', desc: 'نسبة الوعود الموفى بها إلى الوعود المستحقة' },
      ],
    },
    {
      title: 'نتائج وتجربة العميل (Customer Outcome)',
      icon: UserCheck,
      color: 'border-indigo-500/50 bg-indigo-950/30 text-indigo-300',
      badge: 'bg-indigo-500/20 text-indigo-300',
      metrics: [
        { name: 'Digital Completion Rate', desc: 'نسبة إتمام التسويات ذاتياً عبر القنوات الرقمية' },
        { name: 'Unproductive Contacts', desc: 'خفض تكرار الاتصالات غير المجدية وتجنب الإرهاق' },
        { name: 'Complaints Reduction', desc: 'تقليل الشكاوى المرتبطة بالتحصيل والمضايقة' },
        { name: 'Solution Sustainability', desc: 'استدامة الحلول وعدم العودة للتعثر (Re-default)' },
      ],
    },
    {
      title: 'جودة وحوكمة النموذج (Model & Governance)',
      icon: ShieldCheck,
      color: 'border-amber-500/50 bg-amber-950/30 text-amber-300',
      badge: 'bg-amber-500/20 text-amber-300',
      metrics: [
        { name: 'Confidence Distribution', desc: 'توزيع مستويات الثقة في قرارات النموذج' },
        { name: 'Override Rate & Reasons', desc: 'معدل التجاوز البشري وتحليل أسبابه المنظمة' },
        { name: 'Persona Stability', desc: 'استقرار تصنيف الشخصيات ومنع التذبذب العشوائي' },
        { name: 'Guardrail Enforcement', desc: 'الالتزام الصارم بسقوف الشكاوى وموانع التحصيل' },
      ],
    },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
            MEASUREMENT FRAMEWORK
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            لوحة قياس التحصيل المتوازنة (Balanced Collection Scorecard)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          4 Holistic Performance Pillars
        </span>
      </div>

      {/* 4 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {pillars.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${p.color} bg-slate-900/80 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-slate-800">
                <div className={`w-7 h-7 rounded-lg ${p.badge} flex items-center justify-center shrink-0`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white">
                  {p.title}
                </h4>
              </div>

              <div className="space-y-2">
                {p.metrics.map((m, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs gap-1 p-1.5 rounded bg-slate-950/60 border border-slate-800/80">
                    <span className="font-mono font-semibold text-slate-200" dir="ltr">
                      {m.name}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Guardrail Note */}
      <div className="relative z-10 mt-4 p-3 rounded-lg border border-slate-800 bg-slate-900/60 text-xs text-slate-300 flex items-center justify-between gap-2">
        <span>
          <strong>مبدأ التوازن:</strong> لا يُعتبر النموذج ناجحًا إذا ارتفع المؤشر المالي على حساب تدهور رضا العملاء أو ارتفاع معدلات الشكاوى والإرهاق.
        </span>
        <span className="text-teal-300 font-mono text-[11px] font-semibold whitespace-nowrap" dir="ltr">
          Guardrail Protected
        </span>
      </div>
    </div>
  );
};
