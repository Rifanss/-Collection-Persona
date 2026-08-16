import { Part } from '../types';

export const parts6to8Data: Part[] = [
  {
    id: 'part-6',
    num: 'الجزء السادس',
    title: 'القياس والتحقق والتنفيذ',
    englishTitle: 'Measurement, Validation & Implementation',
    description: 'مؤشرات الأداء المتوازنة (Balanced Scorecard)، منهجية التجربة التجريبية (Pilot)، التصميم التجريبي وقياس الأثر الإضافي (Incremental Uplift)، خارطة الطريق للتنفيذ ومستويات النضج.',
    chapters: [
      {
        id: 'ch-31',
        num: 31,
        title: 'مؤشرات الأداء وقياس فعالية النموذج',
        englishTitle: 'Balanced Collection Scorecard & KPI System',
        partId: 'part-6',
        partName: 'القياس والتحقق',
        sections: [
          {
            id: 'sec-31-1',
            num: '31.1',
            title: 'مبدأ القياس وتحديد المؤشرات مسبقًا',
            paragraphs: [
              'القاعدة الأساسية: لا يمكن تحسين ما لم يتم تعريفه وقياسه، ولا يمكن إثبات قيمة النموذج دون خط أساس واضح للمقارنة. ويجب تحديد مؤشرات النجاح قبل بدء الـ Pilot لمنع اختيار المؤشرات التي تبدو جيدة بعد انتهاء التجربة.',
            ],
          },
          {
            id: 'sec-31-2',
            num: '31.2',
            title: 'مجموعات المؤشرات الخمس واللوحة المتوازنة (Balanced Scorecard)',
            table: {
              headers: ['المحور', 'المؤشرات الأساسية', 'المعادلة / الوصف'],
              rows: [
                ['الأثر المالي (Financial)', 'Recovery Rate, Incremental Recovery, Cost-to-Collect', 'Incremental = Recovery(Treatment) - Recovery(Control)'],
                ['الكفاءة التشغيلية (Operational)', 'Attempts per Resolution (APR), Time to Resolution, Promise Kept Rate', 'APR = Total Eligible Attempts / Total Resolutions'],
                ['نتائج العميل (Customer Outcome)', 'Digital Completion, Repeated Contacts, Complaints, Journey Friction', 'Digital Completion = Completed Journeys / Started Journeys'],
                ['جودة القرار والنموذج (Model & Decision)', 'Recommendation Adoption, Override Rate, Persona Stability, Drift', 'Override Rate = Overridden Recs / Total Presented Recs'],
                ['مؤشرات الحماية (Guardrails)', 'Complaints Ceiling, Contact Frequency Limits, Low Confidence Suppression', 'ضمان عدم تدهور رضا العملاء أثناء تحسين التحصيل المالي'],
              ],
            },
          },
        ],
      },
      {
        id: 'ch-32',
        num: 32,
        title: 'منهجية الـ Pilot وآلية التحقق',
        englishTitle: 'Pilot Design, Phases & Stop Conditions',
        partId: 'part-6',
        partName: 'القياس والتحقق',
        sections: [
          {
            id: 'sec-32-1',
            num: '32.1',
            title: 'مراحل التحقق المتدرجة للـ Pilot',
            bullets: [
              '1. Baseline Period: توثيق دقيق للأداء الحالي قبل أي تدخل.',
              '2. Offline Validation: اختبار النموذج على بيانات تاريخية سابقة وفصل (Train / Validation / Test) وإجراء Out-of-Time Validation.',
              '3. Shadow Mode: تشغيل النموذج في الخلفية ومقارنة توصياته بالقرارات البشرية دون تأثير على العملاء.',
              '4. Assisted Mode: عرض التوصيات للموظفين مع احتفاظهم بالسلطة التقديرية الكاملة وقياس معدل الاعتماد والتجاوز.',
              '5. Controlled Pilot: تطبيق على نطاق محدد ومجموعات معالجة وضابطة ومراقبة شروط الإيقاف (Stop Conditions).',
            ],
          },
        ],
      },
      {
        id: 'ch-33',
        num: 33,
        title: 'التصميم التجريبي وقياس الأثر الإضافي',
        englishTitle: 'Experimental Design & Incremental Uplift',
        partId: 'part-6',
        partName: 'القياس والتحقق',
        sections: [
          {
            id: 'sec-33-1',
            num: '33.1',
            title: 'لماذا لا تكفي المقارنة قبل وبعد؟',
            paragraphs: [
              'المقارنة الزمنية البسيطة (قبل وبعد) تتأثر بعوامل خارجية مثل مواسم الرواتب والظروف الاقتصادية. لذا يلزم تصميم تجريبي صارم: Treatment Group مقابل Control Group مع التوزيع العشوائي (Randomization) والتطبيقي الطبقي (Stratification).',
            ],
            formula: 'Uplift = Outcome(Treatment) - Outcome(Control)',
          },
          {
            id: 'sec-33-2',
            num: '33.2',
            title: 'التحليل حسب الشخصية وتجارب Champion / Challenger',
            paragraphs: [
              'اختبار الأثر لكل Persona على حدة؛ فقد تكون الاستراتيجية ممتازة لـ CP-07 وضعيفة لـ CP-02. واستمرار التحسين عبر إدخال استراتيجيات منافسة (Challenger) مقابل الاستراتيجية المعتمدة (Champion) مع التوازن بين الاستغلال (Exploitation) والاستكشاف (Exploration).',
            ],
          },
        ],
      },
      {
        id: 'ch-34',
        num: 34,
        title: 'خارطة التنفيذ والتوسع (Implementation Roadmap)',
        englishTitle: 'Implementation Phases & 24-Week Timeline',
        partId: 'part-6',
        partName: 'القياس والتحقق',
        sections: [
          {
            id: 'sec-34-1',
            num: '34.1',
            title: 'فلسفة التنفيذ والمراحل العشر',
            paragraphs: [
              'الفلسفة: Start Small, Validate Deep, Scale Responsibly (ابدأ بنطاق محدود، اختبر بعمق، ثم توسع تدريجيًا).',
            ],
            bullets: [
              'المرحلة 1 (الأسابيع 1-4): Discovery وتحديد نطاق المشروع والمشاكل والمحفظة الأساسية.',
              'المرحلة 2 (الأسابيع 5-8): Data Readiness وتجهيز البيانات وقاموس الميزات وسجل الجودة.',
              'المرحلة 3 (الأسابيع 9-12): Persona Discovery وبناء مسودات الشخصيات ومنطق الانتقال.',
              'المرحلة 4 (الأسابيع 13-16): Scoring & Decision Engine ومعايرة الأوزان وعتبات القرارات.',
              'المرحلة 5-7 (الأسابيع 17-20): Prototype & Shadow Mode وبناء الشاشات والتشغيل في الخلفية.',
              'المرحلة 8-9 (الأسابيع 21-24): Assisted Pilot & Controlled Pilot والتحقق التجريبي المضبوط.',
              'المرحلة 10: Gradual Scale والتوسع التدريجي عبر بوابات التوسع الصارمة (Scale Gates).',
            ],
          },
        ],
      },
      {
        id: 'ch-35',
        num: 35,
        title: 'مستويات نضج Collection Persona',
        englishTitle: 'Collection Persona Maturity Model (Levels 0-6)',
        partId: 'part-6',
        partName: 'القياس والتحقق',
        sections: [
          {
            id: 'sec-35-1',
            num: '35.1',
            title: 'سلم النضج ومعادلة النضج المؤسسي',
            bullets: [
              'Level 0 — Traditional Collection: تركيز على الدين، سير عمل نمطي موحد، وقرارات يدوية.',
              'Level 1 — Rule-Based Segmentation: شرائح أولية بسيطة بقواعد ثابتة.',
              'Level 2 — Operational Collection Persona: شخصيات متعددة الأبعاد، بطاقات شخصيات، وانتقال مبدئي.',
              'Level 3 — Scored Persona: مؤشرات كمية مقسمة، تقييم الثقة والجاهزية والأولوية.',
              'Level 4 — Decision Intelligence: محرك قرار، قواعد أعمال، NBCA، أكواد أسباب وبوابات مراجعة بشرية.',
              'Level 5 — Adaptive Collection: حلقة تعلم مستمرة، تجارب Champion/Challenger، وتحسين ديناميكي.',
              'Level 6 — Orchestrated Decision Ecosystem: تكامل كلي للبيانات والقنوات والموارد في منظومة واحدة.',
            ],
            formula: 'Maturity = Data Readiness \\times Decision Quality \\times Governance \\times Operational Adoption \\times Learning Capability',
          },
        ],
      },
    ],
  },
  {
    id: 'part-7',
    num: 'الجزء السابع',
    title: 'التطبيق والتحليل والتطوير المستقبلي',
    englishTitle: 'Applied Scenarios, Persona Journey & Future Opportunities',
    description: 'السيناريوهات التطبيقية الافتراضية العشرة، تحليل رحلة الشخصية التحصيلية (Persona Journey)، حدود ومخاطر النموذج، وفرص التطوير والذكاء الاصطناعي التوليدي.',
    chapters: [
      {
        id: 'ch-36',
        num: 36,
        title: 'السيناريوهات التطبيقية الافتراضية',
        englishTitle: '10 Comprehensive Applied Scenarios',
        partId: 'part-7',
        partName: 'التطبيق والتحليل',
        sections: [
          {
            id: 'sec-36-1',
            num: '36.1',
            title: 'منهجية وتفاصيل السيناريوهات العشرة',
            paragraphs: [
              'تختبر السيناريوهات منطق النموذج الكامل خطوة بخطوة من البيانات الخام حتى التعلم وإعادة التقييم. وتم تفصيلها بدقة في قسم السيناريوهات التفاعلية وبطاقات الدراسة التحليلية.',
            ],
          },
        ],
      },
      {
        id: 'ch-37',
        num: 37,
        title: 'رحلة الشخصية التحصيلية (Persona Journey)',
        englishTitle: 'Persona Journey & Dynamic State Transitions',
        partId: 'part-7',
        partName: 'التطبيق والتحليل',
        sections: [
          {
            id: 'sec-37-1',
            num: '37.1',
            title: 'الشخصية كحالة تشغيلية متغيرة ومصفوفة الانتقال',
            paragraphs: [
              'Persona ليست نقطة ثابتة بل حالة تشغيلية ديناميكية (Current Operational State). يتم تتبع معدل الانتقال (Persona Migration Rate) وتحليل التسلسل الزمني للحالة (T0 → T1 → T2 → T3 → T4 → T5) لمعرفة أي الاستراتيجيات أدت إلى الانتقال لحالات قابلة للحل واستدامة التسوية.',
            ],
            table: {
              headers: ['من (From)', 'إلى (To)', 'الحدث والسبب المحتمل'],
              rows: [
                ['CP-05', 'CP-02', 'تم الوصول بنجاح وفهم القدرة والسيولة المالية'],
                ['CP-02', 'CP-01', 'تحسنت الجاهزية واستقرت خطة التسوية المتناسبة'],
                ['CP-01', 'Resolution', 'اكتمل السداد وأغلقت الحالة بنجاح'],
                ['CP-04', 'CP-02', 'اتضح أن سبب الإخفاق في الوعود هو ضعف القدرة وليس التهرب'],
                ['CP-06', 'CP-01', 'عولج النزاع بالكامل وأصبحت الحالة جاهزة للإجراء'],
                ['CP-07', 'Resolution', 'إتمام رقمي فوري عبر القنوات الذاتية'],
                ['CP-08', 'CP-02', 'خفض التعقيد وتوحيد المديونيات بعد دراسة مدير الحالة'],
              ],
            },
          },
        ],
      },
      {
        id: 'ch-38',
        num: 38,
        title: 'حدود النموذج ومخاطره التشغيلية والتحليلية',
        englishTitle: 'Model Limitations, Biases & Risk Mitigation',
        partId: 'part-7',
        partName: 'التطبيق والتحليل',
        sections: [
          {
            id: 'sec-38-1',
            num: '38.1',
            title: 'المخاطر والتحيزات والضوابط الوقائية',
            bullets: [
              'محدودية البيانات: ما تراه الأنظمة لا يمثل كامل واقع الإنسان (Observed Data ≠ Complete Human Reality).',
              'مخاطر جودة البيانات: البيانات الرديئة تؤدي لشخصية خاطئة وقرار خاطئ (Bad Data → Bad Persona → Bad Decision).',
              'التحيز التاريخي وسياسات الماضي (Historical & Policy Bias): التعلم من ممارسات قديمة مشوهة.',
              'انزياح المفاهيم والشخصيات (Concept & Persona Drift): تغير سلوك المستهلكين بمرور الزمن وتطور الاقتصاد.',
              'الإفراط أو التدني في التقسيم (Over vs Under-Segmentation).',
              'الدقة الزائفة (False Precision): تجنب إعطاء نسب مئوية توهم بدقة غير واقعية.',
              'تحيز الأتمتة وتحيز التجاوز البشري (Automation Bias vs Override Bias).',
              'خطر التلاعب بالمؤشرات (Gaming Risk): التركيز على عدد الأنشطة بدلاً من النتائج الفعلية.',
              'حدود السببية: الارتباط الإحصائي لا يعني حتمية العلاقة السببية (Correlation ≠ Causation).',
            ],
          },
        ],
      },
      {
        id: 'ch-39',
        num: 39,
        title: 'فرص التطوير المستقبلية والذكاء الاصطناعي',
        englishTitle: 'Future Horizons & GenAI Copilot',
        partId: 'part-7',
        partName: 'التطبيق والتحليل',
        sections: [
          {
            id: 'sec-39-1',
            num: '39.1',
            title: 'آفاق التطور التقني والتحليلي',
            bullets: [
              'Uplift Modeling & Treatment Effect: نمذجة من سيتغير سلوكه بفعل التدخل وتفادي التدخلات غير المجدية.',
              'Contextual Bandits & Adaptive Learning: التعلم المعزز التكيفي لاختيار الاستراتيجيات ضمن أطر حوكمة صارمة.',
              'الذكاء الاصطناعي التوليدي ومساعد التحصيل (Collection Persona Copilot): تلخيص سجلات الحالات، توليد تفسيرات لغوية طبيعية لقرارات النظام، ومساعدة الموظف في صياغة الرسائل المعتمدة.',
              'المساعد الرقمي التوأم للمحفظة (Portfolio Digital Twin): محاكاة نتائج تغيير الاستراتيجيات والسياسات قبل تطبيقها.',
              'Next Best Strategy & Journey Optimization: الانتقال من تخطيط الإجراء المنفرد إلى تحسين رحلة التحصيل بكاملها.',
            ],
            callout: {
              type: 'rule',
              text: 'The Goal Is Better Decisions, Not More Complex Models (الهدف تحسين القرار، لا زيادة تعقيد النموذج).',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'part-8',
    num: 'الجزء الثامن',
    title: 'الإغلاق العلمي والتطبيقي للمصنف',
    englishTitle: 'Scientific Conclusion, Glossary & Appendices',
    description: 'الخاتمة والاستنتاجات العلمية العشرة، قاموس المصطلحات التشغيلية الشامل، الملاحق والأدوات التطبيقية الأصلية (أ إلى ر)، والمراجع الأكاديمية والتنظيمية.',
    chapters: [
      {
        id: 'ch-40',
        num: 40,
        title: 'الخاتمة والاستنتاجات العلمية والتطبيقية',
        englishTitle: 'Synthesis, Core Findings & Applied Value',
        partId: 'part-8',
        partName: 'الإغلاق العلمي والتطبيقي',
        sections: [
          {
            id: 'sec-40-1',
            num: '40.1',
            title: 'الاستنتاجات العشرة الجوهرية للمصنف',
            bullets: [
              'الاستنتاج 1: Collection Persona ليست شريحة تقليدية جامدة، بل حالة تشغيلية ديناميكية تتغير وتنتقل وتقاس نتائجها.',
              'الاستنتاج 2: التصنيف وحده لا يصنع القرار (Persona ≠ Decision)، بل يحتاج لدرجات التقييم، الثقة، الجاهزية، وقواعد الأعمال.',
              'الاستنتاج 3: القدرة والرغبة بعدان مختلفان كليًا (Can Pay vs Will Engage) وخلطهما يؤدي لفشل الاستراتيجية.',
              'الاستنتاج 4: الوصول لا يساوي الرغبة (Reachability ≠ Willingness)؛ فتحسين الوصول يسبق تفسير النوايا.',
              'الاستنتاج 5: جودة النتيجة أهم من حجم النشاط؛ والتحول من إدارة الأنشطة إلى إدارة القرارات والنتائج.',
              'الاستنتاج 6: الثقة (Confidence) يجب أن تكون طبقة مستقلة في بنية القرار لمنع القرارات القوية ببيانات ضعيفة.',
              'الاستنتاج 7: جاهزية القرار (Decision Readiness) تختلف عن الثقة وتمنع اتخاذ قرارات خاطئة بحالات النزاع والبيانات الناقصة.',
              'الاستنتاج 8: أفضل إجراء ليس مجرد أعلى توقع احتمالي (Highest Probability ≠ Best Decision).',
              'الاستنتاج 9: عدم التدخل والانتظار المدروس هو قرار بحد ذاته (No Action Can Be an Action).',
              'الاستنتاج 10: الإنسان يبقى شريكًا لا غنى عنه في منظومة القرار (Human + Decision Intelligence).',
            ],
          },
          {
            id: 'sec-40-2',
            num: '40.2',
            title: 'دورة القرار العشرية الشاملة',
            paragraphs: [
              'تختزل المعمارية التطبيقية للمصنف في التسلسل العشري المستمر:',
            ],
            formula: 'Perceive → Understand → Classify → Quantify → Assess → Decide → Act → Measure → Learn → Reassess',
          },
        ],
      },
      {
        id: 'ch-41',
        num: 41,
        title: 'قاموس المصطلحات التشغيلية',
        englishTitle: 'Comprehensive Glossary of Operational Terms',
        partId: 'part-8',
        partName: 'الإغلاق العلمي والتطبيقي',
        sections: [
          {
            id: 'sec-41-1',
            num: '41.1',
            title: 'المصطلحات المرجعية للنموذج',
            paragraphs: [
              'يتضمن هذا الفصل تعريفات دقيقة ومنهجية لأكثر من 40 مصطلحًا تأسيسيًا في منظومة التحصيل الذكي، بما يشمل مفاهيم البنية التحتية، ونماذج التقييم، وبوابات الجاهزية، وأطر الحوكمة.',
            ],
          },
        ],
      },
      {
        id: 'ch-42',
        num: 42,
        title: 'الملاحق والأدوات التطبيقية والمراجع',
        englishTitle: 'Applied Appendices & Academic References',
        partId: 'part-8',
        partName: 'الإغلاق العلمي والتطبيقي',
        sections: [
          {
            id: 'sec-42-1',
            num: '42.1',
            title: 'الملاحق التطبيقية الأصلية وقائمة المراجع الموحدة',
            paragraphs: [
              'يضم هذا الفصل النماذج والمصفوفات والبطاقات التطبيقية الجاهزة للاستخدام المؤسسي (الملاحق أ إلى ر)، إلى جانب المراجع العلمية والمصادر التنظيمية الدولية والمحلية (SAIP و WIPO و NIST).',
            ],
          },
        ],
      },
    ],
  },
];
