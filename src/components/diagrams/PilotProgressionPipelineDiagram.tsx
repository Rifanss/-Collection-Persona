import React from 'react';
import { Rocket, ShieldCheck, CheckCircle2, ArrowLeft, Activity, Play, Eye, Users } from 'lucide-react';

interface Props {
  className?: string;
}

export const PilotProgressionPipelineDiagram: React.FC<Props> = ({ className = '' }) => {
  const stages = [
    {
      num: 'Stage 1',
      name: 'Offline Validation',
      title: 'التحقق التاريخي غير المتزامن',
      desc: 'اختبار دقة النموذج ومحرك القرار على بيانات تاريخية (Backtesting) لتقييم دقة التوصيات مقارنة بالنتائج الفعلية.',
      badge: 'Backtesting',
      color: 'border-slate-600 bg-slate-900',
    },
    {
      num: 'Stage 2',
      name: 'Shadow Mode',
      title: 'وضع الظل الموازي (Shadow)',
      desc: 'تشغيل محرك القرار بالتوازي مع النظام الحالي في الزمن الحقيقي دون إرسال الإجراءات للعملاء، لقياس التباين والجاهزية.',
      badge: 'Zero-Risk',
      color: 'border-blue-600/50 bg-blue-950/30',
    },
    {
      num: 'Stage 3',
      name: 'Assisted Mode',
      title: 'التشغيل المساعد لفرق العمل',
      desc: 'عرض توصيات NBCA وتصنيف Persona لموظفي التحصيل كأداة دعم استرشادي، مع تسجيل قبول أو تعديل الموظف.',
      badge: 'HITL Support',
      color: 'border-indigo-600/50 bg-indigo-950/30',
    },
    {
      num: 'Stage 4',
      name: 'Controlled Pilot',
      title: 'التجربة الميدانية المضبوطة',
      desc: 'تطبيق الإطار الفعلي على شريحة مختارة (A/B Testing أو شريحة منتج محددة) مع مجموعة تحكم متكافئة لقياس الأثر الصافي.',
      badge: 'A/B Testing',
      color: 'border-emerald-600/50 bg-emerald-950/30',
    },
    {
      num: 'Stage 5',
      name: 'Scaled Production',
      title: 'التوسع والإنتاج الشامل',
      desc: 'تعميم النموذج على كافة المحافظ والمنتجات مع تفعيل لوحات المراقبة المتوازنة وإعادة المعايرة الدورية.',
      badge: 'Full Scale',
      color: 'border-cyan-600/50 bg-cyan-950/30',
    },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
            DEPLOYMENT PIPELINE • CH-29..30
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            مراحل النضج والانتقال التدريجي لتشغيل النموذج (Staged Pilot Progression)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Risk-Controlled Rollout Strategy
        </span>
      </div>

      {/* Staged Pipeline Stack */}
      <div className="relative z-10 space-y-2.5">
        {stages.map((st, i) => (
          <div key={st.num} className={`p-3 rounded-lg border ${st.color} flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs`}>
            <div className="flex items-start sm:items-center gap-2.5">
              <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                0{i + 1}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <strong className="text-white text-xs sm:text-sm">{st.title}</strong>
                  <span className="font-mono text-[10px] text-slate-400" dir="ltr">({st.name})</span>
                </div>
                <p className="text-slate-300 mt-0.5 text-[11px] leading-relaxed">{st.desc}</p>
              </div>
            </div>
            <div className="self-end sm:self-center font-mono text-[10px] px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-emerald-300 font-bold shrink-0">
              {st.badge}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
