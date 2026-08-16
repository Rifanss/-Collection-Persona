export interface PublicationMeta {
  title: string;
  subtitle: string;
  author: string;
  edition: string;
  type: string;
  year: number;
}

export interface SectionContent {
  id: string;
  num: string;
  title: string;
  englishTitle?: string;
  paragraphs?: string[];
  bullets?: string[];
  formula?: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    type: 'note' | 'warning' | 'rule' | 'equation' | 'example';
    text: string;
  };
  diagramType?: string;
}

export type Section = SectionContent;

export interface Chapter {
  id: string;
  num: number;
  title: string;
  englishTitle?: string;
  partId: string;
  partName: string;
  summary?: string;
  sections: SectionContent[];
  visualFeature?: string;
}

export interface Part {
  id: string;
  num: string;
  title: string;
  englishTitle: string;
  description: string;
  chapters: Chapter[];
  visualConcept?: string;
}

export interface PersonaDefinition {
  id: string; // e.g. "CP-01"
  code: string;
  name: string;
  englishName: string;
  tagline: string;
  definition: string;
  dominantFeatures: string[];
  analyticalProfile: {
    capacity: 'High' | 'Medium' | 'Low' | 'Moderate' | 'Unclear';
    willingness: 'High' | 'Medium' | 'Low' | 'Moderate' | 'Unclear';
    responsiveness: 'High' | 'Medium' | 'Low' | 'Moderate' | 'Channel Dependent';
    complexity: 'High' | 'Medium' | 'Low';
    digitalReadiness: 'High' | 'Medium' | 'Low' | 'Unclear';
  };
  entryCriteria: string[];
  operationalGoal: string;
  primaryStrategy: string;
  strategyApproach: string[];
  keyKPIs: string[];
  preferredChannel: string;
  riskToAvoid: string;
  possibleTransitions: string[];
}

export interface AppliedScenario {
  id: number;
  title: string;
  initialState: {
    context: string;
    rawEvidence: string[];
  };
  features: Record<string, string>;
  customerIntelligence: Record<string, string>;
  personaClassification: {
    primary: string;
    secondary?: string;
    confidence: string;
    readiness: string;
  };
  scores: {
    capacity: number;
    willingness: number;
    responsiveness: number;
    behavior?: number;
    complexity: number;
    digitalReadiness?: number;
  };
  decision: {
    nbcaAction: string;
    channel: string;
    timing: string;
    message: string;
    alternative: string;
    ttl: string;
    reasonCodes: string[];
  };
  outcome: {
    description: string;
    metricsUpdated: string[];
    nextAction: string;
  };
}

export interface GlossaryTerm {
  term: string;
  englishTerm: string;
  definition: string;
  category?: string;
}

export interface AppendixItem {
  id: string;
  letter: string;
  title: string;
  englishTitle: string;
  description: string;
  type: 'architecture' | 'template' | 'matrix' | 'table' | 'checklist' | 'flow' | 'equation';
  contentData?: any;
}

export interface AcademicReference {
  id: string;
  number: number;
  citation: string;
  description: string;
  frameworkRelevance: string;
  componentMapped: string;
}
