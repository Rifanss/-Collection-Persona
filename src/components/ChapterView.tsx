import React from 'react';
import { Chapter, Section } from '../types';
import { BookOpen, Layers, CheckCircle2, ChevronLeft, Info, HelpCircle } from 'lucide-react';
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
import { FoundationsParadigmDiagram } from './diagrams/FoundationsParadigmDiagram';
import { CollectionsProblemFunnelDiagram } from './diagrams/CollectionsProblemFunnelDiagram';
import { DataTaxonomyDiagram } from './diagrams/DataTaxonomyDiagram';
import { CustomerIntelligenceVectorDiagram } from './diagrams/CustomerIntelligenceVectorDiagram';
import { PersonaTransitionLifecycleDiagram } from './diagrams/PersonaTransitionLifecycleDiagram';
import { PersonaScoringFrameworkDiagram } from './diagrams/PersonaScoringFrameworkDiagram';
import { GovernanceAndEthicsDiagram } from './diagrams/GovernanceAndEthicsDiagram';
import { PilotProgressionPipelineDiagram } from './diagrams/PilotProgressionPipelineDiagram';
import { ValueRealizationModelDiagram } from './diagrams/ValueRealizationModelDiagram';
import { ChangeManagementBlueprintDiagram } from './diagrams/ChangeManagementBlueprintDiagram';
import { AuditLineageArchitectureDiagram } from './diagrams/AuditLineageArchitectureDiagram';
import { PersonaCardsGrid } from './PersonaCardsGrid';
import { ScenariosView } from './ScenariosView';
import { GlossaryView } from './GlossaryView';
import { ReferencesView } from './ReferencesView';

interface Props {
  chapter: Chapter;
  partTitle?: string;
  partNum?: string;
}

export const ChapterView: React.FC<Props> = ({ chapter, partTitle, partNum }) => {
  // Determine if specific diagram needs to be embedded based on chapter number
  const renderChapterDiagram = (chNum: number) => {
    switch (chNum) {
      case 1:
        return <div className="my-6 avoid-break-inside"><FoundationsParadigmDiagram /></div>;
      case 2:
        return <div className="my-6 avoid-break-inside"><LayeredArchitectureDiagram /></div>;
      case 3:
        return <div className="my-6 avoid-break-inside"><CollectionsProblemFunnelDiagram /></div>;
      case 4:
        return <div className="my-6 avoid-break-inside"><DataTaxonomyDiagram /></div>;
      case 5:
        return <div className="my-6 avoid-break-inside"><CustomerIntelligenceVectorDiagram /></div>;
      case 7:
        return <div className="my-6 avoid-break-inside"><PersonaMatrixDiagram /></div>;
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
        return <div className="my-6 avoid-break-inside"><PersonaTransitionLifecycleDiagram /></div>;
      case 14:
      case 15:
        return <div className="my-6 avoid-break-inside"><PersonaCardsGrid /></div>;
      case 16:
      case 17:
      case 18:
        return <div className="my-6 avoid-break-inside"><PersonaScoringFrameworkDiagram /></div>;
      case 19:
      case 20:
        return <div className="my-6 avoid-break-inside"><DecisionReadinessGatesDiagram /></div>;
      case 21:
      case 22:
        return (
          <div className="my-6 space-y-6 avoid-break-inside">
            <DecisionEngineFlowDiagram />
            <DecisionTreeDiagram />
          </div>
        );
      case 23:
      case 24:
        return <div className="my-6 avoid-break-inside"><GovernanceAndEthicsDiagram /></div>;
      case 25:
        return <div className="my-6 avoid-break-inside"><NBCADecisionMapDiagram /></div>;
      case 26:
        return <div className="my-6 avoid-break-inside"><FeedbackLoopDiagram /></div>;
      case 27:
      case 28:
        return (
          <div className="my-6 space-y-6 avoid-break-inside">
            <PlatformArchitectureDiagram />
            <SystemIntegrationBlueprint />
          </div>
        );
      case 29:
      case 30:
        return <div className="my-6 avoid-break-inside"><PilotProgressionPipelineDiagram /></div>;
      case 31:
        return <div className="my-6 avoid-break-inside"><BalancedScorecardDiagram /></div>;
      case 32:
        return <div className="my-6 avoid-break-inside"><ValueRealizationModelDiagram /></div>;
      case 33:
        return <div className="my-6 avoid-break-inside"><MaturityModelLadderDiagram /></div>;
      case 34:
        return <div className="my-6 avoid-break-inside"><ChangeManagementBlueprintDiagram /></div>;
      case 35:
        return <div className="my-6 avoid-break-inside"><ImplementationRoadmapTimeline /></div>;
      case 36:
      case 37:
        return <div className="my-6 avoid-break-inside"><AuditLineageArchitectureDiagram /></div>;
      case 38:
      case 39:
        return <div className="my-6 avoid-break-inside"><ScenariosView /></div>;
      case 41:
        return <div className="my-6 avoid-break-inside"><GlossaryView /></div>;
      case 42:
        return <div className="my-6 avoid-break-inside"><ReferencesView /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="a4-screen-page print-page bg-white text-slate-900 p-6 md:p-8 rounded-xl border border-slate-300 shadow-sm page-break-after">
      {/* Chapter Header */}
      <div className="border-b-2 border-slate-900 pb-3 sm:pb-4 mb-4 sm:mb-6 avoid-break-inside">
        {partTitle && (
          <div className="text-[11px] sm:text-xs font-mono text-slate-500 mb-1 flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-sky-900 bg-sky-100 px-1.5 py-0.5 rounded">{partNum}</span>
            <span className="font-sans font-bold text-slate-700">{partTitle}</span>
          </div>
        )}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-sky-800 font-mono shrink-0">فصل {chapter.num}:</span>
            <span className="leading-snug">{chapter.title}</span>
          </h2>
          {chapter.englishTitle && (
            <span className="text-[11px] sm:text-xs font-mono text-slate-500 self-start sm:self-auto" dir="ltr">
              {chapter.englishTitle}
            </span>
          )}
        </div>
      </div>

      {/* Sections List */}
      <div className="space-y-6 sm:space-y-8">
        {(chapter.sections || []).map((section: Section) => (
          <div key={section.id} className="avoid-break-inside space-y-2.5 sm:space-y-3">
            {/* Section Title */}
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 flex items-center gap-2 border-r-4 border-sky-800 pr-2.5">
              <span className="font-mono text-sky-800 text-xs sm:text-sm shrink-0">{section.num}</span>
              <span className="leading-snug">{section.title}</span>
            </h3>

            {/* Paragraphs */}
            {section.paragraphs && section.paragraphs.length > 0 && (
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed text-right">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            {/* Bullets */}
            {section.bullets && section.bullets.length > 0 && (
              <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-800">
                <ul className="list-disc list-inside space-y-1.5 leading-relaxed">
                  {section.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table */}
            {section.table && section.table.headers && (
              <div className="overflow-x-auto touch-scroll my-3 border border-slate-200 rounded-lg shadow-inner bg-white">
                <table className="w-full min-w-[500px] text-right text-xs">
                  <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      {section.table.headers.map((h, i) => (
                        <th key={i} className="p-2.5 border-l border-slate-200 last:border-l-0 whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {(section.table.rows || []).map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                        {(row || []).map((cell, cIdx) => (
                          <td key={cIdx} className="p-2.5 border-l border-slate-200 last:border-l-0 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Callout */}
            {section.callout && (
              <div className="p-3 sm:p-3.5 rounded-lg bg-slate-50 border-r-4 border-sky-800 text-xs sm:text-sm text-slate-900 font-medium my-3 leading-relaxed border border-slate-200">
                {typeof section.callout === 'string' ? section.callout : section.callout.text}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Render Dynamic Diagram If Applicable */}
      {renderChapterDiagram(chapter.num)}
    </div>
  );
};

