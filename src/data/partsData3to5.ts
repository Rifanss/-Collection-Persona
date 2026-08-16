import { Part } from '../types';

export const parts3to5Data: Part[] = [
  {
    id: 'part-3',
    num: 'الجزء الثالث',
    title: 'الشخصيات والتحليل الكمي',
    englishTitle: 'Operational Personas & Quantitative Scoring',
    description: 'تفصيل الشخصيات التشغيلية (CP-01 إلى CP-08)، مصفوفة الشخصيات، أوزان ومؤشرات Persona Score، مستويات الثقة وجاهزية القرار.',
    chapters: [
      {
        id: 'ch-14',
        num: 14,
        title: 'الشخصيات التشغيلية وتصنيفها',
        englishTitle: 'Operational Personas: CP-01 to CP-08',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-14-1',
            num: '14.1',
            title: 'مقدمة الشخصيات التشغيلية',
            paragraphs: [
              'تمثل الشخصيات التشغيلية Collection Personas القلب التفسيري للنموذج، لكنها لا تمثل نهاية التحليل. فالهدف منها هو اختصار نمط تحصيلي يمكن فهمه واستخدامه في القرار، لا أن تتحول إلى ملصق ثابت على العميل.',
              'ويعتمد المصنف مجموعة مرجعية أولية مكونة من 8 شخصيات تخضع للاختبار والتطوير وفق بيانات المؤسسة: CP-01 إلى CP-08.',
            ],
          },
          {
            id: 'sec-14-2',
            num: '14.2 - 14.9',
            title: 'بطاقات وتفاصيل الشخصيات التشغيلية (CP-01 إلى CP-08)',
            bullets: [
              'CP-01 — المتعاون القابل للإغلاق (Cooperative / Ready to Resolve): استجابة عالية، التزام بالوعود، قدرة جيدة، تعقيد منخفض. الهدف: Fast and Frictionless Resolution.',
              'CP-02 — حسن النية محدود القدرة (Good Intent / Limited Capacity): رغبة عالية واستجابة إيجابية مع عائق في السيولة. الهدف: Sustainable Resolution.',
              'CP-03 — القادر منخفض المبادرة (Capable / Low Initiative): ملاءة جيدة مع تسويف وتأجيل متكرر. الهدف: Decision Activation.',
              'CP-04 — نمط التأجيل المتكرر (Repeated Deferral Pattern): تفاعل ظاهري ووعود كثيرة مع تدنٍ حاد في التنفيذ. الهدف: Commitment Quality.',
              'CP-05 — منخفض الوصول (Low Reachability): صعوبة في الوصول عبر المكالمات وانخفاض الرد. الهدف: Recover Reachability.',
              'CP-06 — صاحب اعتراض أو نزاع (Dispute / Objection State): وجود نزاع موثق يستلزم إيقاف الضغط التحصيلي. الهدف: Resolve Dispute Context First.',
              'CP-07 — رقمي ذاتي الخدمة (Digital Self-Service): تفاعل ممتاز وإنجاز عبر القنوات الذاتية. الهدف: Digital Completion with Minimal Friction.',
              'CP-08 — مرتفع التعقيد (High Complexity Case): تعدد المنتجات والمسارات وتناقض البيانات. الهدف: Coordinated Case Management.',
            ],
          },
        ],
      },
      {
        id: 'ch-15',
        num: 15,
        title: 'مصفوفة الشخصيات التشغيلية',
        englishTitle: 'Persona Matrix & Multi-Dimensional Mapping',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-15-1',
            num: '15.1',
            title: 'الغرض من المصفوفة',
            paragraphs: [
              'المصفوفة أداة تفسيرية تساعد على فهم العلاقة بين أهم الأبعاد: Financial Capacity و Willingness، مع تكامل أبعاد Responsiveness و Complexity و Confidence و Decision Readiness لاتخاذ القرار النهائي.',
            ],
          },
          {
            id: 'sec-15-2',
            num: '15.2',
            title: 'المصفوفة الأساسية للشخصيات والاتجاه التشغيلي',
            table: {
              headers: ['القدرة (Capacity)', 'الرغبة (Willingness)', 'Persona المرجحة', 'الاتجاه التشغيلي الأساسي'],
              rows: [
                ['مرتفعة', 'مرتفعة', 'CP-01', 'إغلاق مباشر وسريع بأقل احتكاك'],
                ['منخفضة', 'مرتفعة', 'CP-02', 'حل مالي متناسب ومستدام'],
                ['مرتفعة', 'منخفضة', 'CP-03', 'تحريك وتفعيل القرار الفوري'],
                ['غير واضحة', 'غير واضحة', 'CP-05', 'استعادة وتحسين الوصول والقنوات'],
                ['أي مستوى', 'اعتراض قائم', 'CP-06', 'معالجة النزاع وفصل المسار'],
                ['أي مستوى', 'رقمي مرتفع', 'CP-07', 'مسار رقمي ذاتي (Digital First)'],
                ['أي مستوى', 'تعقيد مرتفع', 'CP-08', 'إدارة حالة منسقة (Case Management)'],
              ],
            },
          },
          {
            id: 'sec-15-3',
            num: '15.3 - 15.4',
            title: 'الحالة التشغيلية السائدة و الشخصيات الأولية والثانوية',
            paragraphs: [
              'قد ينطبق على العميل أكثر من نمط؛ مثل أن تكون لديه قدرة منخفضة (Capacity = Low) مع تفاعل رقمي مرتفع (Digital = High). فيحتفظ النظام بـ Primary Persona = CP-02 و Secondary Signal = CP-07، ويستفيد محرك القرار من كلا البُعدين.',
            ],
          },
        ],
      },
      {
        id: 'ch-16',
        num: 16,
        title: 'Persona Score ومكوناته',
        englishTitle: 'Modular Persona Scoring Architecture',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-16-1',
            num: '16.1',
            title: 'التعريف والمؤشرات المعيارية المقسمة (Modular Scores)',
            paragraphs: [
              'Persona Score ليس درجة أخلاقية أو ائتمانية؛ بل مجموعة من المؤشرات الكمية المستقلة التي تصف أبعاد الحالة وتدعم التفسير والترتيب:',
            ],
            bullets: [
              'Capacity Score: يقيس القدرة المالية المقدرة، انتظام السداد، الالتزامات ومؤشرات السيولة.',
              'Willingness Score: يقيس الإشارات السلوكية للمبادرة، تنفيذ الوعود، وقبول الحلول.',
              'Responsiveness Score: يقيس قابلية الوصول وسرعة الرد والنجاح عبر القنوات.',
              'Behavior Score: مؤشر مركب للسلوك التاريخي والحالي واستقرار التفاوض.',
              'Complexity Score: يقيس مقدار الاستثناءات، عدد المنتجات، والنزاعات القائمة.',
              'Priority Score: ترتيب العمل التشغيلي بمراعاة الفرصة، القيمة، الإلحاح، والجاهزية.',
            ],
          },
        ],
      },
      {
        id: 'ch-17',
        num: 17,
        title: 'تحويل المتغيرات إلى مؤشرات وأوزان',
        englishTitle: 'Normalization, Scaling & Weights',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-17-1',
            num: '17.1',
            title: 'توحيد المقاييس (Min-Max Scaling)',
            formula: 'X_{norm} = \\frac{X - X_{min}}{X_{max} - X_{min}} \\times 100',
            paragraphs: [
              'تأتي المتغيرات بوحدات متباينة (ريال، أيام، نسب، أعداد، وقيم منطقية)، ولذلك يلزم توحيدها على مقياس من 0 إلى 100 مع مراعاة اتجاه المتغير (المؤشرات الإيجابية مثل Promise Kept Ratio مقابل العكسية مثل Broken Promise Frequency).',
            ],
          },
          {
            id: 'sec-17-2',
            num: '17.2',
            title: 'مراحل تحديد الأوزان والصيغة المركبة (Composite Score)',
            paragraphs: [
              'تتدرج الأوزان من Expert Weights (بداية تفسيرية) إلى Statistical Validation (اختبار الأثر الفعلي) ثم Model-Based Weighting عند النضج الإحصائي.',
            ],
            formula: 'Composite = w_1 Capacity + w_2 Willingness + w_3 Responsiveness + w_4 Behavior - w_5 Complexity',
          },
        ],
      },
      {
        id: 'ch-18',
        num: 18,
        title: 'مستويات Persona Score واستخداماتها',
        englishTitle: 'Scoring Layers & Priority Levels',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-18-1',
            num: '18.1',
            title: 'تعدد التقييمات حسب الغرض',
            bullets: [
              'Response Score: يقيس P(Response | Customer, Channel, Time).',
              'Resolution Score: يركز على التسوية النهائية لا مجرد إجراء الاتصال.',
              'Action-Specific Scoring: تقييم احتمالية النجاح لإجراء محدد (SMS vs Call vs Digital Journey).',
              'Priority Levels: P1 — Immediate, P2 — High, P3 — Standard, P4 — Low (تحدد عتباتها بالمعايرة).',
            ],
          },
        ],
      },
      {
        id: 'ch-19',
        num: 19,
        title: 'Confidence Score و Decision Readiness',
        englishTitle: 'Confidence & Decision Readiness Gates',
        partId: 'part-3',
        partName: 'الشخصيات والتحليل الكمي',
        sections: [
          {
            id: 'sec-19-1',
            num: '19.1',
            title: 'الفرق الجوهري ومكونات الثقة',
            paragraphs: [
              'Confidence يجيب: «إلى أي درجة نثق في التحليل والبيانات؟»، بينما Decision Readiness يجيب: «هل الحالة جاهزة أصلًا لاتخاذ قرار وتنفيذه؟».',
              'تتكون درجة الثقة (Confidence) من: اكتمال البيانات (Data Completeness)، حداثة البيانات (Data Freshness)، اتساق البيانات (Data Consistency)، وضوح الفصل التصنيفي (Classification Separation)، واستقرار النموذج (Model Stability).',
            ],
          },
          {
            id: 'sec-19-2',
            num: '19.2',
            title: 'مستويات جاهزية القرار (DR-1 إلى DR-5) والامتناع الرشيد',
            table: {
              headers: ['المستوى', 'المسمى الإنجليزي', 'الوصف والحالة التشغيلية'],
              rows: [
                ['DR-1', 'Ready', 'حالة مكتملة وجاهزة فورًا لإصدار NBCA ضمن الصلاحيات.'],
                ['DR-2', 'Ready with Conditions', 'جاهزة لإجراء مشروط بمراجعة أو تحقق مسبق.'],
                ['DR-3', 'Information Required', 'بيانات ناقصة تتطلب إجراء استكمال معلومات أولاً.'],
                ['DR-4', 'Specialist Review Required', 'حالة معقدة تستلزم تدخلاً وخبرة بشرية متخصصة.'],
                ['DR-5', 'Decision Blocked', 'وجود مانع نظامي أو نزاع قائم يمنع أي إجراء تحصيلي.'],
              ],
            },
            callout: {
              type: 'rule',
              text: 'مبدأ الامتناع الرشيد (Decision Abstention): قد يكون الامتناع عن إصدار توصية حاسمة هو القرار الصحيح عند نقص الثقة، بدلاً من التظاهر باليقين الزائف.',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'part-4',
    num: 'الجزء الرابع',
    title: 'هندسة القرار التحصيلي',
    englishTitle: 'Collection Decision Architecture',
    description: 'محرك القرار (Decision Engine)، قواعد الأعمال، الإجراء التحصيلي التالي الأنسب (NBCA)، مصفوفة واستراتيجيات الشخصيات، ودورة اتخاذ القرار الشاملة.',
    chapters: [
      {
        id: 'ch-20',
        num: 20,
        title: 'محرك القرار (Decision Engine)',
        englishTitle: 'Decision Engine Logic & Candidate Actions',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-20-1',
            num: '20.1',
            title: 'تعريف ومدخلات محرك القرار',
            paragraphs: [
              'Decision Engine هو طبقة منطقية وتشغيلية تستقبل حزمة سياق القرار الكاملة (Collection Decision Context: Customer Context, Debt Context, Persona, Scores, Confidence, Readiness, History, Eligibility, Business Rules)، وتطبق شروط الأهلية والقيود للمفاضلة بين الخيارات وتحديد الإجراء الأنسب القابل للتنفيذ.',
            ],
          },
          {
            id: 'sec-20-2',
            num: '20.2',
            title: 'المراحل الداخلية العشر لمحرك القرار',
            bullets: [
              'Step 1 — Validate Context (التحقق من سلامة البيانات والمدخلات).',
              'Step 2 — Apply Hard Stops (استبعاد الإجراءات الممنوعة بنزاع أو قيود).',
              'Step 3 — Check Decision Readiness (التحقق من تصنيف DR-1 إلى DR-5).',
              'Step 4 — Determine Eligible Actions (إنشاء Candidate Action Set الممكنة).',
              'Step 5 — Apply Persona Strategy (مطابقة الحالة مع عائلة الاستراتيجيات).',
              'Step 6 — Apply Business Rules (تطبيق السياسات التنظيمية والتشغيلية).',
              'Step 7 — Rank Eligible Actions (ترتيب الخيارات المؤهلة وفق المنفعة).',
              'Step 8 — Generate NBCA (إصدار الإجراء الأنسب مع القناة والتوقيت).',
              'Step 9 — Generate Reason Codes (إرفاق أكواد التفسير وبطاقة القرار).',
              'Step 10 — Log Decision (توثيق القرار بالكامل لدعم التتبع والتدقيق).',
            ],
          },
          {
            id: 'sec-20-3',
            num: '20.3',
            title: 'مجموعة الإجراءات المرشحة وتفاضل المنفعة',
            paragraphs: [
              'تشمل Candidate Actions: A1 (تذكير رقمي)، A2 (رحلة خدمة ذاتية)، A3 (مكالمة بشرية)، A4 (مراجعة قدرة مالية)، A5 (توجيه لنزاع)، A6 (مراجعة أخصائي)، و A7 (انتظار وإعادة تقييم).',
              'ليس أعلى احتمال هو أفضل قرار دائمًا (Best Prediction ≠ Best Decision)؛ فمكالمة باحتمالية رد 78% قد تكون أدنى منفعة من رحلة رقمية باحتمالية 69% بسبب التكلفة، وإرهاق الاتصال، وسرعة التنفيذ.',
            ],
          },
        ],
      },
      {
        id: 'ch-21',
        num: 21,
        title: 'قواعد الأعمال وشجرة اتخاذ القرار',
        englishTitle: 'Business Rules & Reference Decision Tree',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-21-1',
            num: '21.1',
            title: 'دور وبنية قواعد الأعمال (Business Rules)',
            paragraphs: [
              'التحليل يقترح، والقواعد تقيد، والمحرك يقرر ضمن القيود (Analytics proposes, Rules constrain, Decision Engine decides).',
              'توثق القواعد ببنية هيكلية محددة (مثل: Rule ID: BR-021, Rule Name: Active Dispute Gate, Condition: Active_Dispute = TRUE, Effect: Suppress Standard Collection, Route: Dispute Handling, Priority: Critical).',
            ],
          },
          {
            id: 'sec-21-2',
            num: '21.2',
            title: 'شجرة القرار المرجعية (Reference Decision Tree)',
            bullets: [
              'هل البيانات الأساسية كافية؟ إذا لا ← Information Required (DR-3).',
              'هل توجد حالة تمنع القرار الاعتيادي؟ إذا نعم ← Exception / Specialist Route.',
              'هل Decision Readiness تسمح بالإجراء؟ إذا لا ← Review / Wait / Collect Data.',
              'ما Persona الحالية وما الاستراتيجيات المتوافقة؟',
              'ما الإجراءات المؤهلة؟ تطبيق Business Rules وترتيب الخيارات ثم إصدار NBCA.',
            ],
          },
        ],
      },
      {
        id: 'ch-22',
        num: 22,
        title: 'الإجراء التحصيلي التالي الأنسب (NBCA)',
        englishTitle: 'Next Best Collection Action (NBCA)',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-22-1',
            num: '22.1',
            title: 'مكونات NBCA السبعة ومفهوم الصلاحية الزمنية (TTL)',
            bullets: [
              '1. Action: ماذا نفعل؟ (اتصال، رسالة، رحلة رقمية، حل مالي، انتظار).',
              '2. Channel: كيف ننفذه؟ (القناة الرقمية، الهاتف، البريد، ممثل متخصص).',
              '3. Timing: متى يتم التنفيذ؟ (فوري، نافذة زمنية مفضلة).',
              '4. Message Approach: بأي نبرة ونهج تواصلي؟',
              '5. Solution: ما الحل المالي المؤهل المقترح؟',
              '6. Alternative: ما الإجراء البديل (Fallback) إذا تعثر الإجراء الأساسي؟',
              '7. TTL (Time to Live): ما مدة صلاحية التوصية قبل إعادة الحساب؟',
            ],
          },
          {
            id: 'sec-22-2',
            num: '22.2',
            title: 'الانتظار كقرار (No Action Can Be an Action)',
            paragraphs: [
              'إذا كان التواصل الأخير حديثًا جدًا، أو إرهاق الاتصال مرتفعًا، أو الاعتراض قيد المعالجة، فقد يكون الانتظار وإعادة التقييم (Wait & Reassess) هو الإجراء الأكثر حكمة وفاعلية.',
            ],
          },
        ],
      },
      {
        id: 'ch-23',
        num: 23,
        title: 'مصفوفة Persona × Collection Strategy',
        englishTitle: 'Strategy Mapping Matrix',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-23-1',
            num: '23.1',
            title: 'المصفوفة المرجعية الشاملة',
            table: {
              headers: ['Persona', 'الاستراتيجية الأساسية', 'القناة المرجحة', 'الهدف التشغيلي', 'مؤشر الأداء الرئيسي (KPI)'],
              rows: [
                ['CP-01', 'Fast Resolution', 'القناة المثبتة تاريخيًا', 'إغلاق سريع بأقل احتكاك', 'Time to Resolution'],
                ['CP-02', 'Capacity-Based Resolution', 'Assisted / Digital', 'حل مستدام يطابق القدرة', 'Solution Sustainability'],
                ['CP-03', 'Decision Activation', 'مباشر ومختصر (Direct)', 'تحريك التنفيذ وإزالة التردد', 'Conversion to Action'],
                ['CP-04', 'Commitment Quality', 'متابعة مضبوطة (Controlled)', 'رفع جودة الالتزام والحد من الوعود', 'Promise Kept Ratio'],
                ['CP-05', 'Reachability Recovery', 'متعدد القنوات (Multi-Channel)', 'استعادة قناة تواصل فعالة', 'Right-Party Contact Rate'],
                ['CP-06', 'Dispute First', 'ممثل متخصص (Specialist)', 'معالجة النزاع وإزالة العائق', 'Dispute Resolution Time'],
                ['CP-07', 'Digital Self-Service', 'الرقمية أولاً (Digital First)', 'تمكين الإتمام الذاتي بسلاسة', 'Digital Completion Rate'],
                ['CP-08', 'Case Management', 'مدير حالة (Case Owner)', 'إدارة منسقة للملفات المتداخلة', 'Case Resolution Quality'],
              ],
            },
          },
        ],
      },
      {
        id: 'ch-24',
        num: 24,
        title: 'الاستراتيجيات المخصصة لكل Persona',
        englishTitle: 'Custom Strategy Blueprints for Personas',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-24-1',
            num: '24.1',
            title: 'الملامح التنفيذية للاستراتيجيات الثماني',
            paragraphs: [
              'يفصل هذا الفصل المنهج التشغيلي الدقيق لكل استراتيجية، بدءًا من Fast Resolution Strategy التي تركز على تقليص الخطوات ووضوح CTA، ومرورًا بـ Capacity-Based المرتكزة على دراسة السيولة، وحتى Coordinated Case Management الموجهة لتوحيد جهود الفرق وإصدار تقرير موحد للحالة.',
            ],
          },
        ],
      },
      {
        id: 'ch-25',
        num: 25,
        title: 'رحلة القرار من البيانات حتى الإجراء والتعلم',
        englishTitle: 'End-to-End Decision Journey & Lifecycle',
        partId: 'part-4',
        partName: 'هندسة القرار التحصيلي',
        sections: [
          {
            id: 'sec-25-1',
            num: '25.1',
            title: 'دورة القرار المتكاملة',
            paragraphs: [
              'تتحرك الحالة عبر تسلسل منطقي محكم:',
            ],
            bullets: [
              'Raw Data → Features → Customer Intelligence → Collection Persona → Scores → Confidence → Decision Readiness → Eligibility → Strategy Ranking → NBCA → Execution → Outcome → Learning → Next Decision.',
            ],
            callout: {
              type: 'equation',
              text: 'Right Collection Decision = Customer Understanding + Context + Eligibility + Rules + Evidence + Measurement',
            },
          },
        ],
      },
    ],
  },
  {
    id: 'part-5',
    num: 'الجزء الخامس',
    title: 'المنصة والتشغيل والحوكمة',
    englishTitle: 'Platform, Operations & Governance',
    description: 'مكونات منصة Collection Persona، شاشات المستخدم (الموظف، المشرف، الإدارة)، التكامل التقني والـ APIs، وأطر الحوكمة والعدالة والخصوصية.',
    chapters: [
      {
        id: 'ch-26',
        num: 26,
        title: 'منصة Collection Persona Platform',
        englishTitle: 'Platform Architecture & Functional Modules',
        partId: 'part-5',
        partName: 'المنصة والتشغيل',
        sections: [
          {
            id: 'sec-26-1',
            num: '26.1',
            title: 'الوحدات الوظيفية التسع للمنصة',
            bullets: [
              'Module 1 — Data Integration: استقبال وربط البيانات المصرح بها.',
              'Module 2 — Feature Engine: اشتقاق المؤشرات وتغذية Feature Store.',
              'Module 3 — Customer Intelligence Engine: حساب الأبعاد التحليلية.',
              'Module 4 — Persona Engine: تصنيف وتتبع انتقالات الشخصيات.',
              'Module 5 — Scoring & Confidence Engine: حساب المؤشرات ومستوى الثقة.',
              'Module 6 — Decision Engine: تطبيق القواعد والمفاضلة بين الخيارات.',
              'Module 7 — NBCA Service: إصدار التوصية وأكواد التفسير.',
              'Module 8 — Execution Interface: توجيه التوصيات للقنوات والموظفين.',
              'Module 9 — Outcome & Learning Engine: التقاط النتائج وإعادة التعلم.',
            ],
          },
          {
            id: 'sec-26-2',
            num: '26.2',
            title: 'المعمارية الموجهة بالأحداث والذاكرة المؤقتة (Decision Cache & TTL)',
            paragraphs: [
              'تعتمد المنصة على Event-Driven Architecture لإعادة التقييم الفوري عند وقوع أحداث رئيسية (Payment Received, Promise Broken, Dispute Opened, Digital Journey Completed) مع استخدام Decision Cache و TTL لتفادي إعادة الحساب المرهقة دون داعٍ.',
            ],
          },
        ],
      },
      {
        id: 'ch-27',
        num: 27,
        title: 'واجهات المستخدم (الموظف، المشرف، الإدارة)',
        englishTitle: 'User Interfaces & Progressive Disclosure',
        partId: 'part-5',
        partName: 'المنصة والتشغيل',
        sections: [
          {
            id: 'sec-27-1',
            num: '27.1',
            title: 'شاشة موظف التحصيل ومناطقها الخمس',
            bullets: [
              'المنطقة الأولى — Customer Snapshot: الحالة، المنتج، الرصيد، والمرحلة.',
              'المنطقة الثانية — Collection Persona: الشخصية الحالية ودرجة الثقة.',
              'المنطقة الثالثة — Key Scores: عرض المؤشرات الأساسية (Capacity, Willingness, Responsiveness, Complexity).',
              'المنطقة الرابعة — Decision Readiness: جاهزية القرار (DR-1 إلى DR-5).',
              'المنطقة الخامسة — Recommended Action: الإجراء الأنسب، القناة، التوقيت، البديل، وأكواد الأسباب (?Why this action).',
            ],
          },
          {
            id: 'sec-27-2',
            num: '27.2',
            title: 'آلية التجاوز البشري (Human Override) وأكوادها المنظمة',
            paragraphs: [
              'عند عدم موافقة الموظف، يتاح له تسجيل Override مصحوبًا بكود سبب منظم: OR-01 (معلومات جديدة من العميل)، OR-02 (طلب العميل بديلاً محددًا)، OR-03 (بيانات غير دقيقة)، OR-04 (استثناء سياسي)، OR-05 (تقدير مهني تخصصي)، OR-06 (أسباب أخرى).',
            ],
          },
          {
            id: 'sec-27-3',
            num: '27.3',
            title: 'شاشات المشرف والإدارة ومؤشر انتقال الشخصيات (Persona Migration View)',
            paragraphs: [
              'توفر شاشة المشرف Portfolio Intelligence الشاملة، بينما تركز شاشة الإدارة على مخرجات الأعمال (Business Outcomes). ويبرز مؤشر Persona Migration View لقياس مدى تحرك حالات المحفظة إيجابيًا نحو شخصيات أكثر قابلية للحل.',
            ],
          },
        ],
      },
      {
        id: 'ch-28',
        num: 28,
        title: 'التكامل مع الأنظمة وخط تدفق البيانات',
        englishTitle: 'Systems Integration & Data Lineage',
        partId: 'part-5',
        partName: 'المنصة والتشغيل',
        sections: [
          {
            id: 'sec-28-1',
            num: '28.1',
            title: 'مبدأ التكامل قبل الاستبدال (Integrate Before Replace)',
            paragraphs: [
              'تتكامل المنصة مع الأنظمة القائمة (Core Banking, CRM, Collection Systems, Payment Gateways, Digital Banking Channels) عبر API Contracts محكمة، وتوثق أصل كل بيان عبر Data Lineage لضمان موثوقية الحساب.',
            ],
          },
        ],
      },
      {
        id: 'ch-29',
        num: 29,
        title: 'الحوكمة وأمن المعلومات',
        englishTitle: 'Governance, Model Risk & Versioning',
        partId: 'part-5',
        partName: 'المنصة والتشغيل',
        sections: [
          {
            id: 'sec-29-1',
            num: '29.1',
            title: 'عناصر الحوكمة بالتصميم (Governance by Design)',
            bullets: [
              'نموذج الملكية الموزع: Business Owner, Model Owner, Data Owner, Technology Owner, Validation Function, Operations.',
              'إدارة النسخ المستقلة: إصدارات منفصلة لتعريفات Persona والميزات والمؤشرات والقواعد والاستراتيجيات.',
              'سجل النماذج (Model Register) وسجل التدقيق الشامل (Audit Trail).',
              'التحكم في الوصول المعتمد على الأدوار (RBAC) وتقليل البيانات (Data Minimization).',
              'التشفير وحماية البيانات، استمرارية الأعمال، وإمكانية التراجع الفوري للإصدار السابق (Rollback).',
            ],
          },
        ],
      },
      {
        id: 'ch-30',
        num: 30,
        title: 'الخصوصية والعدالة وقابلية التفسير',
        englishTitle: 'Privacy, Fairness & Responsible Personalization',
        partId: 'part-5',
        partName: 'المنصة والتشغيل',
        sections: [
          {
            id: 'sec-30-1',
            num: '30.1',
            title: 'الضوابط الأخلاقية ومستويات التفسير الأربعة',
            paragraphs: [
              'الالتزام بمبدأ الغرض المحدد، استبعاد المتغيرات الحساسة والمتغيرات البديلة غير المبررة (Proxy Variables)، واختبار العدالة (Fairness Testing) لمنع التباينات غير المقصودة.',
              'مستويات التفسير: المستوى الأول (Executive)، المستوى الثاني (Operational)، المستوى الثالث (Analytical)، والمستوى الرابع (Audit).',
            ],
            callout: {
              type: 'rule',
              text: 'Intelligence without Integration = Analysis | Integration without Governance = Risk | Automation without Explainability = Opacity | Personalization without Boundaries = Overreach',
            },
          },
        ],
      },
    ],
  },
];
