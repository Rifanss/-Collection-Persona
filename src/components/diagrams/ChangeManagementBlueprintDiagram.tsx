import React from 'react';
import { Users, BookOpen, Layers, Award, Target, CheckCircle2 } from 'lucide-react';

interface Props {
  className?: string;
}

export const ChangeManagementBlueprintDiagram: React.FC<Props> = ({ className = '' }) => {
  const pillars = [
    {
      num: '01',
      title: 'بناء القدرات وتدريب الفرق (People & Skills)',
      desc: 'تحويل دور المحصل من مجرد متصل ضاغط إلى استشاري حلول ومدير حالة يفهم لغة الأنماط السلوكية والقدرة الواقعية.',
      color: 'border-blue-500/40 text-blue-300',
    },
    {
      num: '02',
      title: 'هندسة الإجراءات وسير العمل (Process Re-engineering)',
      desc: 'إعادة تصميم تدفقات العمل لتتكامل بسلاسة مع مخرجات محرك القرار وبوابات الجاهزية وأكواد الأسباب التفسيرية.',
      color: 'border-indigo-500/40 text-indigo-300',
    },
    {
      num: '03',
      title: 'التكامل التقني والأنظمة (System Integration)',
      desc: 'ربط واجهات الـ CRM والـ Telephony والـ Digital Channels بـ API موحدة لمحرك NBCA في الزمن الحقيقي.',
      color: 'border-cyan-500/40 text-cyan-300',
    },
    {
      num: '04',
      title: 'ثقافة البيانات والتعاطف المسؤول (Culture & Governance)',
      desc: 'ترسيخ مبدأ «تحليل الإنسان قبل الدين» والالتزام بالشفافية والعدالة والامتثال التنظيمي للبنك المركزي.',
      color: 'border-teal-500/40 text-teal-300',
    },
  ];

  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
            CAPABILITY BLUEPRINT • CH-34
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            ركائز إدارة التغيير والتمكين المؤسسي للنموذج (Organizational Capability Pillars)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          People, Process, Tech & Culture
        </span>
      </div>

      {/* 4 Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        {pillars.map((p) => (
          <div key={p.num} className={`p-3.5 rounded-lg border ${p.color} bg-slate-900/85 flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-2 pb-1.5 border-b border-slate-800 mb-2">
                <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {p.num}
                </span>
                <strong className="text-white text-xs sm:text-sm">{p.title}</strong>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
