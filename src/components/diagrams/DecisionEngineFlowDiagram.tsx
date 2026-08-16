import React from 'react';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldAlert, Cpu, ListOrdered, FileCode, CheckSquare } from 'lucide-react';

interface Props {
  className?: string;
}

export const DecisionEngineFlowDiagram: React.FC<Props> = ({ className = '' }) => {
  const steps = [
    { num: 'Step 1', title: 'Validate Context', desc: 'التحقق من اكتمال واتساق البيانات وسياق الحالة' },
    { num: 'Step 2', title: 'Apply Hard Stops', desc: 'استبعاد الإجراءات الممنوعة بوجود نزاع نشط أو موانع سياسية' },
    { num: 'Step 3', title: 'Check Decision Readiness', desc: 'فحص مستوى الجاهزية (DR-1 إلى DR-5) وتفعيل الامتناع عند النقص' },
    { num: 'Step 4', title: 'Determine Eligible Actions', desc: 'إنشاء Candidate Action Set من الخيارات المؤهلة والمسموحة' },
    { num: 'Step 5', title: 'Apply Persona Strategy', desc: 'مطابقة الحالة مع عائلة الاستراتيجيات المناسبة لـ Persona' },
    { num: 'Step 6', title: 'Apply Business Rules', desc: 'تطبيق قواعد وسياسات الأعمال (Policy & Contact Rules)' },
    { num: 'Step 7', title: 'Rank Eligible Actions', desc: 'ترتيب الخيارات وحساب صافي المنفعة والجدوى التشغيلية' },
    { num: 'Step 8', title: 'Generate NBCA', desc: 'إصدار التوصية (الإجراء + القناة + التوقيت + الحل + البديل + TTL)' },
    { num: 'Step 9', title: 'Generate Reason Codes', desc: 'توليد أكواد التفسير وبطاقة القرار الشفافة' },
    { num: 'Step 10', title: 'Log Decision', desc: 'توثيق القرار في سجل التدقيق لضمان قابلية التتبع وإعادة الإنتاج' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
            DECISION PIPELINE
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            المراحل الداخلية العشر لمحرك القرار (Decision Engine Workflow)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          10-Stage Sequential Decisioning Gate
        </span>
      </div>

      {/* Step by Step Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className="p-3 rounded-lg border border-slate-800 bg-slate-900/90 flex flex-col justify-between relative hover:border-amber-500/50 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {step.num}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">#{i + 1}</span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1" dir="ltr">
                {step.title}
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -left-2 top-1/2 -translate-y-1/2 z-20">
                <div className="w-4 h-4 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[10px] text-amber-400">
                  ←
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Principle Callout */}
      <div className="relative z-10 mt-4 p-3 rounded-lg border border-slate-800 bg-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="text-slate-300 font-medium">
            مبدأ المحرك: التحليل يقترح، والقواعد تقيد، والمحرك يقرر ضمن القيود.
          </span>
        </div>
        <span className="text-amber-300 font-mono font-semibold" dir="ltr">
          Analytics Proposes → Rules Constrain → Engine Decides
        </span>
      </div>
    </div>
  );
};
