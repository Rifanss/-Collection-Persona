import React from 'react';
import { Part } from '../types';
import { BookOpen, List, ChevronRight } from 'lucide-react';

interface Props {
  parts: Part[];
  onSelectChapter?: (chapterId: string) => void;
}

export const TableOfContents: React.FC<Props> = ({ parts, onSelectChapter }) => {
  return (
    <div className="a4-screen-page print-page bg-white text-slate-900 page-break-after border-none">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <List className="w-6 h-6 text-sky-700" />
            <span>الفهرس التفصيلي العام للمصنف</span>
          </h2>
          <span className="text-xs font-mono text-slate-500" dir="ltr">
            TABLE OF CONTENTS
          </span>
        </div>
        <p className="text-xs text-slate-600 mt-1">
          دليل الأجزاء والفصول والأقسام التفصيلية لـ ™Collection Persona Framework (الإصدار الأول 2026)
        </p>
      </div>

      {/* Parts & Chapters Hierarchical List */}
      <div className="space-y-6 text-xs sm:text-sm">
        {/* Author Statement & Exec Summary */}
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <div className="font-bold text-slate-900 flex items-center justify-between">
            <span>بيان المؤلف والإصدار والملخص التنفيذي</span>
            <span className="font-mono text-xs text-slate-500">ص 10 – 12</span>
          </div>
          <div className="text-xs text-slate-600 mt-1">
            تقديم الإطار، فلسفة «تحليل الإنسان قبل الدين»، المقارنة مع التحصيل التقليدي، والمعمارية الثمانية.
          </div>
        </div>

        {(parts || []).map((part) => (
          <div key={part.id} className="border-b border-slate-200 pb-4 avoid-break-inside">
            {/* Part Header */}
            <div className="bg-slate-900 text-white p-2 px-3 rounded flex items-center justify-between mb-2">
              <div className="font-bold text-sm">
                <span>{part.num}: </span>
                <span>{part.title}</span>
              </div>
              <span className="text-[11px] font-mono text-slate-300" dir="ltr">
                {part.englishTitle}
              </span>
            </div>

            {/* Chapters */}
            <div className="space-y-2 pr-2">
              {(part.chapters || []).map((ch) => (
                <div key={ch.id} className="pt-1">
                  <div
                    onClick={() => onSelectChapter?.(ch.id)}
                    className="flex items-center justify-between font-semibold text-slate-800 hover:text-sky-700 cursor-pointer group"
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-6 text-xs font-mono font-bold text-sky-800">
                        {ch.num}.
                      </span>
                      <span>{ch.title}</span>
                    </div>
                    <div className="flex-1 mx-3 border-b border-dotted border-slate-300 relative top-1" />
                    <span className="font-mono text-xs text-slate-500 group-hover:text-sky-700">
                      فصل {ch.num}
                    </span>
                  </div>

                  {/* Sub sections preview */}
                  <div className="pr-8 text-[11px] text-slate-500 flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5">
                    {(ch.sections || []).map((sec) => (
                      <span key={sec.id} className="hover:text-slate-800">
                        <span className="font-mono ml-1">{sec.num}</span>
                        <span>{sec.title}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Appendices & Glossary Jump */}
        <div className="p-3 bg-slate-50 rounded border border-slate-200">
          <div className="font-bold text-slate-900 flex items-center justify-between">
            <span>قاموس المصطلحات والملاحق التطبيقية والمراجع (الفصول 41 - 42)</span>
            <span className="font-mono text-xs text-slate-500">ص 190 – 228</span>
          </div>
          <div className="text-xs text-slate-600 mt-1">
            40+ مصطلحًا مرجعيًا، 20 ملحقًا وقالبًا تطبيقيًا (أ إلى ر)، والمراجع الأكاديمية والتنظيمية.
          </div>
        </div>
      </div>
    </div>
  );
};
