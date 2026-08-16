import React from 'react';
import { Calendar, CheckCircle2, AlertOctagon } from 'lucide-react';

interface Props {
  className?: string;
}

export const ImplementationRoadmapTimeline: React.FC<Props> = ({ className = '' }) => {
  const phases = [
    { weeks: 'Weeks 1–4', phase: 'المرحلة 1: Discovery & Scoping', desc: 'تحديد Use Case، المحفظة المستهدفة، قياس Baseline، وإعداد وثيقة المشروع (Charter).', deliverable: 'Project Charter & Baseline Report' },
    { weeks: 'Weeks 5–8', phase: 'المرحلة 2: Data Readiness', desc: 'جرد البيانات، اختبار الجودة، صياغة Feature Dictionary، وتوثيق Data Lineage.', deliverable: 'Validated Analytical Dataset' },
    { weeks: 'Weeks 9–12', phase: 'المرحلة 3: Persona Discovery', desc: 'ورش عمل الخبراء، التحليل الاستكشافي، تحديد Personas وبطاقاتها، ومنطق الانتقال.', deliverable: 'Persona Model v1.0' },
    { weeks: 'Weeks 13–16', phase: 'المرحلة 4: Scoring & Decision Architecture', desc: 'بناء وحساب Modular Scores، معايرة الثقة، صياغة Business Rules، وهندسة محرك القرار.', deliverable: 'Decision Engine v1.0' },
    { weeks: 'Weeks 17–20', phase: 'المرحلة 5-7: Prototype & Shadow Mode', desc: 'تطوير واجهات المستخدم والـ APIs والتشغيل التجريبي الصامت في الخلفية لمقارنة القرارات.', deliverable: 'Shadow Mode Performance Report' },
    { weeks: 'Weeks 21–24', phase: 'المرحلة 8-9: Assisted & Controlled Pilot', desc: 'عرض التوصيات للموظفين، تشغيل مجموعات Treatment vs Control، والتحقق من الأثر الإضافي.', deliverable: 'Validated Business Case' },
    { weeks: 'Post-W24', phase: 'المرحلة 10: Gradual Scaling & Scale Gates', desc: 'التوسع التدريجي المنضبط عبر بوابات التوسع المعتمدة (المنتجات، المراحل، القنوات).', deliverable: 'Full Scale Production Rollout' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
            24-WEEK ROADMAP
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            خارطة التنفيذ والتوسع التدريجي (Implementation & Scaling Roadmap)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Start Small → Validate Deep → Scale Responsibly
        </span>
      </div>

      {/* Timeline Steps */}
      <div className="relative z-10 space-y-3">
        {phases.map((p, i) => (
          <div
            key={p.weeks}
            className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/80 hover:border-sky-500/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-3"
          >
            <div className="flex items-start sm:items-center gap-3">
              <span className="px-2.5 py-1 text-xs font-mono font-bold rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 whitespace-nowrap shrink-0">
                {p.weeks}
              </span>
              <div>
                <h4 className="font-bold text-sm text-white">
                  {p.phase}
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800 shrink-0 self-start md:self-auto" dir="ltr">
              <span className="text-emerald-400 font-bold ml-1">✓</span> {p.deliverable}
            </div>
          </div>
        ))}
      </div>

      {/* Scale Gate Criteria */}
      <div className="relative z-10 mt-4 p-3.5 rounded-lg border border-amber-500/30 bg-amber-950/30 text-amber-200 text-xs">
        <div className="flex items-center gap-2 mb-1.5">
          <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0" />
          <span className="font-bold text-white">
            بوابة التوسع الإلزامية (Scale Gate Criteria):
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-[11px] font-mono mt-2">
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Data Ready</div>
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Model Stable</div>
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Value Proven</div>
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Governance Ready</div>
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Ops Ready</div>
          <div className="p-1.5 rounded bg-slate-900 border border-amber-500/30">?Tech Ready</div>
        </div>
      </div>
    </div>
  );
};
