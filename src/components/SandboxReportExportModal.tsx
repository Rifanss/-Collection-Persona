import React, { useRef } from 'react';
import {
  X,
  Printer,
  Download,
  ShieldCheck,
  Activity,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  User,
  FileCheck,
  Sparkles,
  Layers,
  Clock,
  Send,
  MessageSquare
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from 'recharts';

export interface SandboxReportData {
  capacity: number;
  willingness: number;
  responsiveness: number;
  complexity: number;
  digitalReadiness: number;
  dataComplete: boolean;
  dormantFlag: boolean;
  disputeFlag: boolean;
  classification: {
    persona: {
      code: string;
      name: string;
      englishName: string;
      definition: string;
      tone?: string;
      primaryChannel?: string;
      coreObjective?: string;
    };
    confidence: number;
    nbca: string;
    channel: string;
    timing: string;
    message: string;
    reasonCodes: string[];
    gates: {
      gate1: { name: string; passed: boolean };
      gate2: { name: string; passed: boolean };
      gate3: { name: string; passed: boolean };
      gate4: { name: string; passed: boolean };
      ready: boolean;
    };
  };
}

interface SandboxReportExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportData: SandboxReportData;
}

export const SandboxReportExportModal: React.FC<SandboxReportExportModalProps> = ({
  isOpen,
  onClose,
  reportData,
}) => {
  const reportRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const {
    capacity,
    willingness,
    responsiveness,
    complexity,
    digitalReadiness,
    dataComplete,
    dormantFlag,
    disputeFlag,
    classification,
  } = reportData;

  const today = new Date();
  const formattedDate = today.toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = today.toLocaleTimeString('ar-SA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const reportId = `NBCA-REP-${today.getFullYear()}${(today.getMonth() + 1).toString().padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;

  const radarData = [
    { subject: 'القدرة المالية', value: capacity, fullMark: 100 },
    { subject: 'الرغبة بالسداد', value: willingness, fullMark: 100 },
    { subject: 'سرعة الاستجابة', value: responsiveness, fullMark: 100 },
    { subject: 'التعقيد والتداخل', value: complexity, fullMark: 100 },
    { subject: 'الاستعداد الرقمي', value: digitalReadiness, fullMark: 100 },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto modal-print-wrapper">
        {/* Backdrop (hidden on print) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm no-print"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-10 border border-slate-300 overflow-hidden flex flex-col max-h-[94vh] modal-print-wrapper print:max-h-none print:shadow-none print:border-none"
          dir="rtl"
        >
          {/* Modal Toolbar (hidden on print) */}
          <div className="p-3 sm:p-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0 no-print">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-500/30">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                  <span>تقرير التشخيص السلوكي وتوصية القرار (NBCA Audit Report)</span>
                </h3>
                <p className="text-xs text-slate-400">
                  معاينة التقرير الرسمي الجاهز للأرشفة والطباعة وتصدير PDF
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة / تصدير PDF</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Report Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50 touch-scroll">
            
            {/* The Print Sheet */}
            <div 
              ref={reportRef}
              className="bg-white p-6 sm:p-8 rounded-xl border border-slate-300 shadow-sm max-w-3xl mx-auto space-y-6 text-slate-900 print:p-0 print:border-none print:shadow-none"
            >
              {/* Document Header */}
              <div className="border-b-2 border-slate-900 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-slate-950 font-serif">
                      Collection Persona Framework™
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded">
                      OFFICIAL AUDIT REPORT
                    </span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-sky-900 mt-1">
                    تقرير تشخيص ملف العميل وتوصيات محرك القرار (NBCA)
                  </h1>
                  <p className="text-xs text-slate-500">
                    منظومة التحصيل المرتكز على الشخصية وبوابات الجاهزية التشغيلية
                  </p>
                </div>

                <div className="text-xs space-y-1 bg-slate-50 p-2.5 rounded-lg border border-slate-200 shrink-0 text-slate-700 font-mono" dir="ltr">
                  <div><strong className="text-slate-900">REF:</strong> {reportId}</div>
                  <div><strong className="text-slate-900">DATE:</strong> {formattedDate}</div>
                  <div><strong className="text-slate-900">TIME:</strong> {formattedTime}</div>
                  <div><strong className="text-slate-900">STATUS:</strong> {classification.gates.ready ? 'GATES_CLEARED' : 'ACTION_HOLD'}</div>
                </div>
              </div>

              {/* Persona Classification Card */}
              <div className="p-4 rounded-xl bg-gradient-to-l from-sky-900 to-slate-900 text-white space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 text-xs font-mono font-bold bg-sky-500/30 text-sky-300 border border-sky-400/30 rounded">
                      {classification.persona.code}
                    </span>
                    <span className="font-bold text-base text-white">
                      {classification.persona.name}
                    </span>
                    <span className="text-xs text-slate-300 font-mono" dir="ltr">
                      ({classification.persona.englishName})
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded">
                    <span>مستوى ثقة التصنيف:</span>
                    <span className="font-mono text-sm">{classification.confidence}%</span>
                  </div>
                </div>

                <p className="text-xs text-slate-200 leading-relaxed">
                  <strong>التعريف السلوكي:</strong> {classification.persona.definition}
                </p>
              </div>

              {/* Two Column Layout: Radar Chart & Score Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* Embedded Radar Chart */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                  <div className="text-xs font-bold text-slate-800 mb-1 text-center flex items-center justify-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-700" />
                    <span>المتجه السلوكي الخماسي (5-D Radar Vector)</span>
                  </div>
                  <div className="w-full h-[220px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                        <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{ fill: '#1e293b', fontSize: 9, fontWeight: 700 }}
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fill: '#64748b', fontSize: 8 }}
                          stroke="#cbd5e1"
                        />
                        <Radar
                          name="قيمة العميل"
                          dataKey="value"
                          stroke="#0284c7"
                          fill="#0284c7"
                          fillOpacity={0.4}
                          strokeWidth={2}
                          isAnimationActive={false}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Score Summary Metrics Table */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-700" />
                    <span>تفصيل نتائج المؤشرات الكمية:</span>
                  </div>

                  <div className="border border-slate-200 rounded-lg overflow-hidden text-xs bg-white">
                    <div className="flex justify-between items-center p-2 border-b border-slate-100 bg-slate-50/70">
                      <span className="text-slate-600 font-medium">القدرة المالية (Capacity):</span>
                      <span className="font-mono font-bold text-sky-900">{capacity}%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">الرغبة بالسداد (Willingness):</span>
                      <span className="font-mono font-bold text-emerald-900">{willingness}%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-slate-100 bg-slate-50/70">
                      <span className="text-slate-600 font-medium">سرعة الاستجابة (Responsiveness):</span>
                      <span className="font-mono font-bold text-amber-900">{responsiveness}%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">التعقيد والتداخل (Complexity):</span>
                      <span className="font-mono font-bold text-purple-900">{complexity}%</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-slate-50/70">
                      <span className="text-slate-600 font-medium">الاستعداد الرقمي (Digital):</span>
                      <span className="font-mono font-bold text-cyan-900">{digitalReadiness}%</span>
                    </div>
                  </div>

                  {/* Signals check */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${dataComplete ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                      {dataComplete ? '✓ البيانات مكتملة' : '✗ نقص بالبيانات'}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${!disputeFlag ? 'bg-slate-50 text-slate-700 border-slate-200' : 'bg-purple-50 text-purple-800 border-purple-200'}`}>
                      {disputeFlag ? '⚠ نزاع / اعتراض نشط' : '✓ لا توجد نزاعات'}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${!dormantFlag ? 'bg-slate-50 text-slate-700 border-slate-200' : 'bg-amber-50 text-amber-800 border-amber-200'}`}>
                      {dormantFlag ? '⚠ عميل خامل / فاقد تواصل' : '✓ عميل نشط'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decision Readiness Gates Matrix */}
              <div className="space-y-2">
                <div className="flex items-center justify-between border-b border-slate-200 pb-1">
                  <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-800" />
                    <span>تحقق بوابات الجاهزية الأربع (Decision Readiness Gates G1–G4):</span>
                  </h4>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${classification.gates.ready ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'}`}>
                    {classification.gates.ready ? 'جاهز للتنفيذ الفوري' : 'يتطلب معالجة قيود قبل الإطلاق'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px]">
                  <div className={`p-2 rounded-lg border ${classification.gates.gate1.passed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="font-bold">G1: سلامة البيانات</div>
                    <div className="text-[10px] mt-0.5">{classification.gates.gate1.passed ? '✓ مكتملة وحديثة' : '✗ نقص بيانات'}</div>
                  </div>
                  <div className={`p-2 rounded-lg border ${classification.gates.gate2.passed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="font-bold">G2: عتبة الثقة (≥60%)</div>
                    <div className="text-[10px] mt-0.5">{classification.gates.gate2.passed ? `✓ مؤكدة (${classification.confidence}%)` : '✗ ثقة منخفضة'}</div>
                  </div>
                  <div className={`p-2 rounded-lg border ${classification.gates.gate3.passed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="font-bold">G3: القيود النظامية</div>
                    <div className="text-[10px] mt-0.5">{classification.gates.gate3.passed ? '✓ مؤهل نظامياً' : '✗ إيقاف احترازي'}</div>
                  </div>
                  <div className={`p-2 rounded-lg border ${classification.gates.gate4.passed ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
                    <div className="font-bold">G4: سياسة القناة والوقت</div>
                    <div className="text-[10px] mt-0.5">{classification.gates.gate4.passed ? '✓ مطابقة للسياسة' : '✗ خارج النافذة'}</div>
                  </div>
                </div>
              </div>

              {/* Recommended NBCA Box */}
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3 border border-slate-800">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-xs text-amber-300">
                    الإجراء الأنسب الموصى به من محرك القرار (Next Best Collaborative Action):
                  </span>
                </div>

                <div className="text-sm font-bold text-white leading-relaxed">
                  {classification.nbca}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1 border-t border-slate-800 text-slate-300">
                  <div className="flex items-center gap-2">
                    <Send className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span><strong>القناة المستهدفة:</strong> <span className="font-mono text-sky-300">{classification.channel}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span><strong>التوقيت الأنسب:</strong> <span className="font-mono text-amber-300">{classification.timing}</span></span>
                  </div>
                </div>

                {/* Message Script */}
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs">
                  <div className="text-slate-400 text-[10px] font-bold mb-1 flex items-center gap-1.5">
                    <MessageSquare className="w-3 h-3 text-sky-400" />
                    <span>نص الرسالة / سكربت التواصل المقترح:</span>
                  </div>
                  <p className="text-slate-200 italic leading-relaxed">
                    "{classification.message}"
                  </p>
                </div>

                {/* Reason Codes */}
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] pt-1">
                  <span className="text-slate-400 font-bold">أكواد التفسير (Reason Codes):</span>
                  {classification.reasonCodes.map((code, idx) => (
                    <span key={idx} className="font-mono bg-slate-800 text-sky-300 px-2 py-0.5 rounded border border-slate-700">
                      {code}
                    </span>
                  ))}
                </div>
              </div>

              {/* Sign-off & Audit Trail Footer */}
              <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
                <div>
                  تم توليد هذا التقرير آلياً عبر محرك محاكاة <span className="font-semibold text-slate-700">Collection Persona Framework™</span>
                </div>
                <div className="text-[10px] font-mono">
                  CONFIDENTIAL & PROPRIETARY • BANKING OPERATIONS 2026
                </div>
              </div>

            </div>

          </div>

          {/* Modal Footer Controls (hidden on print) */}
          <div className="p-3 sm:p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0 no-print">
            <div className="text-xs text-slate-500">
              جاهز للطباعة المباشرة بمقاس A4
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-xl text-xs font-bold transition-colors"
              >
                إغلاق
              </button>
              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>طباعة / حفظ كملف PDF</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
