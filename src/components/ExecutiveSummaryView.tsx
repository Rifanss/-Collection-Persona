import React from 'react';
import { authorStatement, executiveSummary } from '../data/publicationData';
import { ArrowRight, RefreshCw, CheckCircle2, FileText, Layers, ShieldCheck } from 'lucide-react';
import { LayeredArchitectureDiagram } from './diagrams/LayeredArchitectureDiagram';

export const ExecutiveSummaryView: React.FC = () => {
  return (
    <div className="a4-screen-page print-page bg-white text-slate-900 page-break-after border-none">
      {/* Author Statement */}
      <section className="mb-8 pb-6 border-b border-slate-200 avoid-break-inside">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-sky-800" />
            <span>{authorStatement.title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-400" dir="ltr">
            AUTHOR & EDITION STATEMENT
          </span>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {(authorStatement.paragraphs || []).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* Executive Summary */}
      <section className="space-y-5">
        <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2">
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layers className="w-6 h-6 text-sky-800" />
            <span>{executiveSummary.title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500" dir="ltr">
            EXECUTIVE SUMMARY
          </span>
        </div>

        {/* Lead box */}
        <div className="p-4 rounded-lg bg-slate-50 border-r-4 border-sky-800 text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
          {executiveSummary.lead}
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {(executiveSummary.paragraphs || []).map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Formula Box */}
        <div className="p-3 bg-slate-900 text-sky-300 rounded font-mono text-xs text-center font-bold tracking-wide border border-slate-800 my-4" dir="ltr">
          {executiveSummary.formulaContext}
        </div>

        {/* Traditional Question vs Persona Paradigm Shift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-4 avoid-break-inside">
          <div className="p-3.5 rounded bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono text-rose-700 font-bold block mb-1">السؤال التقليدي النمطي:</span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800">
              «{executiveSummary.traditionalVsPersona.traditionalQuestion}»
            </p>
          </div>
          <div className="p-3.5 rounded bg-sky-50 border border-sky-200">
            <span className="text-xs font-mono text-sky-800 font-bold block mb-1">سؤال نموذج Collection Persona:</span>
            <p className="text-xs sm:text-sm font-semibold text-sky-950">
              «{executiveSummary.traditionalVsPersona.personaQuestion}»
            </p>
          </div>
        </div>

        {/* Paradigm Shift Flow */}
        <div className="p-3 rounded bg-slate-100 border border-slate-300 text-xs flex flex-col sm:flex-row items-center justify-between gap-2 font-mono avoid-break-inside">
          <div className="text-slate-500" dir="ltr">
            FROM: {executiveSummary.paradigmShift.from}
          </div>
          <div className="text-sky-800 font-bold" dir="ltr">
            TO: {executiveSummary.paradigmShift.to}
          </div>
        </div>

        {/* 8 Layers summary list */}
        <div className="mt-4 space-y-2 avoid-break-inside">
          <h3 className="font-bold text-sm text-slate-900">المعمارية متعددة الطبقات للإطار:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {(executiveSummary.layers || []).map((l, i) => (
              <div key={i} className="p-2 rounded border border-slate-200 bg-slate-50/70">
                <span className="font-bold text-sky-900 block font-mono mb-0.5" dir="ltr">
                  #{i + 1} {l.name}
                </span>
                <span className="text-slate-600 text-[11px]">{l.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-500 italic mt-3">
          {executiveSummary.closingNote}
        </p>

        {/* Embedded Blueprint Visualization */}
        <div className="mt-6 page-break-before">
          <LayeredArchitectureDiagram />
        </div>
      </section>
    </div>
  );
};
