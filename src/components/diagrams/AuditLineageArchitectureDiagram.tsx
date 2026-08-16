import React from 'react';
import { History, ShieldCheck, FileCheck, CheckCircle2, Lock, Eye, ArrowLeft } from 'lucide-react';

interface Props {
  className?: string;
}

export const AuditLineageArchitectureDiagram: React.FC<Props> = ({ className = '' }) => {
  const steps = [
    {
      step: '01',
      title: 'بصمة البيانات الخام (Data Snapshot Hash)',
      desc: 'حفظ بصمة تشفيرية لحالة بيانات العميل والمديونية لحظة صدور التوصية لمنع التلاعب وضمان التطابق.',
      badge: 'Data Integrity',
    },
    {
      step: '02',
      title: 'سجل الميزات والتصنيف (Feature & Persona Log)',
      desc: 'توثيق قيم الميزات المستخرجة، ونسبة الثقة (Confidence %)، وكود الشخصية المعتمدة (CP-01..08).',
      badge: 'Feature Lineage',
    },
    {
      step: '03',
      title: 'سجل بوابات القرار والموانع (Gate Evaluation)',
      desc: 'تسجيل نتائج فحص بوابات الجاهزية (DR-1 إلى DR-5) وموانع التحصيل الإلزامية (Hard Stops).',
      badge: 'Rule Audit',
    },
    {
      step: '04',
      title: 'حزمة قرار NBCA وأكواد التفسير (Decision Package)',
      desc: 'إصدار الإجراء، القناة، التوقيت، وأكواد الأسباب التفسيرية (Reason Codes) ومدة الصلاحية (TTL).',
      badge: 'Explainable NBCA',
    },
    {
      step: '05',
      title: 'التقاط النتيجة وإعادة التعلم (Outcome Feedback)',
      desc: 'تسجيل استجابة العميل الفعلية وتغذية حلقة التعلم المستمر لتحديث الفهم والمؤشرات.',
      badge: 'Continuous Loop',
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
            AUDIT ARCHITECTURE • CH-36..37
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            سلسلة التتبع والتدقيق وسجل شفرات التفسير (Immutable Decision Lineage & Audit Trail)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Regulatory Compliance & Lineage
        </span>
      </div>

      {/* 5 Steps Linear Chain */}
      <div className="relative z-10 space-y-2 text-xs">
        {steps.map((st) => (
          <div key={st.step} className="p-3 rounded-lg bg-slate-900/90 border border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-start sm:items-center gap-2.5">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                {st.step}
              </span>
              <div>
                <strong className="text-white text-xs sm:text-sm block">{st.title}</strong>
                <p className="text-slate-300 text-[11px] mt-0.5">{st.desc}</p>
              </div>
            </div>
            <div className="self-end sm:self-center font-mono text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-cyan-300 shrink-0">
              {st.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
