import React from 'react';
import { RefreshCw, ArrowRight, UserCheck, ShieldAlert, Zap, Layers } from 'lucide-react';

interface Props {
  className?: string;
}

export const PersonaTransitionLifecycleDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 sm:p-5 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden avoid-break-inside ${className}`}>
      {/* Blueprint Grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30 rounded">
            LIFECYCLE BLUEPRINT • CH-08..13
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white mt-1">
            ديناميكية انتقال الحالات والتحول السلوكي (Persona State Transition Model)
          </h4>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Dynamic State Machine & Snapshotting
        </span>
      </div>

      {/* State Transitions Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-3 mb-3 text-xs">
        {/* Transition 1 */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-emerald-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] font-bold text-emerald-400 pb-1.5 border-b border-slate-800 mb-2">
              <span>CP-02 ➔ CP-01</span>
              <span>مسار التعافي</span>
            </div>
            <strong className="text-white block mb-1">إعادة هيكلة واستعادة القدرة</strong>
            <p className="text-slate-300 text-[11px]">
              عند استقرار التدفق النقدي للعميل بعد خطة سداد ميسرة، يرتفع مؤشر Capacity ليتحول العميل إلى مسار الإغلاق المباشر.
            </p>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-emerald-300">
            Trigger: Restructure + 2 On-time Payments
          </div>
        </div>

        {/* Transition 2 */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-sky-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] font-bold text-sky-400 pb-1.5 border-b border-slate-800 mb-2">
              <span>CP-03 ➔ CP-07</span>
              <span>مسار التفعيل الرقمي</span>
            </div>
            <strong className="text-white block mb-1">التحول للخدمة الذاتية</strong>
            <p className="text-slate-300 text-[11px]">
              تفعيل التنبيهات التفاعلية بنقرة واحدة يقود العميل القادر منخفض المبادرة لإنجاز السداد عبر التطبيق دون مكالمات.
            </p>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-sky-300">
            Trigger: App Link Click + 1-Click Pay
          </div>
        </div>

        {/* Transition 3 */}
        <div className="p-3 rounded-lg bg-slate-900/90 border border-amber-500/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between font-mono text-[11px] font-bold text-amber-400 pb-1.5 border-b border-slate-800 mb-2">
              <span>CP-06 ➔ CP-01 / CP-02</span>
              <span>مسار حل النزاع</span>
            </div>
            <strong className="text-white block mb-1">معالجة الاعتراض النظامي</strong>
            <p className="text-slate-300 text-[11px]">
              بمجرد معالجة النزاع التشغيلي وتعديل الرصيد، يرفع الحظر عن الحالة ويعاد تصنيف العميل فورًا حسب قدرته ورغبته.
            </p>
          </div>
          <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono text-amber-300">
            Trigger: Dispute Resolved + Balance Adjusted
          </div>
        </div>
      </div>

      {/* Snapshotting Rule */}
      <div className="relative z-10 p-2.5 rounded bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center justify-between gap-2">
        <span className="font-bold text-sky-300">قاعدة الأرشفة واللقطات السلوكية:</span>
        <span className="font-mono text-[11px] text-slate-400">
          Daily State Snapshotting • Time-decay Weighted Events
        </span>
      </div>
    </div>
  );
};
