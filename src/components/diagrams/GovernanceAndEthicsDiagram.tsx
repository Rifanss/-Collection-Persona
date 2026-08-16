import React from 'react';
import { ShieldCheck, ShieldAlert, Scale, Eye, Lock, CheckCircle2, UserCheck } from 'lucide-react';

interface Props {
  className?: string;
}

export const GovernanceAndEthicsDiagram: React.FC<Props> = ({ className = '' }) => {
  const governancePillars = [
    {
      title: 'موانع التحصيل الإلزامية (Hard Stops)',
      icon: ShieldAlert,
      color: 'border-rose-500/40 text-rose-300',
      desc: 'إيقاف فوري لأي إجراء تحصيلي آلي في حالات: النزاع القائم، الفئات المحمية نظاميًا، الوفاة، أو الإفلاس.',
      items: ['Dispute In-Review Block', 'Vulnerable Customer Policy', 'Bankruptcy / Legal Freeze', 'Do-Not-Contact Windows'],
    },
    {
      title: 'الشفافية وقابلية التفسير (Explainability)',
      icon: Eye,
      color: 'border-sky-500/40 text-sky-300',
      desc: 'توليد أكواد أسباب واضحة (Reason Codes) لكل قرار مع حفظ سجل تدقيق كامل لا يقبل التعديل.',
      items: ['Primary Reason Code', 'Supporting Factor Weights', 'Immutable Decision Logs', 'Decision Lineage Audit'],
    },
    {
      title: 'التدخل والرقابة البشرية (Human-in-the-Loop)',
      icon: UserCheck,
      color: 'border-amber-500/40 text-amber-300',
      desc: 'بوابة إحالة إجبارية للمراجعة البشرية عند انخفاض درجة الثقة أو تجاوز مبالغ المديونية لحدود الأتمتة.',
      items: ['Low Confidence Escalate', 'High-Exposure Threshold', 'Specialized Case Owner', 'Override Audit Capture'],
    },
    {
      title: 'العدالة والامتثال النظامي (Fairness & Compliance)',
      icon: Scale,
      color: 'border-emerald-500/40 text-emerald-300',
      desc: 'الامتثال الصارم لضوابط البنك المركزي ولوائح حماية المستهلك المالي وحماية البيانات الشخصية (PDPL).',
      items: ['Central Bank Guidelines', 'Consumer Protection Principles', 'Personal Data Protection (PDPL)', 'Algorithmic Bias Testing'],
    },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded">
            GOVERNANCE BLUEPRINT • CH-23..24
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            أركان الحوكمة والعدالة والامتثال الأخلاقي والنظامي (Ethical & Regulatory Governance)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Hard Stops, Explainability & HITL
        </span>
      </div>

      {/* 4 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {governancePillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <div key={i} className={`p-3.5 rounded-lg border ${p.color} bg-slate-900/85 flex flex-col justify-between text-xs`}>
              <div>
                <div className="flex items-center gap-2 pb-1.5 border-b border-slate-800 mb-2">
                  <Icon className="w-4 h-4 shrink-0" />
                  <strong className="text-white text-xs sm:text-sm">{p.title}</strong>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed mb-2.5">{p.desc}</p>
                <div className="space-y-1">
                  {p.items.map((it, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono" dir="ltr">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
