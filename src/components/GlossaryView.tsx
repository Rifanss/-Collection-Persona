import React, { useState, useMemo } from 'react';
import { glossaryTermsList } from '../data/glossaryData';
import { BookMarked, Search, Filter } from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = useMemo(() => {
    const cats = new Set(
      glossaryTermsList
        .map((t) => t.category)
        .filter((c): c is string => Boolean(c))
    );
    return ['all', ...Array.from(cats)];
  }, []);

  const filteredTerms = useMemo(() => {
    return glossaryTermsList.filter((t) => {
      const matchCat = selectedCategory === 'all' || t.category === selectedCategory;
      const matchSearch =
        t.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.englishTerm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.definition.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="a4-screen-page print-page bg-white text-slate-900 p-6 rounded-xl border border-slate-300 shadow-sm page-break-after">
      {/* Header */}
      <div className="border-b-2 border-slate-900 pb-3 mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-sky-800" />
            <span>الفصل 41: قاموس المصطلحات المعتمدة</span>
          </h2>
          <span className="text-xs font-mono text-slate-500" dir="ltr">
            FRAMEWORK GLOSSARY ({glossaryTermsList.length} TERMS)
          </span>
        </div>
        <p className="text-xs text-slate-600 mt-1">
          التعريفات المعيارية الموحدة للمفاهيم والمؤشرات والطبقات المستخدمة في ™Collection Persona Framework.
        </p>
      </div>

      {/* Screen Search & Filters (hidden on print) */}
      <div className="no-print mb-6 space-y-3">
        <div className="relative">
          <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="ابحث عن مصطلح عربي أو إنجليزي أو دلالة..."
            className="w-full pl-3 pr-9 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-800"
          />
        </div>

        {/* Category Pills (only if multiple categories exist) */}
        {categories.length > 2 && (
          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded transition-all ${
                  selectedCategory === c
                    ? 'bg-sky-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {c === 'all' ? 'جميع التصنيفات' : c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Terms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredTerms.map((item, idx) => (
          <div
            key={item.englishTerm || item.term || idx}
            className="p-3.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-white hover:border-slate-300 transition-colors avoid-break-inside flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <h3 className="font-bold text-sm text-slate-900">{item.term}</h3>
                {item.category && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-100 text-sky-900 border border-sky-200 shrink-0">
                    {item.category}
                  </span>
                )}
              </div>
              <div className="text-xs font-mono text-slate-500 mb-2 text-left" dir="ltr">
                {item.englishTerm}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed text-justify">
                {item.definition}
              </p>
            </div>

            {(item as any).formula && (
              <div className="mt-2.5 p-1.5 rounded bg-white border border-slate-200 font-mono text-[11px] text-sky-900 text-center font-semibold" dir="ltr">
                {(item as any).formula}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
