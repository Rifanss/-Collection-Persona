import React from 'react';
import { Layers, Server, Cpu, Database, Send, LineChart, ShieldCheck, RefreshCw, Zap } from 'lucide-react';

interface Props {
  className?: string;
}

export const PlatformArchitectureDiagram: React.FC<Props> = ({ className = '' }) => {
  const modules = [
    { id: 'M1', name: 'Data Integration', ar: 'تكامل وربط البيانات', icon: Database, color: 'text-sky-400', desc: 'استقبال وتوحيد البيانات المصرح بها من الأنظمة المصرفية' },
    { id: 'M2', name: 'Feature Engine & Store', ar: 'محرك ومستودع الميزات', icon: Server, color: 'text-blue-400', desc: 'اشتقاق الميزات وحفظها وتوحيد حسابها وإصداراتها' },
    { id: 'M3', name: 'Customer Intelligence', ar: 'محرك ذكاء العميل', icon: Cpu, color: 'text-indigo-400', desc: 'حساب أبعاد القدرة، الرغبة، الاستجابة، والسلوك الرقمي' },
    { id: 'M4', name: 'Persona Engine', ar: 'محرك الشخصيات التشغيلية', icon: Layers, color: 'text-purple-400', desc: 'تصنيف الحالة التشغيلية وتتبع انتقالات الشخصيات' },
    { id: 'M5', name: 'Scoring & Confidence', ar: 'محرك التقييم والثقة', icon: ShieldCheck, color: 'text-teal-400', desc: 'حساب مؤشرات الحالة ومستويات الثقة في الاستنتاج' },
    { id: 'M6', name: 'Decision Engine', ar: 'محرك قواعد القرار', icon: Cpu, color: 'text-amber-400', desc: 'تطبيق القواعد والموانع والمفاضلة وترتيب الخيارات' },
    { id: 'M7', name: 'NBCA Service', ar: 'خدمة إصدار التوصية', icon: Send, color: 'text-emerald-400', desc: 'توليد الإجراء الأنسب مع القناة وأكواد الأسباب و TTL' },
    { id: 'M8', name: 'Execution Interface', ar: 'واجهة التوجيه والتنفيذ', icon: Zap, color: 'text-cyan-400', desc: 'إرسال التوصية إلى شاشة الموظف أو القنوات الرقمية' },
    { id: 'M9', name: 'Outcome & Learning', ar: 'محرك النتائج والتعلم', icon: RefreshCw, color: 'text-rose-400', desc: 'التقاط الأحداث وتحديث النماذج وإعادة المعايرة' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
            PLATFORM BLUEPRINT
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            البنية الوظيفية لمنصة Collection Persona (9 Integrated Modules)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Event-Driven & Microservices-Ready
        </span>
      </div>

      {/* 9 Modules Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {modules.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.id}
              className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/90 hover:border-sky-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-sky-300 border border-slate-700">
                    {m.id}
                  </span>
                  <Icon className={`w-4 h-4 ${m.color}`} />
                </div>
                <h4 className="text-sm font-bold text-white mb-0.5">
                  {m.ar}
                </h4>
                <div className="text-[11px] text-slate-400 font-mono mb-1.5" dir="ltr">
                  {m.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Event Bus Banner */}
      <div className="relative z-10 mt-4 p-3 rounded-lg border border-sky-500/30 bg-sky-950/40 text-sky-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-sky-400 shrink-0" />
          <span>
            <strong>ناقل الأحداث التشغيلي (Event-Driven Architecture):</strong> تحديث فوري للحالة عند وقوع أحداث السداد، كسر الوعود، أو فتح النزاعات.
          </span>
        </div>
        <span className="text-sky-300 font-mono text-[11px] font-semibold" dir="ltr">
          Event → Recalculate → New Decision
        </span>
      </div>
    </div>
  );
};
