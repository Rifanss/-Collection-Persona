import React from 'react';
import { Send, Clock, PhoneCall, FileText, Layers, RefreshCw, AlertCircle } from 'lucide-react';

interface Props {
  className?: string;
}

export const NBCADecisionMapDiagram: React.FC<Props> = ({ className = '' }) => {
  const components = [
    { num: '1', name: 'Action (ماذا نفعل؟)', desc: 'تحديد نوع الإجراء: اتصال، رسالة، رحلة رقمية، حل مالي، أو انتظار مدروس (No Action).', icon: Send, color: 'text-emerald-400' },
    { num: '2', name: 'Channel (كيف ننفذه؟)', desc: 'اختيار القناة الأكثر فاعلية استنادًا للسلوك الفعلي (تطبيق، رسالة تفاعلية، هاتف، أو أخصائي).', icon: PhoneCall, color: 'text-sky-400' },
    { num: '3', name: 'Timing (متى؟)', desc: 'تحديد أفضل نافذة تواصل زمنية مفضلة للعميل وتجنب الأوقات غير الملائمة.', icon: Clock, color: 'text-blue-400' },
    { num: '4', name: 'Message Approach (بأي نبرة؟)', desc: 'صياغة الرسالة بنبرة استشارية أو حازمة أو تذكيرية واضحة ومباشرة (Call-to-Action).', icon: FileText, color: 'text-indigo-400' },
    { num: '5', name: 'Eligible Solution (ما الحل؟)', desc: 'تحديد الحل المالي المؤهل نظاميًا والمتطابق مع القدرة والسيولة المالية المقدرة.', icon: Layers, color: 'text-purple-400' },
    { num: '6', name: 'Alternative Action (ما البديل؟)', desc: 'تحديد مسار احتياطي جاهز (Fallback) لتفعيله آليًا عند تعثر أو عدم استكمال الإجراء الأساسي.', icon: RefreshCw, color: 'text-amber-400' },
    { num: '7', name: 'Time to Live - TTL (ما مدة الصلاحية؟)', desc: 'تحديد فترة صلاحية التوصية (مثلاً 24 ساعة) يُعاد بعدها احتساب القرار إذا لم يُنفذ.', icon: AlertCircle, color: 'text-rose-400' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded">
            ACTION PACKAGE
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            مكونات الإجراء التحصيلي التالي الأنسب (NBCA Components)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          7 Core Elements + Reason Codes
        </span>
      </div>

      {/* Components Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {components.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.num}
              className="p-3.5 rounded-lg border border-slate-800 bg-slate-900/90 hover:border-slate-700 transition-colors flex gap-3"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                <Icon className={`w-4 h-4 ${c.color}`} />
              </div>
              <div>
                <div className="font-bold text-xs md:text-sm text-white mb-1" dir="ltr">
                  <span className="text-slate-400 ml-1">#{c.num}</span> {c.name}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}

        {/* Reason Codes Box */}
        <div className="p-3.5 rounded-lg border border-emerald-500/40 bg-emerald-950/30 flex gap-3 md:col-span-2 lg:col-span-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <span className="text-xs font-mono font-bold text-emerald-300">RC</span>
          </div>
          <div>
            <div className="font-bold text-xs md:text-sm text-emerald-300 mb-1">
              أكواد التفسير المرافقة (Accompanying Reason Codes)
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              تصدر التوصية مصحوبة بما يصل إلى 3 أكواد أسباب معيارية (مثل RC-01, RC-07, RC-18) لتمكين الموظف من فهم علة القرار فورًا دون الحاجة للبحث في سجلات النظام.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
