import React from 'react';
import { academicReferencesList } from '../data/referencesData';
import { BookOpen, ExternalLink, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export const ReferencesView: React.FC = () => {
  return (
    <div className="a4-screen-page print-page bg-white text-slate-900 p-6 rounded-xl border border-slate-300 shadow-sm page-break-after">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-3 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-sky-800" />
            <span>الفصل 42: المراجع العلمية والتوثيق المنهجي</span>
          </h2>
          <span className="text-xs font-mono text-slate-500" dir="ltr">
            ACADEMIC & REGULATORY CITATIONS
          </span>
        </div>
        <p className="text-xs text-slate-600 mt-1">
          التوثيق الأكاديمي، والمصادر المرجعية، وأدلة حماية الملكية الفكرية المعيارية (WIPO, SAIP, NIST).
        </p>
      </div>

      {/* Citations List */}
      <div className="space-y-6">
        {academicReferencesList.map((ref) => (
          <div key={ref.id} className="p-4 rounded-lg bg-slate-50 border border-slate-200 avoid-break-inside">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-900 text-white">
                [{ref.number}]
              </span>
              <span className="text-[11px] font-mono text-sky-800 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                {ref.componentMapped}
              </span>
            </div>

            {/* APA Citation in LTR */}
            <div className="p-2.5 rounded bg-white border border-slate-200 font-mono text-xs text-slate-800 leading-relaxed mb-2 text-left" dir="ltr">
              {ref.citation}
            </div>

            {/* Description & Relevance in Arabic */}
            <div className="space-y-1.5 text-xs text-slate-700">
              <p>
                <strong className="text-slate-900">مضمون البحث: </strong>
                {ref.description}
              </p>
              <p>
                <strong className="text-sky-900">أوجه الاستفادة في النموذج: </strong>
                {ref.frameworkRelevance}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Regulatory Compliance Declaration */}
      <div className="mt-6 p-4 rounded-lg bg-sky-50 border border-sky-200 text-xs text-slate-800 avoid-break-inside">
        <div className="flex items-center gap-2 mb-1.5 font-bold text-sky-950">
          <Scale className="w-4 h-4 text-sky-800" />
          <span>بيان أصالة المصنف والامتثال التنظيمي (SAIP & WIPO Guidelines):</span>
        </div>
        <p className="leading-relaxed text-justify text-slate-700">
          يؤكد هذا التوثيق أن ™Collection Persona Framework هو مصنف تطبيقي وفكري أصيل ناتج عن جهد بشري مستقل للمؤلف ماجد عامر السفياني. وقد تم الالتزام بكافة معايير الاستشهاد العلمي والتنظيمي المعتمدة محليًا ودوليًا.
        </p>
      </div>
    </div>
  );
};
