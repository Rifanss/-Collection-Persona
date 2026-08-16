import React from 'react';
import { Database, Brain, Users, Gauge, ShieldCheck, Cpu, Send, LineChart, RefreshCw } from 'lucide-react';

interface Props {
  className?: string;
  isPrint?: boolean;
}

export const LayeredArchitectureDiagram: React.FC<Props> = ({ className = '', isPrint = false }) => {
  const layers = [
    {
      num: 'Layer 1',
      name: 'Data Layer',
      title: 'طبقة البيانات والمصادر',
      icon: Database,
      items: ['Financial Data (المالية)', 'Behavioral Data (السلوكية)', 'Demographic Data (الديموغرافية)', 'Digital Data (الرقمية)', 'Historical Data (التاريخية)', 'Operational Data (التشغيلية)'],
      color: 'border-sky-600 bg-sky-950/40 text-sky-200',
      badgeColor: 'bg-sky-600 text-white',
    },
    {
      num: 'Layer 2',
      name: 'Customer Intelligence Layer',
      title: 'طبقة ذكاء العميل والأبعاد',
      icon: Brain,
      items: ['Financial Capacity (القدرة)', 'Willingness (الرغبة/التعاون)', 'Responsiveness (الاستجابة)', 'Behavioral Pattern (النمط)', 'Digital Behavior (السلوك الرقمي)', 'Barriers & Complexity (العوائق والتعقيد)'],
      color: 'border-blue-600 bg-blue-950/40 text-blue-200',
      badgeColor: 'bg-blue-600 text-white',
    },
    {
      num: 'Layer 3',
      name: 'Collection Persona Engine',
      title: 'محرك الشخصيات التشغيلية',
      icon: Users,
      items: ['Persona Classification Logic', 'Primary Persona (الشخصية الأساسية)', 'Secondary Persona / Signals (الإشارات الثانوية)', 'Persona Transition & Snapshot', 'Persona Journey Mapping'],
      color: 'border-indigo-600 bg-indigo-950/40 text-indigo-200',
      badgeColor: 'bg-indigo-600 text-white',
    },
    {
      num: 'Layer 4',
      name: 'Persona Scoring Layer',
      title: 'طبقة التقييم الكمي المقسم',
      icon: Gauge,
      items: ['Capacity Score (0-100)', 'Willingness Score (0-100)', 'Responsiveness Score (0-100)', 'Behavior Score (0-100)', 'Complexity Score (0-100)', 'Priority Score (P1-P4)'],
      color: 'border-violet-600 bg-violet-950/40 text-violet-200',
      badgeColor: 'bg-violet-600 text-white',
    },
    {
      num: 'Layer 5',
      name: 'Confidence & Decision Readiness',
      title: 'طبقة الثقة وجاهزية القرار',
      icon: ShieldCheck,
      items: ['Data Quality & Freshness', 'Classification Confidence %', 'Decision Readiness Gates (DR-1 to DR-5)', 'Decision Abstention Logic (الامتناع الرشيد)'],
      color: 'border-teal-600 bg-teal-950/40 text-teal-200',
      badgeColor: 'bg-teal-600 text-white',
    },
    {
      num: 'Layer 6',
      name: 'Decision Engine',
      title: 'محرك القرار والقواعد',
      icon: Cpu,
      items: ['Eligibility Verification (الأهلية)', 'Hard Stops Enforcement (موانع التحصيل)', 'Business Rules & Policies (قواعد الأعمال)', 'Strategy Ranking & Utility Optimization', 'Human Review Gate (بوابة المراجعة البشرية)'],
      color: 'border-amber-600 bg-amber-950/40 text-amber-200',
      badgeColor: 'bg-amber-600 text-white',
    },
    {
      num: 'Layer 7',
      name: 'Next Best Collection Action',
      title: 'الإجراء التحصيلي التالي الأنسب',
      icon: Send,
      items: ['Action Selection (الإجراء)', 'Optimal Channel (القناة)', 'Timing Window (التوقيت)', 'Message Approach (النبرة)', 'Eligible Solution (الحل)', 'Alternative / Fallback (البديل)', 'Time to Live - TTL'],
      color: 'border-emerald-600 bg-emerald-950/40 text-emerald-200',
      badgeColor: 'bg-emerald-600 text-white',
    },
    {
      num: 'Layer 8',
      name: 'Execution & Measurement',
      title: 'طبقة التنفيذ والقياس والحوكمة',
      icon: LineChart,
      items: ['Channel Delivery (التنفيذ)', 'Outcome Capture (التقاط النتائج)', 'Balanced Scorecard (اللوحة المتوازنة)', 'Audit Trail & Lineage (التدقيق)'],
      color: 'border-cyan-600 bg-cyan-950/40 text-cyan-200',
      badgeColor: 'bg-cyan-600 text-white',
    },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded">
              ARCHITECTURE SPECIFICATION
            </span>
            <span className="text-xs text-slate-400 font-mono">v1.0 (2026)</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            المعمارية المرجعية الشاملة — ™Collection Persona Framework
          </h3>
        </div>
        <div className="text-xs text-slate-400 font-mono text-left" dir="ltr">
          8 Integrated Layers + Closed Feedback Loop
        </div>
      </div>

      {/* 8 Layers Stack */}
      <div className="relative z-10 space-y-3">
        {layers.map((layer, idx) => {
          const Icon = layer.icon;
          return (
            <div
              key={layer.num}
              className={`p-3 md:p-4 rounded-lg border ${layer.color} backdrop-blur-sm transition-all relative`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className={`px-2 py-0.5 text-xs font-mono font-bold rounded ${layer.badgeColor}`}>
                    {layer.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-slate-300" />
                    <span className="font-bold text-sm md:text-base text-white">{layer.title}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400" dir="ltr">
                  {layer.name}
                </span>
              </div>

              {/* Items Pill Grid */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {layer.items.map((item, i) => (
                  <span
                    key={i}
                    className="inline-block px-2 py-0.5 text-xs font-medium bg-slate-900/80 border border-slate-700/60 rounded text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Down connector arrow */}
              {idx < layers.length - 1 && (
                <div className="flex justify-center -mb-4 mt-2 relative z-20">
                  <div className="w-5 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-[10px] text-sky-400 font-bold">
                    ↓
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Closed Feedback Loop Banner */}
      <div className="relative z-10 mt-5 p-3.5 rounded-lg border border-teal-500/40 bg-teal-950/50 text-teal-200 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 shrink-0">
            <RefreshCw className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="font-bold text-sm text-white">
              حلقة التعلم والتغذية العكسية المستمرة (Feedback & Learning Loop)
            </div>
            <div className="text-xs text-teal-300/90 font-mono mt-0.5" dir="ltr">
              Outcome → Updated Data → Features → Persona → Scores → Decision
            </div>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-teal-500/20 text-teal-300 border border-teal-500/30 rounded whitespace-nowrap">
          Outcome as Evidence
        </span>
      </div>
    </div>
  );
};
