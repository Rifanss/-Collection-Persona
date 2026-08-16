import React, { useState } from 'react';
import { appliedScenariosList } from '../data/scenariosData';
import { AppliedScenario } from '../types';
import { PlayCircle, CheckCircle2, AlertTriangle, ShieldCheck, ArrowLeft, Layers, User } from 'lucide-react';

export const ScenariosView: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<number>(1);
  const activeScenario = appliedScenariosList.find(s => s.id === activeScenarioId) || appliedScenariosList[0];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 avoid-break-inside">
        <h3 className="font-bold text-base text-slate-900 mb-1">
          منهجية السيناريوهات التطبيقية الافتراضية العشرة (Applied Scenarios)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          توضح هذه السيناريوهات دورة القرار كاملة داخل ™Collection Persona Framework: من البيانات الخام، مرورًا بهندسة الميزات، وتصنيف الشخصية، وحساب المؤشرات، وبوابات الجاهزية والثقة، وحتى إصدار NBCA وقياس النتيجة وإعادة التعلم.
        </p>
      </div>

      {/* Screen Tabs Selector (hidden on print) */}
      <div className="no-print flex overflow-x-auto touch-scroll no-scrollbar gap-1.5 border-b border-slate-200 pb-3">
        {appliedScenariosList.map((sc) => (
          <button
            key={sc.id}
            onClick={() => setActiveScenarioId(sc.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              activeScenarioId === sc.id
                ? 'bg-sky-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            سيناريو {sc.id}
          </button>
        ))}
      </div>

      {/* Scenarios Content (For Screen: active scenario; For Print: All 10 scenarios rendered sequentially) */}
      <div className="space-y-8">
        {/* On Print, map all scenarios; On Screen, show active scenario with option to see all */}
        {appliedScenariosList.map((sc) => {
          // On screen, only display the active scenario if not in print
          return (
            <div
              key={sc.id}
              className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${
                sc.id !== activeScenarioId ? 'hidden print:block' : 'block'
              }`}
            >
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-900 pb-3 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
                    SCENARIO #{sc.id}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1">{sc.title}</h3>
                </div>
                <div className="text-xs font-mono text-slate-500" dir="ltr">
                  End-to-End Decision Simulation
                </div>
              </div>

              {/* 1. Context & Raw Evidence */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-sky-900 mb-1.5">1. الحالة الأولية والبيانات الخام (Raw Context & Evidence):</h4>
                <p className="text-xs text-slate-700 mb-2">{sc.initialState?.context}</p>
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <span className="text-[11px] font-bold text-slate-600 block mb-1">الأدلة الخام المرصودة:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700">
                    {(sc.initialState?.rawEvidence || []).map((ev, i) => (
                      <li key={i}>{ev}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 2. Features & Intelligence */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 mb-1.5">2. الميزات المشتقة (Feature Engineering):</h4>
                  <div className="space-y-1 text-xs font-mono">
                    {Object.entries(sc.features || {}).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-slate-200/60 pb-0.5" dir="ltr">
                        <span className="text-slate-500">{k}:</span>
                        <span className="font-bold text-slate-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200">
                  <h4 className="text-xs font-bold text-slate-900 mb-1.5">3. ذكاء العميل والأبعاد (Customer Intelligence):</h4>
                  <div className="space-y-1 text-xs">
                    {Object.entries(sc.customerIntelligence || {}).map(([k, v]) => (
                      <div key={k} className="flex justify-between border-b border-slate-200/60 pb-0.5">
                        <span className="text-slate-600">{k}:</span>
                        <span className="font-bold text-slate-900">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 3. Classification, Scores & Readiness */}
              <div className="p-3.5 rounded-lg bg-sky-50 border border-sky-200 mb-4 avoid-break-inside">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs mb-3">
                  <div>
                    <span className="text-slate-500 block text-[11px]">الشخصية المصنفة (Persona):</span>
                    <span className="font-bold text-sky-950">{sc.personaClassification?.primary}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">درجة الثقة (Confidence):</span>
                    <span className="font-bold text-sky-950 font-mono" dir="ltr">{sc.personaClassification?.confidence}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">جاهزية القرار (Readiness):</span>
                    <span className="font-bold text-sky-950 font-mono" dir="ltr">{sc.personaClassification?.readiness}</span>
                  </div>
                </div>

                {/* Score Badges */}
                <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                  <div className="p-1 bg-white rounded border border-sky-200">
                    <span className="text-slate-400 block">Capacity</span>
                    <span className="font-bold text-slate-800">{sc.scores?.capacity ?? 0}/100</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-sky-200">
                    <span className="text-slate-400 block">Willingness</span>
                    <span className="font-bold text-slate-800">{sc.scores?.willingness ?? 0}/100</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-sky-200">
                    <span className="text-slate-400 block">Response</span>
                    <span className="font-bold text-slate-800">{sc.scores?.responsiveness ?? 0}/100</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-sky-200">
                    <span className="text-slate-400 block">Complexity</span>
                    <span className="font-bold text-slate-800">{sc.scores?.complexity ?? 0}/100</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-sky-200">
                    <span className="text-slate-400 block">Digital</span>
                    <span className="font-bold text-slate-800">{sc.scores?.digitalReadiness ?? 0}/100</span>
                  </div>
                </div>
              </div>

              {/* 4. Decision Package (NBCA) */}
              <div className="p-3.5 rounded-lg bg-slate-900 text-white mb-4 avoid-break-inside">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="font-bold text-xs text-emerald-400">4. الإجراء التحصيلي الصادر (NBCA Decision Package)</span>
                  <span className="text-[11px] font-mono text-slate-400">TTL: {sc.decision?.ttl}</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div><span className="text-slate-400">الإجراء الأنسب (Action): </span><strong className="text-white">{sc.decision?.nbcaAction}</strong></div>
                  <div><span className="text-slate-400">القناة المرجحة (Channel): </span><span className="text-sky-300 font-mono" dir="ltr">{sc.decision?.channel}</span></div>
                  <div><span className="text-slate-400">التوقيت (Timing): </span><span className="text-slate-200">{sc.decision?.timing}</span></div>
                  <div><span className="text-slate-400">نهج الرسالة (Message): </span><span className="text-slate-300">{sc.decision?.message}</span></div>
                  <div><span className="text-slate-400">الإجراء البديل (Alternative): </span><span className="text-amber-300">{sc.decision?.alternative}</span></div>
                  <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1.5">
                    <span className="text-[11px] text-slate-400">أكواد الأسباب (Reason Codes): </span>
                    {(sc.decision?.reasonCodes || []).map((rc, i) => (
                      <span key={i} className="px-1.5 py-0.5 text-[10px] font-mono bg-slate-800 text-emerald-300 rounded border border-slate-700">
                        {rc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. Outcome & Feedback Learning */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 avoid-break-inside">
                <h4 className="text-xs font-bold text-slate-900 mb-1">5. النتيجة وحلقة التعلم المستمر (Outcome & Learning):</h4>
                <p className="text-xs text-slate-700 mb-2">{sc.outcome?.description}</p>
                <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                  {(sc.outcome?.metricsUpdated || []).map((m, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600">
                      ✓ {m}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-sky-900 font-semibold mt-2 pt-1 border-t border-slate-200">
                  الإجراء التالي: {sc.outcome?.nextAction}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
