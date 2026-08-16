import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
} from 'recharts';
import { 
  Activity, 
  Sparkles, 
  Maximize2, 
  X, 
  TrendingUp, 
  HelpCircle,
  BarChart3,
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface CustomerProfileRadarProps {
  capacity: number;
  willingness: number;
  responsiveness: number;
  complexity: number;
  digitalReadiness: number;
  personaCode?: string;
  personaName?: string;
}

// Typical benchmark profiles for personas to enable rich comparative analysis
const personaBenchmarks: Record<string, { capacity: number; willingness: number; responsiveness: number; complexity: number; digitalReadiness: number }> = {
  'CP-01': { capacity: 85, willingness: 90, responsiveness: 85, complexity: 15, digitalReadiness: 85 },
  'CP-02': { capacity: 25, willingness: 85, responsiveness: 80, complexity: 35, digitalReadiness: 60 },
  'CP-03': { capacity: 85, willingness: 25, responsiveness: 40, complexity: 30, digitalReadiness: 75 },
  'CP-04': { capacity: 20, willingness: 30, responsiveness: 20, complexity: 50, digitalReadiness: 40 },
  'CP-05': { capacity: 65, willingness: 60, responsiveness: 90, complexity: 75, digitalReadiness: 70 },
  'CP-06': { capacity: 60, willingness: 50, responsiveness: 25, complexity: 30, digitalReadiness: 85 },
  'CP-07': { capacity: 40, willingness: 55, responsiveness: 60, complexity: 85, digitalReadiness: 50 },
  'CP-08': { capacity: 30, willingness: 30, responsiveness: 15, complexity: 60, digitalReadiness: 25 },
};

export const CustomerProfileRadarChart: React.FC<CustomerProfileRadarProps> = ({
  capacity,
  willingness,
  responsiveness,
  complexity,
  digitalReadiness,
  personaCode = 'CP-01',
  personaName = 'المتعاون القابل للإغلاق',
}) => {
  const [showBenchmark, setShowBenchmark] = useState<boolean>(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  const benchmark = personaBenchmarks[personaCode] || personaBenchmarks['CP-01'];

  const radarData = [
    {
      subject: 'القدرة المالية',
      englishSubject: 'Capacity',
      current: capacity,
      benchmark: benchmark.capacity,
      fullMark: 100,
      description: 'مستوى السيولة والملاءة الفعلية للوفاء بالأقساط والالتزامات',
    },
    {
      subject: 'الرغبة بالسداد',
      englishSubject: 'Willingness',
      current: willingness,
      benchmark: benchmark.willingness,
      fullMark: 100,
      description: 'دافعية العميل الذاتية والمبادرة بالوصول إلى حل وتسوية',
    },
    {
      subject: 'سرعة الاستجابة',
      englishSubject: 'Responsiveness',
      current: responsiveness,
      benchmark: benchmark.responsiveness,
      fullMark: 100,
      description: 'معدل التفاعل مع قنوات الاتصال والرد وتأكيد الوعود',
    },
    {
      subject: 'التعقيد والتداخل',
      englishSubject: 'Complexity',
      current: complexity,
      benchmark: benchmark.complexity,
      fullMark: 100,
      description: 'تعدد المنتجات المالية، النزاعات، أو القيود القانونية',
    },
    {
      subject: 'الاستعداد الرقمي',
      englishSubject: 'Digital Readiness',
      current: digitalReadiness,
      benchmark: benchmark.digitalReadiness,
      fullMark: 100,
      description: 'قابلية استخدام بوابات الدفع الذاتي والتطبيقات المصرفية',
    },
  ];

  // Custom Radar Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-slate-900/95 backdrop-blur-md text-white p-3 rounded-xl shadow-2xl border border-slate-700 text-xs z-50 min-w-[210px] animate-in fade-in zoom-in-95 duration-150" dir="rtl">
          <div className="flex items-center justify-between gap-2 mb-1">
            <div className="font-bold text-sky-300 text-sm">{item.subject}</div>
            <span className="text-[10px] text-slate-400 font-mono" dir="ltr">{item.englishSubject}</span>
          </div>
          
          <div className="space-y-1.5 border-t border-slate-800 pt-2 my-2">
            <div className="flex justify-between items-center text-slate-200">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 inline-block shadow-sm shadow-sky-400/50" />
                <span>قيمة العميل الفعلية:</span>
              </span>
              <span className="font-bold font-mono text-sky-400 text-sm">{item.current}%</span>
            </div>

            {showBenchmark && (
              <div className="flex justify-between items-center text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-sm shadow-amber-400/50" />
                  <span>معيار النمط ({personaCode}):</span>
                </span>
                <span className="font-bold font-mono text-amber-400 text-sm">{item.benchmark}%</span>
              </div>
            )}
          </div>

          <div className="text-[10px] text-slate-400 border-t border-slate-800 pt-1.5 leading-normal">
            {item.description}
          </div>
        </div>
      );
    }
    return null;
  };

  // Behavioral Classification Quick Takeaways
  const isHighCapacity = capacity >= 60;
  const isHighWillingness = willingness >= 60;
  const isDigitalPreferred = digitalReadiness >= 65;
  const isComplexCase = complexity >= 50;

  return (
    <>
      {/* Interactive Main Radar Card with motion effects */}
      <motion.div 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
        className={`bg-white rounded-xl border transition-all duration-300 p-4 sm:p-5 space-y-4 relative overflow-hidden group ${
          isHovered 
            ? 'border-sky-400 shadow-xl shadow-sky-500/10' 
            : 'border-slate-300 shadow-sm'
        }`}
      >
        {/* Top Accent Line glow on hover */}
        <div 
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-amber-500 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg transition-colors duration-300 ${isHovered ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30' : 'bg-sky-100 text-sky-800'}`}>
              <Activity className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>المخطط الراداري للملف السلوكي (Behavioral Radar Chart)</span>
                <span className="text-[10px] font-mono font-bold bg-sky-100 text-sky-900 px-2 py-0.5 rounded">
                  5-D VECTOR
                </span>
              </h4>
              <p className="text-[11px] text-slate-500">
                تصور متكامل لمؤشرات الأبعاد الخمسة ومقارنتها بالنموذج القياسي لشخصية ({personaCode})
              </p>
            </div>
          </div>

          {/* Action Buttons: Benchmark Toggle & Expand Modal */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setShowBenchmark(!showBenchmark)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-all ${
                showBenchmark
                  ? 'bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100 shadow-sm'
                  : 'bg-slate-100 border-slate-300 text-slate-600 hover:bg-slate-200'
              }`}
              title="تبديل إظهار معيار النمط المقارن"
            >
              <span className={`w-2 h-2 rounded-full transition-colors ${showBenchmark ? 'bg-amber-500 animate-pulse' : 'bg-slate-400'}`} />
              <span>مقارنة {personaCode}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-slate-900 hover:bg-sky-700 text-white flex items-center gap-1.5 transition-all shadow hover:shadow-md hover:scale-105 active:scale-95"
              title="تكبير المخطط وعرض التحليل المتعمق"
            >
              <Maximize2 className="w-3.5 h-3.5 text-sky-300" />
              <span className="hidden sm:inline">تكبير المخطط</span>
            </button>
          </div>
        </div>

        {/* Radar Chart Container */}
        <div className="w-full h-[300px] sm:h-[340px] flex items-center justify-center relative select-none">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
              <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#1e293b', fontSize: 11, fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fill: '#64748b', fontSize: 10 }}
                stroke="#cbd5e1"
              />
              <Tooltip content={<CustomTooltip />} />
              
              {/* Current Client Vector */}
              <Radar
                name="العميل الفعلي (Current)"
                dataKey="current"
                stroke="#0284c7"
                fill="#0284c7"
                fillOpacity={0.45}
                strokeWidth={2.5}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-out"
              />

              {/* Benchmark Vector */}
              {showBenchmark && (
                <Radar
                  name={`معيار النمط (${personaCode})`}
                  dataKey="benchmark"
                  stroke="#f59e0b"
                  fill="#f59e0b"
                  fillOpacity={0.2}
                  strokeWidth={1.8}
                  strokeDasharray="4 4"
                  isAnimationActive={true}
                  animationDuration={800}
                  animationEasing="ease-out"
                />
              )}
              <Legend
                wrapperStyle={{ paddingTop: '8px', fontSize: '11px', direction: 'rtl' }}
                iconType="circle"
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* Metric Breakdown Cards with subtle hover animations */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-200 text-xs">
          <div className="p-2.5 rounded-lg bg-sky-50/70 hover:bg-sky-100/70 border border-sky-100 transition-colors">
            <div className="text-[10px] text-slate-500 font-medium">القدرة (Capacity)</div>
            <div className="font-mono font-bold text-sky-900 text-sm mt-0.5">{capacity}%</div>
            <div className="text-[10px] text-sky-700 font-semibold mt-0.5">
              {capacity >= 70 ? 'مرتفعة جداً' : capacity >= 40 ? 'متوسطة' : 'حرجة / منخفضة'}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-100 transition-colors">
            <div className="text-[10px] text-slate-500 font-medium">الرغبة (Willingness)</div>
            <div className="font-mono font-bold text-emerald-900 text-sm mt-0.5">{willingness}%</div>
            <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">
              {willingness >= 70 ? 'مبادرة عالية' : willingness >= 40 ? 'استجابة جزئية' : 'مماطلة / إحجام'}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-amber-50/70 hover:bg-amber-100/70 border border-amber-100 transition-colors">
            <div className="text-[10px] text-slate-500 font-medium">الاستجابة (Response)</div>
            <div className="font-mono font-bold text-amber-900 text-sm mt-0.5">{responsiveness}%</div>
            <div className="text-[10px] text-amber-700 font-semibold mt-0.5">
              {responsiveness >= 70 ? 'سريعة ونشطة' : responsiveness >= 40 ? 'متأخرة' : 'منقطعة / متجاهلة'}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-purple-50/70 hover:bg-purple-100/70 border border-purple-100 transition-colors">
            <div className="text-[10px] text-slate-500 font-medium">التعقيد (Complexity)</div>
            <div className="font-mono font-bold text-purple-900 text-sm mt-0.5">{complexity}%</div>
            <div className="text-[10px] text-purple-700 font-semibold mt-0.5">
              {complexity >= 60 ? 'مركب / متعدد' : complexity >= 30 ? 'معتدل' : 'بسيط ومباشر'}
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-cyan-50/70 hover:bg-cyan-100/70 border border-cyan-100 transition-colors col-span-2 sm:col-span-1">
            <div className="text-[10px] text-slate-500 font-medium">الرقمي (Digital)</div>
            <div className="font-mono font-bold text-cyan-900 text-sm mt-0.5">{digitalReadiness}%</div>
            <div className="text-[10px] text-cyan-700 font-semibold mt-0.5">
              {digitalReadiness >= 65 ? 'قناة رقمية أولى' : 'تفضيل تواصل بشري'}
            </div>
          </div>
        </div>

        {/* Behavioral Diagnostic Insight */}
        <div className="p-3 bg-slate-900 text-white rounded-lg text-xs flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-bold text-amber-300">التشخيص السلوكي لمصفوفة العميل:</div>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {isHighCapacity && isHighWillingness
                ? 'العميل يتمتع بملاءة مالية ورغبة إيجابية، يوصى بالمسار الرقمي المباشر السريع وتفادي الضغط أو الاتصالات المفرطة.'
                : !isHighCapacity && isHighWillingness
                ? 'العميل يبدي رغبة عالية مع قيود في القدرة والسيولة، يوصى بطرح خيارات إعادة الهيكلة والتجزئة وجدولة السداد.'
                : isHighCapacity && !isHighWillingness
                ? 'العميل يملك الملاءة المالية ولكنه يماطل في السداد، يوصى باتباع لهجة تفاوض حازمة وإبراز الآثار الائتمانية والتبعات النظامية.'
                : isComplexCase
                ? 'حالة معقدة تتضمن التزامات متعددة أو تداخلاً وظيفياً، يوصى بتعيين مستشار تسوية موحد لدمج الحلول.'
                : 'يوصى بتكثيف قنوات الاستقصاء والتحقق من التوقيت الأمثل للتواصل لتنشيط استجابة العميل.'}
            </p>
          </div>
        </div>
      </motion.div>

      {/* MODAL: FULLSCREEN DETAILED RADAR ANALYTICS DIALOG */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto no-print">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-10 border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
              dir="rtl"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        التحليل المتعمق للملف السلوكي الراداري
                      </h3>
                      <span className="px-2 py-0.5 text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
                        {personaCode}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      مطابقة دقيقة للمتجه السلوكي الخماسي مع الخصائص المعيارية لشخصية ({personaName})
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  aria-label="إغلاق النافذة"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 touch-scroll">
                
                {/* Control Bar inside Modal */}
                <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-700">الشخصية المرجعية المصنفة:</span>
                    <span className="px-2.5 py-1 bg-sky-100 text-sky-900 font-bold text-xs rounded-md">
                      {personaCode}: {personaName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setShowBenchmark(!showBenchmark)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border flex items-center gap-2 transition-all ${
                        showBenchmark
                          ? 'bg-amber-100 border-amber-300 text-amber-900'
                          : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      <span className={`w-2.5 h-2.5 rounded-full ${showBenchmark ? 'bg-amber-500' : 'bg-slate-400'}`} />
                      <span>{showBenchmark ? 'إخفاء خط الأساس المعياري' : 'إظهار خط الأساس المعياري'}</span>
                    </button>
                  </div>
                </div>

                {/* Large Radar Display */}
                <div className="bg-slate-900/5 rounded-2xl p-4 border border-slate-200">
                  <div className="w-full h-[360px] sm:h-[420px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                        <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{ fill: '#0f172a', fontSize: 12, fontWeight: 700 }}
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fill: '#64748b', fontSize: 11 }}
                          stroke="#94a3b8"
                        />
                        <Tooltip content={<CustomTooltip />} />
                        
                        <Radar
                          name="قيم العميل الفعلية (Current Vector)"
                          dataKey="current"
                          stroke="#0284c7"
                          fill="#0284c7"
                          fillOpacity={0.5}
                          strokeWidth={3}
                          isAnimationActive={true}
                        />

                        {showBenchmark && (
                          <Radar
                            name={`النمط القياسي لشخصية (${personaCode})`}
                            dataKey="benchmark"
                            stroke="#f59e0b"
                            fill="#f59e0b"
                            fillOpacity={0.25}
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            isAnimationActive={true}
                          />
                        )}
                        <Legend
                          wrapperStyle={{ paddingTop: '16px', fontSize: '12px', fontWeight: 600 }}
                          iconType="circle"
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Detailed Comparison Table */}
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-sky-600" />
                    <span>جدول الانحراف والمقارنة التفصيلية بالمؤشرات:</span>
                  </h4>

                  <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm">
                    <table className="w-full text-right text-xs">
                      <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3 border-l border-slate-200">المؤشر السلوكي</th>
                          <th className="p-3 border-l border-slate-200">قيمة العميل</th>
                          <th className="p-3 border-l border-slate-200">معيار ({personaCode})</th>
                          <th className="p-3 border-l border-slate-200">الانحراف (Variance)</th>
                          <th className="p-3">التوجيه التشغيلي المقترح</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {radarData.map((row, idx) => {
                          const diff = row.current - row.benchmark;
                          return (
                            <tr key={idx} className="hover:bg-slate-50 transition-colors">
                              <td className="p-3 border-l border-slate-200 font-bold text-slate-900">
                                <div>{row.subject}</div>
                                <div className="text-[10px] text-slate-400 font-mono" dir="ltr">{row.englishSubject}</div>
                              </td>
                              <td className="p-3 border-l border-slate-200 font-mono font-bold text-sky-800 text-sm">
                                {row.current}%
                              </td>
                              <td className="p-3 border-l border-slate-200 font-mono font-bold text-amber-700 text-sm">
                                {row.benchmark}%
                              </td>
                              <td className="p-3 border-l border-slate-200 font-mono">
                                <span className={`px-2 py-0.5 rounded font-bold text-xs inline-block ${
                                  diff > 0 
                                    ? 'bg-emerald-100 text-emerald-800' 
                                    : diff < 0 
                                    ? 'bg-rose-100 text-rose-800' 
                                    : 'bg-slate-100 text-slate-600'
                                }`}>
                                  {diff > 0 ? `+${diff}%` : `${diff}%`}
                                </span>
                              </td>
                              <td className="p-3 text-slate-700 leading-relaxed text-xs">
                                {row.subject === 'القدرة المالية' && (
                                  row.current >= 60 ? 'التركيز على حلول الإغلاق السريع لتوفر الملاءة.' : 'توفير خيارات الجدولة وتخفيف عبء الأقساط.'
                                )}
                                {row.subject === 'الرغبة بالسداد' && (
                                  row.current >= 60 ? 'الحفاظ على نبرة التعاون وتسهيل خطوات السداد.' : 'تفعيل التذكير بالالتزامات الائتمانية والمساءلة.'
                                )}
                                {row.subject === 'سرعة الاستجابة' && (
                                  row.current >= 60 ? 'استثمار القنوات الفورية كالرسائل وتطبيقات الجوال.' : 'تنويع قنوات التواصل واختيار المواعيد المناسبة.'
                                )}
                                {row.subject === 'التعقيد والتداخل' && (
                                  row.current >= 50 ? 'توحيد نقطة الاتصال وحل أي نزاع قائم أولاً.' : 'مسار قياسي مباشر لعدم وجود تعقيدات مركبة.'
                                )}
                                {row.subject === 'الاستعداد الرقمي' && (
                                  row.current >= 60 ? 'توجيه روابط الدفع المباشر وسداد وفواتير إلكترونية.' : 'توفير دعم هاتفي ومباشر لمساعدة العميل.'
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Strategy Summary Banner */}
                <div className="p-4 bg-slate-900 text-white rounded-xl flex items-start gap-3 border border-slate-800">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div className="font-bold text-amber-300 text-sm">التوصية الاستراتيجية المعتمدة:</div>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      بناءً على التوزيع الراداري، يقع ملف العميل ضمن نطاق التفاعل الموجه نحو نمط <strong className="text-white font-bold">{personaCode} ({personaName})</strong>. 
                      يُنصح بالالتزام ببوابات الجاهزية (G1 إلى G4) وتجنب التصعيد المبكر طالما أن الاستجابة والرغبة ضمن المعدلات الإيجابية.
                    </p>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-100 border-t border-slate-200 flex items-center justify-between shrink-0">
                <div className="text-xs text-slate-500">
                  مصنف Collection Persona Framework™ 2026
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shadow-sm"
                >
                  إغلاق النافذة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

