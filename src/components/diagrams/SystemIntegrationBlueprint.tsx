import React from 'react';
import { Database, Network, ArrowLeftRight, CheckCircle2, ShieldCheck, Layers } from 'lucide-react';

interface Props {
  className?: string;
}

export const SystemIntegrationBlueprint: React.FC<Props> = ({ className = '' }) => {
  const integrations = [
    { system: 'Core Banking & Data Warehouse', type: 'Batch / Daily Sync', dataOut: 'Balances, DPD, Payment History', dataIn: 'Updated Classification, Scorecard', color: 'border-sky-500/40 text-sky-300' },
    { system: 'Collection Management & CRM', type: 'Bi-directional Real-Time', dataOut: 'Contact Outcomes, Promises, Notes, Overrides', dataIn: 'NBCA, Reason Codes, Persona, Priority', color: 'border-blue-500/40 text-blue-300' },
    { system: 'Digital Banking & Mobile App', type: 'Event-Driven Webhook', dataOut: 'Journey Started, Dropped, Completed', dataIn: 'Personalized Offers, Self-Service Links', color: 'border-cyan-500/40 text-cyan-300' },
    { system: 'Payment Gateways (Mada/SADAD)', type: 'Instant Webhook', dataOut: 'Payment Success, Transaction ID', dataIn: 'Receipt Confirmation, Suppression Trigger', color: 'border-emerald-500/40 text-emerald-300' },
    { system: 'Dispute & Complaints Management', type: 'Real-Time Event', dataOut: 'Active Dispute Opened / Resolved', dataIn: 'Hard Stop Trigger / Resume Collection', color: 'border-amber-500/40 text-amber-300' },
  ];

  return (
    <div className={`p-4 md:p-6 rounded-xl border border-slate-700 bg-slate-950 text-slate-100 shadow-xl relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-blueprint-grid opacity-25 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-800">
        <div>
          <span className="px-2 py-0.5 text-xs font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded">
            INTEGRATION BLUEPRINT
          </span>
          <h3 className="text-lg md:text-xl font-bold text-white mt-1">
            مخطط تكامل أنظمة التحصيل المصرفي (Systems Integration Architecture)
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-mono" dir="ltr">
          Integrate Before Replace & Data Lineage
        </span>
      </div>

      {/* Grid of integrations */}
      <div className="relative z-10 space-y-2.5">
        {integrations.map((item, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-lg border ${item.color} bg-slate-900/80 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs`}
          >
            <div className="flex items-center gap-2.5 sm:w-1/3">
              <span className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-300 shrink-0">
                0{idx + 1}
              </span>
              <div>
                <div className="font-bold text-white text-sm">{item.system}</div>
                <div className="text-[11px] text-slate-400 font-mono" dir="ltr">{item.type}</div>
              </div>
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-0.5" dir="ltr">← Ingested Data:</span>
                <span className="text-slate-300">{item.dataOut}</span>
              </div>
              <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                <span className="text-sky-400 font-bold block mb-0.5" dir="ltr">→ Emitted Guidance:</span>
                <span className="text-slate-300">{item.dataIn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data Lineage & API Contract Note */}
      <div className="relative z-10 mt-4 p-3 rounded-lg border border-slate-800 bg-slate-900/60 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>
          <strong>عقد واجهات برمجة التطبيقات (API Contract):</strong> يحدد المدخلات والمخرجات وقواعد التحقق (Validation) وإدارة الإصدارات (Versioning) لكل نقطة اتصال.
        </span>
        <span className="text-cyan-300 font-mono text-[11px] font-semibold whitespace-nowrap" dir="ltr">
          Lineage Traceable
        </span>
      </div>
    </div>
  );
};
