import React from 'react';
import { RefreshCw, Users, ShieldAlert, Cpu, ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  className?: string;
}

export const FoundationsParadigmDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
            CONCEPTUAL BLUEPRINT • CH-01
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            التحول الجوهري: من التحصيل التقليدي المرتكز على المديونية إلى نموذج Collection Persona
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Debt-Centric vs Human-in-Context
        </span>
      </div>

      {/* Comparison Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Traditional Paradigm */}
        <div className="p-3.5 sm:p-4 rounded-lg border border-rose-500/40 bg-rose-950/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-rose-500/30 mb-3">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-xs sm:text-sm">
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>النمط التقليدي (Debt-Centric Approach)</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300">
                منهجية أحادية
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-slate-900/80 border border-rose-500/30">
                <strong className="text-rose-300 block mb-0.5">السؤال المحوري:</strong>
                <span className="text-slate-300">«ما الإجراء المعتاد لعمر هذا التأخر؟»</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-rose-500/30">
                <strong className="text-rose-300 block mb-0.5">منطق التقسيم:</strong>
                <span className="text-slate-300">قيمة الدين + أيام التأخر (DPD) فقط بمعزل عن سياق العميل.</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-rose-500/30">
                <strong className="text-rose-300 block mb-0.5">نمط المعالجة:</strong>
                <span className="text-slate-300">اتصال مكثف موحد، ضغط تفاوضي، وتكرار الوعود الهشة غير القابلة للوفاء.</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-rose-500/30">
                <strong className="text-rose-300 block mb-0.5">النتيجة التشغيلية:</strong>
                <span className="text-slate-300">استنزاف الموارد، إرهاق العملاء المتعاونين، وتأخر إحالة النزاعات.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-rose-500/30 text-[11px] text-rose-300/80 font-mono text-center">
            Account → Call → Broken Promise → Escalation
          </div>
        </div>

        {/* Collection Persona Paradigm */}
        <div className="p-3.5 sm:p-4 rounded-lg border border-sky-500/40 bg-sky-950/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-2 border-b border-sky-500/30 mb-3">
              <div className="flex items-center gap-1.5 text-sky-300 font-bold text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>نموذج Collection Persona (Human-in-Context)</span>
              </div>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                إطار متعدد الأبعاد
              </span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-slate-900/80 border border-sky-500/30">
                <strong className="text-sky-300 block mb-0.5">السؤال المحوري:</strong>
                <span className="text-slate-300">«ما الحالة السلوكية والمالية للعميل، وما الإجراء الأكثر ملاءمة لها؟»</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-sky-500/30">
                <strong className="text-sky-300 block mb-0.5">منطق التقسيم:</strong>
                <span className="text-slate-300">متجه خماسي (القدرة، الرغبة، الاستجابة، التعقيد، الاستعداد الرقمي).</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-sky-500/30">
                <strong className="text-sky-300 block mb-0.5">نمط المعالجة:</strong>
                <span className="text-slate-300">تخصيص القناة، والتوقيت، وحجم الخيارات، ومعالجة العوائق الحقيقية أولاً.</span>
              </div>
              <div className="p-2 rounded bg-slate-900/80 border border-sky-500/30">
                <strong className="text-sky-300 block mb-0.5">النتيجة التشغيلية:</strong>
                <span className="text-slate-300">رفع معدل التحصيل المستدام، خفض تكلفة الاتصال، وتجربة عميل نظامية منضبطة.</span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-sky-500/30 text-[11px] text-emerald-300 font-mono text-center">
            Understand → Classify → Quantify → Decide → Act → Learn
          </div>
        </div>
      </div>
    </div>
  );
};
