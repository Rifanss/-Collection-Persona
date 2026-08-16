import React from 'react';
import { Layers, ChevronLeft, Award } from 'lucide-react';

interface Props {
  className?: string;
}

export const MaturityModelLadderDiagram: React.FC<Props> = ({ className = '' }) => {
  const levels = [
    {
      level: 'Level 0',
      name: 'Traditional Collection',
      ar: 'التحصيل التقليدي الخطي',
      desc: 'تركيز على رصيد الدين، سير عمل نمطي وموحد للجميع، وقرارات يدوية غير مخصصة.',
      color: 'border-slate-700 bg-slate-900/60 text-slate-400',
    },
    {
      level: 'Level 1',
      name: 'Rule-Based Segmentation',
      ar: 'التقسيم القائم على القواعد الثابتة',
      desc: 'شرائح بسيطة وفق أيام التأخر ومبلغ الدين مع استراتيجية موحدة لكل شريحة.',
      color: 'border-slate-700 bg-slate-900/80 text-slate-300',
    },
    {
      level: 'Level 2',
      name: 'Operational Collection Persona',
      ar: 'الشخصيات التشغيلية متعددة الأبعاد',
      desc: 'بناء Personas، بطاقات تعريفية، ومطابقة استراتيجيات مع بدايات تتبع الانتقال.',
      color: 'border-sky-500/40 bg-sky-950/30 text-sky-200',
    },
    {
      level: 'Level 3',
      name: 'Scored Persona',
      ar: 'التقييم الكمي المعياري المقسم',
      desc: 'إدخال Modular Scores، حساب الثقة (Confidence)، وتصنيف الجاهزية (DR-1 إلى DR-5).',
      color: 'border-blue-500/40 bg-blue-950/30 text-blue-200',
    },
    {
      level: 'Level 4',
      name: 'Decision Intelligence',
      ar: 'ذكاء القرار وإصدار NBCA المفسر',
      desc: 'محرك القرار، قواعد الأعمال الصارمة، أكواد الأسباب، وبوابات المراجعة والتجاوز البشري.',
      color: 'border-indigo-500/50 bg-indigo-950/40 text-indigo-200',
    },
    {
      level: 'Level 5',
      name: 'Adaptive Collection',
      ar: 'التحصيل التكيفي وحلقة التعلم',
      desc: 'حلقة تعلم مستمرة (Feedback Loop)، تجارب Champion/Challenger، وتحديثات الأحداث الفورية.',
      color: 'border-purple-500/50 bg-purple-950/40 text-purple-200',
    },
    {
      level: 'Level 6',
      name: 'Orchestrated Decision Ecosystem',
      ar: 'المنظومة المتكاملة الموجهة ذاتيًا',
      desc: 'تكامل شامل لكافة القنوات والبيانات والموارد مع رقابة بشرية عليا وحوكمة مستمرة.',
      color: 'border-emerald-500/60 bg-emerald-950/50 text-emerald-200',
    },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded">
            MATURITY LADDER
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            مستويات نضج Collection Persona (Levels 0 to 6)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Progressive Evolution Roadmap
        </span>
      </div>

      {/* Staircase Levels */}
      <div className="relative z-10 space-y-2.5">
        {levels.map((lvl, index) => (
          <div
            key={lvl.level}
            className={`p-3 rounded-lg border ${lvl.color} flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-all`}
          >
            <div className="flex items-center gap-3">
              <span className="w-16 text-xs font-mono font-bold px-2 py-1 rounded bg-slate-900 border border-slate-700 text-center shrink-0">
                {lvl.level}
              </span>
              <div>
                <h4 className="font-bold text-sm text-white">
                  {lvl.ar}
                </h4>
                <div className="text-[11px] text-slate-400 font-mono" dir="ltr">
                  {lvl.name}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 sm:max-w-md sm:text-left leading-relaxed">
              {lvl.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Maturity Formula */}
      <div className="relative z-10 mt-4 p-3.5 rounded-lg border border-purple-500/30 bg-purple-950/40 text-purple-200 text-xs">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
          <span className="font-bold">معادلة النضج المؤسسي الجداءية (Multiplicative Maturity):</span>
          <span className="font-mono text-purple-300" dir="ltr">
            Maturity = Data × Decision × Governance × Adoption × Learning
          </span>
        </div>
        <p className="text-slate-300 text-[11px]">
          استخدام الضرب الرياضي يعبر عن أن تدني أي عنصر (مثل ضعف الحوكمة أو ضعف جودة البيانات) يخفض من قيمة المنظومة بأكملها.
        </p>
      </div>
    </div>
  );
};
