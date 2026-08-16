import React from 'react';
import { personasList } from '../../data/personasData';

interface Props {
  className?: string;
}

export const PersonaMatrixDiagram: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded">
            STRATEGIC PERSONA MATRIX
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            مصفوفة الشخصيات التشغيلية (Financial Capacity × Willingness)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          2D Core Matrix + Operational Signals
        </span>
      </div>

      {/* 2D Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {/* Quadrant 1: High Capacity, High Willingness */}
        <div className="p-4 rounded-lg border border-emerald-500/40 bg-emerald-950/30">
          <div className="flex items-center justify-between text-xs text-emerald-400 font-bold mb-2 pb-1 border-b border-emerald-500/30">
            <span>قدرة مرتفعة (High Capacity)</span>
            <span>رغبة مرتفعة (High Willingness)</span>
          </div>
          <div className="p-3 rounded bg-slate-900/90 border border-emerald-500/50 mb-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-300">CP-01 — المتعاون القابل للإغلاق</span>
              <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-mono">Fast Resolution</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5">
              مسار مباشر بأقل عدد خطوات، رابط سداد فوري، وتجنب الإفراط في المتابعة.
            </p>
          </div>
          <div className="p-2.5 rounded bg-slate-900/70 border border-cyan-500/40">
            <div className="flex items-center justify-between">
              <span className="font-bold text-cyan-300">CP-07 — رقمي ذاتي الخدمة</span>
              <span className="text-xs px-2 py-0.5 bg-cyan-500/20 text-cyan-300 rounded font-mono">Digital First</span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              إنجاز ذاتي عبر التطبيق بنقرة واحدة مع الاحتفاظ بـ Fallback بشري عند التعثر.
            </p>
          </div>
        </div>

        {/* Quadrant 2: Low Capacity, High Willingness */}
        <div className="p-4 rounded-lg border border-blue-500/40 bg-blue-950/30">
          <div className="flex items-center justify-between text-xs text-blue-400 font-bold mb-2 pb-1 border-b border-blue-500/30">
            <span>قدرة محدودة (Low Capacity)</span>
            <span>رغبة مرتفعة (High Willingness)</span>
          </div>
          <div className="p-3 rounded bg-slate-900/90 border border-blue-500/50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-blue-300">CP-02 — حسن النية محدود القدرة</span>
              <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded font-mono">Capacity-Based</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5">
              مطابقة الحل مع التدفق النقدي الواقعي، تقليل تشتت الخيارات (Choice Overload)، وقياس استدامة الدفعات.
            </p>
          </div>
        </div>

        {/* Quadrant 3: High Capacity, Low Willingness */}
        <div className="p-4 rounded-lg border border-amber-500/40 bg-amber-950/30">
          <div className="flex items-center justify-between text-xs text-amber-400 font-bold mb-2 pb-1 border-b border-amber-500/30">
            <span>قدرة مرتفعة (High Capacity)</span>
            <span>رغبة/مبادرة منخفضة (Low Willingness)</span>
          </div>
          <div className="p-3 rounded bg-slate-900/90 border border-amber-500/50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-amber-300">CP-03 — القادر منخفض المبادرة</span>
              <span className="text-xs px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded font-mono">Decision Activation</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5">
              خطوة واحدة واضحة، موعد سداد محدد ومغلق، تقليص الخيارات لإزالة التردد، وتنبيه مهني للأثر الائتماني.
            </p>
          </div>
        </div>

        {/* Quadrant 4: Medium/Low Capacity, Chronic Deferral */}
        <div className="p-4 rounded-lg border border-rose-500/40 bg-rose-950/30">
          <div className="flex items-center justify-between text-xs text-rose-400 font-bold mb-2 pb-1 border-b border-rose-500/30">
            <span>قدرة متوسطة/متغيرة</span>
            <span>وعود كثيرة غير منفذة</span>
          </div>
          <div className="p-3 rounded bg-slate-900/90 border border-rose-500/50">
            <div className="flex items-center justify-between">
              <span className="font-bold text-rose-300">CP-04 — نمط التأجيل المتكرر</span>
              <span className="text-xs px-2 py-0.5 bg-rose-500/20 text-rose-300 rounded font-mono">Commitment Quality</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5">
              تقليل الوعود غير الواقعية، اشتراط دفعة تأكيد أولى فورية، متابعة أسرع، وقياس Promise Kept Ratio.
            </p>
          </div>
        </div>
      </div>

      {/* Special Contextual Overlays */}
      <div className="relative z-10 p-3.5 rounded-lg border border-slate-700 bg-slate-900/90">
        <div className="text-xs font-bold text-slate-300 mb-2 font-mono" dir="ltr">
          CROSS-CUTTING OPERATIONAL OVERLAYS (الحالات الاستثنائية العابرة للمصفوفة)
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
          <div className="p-2 rounded bg-slate-800/80 border border-slate-700">
            <span className="font-bold text-sky-400">CP-05 — منخفض الوصول</span>
            <p className="text-slate-300 mt-0.5 text-[11px]">
              تغيير القناة، تحسين نافذة التوقيت، واختبار المسارات الرقمية غير المتزامنة.
            </p>
          </div>
          <div className="p-2 rounded bg-slate-800/80 border border-amber-500/40">
            <span className="font-bold text-amber-400">CP-06 — اعتراض أو نزاع</span>
            <p className="text-slate-300 mt-0.5 text-[11px]">
              تجميد التحصيل (DR-5 Blocked)، وإحالة النزاع للمسار المختص لحله أولاً.
            </p>
          </div>
          <div className="p-2 rounded bg-slate-800/80 border border-purple-500/40">
            <span className="font-bold text-purple-400">CP-08 — مرتفع التعقيد</span>
            <p className="text-slate-300 mt-0.5 text-[11px]">
              توحيد الملفات تحت مدير حالة متخصص (Case Owner) وإصدار خطة شاملة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
