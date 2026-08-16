import React, { useState } from 'react';
import { appendicesList, reasonCodesList } from '../data/appendicesData';
import { FileText, Table, CheckSquare, Layers, ShieldCheck, HelpCircle } from 'lucide-react';
import { LayeredArchitectureDiagram } from './diagrams/LayeredArchitectureDiagram';
import { PersonaMatrixDiagram } from './diagrams/PersonaMatrixDiagram';
import { DecisionEngineFlowDiagram } from './diagrams/DecisionEngineFlowDiagram';
import { DecisionReadinessGatesDiagram } from './diagrams/DecisionReadinessGatesDiagram';
import { NBCADecisionMapDiagram } from './diagrams/NBCADecisionMapDiagram';
import { BalancedScorecardDiagram } from './diagrams/BalancedScorecardDiagram';
import { MaturityModelLadderDiagram } from './diagrams/MaturityModelLadderDiagram';
import { ImplementationRoadmapTimeline } from './diagrams/ImplementationRoadmapTimeline';
import { DecisionTreeDiagram } from './diagrams/DecisionTreeDiagram';
import { SystemIntegrationBlueprint } from './diagrams/SystemIntegrationBlueprint';
import { FeedbackLoopDiagram } from './diagrams/FeedbackLoopDiagram';
import { PlatformArchitectureDiagram } from './diagrams/PlatformArchitectureDiagram';

export const AppendicesView: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>('app-a');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 avoid-break-inside">
        <h3 className="font-bold text-base text-slate-900 mb-1">
          الملاحق الفنية والقوالب التطبيقية (Technical Appendices & Templates)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          تتضمن هذه الملاحق النماذج والقوالب المعيارية، وسجلات التدقيق، ومكتبة أكواد الأسباب، ومصفوفات التحقق والحوكمة اللازمة لتطبيق وتشغيل ™Collection Persona Framework بصورة إنتاجية قابلة للتكرار والقياس.
        </p>
      </div>

      {/* Screen Tabs (hidden on print) */}
      <div className="no-print flex overflow-x-auto touch-scroll no-scrollbar gap-1.5 border-b border-slate-200 pb-3">
        {appendicesList.map((app) => (
          <button
            key={app.id}
            onClick={() => setSelectedAppId(app.id)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
              selectedAppId === app.id
                ? 'bg-sky-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            ملحق ({app.letter}) - {app.title.length > 20 ? app.title.substring(0, 20) + '...' : app.title}
          </button>
        ))}
      </div>

      {/* Render Appendices */}
      <div className="space-y-10">
        {/* Appendix A: Architecture */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-a' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (أ)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">المعمارية المرجعية الكاملة لنموذج Collection Persona</h3>
            <p className="text-xs text-slate-600 mt-0.5">8 طبقات وظيفية مع حلقة التغذية العكسية وإعادة التعلم المستمر.</p>
          </div>
          <LayeredArchitectureDiagram />
        </div>

        {/* Appendix B: Persona Card Template */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-b' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (ب)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">قالب بطاقة تعريف الشخصية (Persona Card Template)</h3>
            <p className="text-xs text-slate-600 mt-0.5">النموذج المعياري لتوثيق وتوصيف أي شخصية تشغيلية داخل البنك.</p>
          </div>
          <div className="p-4 rounded bg-slate-50 border border-slate-200 text-xs space-y-3">
            <div className="grid grid-cols-2 gap-3 border-b border-slate-200 pb-2">
              <div><strong className="text-slate-900">Persona Code: </strong> [CP-XX]</div>
              <div><strong className="text-slate-900">Persona Name: </strong> [اسم الشخصية العربي والإنجليزي]</div>
            </div>
            <div><strong className="text-slate-900">Operational Definition: </strong> [التعريف التشغيلي الدقيق]</div>
            <div><strong className="text-slate-900">Behavioral & Financial Archetype: </strong> [النمط السلوكي والمالي]</div>
            <div><strong className="text-slate-900">Dominant Features: </strong> [قائمة الميزات الـ 3-5 الأكثر تأثيرًا]</div>
            <div><strong className="text-slate-900">Recommended Strategy Family: </strong> [عائلة الاستراتيجيات والحلول الموصى بها]</div>
            <div><strong className="text-slate-900">Preferred Channels & Tone: </strong> [القنوات والنبرة المعتمدة]</div>
            <div><strong className="text-slate-900">Negative Constraints / Risks to Avoid: </strong> [المحاذير والموانع التشغيلية]</div>
          </div>
        </div>

        {/* Appendix J: Reason Codes Library */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-j' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (ي)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">مكتبة أكواد الأسباب التفسيرية (Reason Codes Library)</h3>
            <p className="text-xs text-slate-600 mt-0.5">الأكواد المعيارية المعتمدة المرافقة لتوصيات محرك القرار.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs border border-slate-200">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-2 border-l border-slate-200 w-24">كود السبب</th>
                  <th className="p-2 border-l border-slate-200 w-48">اسم السبب (Reason Name)</th>
                  <th className="p-2">الوصف التشغيلي والدلالة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {reasonCodesList.map((rc) => (
                  <tr key={rc.code} className="hover:bg-slate-50">
                    <td className="p-2 border-l border-slate-200 font-mono font-bold text-sky-900" dir="ltr">{rc.code}</td>
                    <td className="p-2 border-l border-slate-200 font-semibold text-slate-800" dir="ltr">{rc.name}</td>
                    <td className="p-2 text-slate-700">{rc.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Appendix G: Reference Decision Tree */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-g' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (ز)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">شجرة القرار المرجعية (Reference Decision Tree)</h3>
          </div>
          <DecisionTreeDiagram />
        </div>

        {/* Appendix H: Strategy Matrix */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-h' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (ح)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">مصفوفة مطابقة الاستراتيجيات (Persona × Strategy Matrix)</h3>
          </div>
          <PersonaMatrixDiagram />
        </div>

        {/* Appendix S: Balanced Scorecard */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-s' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (س)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">لوحة القياس المتوازنة للتحصيل (Balanced Collection Scorecard)</h3>
          </div>
          <BalancedScorecardDiagram />
        </div>

        {/* Appendix R: Conceptual Equation & Statement */}
        <div className={`a4-screen-page print-page bg-white p-6 rounded-xl border border-slate-300 shadow-sm page-break-after ${selectedAppId !== 'app-t' ? 'hidden print:block' : 'block'}`}>
          <div className="border-b-2 border-slate-900 pb-3 mb-4">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-300">
              ملحق (ر)
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">المعادلة الفكرية والبيان الختامي للمصنف</h3>
            <p className="text-xs text-slate-600 mt-0.5">صياغة رياضية مفاهيمية لجودة القرار وقيمة المنظومة.</p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
            <div className="p-4 rounded-lg bg-slate-900 text-sky-300 font-mono text-center font-bold text-sm border border-slate-800" dir="ltr">
              Decision Quality = f(Understanding × Classification × Quantification × Readiness × Governance)
            </div>

            <p>
              يؤكد هذا المصنف في ختامه أن التحصيل المصرفي الحديث ليس سباقًا لإجراء أكبر عدد من الاتصالات، بل منظومة معرفية دقيقة تسعى لتحقيق أفضل نتيجة مستدامة للمؤسسة والعميل في آنٍ واحد، عبر الاستثمار في فهم الإنسان، وتوجيه القرار بذكاء البيانات، وحفظ كرامة العميل واستدامة علاقته الائتمانية.
            </p>

            <div className="p-4 rounded-lg bg-slate-50 border-r-4 border-sky-800 font-semibold text-slate-800">
              «إن أسمى درجات الكفاءة ليست في إجبار العميل على ما لا يطيق، بل في تيسير وصوله إلى الحل الأنسب الذي يحفظ حقوق المؤسسة ويمكنه من استعادة استقراره المالي.»
              <div className="text-xs text-sky-900 font-normal mt-2">— ماجد عامر السفياني، مؤلف ™Collection Persona Framework (2026)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
