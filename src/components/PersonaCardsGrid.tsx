import React, { useState } from 'react';
import { personasList } from '../data/personasData';
import { PersonaDefinition } from '../types';
import { User, Shield, Zap, AlertTriangle, ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

interface Props {
  className?: string;
  isPrint?: boolean;
}

export const PersonaCardsGrid: React.FC<Props> = ({ className = '', isPrint = false }) => {
  const [selectedPersona, setSelectedPersona] = useState<string | null>(null);

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personasList.map((persona) => {
          const isSelected = selectedPersona === persona.id;
          return (
            <div
              key={persona.id}
              className="p-4 rounded-xl border border-slate-300 bg-white shadow-sm hover:shadow-md transition-shadow avoid-break-inside flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 text-xs font-mono font-bold bg-sky-100 text-sky-900 border border-sky-300 rounded">
                      {persona.code}
                    </span>
                    <h3 className="font-bold text-base text-slate-900">{persona.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500" dir="ltr">
                    {persona.englishName}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-xs text-sky-900 font-semibold mb-3 bg-sky-50/70 p-2 rounded border-r-2 border-sky-700">
                  {persona.tagline}
                </p>

                {/* Definition */}
                <p className="text-xs text-slate-700 leading-relaxed mb-3">
                  {persona.definition}
                </p>

                {/* Analytical Profile Bars */}
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5 p-2 rounded bg-slate-50 border border-slate-200 text-center mb-3 text-[10px] font-mono">
                  <div className="p-1 bg-white rounded border border-slate-200">
                    <span className="text-slate-400 block">Capacity</span>
                    <span className="font-bold text-slate-800">{persona.analyticalProfile.capacity}</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-slate-200">
                    <span className="text-slate-400 block">Willingness</span>
                    <span className="font-bold text-slate-800">{persona.analyticalProfile.willingness}</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-slate-200">
                    <span className="text-slate-400 block">Response</span>
                    <span className="font-bold text-slate-800">{persona.analyticalProfile.responsiveness}</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-slate-200">
                    <span className="text-slate-400 block">Complexity</span>
                    <span className="font-bold text-slate-800">{persona.analyticalProfile.complexity}</span>
                  </div>
                  <div className="p-1 bg-white rounded border border-slate-200">
                    <span className="text-slate-400 block">Digital</span>
                    <span className="font-bold text-slate-800">{persona.analyticalProfile.digitalReadiness}</span>
                  </div>
                </div>

                {/* Primary Strategy */}
                <div className="text-xs mb-2">
                  <span className="font-bold text-slate-900 ml-1">الاستراتيجية الأساسية:</span>
                  <span className="text-slate-700">{persona.primaryStrategy}</span>
                </div>

                {/* Dominant Features List */}
                <div className="text-xs text-slate-600 mb-2">
                  <span className="font-bold text-slate-900 block mb-1">السمات التحليلية البارزة:</span>
                  <ul className="list-disc list-inside space-y-0.5 pr-1 text-[11px]">
                    {(persona.dominantFeatures || []).slice(0, 3).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Risk & Channel */}
              <div className="mt-3 pt-2.5 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-slate-600 gap-1.5">
                <div>
                  <span className="font-bold text-slate-800">القناة المرجحة: </span>
                  <span className="text-sky-800 font-medium">{persona.preferredChannel}</span>
                </div>
                <div className="text-rose-700">
                  <span className="font-bold">تجنب: </span>
                  <span>{persona.riskToAvoid}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
