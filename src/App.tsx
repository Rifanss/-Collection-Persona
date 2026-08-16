import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, 
  Layers, 
  Printer, 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Sliders, 
  FileText, 
  CheckCircle2, 
  Users, 
  Compass, 
  Sparkles, 
  HelpCircle, 
  BookMarked, 
  ListOrdered,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Cpu,
  RefreshCw,
  Eye,
  LayoutGrid,
  Menu,
  X,
  SlidersHorizontal,
  ChevronDown,
  FileDown,
  FileCheck,
  Download
} from 'lucide-react';

import { allParts, allChapters, getPartByChapterId } from './data/allParts';
import { publicationMeta } from './data/publicationData';
import { operationalPersonas } from './data/personasData';
import { appliedScenariosList } from './data/scenariosData';
import { appendicesList } from './data/appendicesData';
import { academicReferencesList } from './data/referencesData';
import { glossaryTermsList } from './data/glossaryData';

import { PrintCoverPage } from './components/PrintCoverPage';
import { TableOfContents } from './components/TableOfContents';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView';
import { ChapterView } from './components/ChapterView';
import { PersonaCardsGrid } from './components/PersonaCardsGrid';
import { ScenariosView } from './components/ScenariosView';
import { AppendicesView } from './components/AppendicesView';
import { ReferencesView } from './components/ReferencesView';
import { GlossaryView } from './components/GlossaryView';
import { CustomerProfileRadarChart } from './components/CustomerProfileRadarChart';
import { SandboxReportExportModal } from './components/SandboxReportExportModal';

type NavigationTab = 
  | 'reader' 
  | 'full-print' 
  | 'summary' 
  | 'personas' 
  | 'scenarios' 
  | 'appendices' 
  | 'sandbox' 
  | 'glossary-ref';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('reader');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ch-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState<boolean>(false);
  const [mobileChaptersOpen, setMobileChaptersOpen] = useState<boolean>(false);

  // Interactive Sandbox state
  const [sandboxCapacity, setSandboxCapacity] = useState<number>(75);
  const [sandboxWillingness, setSandboxWillingness] = useState<number>(85);
  const [sandboxResponsiveness, setSandboxResponsiveness] = useState<number>(90);
  const [sandboxComplexity, setSandboxComplexity] = useState<number>(20);
  const [sandboxDigital, setSandboxDigital] = useState<number>(80);
  const [sandboxDataComplete, setSandboxDataComplete] = useState<boolean>(true);
  const [sandboxDormantFlag, setSandboxDormantFlag] = useState<boolean>(false);
  const [sandboxDisputeFlag, setSandboxDisputeFlag] = useState<boolean>(false);
  const [sandboxExportModalOpen, setSandboxExportModalOpen] = useState<boolean>(false);

  // Selected chapter object
  const currentChapter = useMemo(() => {
    return allChapters.find((ch) => ch.id === selectedChapterId) || allChapters[0];
  }, [selectedChapterId]);

  const currentPart = useMemo(() => {
    return getPartByChapterId(currentChapter.id);
  }, [currentChapter]);

  // Previous and next chapters
  const currentChapterIndex = useMemo(() => {
    return allChapters.findIndex((ch) => ch.id === currentChapter.id);
  }, [currentChapter]);

  const prevChapter = currentChapterIndex > 0 ? allChapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < allChapters.length - 1 ? allChapters[currentChapterIndex + 1] : null;

  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    
    const results: Array<{
      type: 'chapter' | 'persona' | 'scenario' | 'glossary';
      id: string;
      title: string;
      subtitle: string;
      matchText: string;
    }> = [];

    // Search chapters & sections
    allChapters.forEach((ch) => {
      if (ch.title.toLowerCase().includes(query) || (ch.englishTitle && ch.englishTitle.toLowerCase().includes(query))) {
        results.push({
          type: 'chapter',
          id: ch.id,
          title: `فصل ${ch.num}: ${ch.title}`,
          subtitle: ch.partName,
          matchText: ch.summary || ch.englishTitle || '',
        });
      } else {
        const matchingSec = ch.sections.find((s) => 
          s.title.toLowerCase().includes(query) || 
          s.paragraphs?.some(p => p.toLowerCase().includes(query)) ||
          s.bullets?.some(b => b.toLowerCase().includes(query))
        );
        if (matchingSec) {
          results.push({
            type: 'chapter',
            id: ch.id,
            title: `فصل ${ch.num} - ${matchingSec.title}`,
            subtitle: ch.title,
            matchText: matchingSec.paragraphs?.[0]?.slice(0, 100) + '...' || '',
          });
        }
      }
    });

    // Search personas
    operationalPersonas.forEach((p) => {
      if (p.name.includes(query) || p.englishName.toLowerCase().includes(query) || p.code.toLowerCase().includes(query) || p.definition.includes(query)) {
        results.push({
          type: 'persona',
          id: p.id,
          title: `${p.code}: ${p.name}`,
          subtitle: p.englishName,
          matchText: p.tagline,
        });
      }
    });

    // Search glossary
    glossaryTermsList.forEach((g) => {
      if (g.term.includes(query) || g.englishTerm.toLowerCase().includes(query) || g.definition.includes(query)) {
        results.push({
          type: 'glossary',
          id: g.term,
          title: g.term,
          subtitle: g.englishTerm,
          matchText: g.definition.slice(0, 100) + '...',
        });
      }
    });

    return results.slice(0, 15);
  }, [searchQuery]);

  // Sandbox calculations
  const sandboxClassification = useMemo(() => {
    let persona = operationalPersonas[0];
    let confidence = 85;
    let nbca = 'تذكير رقمي ناعم عبر تطبيق الهاتف / SMS الذكي';
    let channel = 'Digital Mobile App / Push';
    let timing = '09:00 - 11:00';
    let message = 'تذكير ودود: مديونيتك المستحقة متاحة للسداد الفوري بنقرة واحدة عبر التطبيق.';
    let reasonCodes = ['HIGH_CAPACITY', 'HIGH_WILLINGNESS', 'DIGITAL_ACTIVE'];

    if (sandboxDisputeFlag) {
      persona = operationalPersonas[4]; // CP-05
      confidence = 90;
      nbca = 'تحويل فوري إلى وحدة معالجة الاعتراضات ووقف دورة الاتصال الآلي';
      channel = 'Specialist Dispute Desk';
      timing = 'خلال ساعتين من العمل';
      message = 'تم تسجيل استفسارك/اعتراضك وجارٍ مراجعته من الفريق المختص وإيقاف الإجراءات لحين التدقيق.';
      reasonCodes = ['ACTIVE_DISPUTE', 'PREVENT_HARRASSMENT', 'ROUTE_SPECIALIST'];
    } else if (sandboxDormantFlag) {
      persona = operationalPersonas[7]; // CP-08
      confidence = 70;
      nbca = 'استقصاء ذكي خفيف وتحديث معلومات الاتصال والتحقق من حسابات وسجلات البديلة';
      channel = 'Bureau Check + Verified Channel';
      timing = 'ضمن خطة الاستقصاء الأسبوعية';
      message = 'يرجى تحديث بيانات الاتصال الخاصة بك عبر منصتنا لتفادي انقطاع الإشعارات الهامة.';
      reasonCodes = ['NO_ACTIVITY_FLAG', 'DORMANT_SKIP_TRACING', 'LOW_CONFIDENCE'];
    } else if (sandboxCapacity < 40 && sandboxWillingness >= 70) {
      persona = operationalPersonas[1]; // CP-02
      confidence = 88;
      nbca = 'عرض خطة إعادة هيكلة وتجزئة السداد رقميًا مع نافذة استحقاق مرنة';
      channel = 'Interactive Web Portal / Restructuring Bot';
      timing = 'فوري عند طلب العميل';
      message = 'نقدر رغبتك في التسوية، قمنا بتجهيز خطة سداد ميسرة مقسمة على دفعات تناسب دخلك الحالي.';
      reasonCodes = ['LOW_CAPACITY', 'HIGH_WILLINGNESS', 'RESTRUCTURE_ELIGIBLE'];
    } else if (sandboxCapacity >= 70 && sandboxWillingness < 40) {
      persona = operationalPersonas[2]; // CP-03
      confidence = 82;
      nbca = 'إشعار تفاوضي واضح يبرز الآثار الائتمانية مع إتاحة سداد فوري تفاوضي';
      channel = 'Senior Advisor Call / Official SMS';
      timing = '14:00 - 16:00';
      message = 'تنبيه: مديونيتكم تستوجب المعالجة الفورية لتجنب التأثير على تقريركم الائتماني والرسوم التراكمية.';
      reasonCodes = ['HIGH_CAPACITY', 'LOW_WILLINGNESS', 'CREDIT_IMPACT_NOTICE'];
    } else if (sandboxComplexity >= 60) {
      persona = operationalPersonas[6]; // CP-07
      confidence = 85;
      nbca = 'دمج وتوحيد المطالبات وتعيين مستشار تسوية موحد لجميع الالتزامات';
      channel = 'Dedicated Account Resolution Specialist';
      timing = 'موعد مسبق مجدول';
      message = 'عزيزي العميل، خصصنا لك مستشاراً موحداً لمراجعة كافة التزاماتك وتقديم حل تسوية شامل.';
      reasonCodes = ['MULTI_PRODUCT_OVERLAP', 'HIGH_COMPLEXITY', 'SINGLE_POINT_CONTACT'];
    } else if (sandboxResponsiveness < 35) {
      persona = operationalPersonas[5]; // CP-06
      confidence = 78;
      nbca = 'تنويع قنوات التواصل (تجربة WhatsApp موثق أو بريد إلكتروني مع رابط خدمة ذاتية)';
      channel = 'Alternative Verified Channel (WhatsApp/Email)';
      timing = '18:00 - 20:00 (Evening Shift)';
      message = 'نعلم انشغالك، يمكنك الاطلاع على تفاصيل حسابك وجدولة السداد في الوقت الذي يناسبك عبر هذا الرابط.';
      reasonCodes = ['VOICE_FATIGUE', 'CHANNEL_ROTATION', 'EVENING_WINDOW'];
    }

    const gate1Passed = sandboxDataComplete;
    const gate2Passed = confidence >= 60;
    const gate3Passed = !sandboxDisputeFlag || persona.code === 'CP-05';
    const gate4Passed = true;
    const allGatesPassed = gate1Passed && gate2Passed && gate3Passed && gate4Passed;

    return {
      persona,
      confidence,
      nbca,
      channel,
      timing,
      message,
      reasonCodes,
      gates: {
        gate1: { name: 'G1: Data Integrity & Freshness', passed: gate1Passed },
        gate2: { name: 'G2: Confidence Threshold (≥60%)', passed: gate2Passed },
        gate3: { name: 'G3: Eligibility & Legal Restraints', passed: gate3Passed },
        gate4: { name: 'G4: Channel & Timing Policy', passed: gate4Passed },
        ready: allGatesPassed
      }
    };
  }, [sandboxCapacity, sandboxWillingness, sandboxResponsiveness, sandboxComplexity, sandboxDigital, sandboxDataComplete, sandboxDormantFlag, sandboxDisputeFlag]);

  const handlePrint = () => {
    setActiveTab('full-print');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      window.print();
    }, 450);
  };

  const handleDownloadFullDocument = () => {
    handlePrint();
  };

  const selectTabAndCloseMobile = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectChapterAndCloseMobile = (chId: string) => {
    setSelectedChapterId(chId);
    setActiveTab('reader');
    setMobileChaptersOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans relative" dir="rtl">
      
      {/* Top Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-slate-900 text-white border-b border-slate-800 shadow-md no-print">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-4">
            
            {/* Title & Brand */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Mobile Drawer Button */}
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -mr-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 md:hidden flex items-center justify-center"
                title="القائمة الرئيسية"
                aria-label="القائمة الرئيسية"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-bold text-xs sm:text-base tracking-wide text-white truncate max-w-[180px] sm:max-w-none">
                    Collection Persona™
                  </span>
                  <span className="px-1.5 py-0.5 text-[9px] sm:text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30 rounded shrink-0">
                    2026
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                  المصنف المرجعي والتطبيقي للتحصيل المصرفي ودعم القرار (42 فصلاً)
                </span>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden lg:flex items-center gap-1">
              <button
                onClick={() => setActiveTab('reader')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'reader'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>قارئ الفصول (42)</span>
              </button>

              <button
                onClick={() => setActiveTab('summary')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'summary'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>الملخص</span>
              </button>

              <button
                onClick={() => setActiveTab('personas')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'personas'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>الشخصيات (8)</span>
              </button>

              <button
                onClick={() => setActiveTab('scenarios')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'scenarios'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>السيناريوهات (5)</span>
              </button>

              <button
                onClick={() => setActiveTab('appendices')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'appendices'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>الملاحق</span>
              </button>

              <button
                onClick={() => setActiveTab('sandbox')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'sandbox'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>المحاكي</span>
              </button>

              <button
                onClick={() => setActiveTab('glossary-ref')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                  activeTab === 'glossary-ref'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <BookMarked className="w-3.5 h-3.5" />
                <span>المصطلحات والمراجع</span>
              </button>
            </nav>

            {/* Print & Search Action Controls */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Quick Search Button (Mobile/Tablet) */}
              <button
                onClick={() => setMobileSearchOpen(true)}
                className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center gap-1 text-xs border border-slate-700"
                title="بحث سريع"
              >
                <Search className="w-4 h-4 text-sky-400" />
                <span className="hidden sm:inline">بحث</span>
              </button>

              {/* Prominent Download Full Document Button */}
              <button
                onClick={handleDownloadFullDocument}
                className="px-2.5 sm:px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 border border-emerald-500 shadow-sm transition-all active:scale-95 animate-subtle-glow"
                title="تحميل كامل الوثيقة المرجعية (42 فصلاً) كملف PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">تحميل كامل الوثيقة (PDF)</span>
                <span className="sm:hidden">تحميل PDF</span>
              </button>

              {/* Toggle Continuous A4 View */}
              <button
                onClick={() => {
                  setActiveTab('full-print');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all ${
                  activeTab === 'full-print'
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow'
                    : 'bg-slate-800 text-amber-300 border-amber-500/40 hover:bg-slate-700'
                }`}
                title="عرض المصنف كاملاً للطباعة وتصدير PDF بمقاس A4"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden md:inline">عرض A4</span>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Horizontal Scrollable Tab Bar */}
        <div className="lg:hidden flex overflow-x-auto touch-scroll no-scrollbar px-3 py-1.5 gap-1.5 border-t border-slate-800 bg-slate-950/90 text-xs">
          <button 
            onClick={() => setActiveTab('reader')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'reader' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>قارئ الفصول</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('personas')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'personas' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>الشخصيات (8)</span>
          </button>

          <button 
            onClick={() => setActiveTab('sandbox')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'sandbox' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>المحاكي ومحرك القرار</span>
          </button>

          <button 
            onClick={() => setActiveTab('scenarios')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'scenarios' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>السيناريوهات</span>
          </button>

          <button 
            onClick={() => setActiveTab('summary')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'summary' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>الملخص</span>
          </button>

          <button 
            onClick={() => setActiveTab('appendices')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'appendices' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>الملاحق</span>
          </button>

          <button 
            onClick={() => setActiveTab('glossary-ref')} 
            className={`px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 text-xs font-medium transition-all ${
              activeTab === 'glossary-ref' ? 'bg-sky-600 text-white shadow' : 'text-slate-300 bg-slate-900 border border-slate-800'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5" />
            <span>المراجع والمصطلحات</span>
          </button>
        </div>
      </header>

      {/* MOBILE FULL DRAWER NAVIGATION */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex no-print">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)} 
          />

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-slate-900 text-white h-full flex flex-col shadow-2xl z-10 border-l border-slate-800">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="font-bold text-sm text-white">Collection Persona™</div>
                <div className="text-[11px] text-slate-400">فهرس المحتويات والأدوات التفاعلية</div>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                aria-label="إغلاق القائمة"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 touch-scroll">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-2">الأقسام الرئيسية</div>
                
                <button
                  onClick={() => selectTabAndCloseMobile('reader')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'reader' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span>قارئ الفصول المرجعية (42 فصلاً)</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('personas')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'personas' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Users className="w-4 h-4 text-sky-400" />
                  <span>بطاقات الشخصيات (CP-01..08)</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('sandbox')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'sandbox' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-amber-400" />
                  <span>المحاكي التفاعلي ومحرك القرار</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('scenarios')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'scenarios' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Compass className="w-4 h-4 text-sky-400" />
                  <span>السيناريوهات التطبيقية الخمسة</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('summary')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'summary' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>الملخص التنفيذي وأهداف المنظومة</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('appendices')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'appendices' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <FileText className="w-4 h-4 text-sky-400" />
                  <span>الملاحق والمخططات المعمارية</span>
                </button>

                <button
                  onClick={() => selectTabAndCloseMobile('glossary-ref')}
                  className={`w-full text-right p-2.5 rounded-lg text-xs font-bold flex items-center gap-2.5 transition-colors ${
                    activeTab === 'glossary-ref' ? 'bg-sky-600 text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <BookMarked className="w-4 h-4 text-sky-400" />
                  <span>معجم المصطلحات والمراجع الأكاديمية</span>
                </button>
              </div>

              {/* Quick Part Jumps */}
              <div className="border-t border-slate-800 pt-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                  الانتقال السريع للأجزاء (8)
                </div>
                <div className="space-y-1">
                  {allParts.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => selectChapterAndCloseMobile(part.chapters[0]?.id || 'ch-1')}
                      className="w-full text-right p-2 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-white flex items-center justify-between"
                    >
                      <span className="truncate">{part.num}: {part.title}</span>
                      <span className="text-[10px] font-mono text-slate-500 shrink-0 mr-1">{part.chapters.length} فصول</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-slate-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadFullDocument();
                }}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>تحميل كامل الوثيقة (PDF)</span>
              </button>

              <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                <span>الإصدار المرجعي 2026</span>
                <button 
                  onClick={() => selectTabAndCloseMobile('full-print')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>عرض A4 للطباعة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE CHAPTER SELECTION MODAL (For fast jumping while reading) */}
      {mobileChaptersOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 no-print">
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setMobileChaptersOpen(false)}
          />
          <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl z-10 max-h-[85vh] flex flex-col overflow-hidden text-slate-900">
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm">فهرس الفصول الـ 42</h3>
                <p className="text-xs text-slate-400">اختر الفصل الذي ترغب بقراءته مباشرة</p>
              </div>
              <button 
                onClick={() => setMobileChaptersOpen(false)}
                className="p-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3 touch-scroll">
              {allParts.map((part) => (
                <div key={part.id} className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-100 p-2.5 font-bold text-xs text-slate-800 flex items-center justify-between">
                    <span>{part.num}: {part.title}</span>
                    <span className="text-[10px] font-mono text-slate-500">{part.chapters.length} فصول</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {part.chapters.map((ch) => (
                      <button
                        key={ch.id}
                        onClick={() => {
                          setSelectedChapterId(ch.id);
                          setMobileChaptersOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`w-full text-right p-3 text-xs flex items-center justify-between transition-colors ${
                          selectedChapterId === ch.id ? 'bg-sky-50 text-sky-900 font-bold border-r-4 border-sky-600' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="font-bold">فصل {ch.num}: {ch.title}</div>
                          {ch.englishTitle && (
                            <div className="text-[10px] text-slate-400 font-mono" dir="ltr">{ch.englishTitle}</div>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 shrink-0 mr-2">{ch.sections.length} بنود</span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE GLOBAL SEARCH OVERLAY MODAL */}
      {mobileSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 no-print">
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setMobileSearchOpen(false)}
          />
          <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[85vh] mt-4 sm:mt-10">
            {/* Search Input Box */}
            <div className="p-3 sm:p-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
              <Search className="w-5 h-5 text-sky-600 shrink-0" />
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في 42 فصلاً، الشخصيات، المصطلحات والمراجع..."
                className="w-full text-xs sm:text-sm bg-transparent border-none focus:outline-none text-slate-900 placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="p-1 text-slate-400 hover:text-slate-600 text-xs font-mono"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <button 
                onClick={() => setMobileSearchOpen(false)}
                className="p-1 text-xs font-bold text-slate-500 hover:text-slate-800 mr-1"
              >
                إلغاء
              </button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 touch-scroll">
              {!searchQuery.trim() ? (
                <div className="py-8 text-center text-slate-400 space-y-2">
                  <Search className="w-8 h-8 mx-auto text-slate-300" />
                  <p className="text-xs">اكتب أي كلمة مثل "القدرة", "CP-01", "G1", "التحكيم", "Willingness"</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="py-8 text-center text-slate-400">
                  <p className="text-xs font-bold">لم يتم العثور على نتائج لـ "{searchQuery}"</p>
                </div>
              ) : (
                <div className="space-y-1.5">
                  <div className="text-[11px] font-bold text-slate-500 pb-1">
                    نتائج البحث ({searchResults.length}):
                  </div>
                  {searchResults.map((res, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (res.type === 'chapter') {
                          setSelectedChapterId(res.id);
                          setActiveTab('reader');
                        } else if (res.type === 'persona') {
                          setActiveTab('personas');
                        } else if (res.type === 'glossary') {
                          setActiveTab('glossary-ref');
                        }
                        setMobileSearchOpen(false);
                      }}
                      className="w-full text-right p-3 rounded-xl hover:bg-sky-50 transition-colors border border-slate-100 hover:border-sky-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="font-bold text-xs sm:text-sm text-slate-900">{res.title}</div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-mono shrink-0">
                          {res.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-sky-700 font-medium mt-0.5">{res.subtitle}</div>
                      {res.matchText && (
                        <div className="text-[11px] text-slate-600 line-clamp-2 mt-1 leading-relaxed">{res.matchText}</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Body Layout */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 pb-24 md:pb-8">

        {/* 1. READER VIEW WITH DYNAMIC SIDEBAR & SEARCH */}
        {activeTab === 'reader' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
            
            {/* Sidebar with Search & Chapter Hierarchy (Desktop) */}
            <div className={`lg:col-span-4 bg-white rounded-xl border border-slate-300 shadow-sm p-4 space-y-4 no-print ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
              
              {/* Search Box */}
              <div className="space-y-1.5">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute right-3 top-2.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في الفصول والمفاهيم والشخصيات..."
                    className="w-full pl-3 pr-9 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-slate-50 text-slate-900"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute left-2.5 top-2 text-slate-400 hover:text-slate-600 text-xs font-mono"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {searchResults.length > 0 && (
                  <div className="p-2 bg-slate-50 border border-slate-200 rounded-lg max-h-64 overflow-y-auto space-y-1 text-xs">
                    <div className="font-bold text-[11px] text-slate-500 px-1">
                      نتائج البحث ({searchResults.length}):
                    </div>
                    {searchResults.map((res, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (res.type === 'chapter') {
                            setSelectedChapterId(res.id);
                            setActiveTab('reader');
                          } else if (res.type === 'persona') {
                            setActiveTab('personas');
                          } else if (res.type === 'glossary') {
                            setActiveTab('glossary-ref');
                          }
                          setSearchQuery('');
                        }}
                        className="w-full text-right p-2 rounded hover:bg-sky-50 hover:text-sky-900 transition-colors border-b border-slate-100 last:border-0"
                      >
                        <div className="font-bold text-slate-900">{res.title}</div>
                        <div className="text-[10px] text-slate-500">{res.subtitle}</div>
                        <div className="text-[11px] text-slate-600 line-clamp-1 mt-0.5">{res.matchText}</div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Publication Structure Quick Links */}
              <div className="border-t border-slate-200 pt-3 space-y-3">
                {/* Download Full Document Sidebar Card */}
                <div className="p-3 bg-gradient-to-l from-slate-900 to-sky-950 text-white rounded-xl border border-slate-700 shadow-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="font-bold text-xs">تحميل كامل الوثيقة</div>
                      <div className="text-[10px] text-slate-400">42 فصلاً بمقاس A4</div>
                    </div>
                  </div>
                  <button
                    onClick={handleDownloadFullDocument}
                    className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 transition-all shadow active:scale-95"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>تحميل المصنف كاملاً (PDF)</span>
                  </button>
                </div>

                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>الأجزاء والفصول (42 فصلاً)</span>
                  <span className="font-mono text-[10px] bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">8 أجزاء</span>
                </div>

                <div className="space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto pr-1 touch-scroll">
                  {allParts.map((part) => (
                    <div key={part.id} className="space-y-1">
                      <div className="font-bold text-xs text-slate-800 bg-slate-100 p-1.5 rounded flex items-center justify-between">
                        <span>{part.num}: {part.title}</span>
                        <span className="font-mono text-[10px] text-slate-500">{part.chapters.length} فصول</span>
                      </div>
                      <div className="space-y-0.5 pr-2">
                        {part.chapters.map((ch) => (
                          <button
                            key={ch.id}
                            onClick={() => {
                              setSelectedChapterId(ch.id);
                              if (window.innerWidth < 1024) setSidebarOpen(false);
                            }}
                            className={`w-full text-right p-1.5 rounded text-xs flex items-center justify-between transition-colors ${
                              selectedChapterId === ch.id
                                ? 'bg-sky-700 text-white font-bold'
                                : 'text-slate-700 hover:bg-slate-200/70'
                            }`}
                          >
                            <span className="line-clamp-1">
                              فصل {ch.num}: {ch.title}
                            </span>
                            <span className="font-mono text-[10px] opacity-75 mr-1 shrink-0">
                              {ch.sections.length} بنود
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Main Chapter Reader Content */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4">
              
              {/* Reader Controls Toolbar */}
              <div className="bg-white p-2.5 sm:p-3 rounded-xl border border-slate-300 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 no-print text-xs">
                {/* Mobile Chapter Selector Button */}
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <button
                    onClick={() => setMobileChaptersOpen(true)}
                    className="sm:hidden flex-1 px-3 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg text-xs font-bold text-slate-800 flex items-center justify-between"
                  >
                    <span className="truncate">فصل {currentChapter.num}: {currentChapter.title}</span>
                    <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 mr-1" />
                  </button>

                  <div className="hidden sm:flex items-center gap-2 flex-1">
                    <span className="font-bold text-slate-700 shrink-0">الانتقال السريع:</span>
                    <select
                      value={selectedChapterId}
                      onChange={(e) => setSelectedChapterId(e.target.value)}
                      className="p-1.5 rounded-lg border border-slate-300 text-xs bg-slate-50 text-slate-800 focus:ring-1 focus:ring-sky-500 flex-1 max-w-md"
                    >
                      {allChapters.map((ch) => (
                        <option key={ch.id} value={ch.id}>
                          فصل {ch.num}: {ch.title} ({ch.partName})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Prev & Next Controls */}
                <div className="flex items-center justify-between sm:justify-end gap-1.5">
                  <button
                    onClick={() => {
                      if (prevChapter) {
                        setSelectedChapterId(prevChapter.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    disabled={!prevChapter}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 font-bold"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                    <span>السابق</span>
                  </button>
                  <button
                    onClick={() => {
                      if (nextChapter) {
                        setSelectedChapterId(nextChapter.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    disabled={!nextChapter}
                    className="flex-1 sm:flex-none px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1 font-bold"
                  >
                    <span>التالي</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Render Chapter View Component */}
              <ChapterView 
                chapter={currentChapter} 
                partTitle={currentPart?.title}
                partNum={currentPart?.num}
              />

              {/* Bottom Pagination Bar */}
              <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-300 shadow-sm flex items-center justify-between no-print gap-2">
                {prevChapter ? (
                  <button
                    onClick={() => {
                      setSelectedChapterId(prevChapter.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-right group p-2 rounded-lg hover:bg-slate-50 transition-colors flex-1 max-w-[48%]"
                  >
                    <div className="text-[10px] text-slate-400 font-bold flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5" />
                      <span>الفصل السابق</span>
                    </div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-sky-800 line-clamp-1">
                      فصل {prevChapter.num}: {prevChapter.title}
                    </div>
                  </button>
                ) : <div className="flex-1" />}

                {nextChapter ? (
                  <button
                    onClick={() => {
                      setSelectedChapterId(nextChapter.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-left group p-2 rounded-lg hover:bg-slate-50 transition-colors flex-1 max-w-[48%]"
                  >
                    <div className="text-[10px] text-slate-400 font-bold flex items-center justify-end gap-1">
                      <span>الفصل التالي</span>
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-xs font-bold text-slate-900 group-hover:text-sky-800 line-clamp-1">
                      فصل {nextChapter.num}: {nextChapter.title}
                    </div>
                  </button>
                ) : <div className="flex-1" />}
              </div>

            </div>

          </div>
        )}

        {/* 2. EXECUTIVE SUMMARY TAB */}
        {activeTab === 'summary' && (
          <div className="space-y-6">
            <ExecutiveSummaryView />
          </div>
        )}

        {/* 3. PERSONA CARDS GRID TAB */}
        {activeTab === 'personas' && (
          <div className="space-y-6">
            <PersonaCardsGrid />
          </div>
        )}

        {/* 4. SCENARIOS TAB */}
        {activeTab === 'scenarios' && (
          <div className="space-y-6">
            <ScenariosView />
          </div>
        )}

        {/* 5. APPENDICES & BLUEPRINTS TAB */}
        {activeTab === 'appendices' && (
          <div className="space-y-6">
            <AppendicesView />
          </div>
        )}

        {/* 6. INTERACTIVE SANDBOX & DECISION ENGINE */}
        {activeTab === 'sandbox' && (
          <div className="space-y-6">
            
            {/* Header Banner */}
            <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-800 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30 text-xs font-mono mb-2">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>INTERACTIVE DECISION ENGINE SIMULATOR</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    محاكي تصنيف Persona وتطبيق بوابات القرار (Decision Readiness Gates)
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    قم بضبط مؤشرات العميل المتعددة (القدرة، الرغبة، الاستجابة، التعقيد، الاستعداد الرقمي) لاختبار كيف يولد محرك القرار الإجراء الأنسب (NBCA) مع شفرات التفسير وبوابات الجاهزية G1–G4.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSandboxExportModalOpen(true)}
                    className="px-3.5 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 border border-sky-500 shadow-sm transition-all active:scale-95"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>تصدير التقرير (PDF)</span>
                  </button>

                  <button
                    onClick={() => {
                      setSandboxCapacity(75);
                      setSandboxWillingness(85);
                      setSandboxResponsiveness(90);
                      setSandboxComplexity(20);
                      setSandboxDigital(80);
                      setSandboxDataComplete(true);
                      setSandboxDormantFlag(false);
                      setSandboxDisputeFlag(false);
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold flex items-center gap-1.5 border border-slate-700 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>إعادة تعيين</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Sandbox Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Sliders & Signals */}
              <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-slate-300 shadow-sm space-y-5">
                <h3 className="font-bold text-sm text-slate-900 border-b border-slate-200 pb-2 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-sky-700" />
                  <span>1. مدخلات المؤشرات الكمية (Score Vectors)</span>
                </h3>

                {/* Capacity Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">القدرة المالية الفعلية (Capacity):</span>
                    <span className="font-mono text-sky-700">{sandboxCapacity} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sandboxCapacity}
                    onChange={(e) => setSandboxCapacity(Number(e.target.value))}
                    className="w-full accent-sky-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>معدوم/محدود (0-39)</span>
                    <span>متوسط (40-69)</span>
                    <span>مرتفع (70-100)</span>
                  </div>
                </div>

                {/* Willingness Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">الرغبة والمبادرة بالسداد (Willingness):</span>
                    <span className="font-mono text-emerald-700">{sandboxWillingness} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sandboxWillingness}
                    onChange={(e) => setSandboxWillingness(Number(e.target.value))}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>مماطل/منخفض (0-39)</span>
                    <span>متعاون جزئي (40-69)</span>
                    <span>عالي المبادرة (70-100)</span>
                  </div>
                </div>

                {/* Responsiveness Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">الاستجابة وسرعة التفاعل (Responsiveness):</span>
                    <span className="font-mono text-amber-700">{sandboxResponsiveness} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sandboxResponsiveness}
                    onChange={(e) => setSandboxResponsiveness(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>تجاهل/انقطاع (0-39)</span>
                    <span>استجابة بطيئة (40-69)</span>
                    <span>فوري/نشط (70-100)</span>
                  </div>
                </div>

                {/* Complexity Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">تعقيد وتداخل المديونية (Complexity):</span>
                    <span className="font-mono text-purple-700">{sandboxComplexity} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sandboxComplexity}
                    onChange={(e) => setSandboxComplexity(Number(e.target.value))}
                    className="w-full accent-purple-700 cursor-pointer"
                  />
                </div>

                {/* Digital Readiness Slider */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">الاستعداد الرقمي (Digital Readiness):</span>
                    <span className="font-mono text-cyan-700">{sandboxDigital} / 100</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sandboxDigital}
                    onChange={(e) => setSandboxDigital(Number(e.target.value))}
                    className="w-full accent-cyan-700 cursor-pointer"
                  />
                </div>

                {/* Contextual Binary Flags */}
                <div className="border-t border-slate-200 pt-3 space-y-2">
                  <span className="text-xs font-bold text-slate-700 block">إشارات وسياقات استثنائية (Overriding Flags):</span>
                  
                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200 text-xs cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={sandboxDisputeFlag}
                      onChange={(e) => setSandboxDisputeFlag(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500"
                    />
                    <span className="font-bold text-slate-800">اعتراض أو شكوى نشطة غير معالجة (Active Dispute)</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200 text-xs cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={sandboxDormantFlag}
                      onChange={(e) => setSandboxDormantFlag(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500"
                    />
                    <span className="font-bold text-slate-800">انقطاع تام وضعف بيانات التواصل (Dormant / Skip Tracing)</span>
                  </label>

                  <label className="flex items-center gap-2 p-2 rounded bg-slate-50 border border-slate-200 text-xs cursor-pointer hover:bg-slate-100">
                    <input
                      type="checkbox"
                      checked={sandboxDataComplete}
                      onChange={(e) => setSandboxDataComplete(e.target.checked)}
                      className="rounded text-sky-600 focus:ring-sky-500"
                    />
                    <span className="font-bold text-slate-800">اكتمال البيانات وصلاحية السجل (Data Freshness Gate)</span>
                  </label>
                </div>

              </div>

              {/* Right Column: Engine Decision Output */}
              <div className="lg:col-span-7 space-y-5">
                
                {/* 1. Persona Classification Result */}
                <div className="bg-white p-5 rounded-xl border border-slate-300 shadow-sm space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-sm bg-sky-100 text-sky-900 px-2 py-0.5 rounded">
                        {sandboxClassification.persona.code}
                      </span>
                      <h4 className="font-bold text-base text-slate-900">
                        {sandboxClassification.persona.name}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-slate-500" dir="ltr">
                      {sandboxClassification.persona.englishName}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    {sandboxClassification.persona.definition}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500">درجة الثقة (Confidence)</div>
                      <div className="font-mono font-bold text-slate-900 text-sm">{sandboxClassification.confidence}%</div>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200">
                      <div className="text-[10px] text-slate-500">الهدف التشغيلي الأولي</div>
                      <div className="font-bold text-slate-800 line-clamp-1">{sandboxClassification.persona.operationalGoal}</div>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                      <div className="text-[10px] text-slate-500">الخطر المحظور تجنبه</div>
                      <div className="font-bold text-rose-700 line-clamp-1">{sandboxClassification.persona.riskToAvoid}</div>
                    </div>
                  </div>
                </div>

                {/* 2. Radar Chart - Recharts 5-Dimensional Behavioral Profile */}
                <CustomerProfileRadarChart
                  capacity={sandboxCapacity}
                  willingness={sandboxWillingness}
                  responsiveness={sandboxResponsiveness}
                  complexity={sandboxComplexity}
                  digitalReadiness={sandboxDigital}
                  personaCode={sandboxClassification.persona.code}
                  personaName={sandboxClassification.persona.name}
                />

                {/* 3. Decision Readiness Gates (G1 - G4) */}
                <div className="bg-white p-5 rounded-xl border border-slate-300 shadow-sm space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h4 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>2. بوابات جاهزية القرار (Decision Readiness Gates)</span>
                    </h4>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      sandboxClassification.gates.ready ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}>
                      {sandboxClassification.gates.ready ? 'جاهز للتنفيذ (ACTION_READY)' : 'معلق / استكمال بيانات (BLOCKED)'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {Object.entries(sandboxClassification.gates).filter(([k]) => k !== 'ready').map(([key, gate]: any) => (
                      <div 
                        key={key}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${
                          gate.passed ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/70 border-rose-200 text-rose-950'
                        }`}
                      >
                        <span className="font-medium text-[11px]">{gate.name}</span>
                        {gate.passed ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <span className="text-[10px] font-bold bg-rose-200 text-rose-900 px-1.5 py-0.5 rounded">فشل</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Next Best Collection Action (NBCA Package) */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-5 rounded-xl border border-slate-800 shadow-md space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="font-bold text-sm text-white">
                        3. حزمة الإجراء التحصيلي التالي (NBCA Action Package)
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-sky-400" dir="ltr">
                      DETERMINISTIC OUTPUT
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-slate-400 font-medium">الإجراء الموصى به (Next Best Action):</div>
                    <div className="p-3 bg-slate-800/90 border border-slate-700 rounded-lg text-amber-300 font-bold text-sm leading-relaxed">
                      {sandboxClassification.nbca}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <div className="text-[10px] text-slate-400">القناة المختارة (Channel)</div>
                      <div className="font-bold text-sky-300 text-xs mt-0.5">{sandboxClassification.channel}</div>
                    </div>
                    <div className="p-2.5 rounded bg-slate-800/80 border border-slate-700">
                      <div className="text-[10px] text-slate-400">نافذة التوقيت (Timing Window)</div>
                      <div className="font-bold text-slate-200 text-xs mt-0.5">{sandboxClassification.timing}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-xs text-slate-400 font-medium">نص الرسالة / سيناريو المحادثة المقترح:</div>
                    <div className="p-3 rounded bg-slate-800/50 border border-slate-700 text-xs text-slate-200 italic leading-relaxed">
                      « {sandboxClassification.message} »
                    </div>
                  </div>

                  {/* Reason Codes & Export Trigger */}
                  <div className="border-t border-slate-800 pt-3 space-y-3">
                    <div>
                      <div className="text-[11px] text-slate-400 mb-1.5 font-bold">شفرات التفسير وسجل التدقيق (Reason Codes):</div>
                      <div className="flex flex-wrap gap-1.5">
                        {(sandboxClassification.reasonCodes || []).map((code, idx) => (
                          <span key={idx} className="font-mono text-[10px] bg-slate-800 text-sky-400 border border-slate-700 px-2 py-0.5 rounded">
                            {code}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                      <span className="text-[11px] text-slate-400">جاهز للأرشفة والطباعة:</span>
                      <button
                        onClick={() => setSandboxExportModalOpen(true)}
                        className="px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                      >
                        <FileDown className="w-3.5 h-3.5" />
                        <span>تصدير التقرير (PDF)</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Sandbox Report Export & Print Modal */}
            <SandboxReportExportModal
              isOpen={sandboxExportModalOpen}
              onClose={() => setSandboxExportModalOpen(false)}
              reportData={{
                capacity: sandboxCapacity,
                willingness: sandboxWillingness,
                responsiveness: sandboxResponsiveness,
                complexity: sandboxComplexity,
                digitalReadiness: sandboxDigital,
                dataComplete: sandboxDataComplete,
                dormantFlag: sandboxDormantFlag,
                disputeFlag: sandboxDisputeFlag,
                classification: sandboxClassification,
              }}
            />

          </div>
        )}

        {/* 7. GLOSSARY & ACADEMIC REFERENCES TAB */}
        {activeTab === 'glossary-ref' && (
          <div className="space-y-8">
            <GlossaryView />
            <ReferencesView />
          </div>
        )}

        {/* 8. FULL CONTINUOUS DOCUMENT VIEW (PRINT & EXPORT A4 READY) */}
        {activeTab === 'full-print' && (
          <div className="space-y-8 print:space-y-0">
            {/* Print Header Tips */}
            <div className="bg-gradient-to-r from-amber-50 via-sky-50 to-emerald-50 border border-slate-300 text-slate-900 p-4 sm:p-5 rounded-2xl shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 no-print">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono bg-emerald-600 text-white">
                    A4 READY
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900">
                    عرض المصنف المرجعي كاملاً وتصدير PDF
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  يحتوي هذا العرض على كامل أجزاء الوثيقة (الغلاف الرسمي، الفهرس التفصيلي، الملخص التنفيذي، الفصول الـ 42، مصفوفة الشخصيات، السيناريوهات، الملاحق، والمراجع الأكاديمية) منسقة بدقة عالية للطباعة أو الحفظ كملف PDF.
                </p>
                <div className="text-[11px] text-emerald-800 font-medium pt-0.5">
                  💡 تلميح: في نافذة الطباعة المنبثقة، اختر الوجهة <strong>«حفظ بتنسيق PDF / Save as PDF»</strong> لتحميل الملف على جهازك.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0">
                <button
                  onClick={handleDownloadFullDocument}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>تحميل كامل الوثيقة (PDF)</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Printer className="w-4 h-4 text-amber-400" />
                  <span>طباعة مباشرة</span>
                </button>
              </div>
            </div>

            {/* Document Cover */}
            <PrintCoverPage />

            {/* Table of Contents */}
            <TableOfContents parts={allParts} onSelectChapter={(id) => {
              setSelectedChapterId(id);
              setActiveTab('reader');
            }} />

            {/* Executive Summary */}
            <ExecutiveSummaryView />

            {/* All 42 Chapters sequentially (each chapter embeds its dedicated blueprints, grids, glossary, and citations) */}
            <div className="space-y-8 print:space-y-0">
              {allChapters.map((ch) => {
                const part = getPartByChapterId(ch.id);
                return (
                  <ChapterView
                    key={ch.id}
                    chapter={ch}
                    partTitle={part?.title}
                    partNum={part?.num}
                  />
                );
              })}
            </div>

            {/* Technical Appendices & Templates (Appendix A to R) */}
            <div className="mt-8">
              <AppendicesView />
            </div>

          </div>
        )}

      </div>

      {/* Footer */}
      <footer className="mt-auto bg-slate-900 text-slate-400 py-6 border-t border-slate-800 text-xs no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Collection Persona Framework™</span>
            <span>•</span>
            <span>المصنف المرجعي والتطبيقي 2026</span>
          </div>
          <div className="text-slate-400 text-center sm:text-left" dir="ltr">
            Designed for Banking Credit, Risk & Decision-Support Operations
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 flex items-center justify-around px-2 py-1.5 shadow-2xl no-print">
        <button
          onClick={() => {
            setActiveTab('reader');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg min-w-[56px] transition-colors ${
            activeTab === 'reader' ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">القارئ</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('personas');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg min-w-[56px] transition-colors ${
            activeTab === 'personas' ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">الشخصيات</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('sandbox');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg min-w-[56px] transition-colors ${
            activeTab === 'sandbox' ? 'text-amber-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Cpu className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">المحاكي</span>
        </button>

        <button
          onClick={() => {
            setActiveTab('scenarios');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center p-1.5 rounded-lg min-w-[56px] transition-colors ${
            activeTab === 'scenarios' ? 'text-sky-400 font-bold' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Compass className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">السيناريوهات</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className="flex flex-col items-center justify-center p-1.5 rounded-lg min-w-[56px] text-slate-400 hover:text-slate-200"
        >
          <Menu className="w-5 h-5 mb-0.5" />
          <span className="text-[10px]">المزيد</span>
        </button>
      </div>
    </div>
  );
}
