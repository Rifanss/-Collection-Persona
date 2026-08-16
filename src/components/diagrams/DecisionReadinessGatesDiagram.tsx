import React from 'react';
import { CheckCircle, AlertCircle, HelpCircle, UserCheck, Ban, ShieldCheck } from 'lucide-react';

interface Props {
  className?: string;
}

export const DecisionReadinessGatesDiagram: React.FC<Props> = ({ className = '' }) => {
  const gates = [
    {
      code: 'DR-1',
      name: 'Ready',
      arabicTitle: 'جاهز لاتخاذ القرار',
      statusColor: 'border-emerald-500/50 bg-emerald-950/40 text-emerald-200',
      badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      icon: CheckCircle,
      desc: 'بيانات مكتملة وثقة كافية، ولا توجد موانع أو نزاعات. يمكن للمحرك إصدار وتمرير NBCA فورًا.',
      action: 'إصدار وتنفيذ NBCA المباشر',
    },
    {
      code: 'DR-2',
      name: 'Ready with Conditions',
      arabicTitle: 'جاهز بشروط ومراجعة',
      statusColor: 'border-blue-500/50 bg-blue-950/40 text-blue-200',
      badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      icon: AlertCircle,
      desc: 'حالة مؤهلة لاتخاذ إجراء مع اشتراط تحقق مسبق أو موافقة محددة قبل التنفيذ النهائي.',
      action: 'تنفيذ مشروط أو تأكيد تحقق',
    },
    {
      code: 'DR-3',
      name: 'Information Required',
      arabicTitle: 'استكمال بيانات مطلوب',
      statusColor: 'border-amber-500/50 bg-amber-950/40 text-amber-200',
      badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      icon: HelpCircle,
      desc: 'بيانات غير كافية أو غير حديثة. يتوقف المحرك عن التخمين ويصدر إجراء استكمال بيانات (Decision Abstention).',
      action: 'جمع وتحديث البيانات أولاً',
    },
    {
      code: 'DR-4',
      name: 'Specialist Review Required',
      arabicTitle: 'مراجعة خبير متخصصة',
      statusColor: 'border-purple-500/50 bg-purple-950/40 text-purple-200',
      badge: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      icon: UserCheck,
      desc: 'حالة عالية التعقيد أو استثنائية تتطلب تدخلاً وحكمًا مهنيًا بشريًا مباشرًا من أخصائي الحالات.',
      action: 'إسناد لمدير حالة / خبير ائتماني',
    },
    {
      code: 'DR-5',
      name: 'Decision Blocked',
      arabicTitle: 'القرار محظور مؤقتًا',
      statusColor: 'border-rose-500/50 bg-rose-950/40 text-rose-200',
      badge: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      icon: Ban,
      desc: 'وجود مانع نظامي أو نزاع قائم (Active Dispute = True). يتم تجميد كافة الإجراءات التحصيلية الضاغطة.',
      action: 'تجميد التحصيل وإحالة النزاع',
    },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded">
            GOVERNANCE GATES
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            بوابات جاهزية القرار (Decision Readiness Levels: DR-1 to DR-5)
          </h3>
        </div>
        <div className="text-xs text-rose-400 font-mono font-bold" dir="ltr">
          High Confidence ≠ Ready to Act
        </div>
      </div>

      {/* Gates Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {gates.map((gate) => {
          const Icon = gate.icon;
          return (
            <div
              key={gate.code}
              className={`p-3.5 rounded-lg border ${gate.statusColor} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded border ${gate.badge}`}>
                    {gate.code}
                  </span>
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-white mb-0.5">
                  {gate.arabicTitle}
                </h4>
                <div className="text-[11px] text-slate-400 font-mono mb-2" dir="ltr">
                  {gate.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {gate.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                <span>{gate.action}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Distinction Callout */}
      <div className="relative z-10 mt-4 p-3 rounded-lg border border-teal-500/30 bg-teal-950/40 text-teal-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-300 shrink-0" />
          <span>
            <strong>التمايز المنهجي:</strong> درجة الثقة (Confidence) تصف جودة البيانات، بينما الجاهزية (Readiness) تقرر مشروعية اتخاذ الإجراء.
          </span>
        </div>
        <div className="font-mono text-[11px] text-teal-300 px-2 py-0.5 bg-slate-900 rounded border border-teal-500/30" dir="ltr">
          DR = f(DataQuality, Confidence, Eligibility, ExceptionState, PolicyStatus)
        </div>
      </div>
    </div>
  );
};
