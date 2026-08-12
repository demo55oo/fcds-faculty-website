// Academic Programs data — each undergraduate program corresponds to one
// department track at FCDS, presented with degree-level details.

export const programs = [
     {
        id: 'data-science',
        departmentId: 'data-science',
        icon: 'Database',
        color: '#1F7A8C',
        degree: { en: 'B.Sc. in Computer & Data Sciences — Data Science', ar: 'بكالوريوس علوم الحاسب والبيانات — علوم البيانات' },
        duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
        creditHours: '146',
        summary: {
            en: 'A program that builds strong analytical foundations in statistics, visualization, and experimental design to turn raw data into actionable insight.',
            ar: 'برنامج يبني أساسًا تحليليًا قويًا في الإحصاء والتصور وتصميم التجارب لتحويل البيانات الخام إلى رؤى قابلة للتنفيذ.',
        },
        levels: {
            en: [
            { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Data Science'] },
            { level: 'Level 2 — Core', courses: ['Database Systems', 'Numerical Methods', 'Probability & Statistics', 'Data Science Methodologies', 'Advanced Calculus'] },
            { level: 'Level 3 — Specialization', courses: ['Algorithm Design', 'Data Visualization', 'Design and Analysis of Experiments', 'Mobile Programming', 'Stochastic Processes', 'Software Engineering'] },
            ],
            ar: [
            { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في علوم البيانات'] },
            { level: 'المستوى الثاني — الأساسي', courses: ['نظم قواعد البيانات', 'التحليل العددي', 'الاحتمالات والإحصاء', 'منهجيات علوم البيانات', 'التفاضل والتكامل المتقدم'] },
            { level: 'المستوى الثالث — التخصصي', courses: ['تصميم الخوارزميات', 'تصور البيانات', 'تصميم وتحليل التجارب', 'برمجة تطبيقات الهاتف', 'العمليات العشوائية', 'هندسة البرمجيات'] },
            ],
        },
        careerPaths: {
            en: ['Data Scientist', 'Data Analyst', 'Statistical Modeler', 'Research Data Engineer'],
            ar: ['عالم بيانات', 'محلل بيانات', 'نمذجة إحصائية', 'مهندس بيانات بحثي'],
        },
        admission: {
            en: ['General secondary certificate (Mathematics section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
            ar: ['الثانوية العامة (شعبة الرياضة) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
        },
    },




  {
    id: 'business-analytics',
    departmentId: 'business-analytics',
    icon: 'TrendingUp',
    color: '#1F7A8C',
    degree: { en: 'B.Sc. in Computer & Data Sciences — Business Analytics', ar: 'بكالوريوس علوم الحاسب والبيانات — تحليلات الأعمال' },
    duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
    creditHours: '144',
    summary: {
      en: 'A program that blends data analytics with business administration, preparing graduates to turn organizational data into actionable strategy.',
      ar: 'برنامج يجمع بين تحليل البيانات وإدارة الأعمال، ويؤهل الخريجين لتحويل بيانات المؤسسات إلى استراتيجيات قابلة للتنفيذ.',
    },
    levels: {
      en: [
        { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Data Science'] },
        { level: 'Level 2 — Core', courses: ['Database Systems', 'Accounting as an Information System', 'Introduction to Business', 'Numerical Methods', 'Probability & Statistics'] },
        { level: 'Level 3 — Specialization', courses: ['Algorithm Design', 'Business Process Management', 'Data Warehousing', 'Mobile Programming', 'Quantitative Analysis', 'Software Engineering'] },
      ],
      ar: [
        { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في علوم البيانات'] },
        { level: 'المستوى الثاني — الأساسي', courses: ['نظم قواعد البيانات', 'المحاسبة كنظام معلومات', 'مقدمة في إدارة الأعمال', 'التحليل العددي', 'الاحتمالات والإحصاء'] },
        { level: 'المستوى الثالث — التخصصي', courses: ['تصميم الخوارزميات', 'إدارة عمليات الأعمال', 'مستودعات البيانات', 'برمجة تطبيقات الهاتف', 'التحليل الكمي', 'هندسة البرمجيات'] },
      ],
    },
    careerPaths: {
      en: ['Business Intelligence Analyst', 'Data Analyst', 'Financial Systems Analyst', 'Operations Analyst'],
      ar: ['محلل ذكاء الأعمال', 'محلل بيانات', 'محلل نظم مالية', 'محلل عمليات'],
    },
    admission: {
      en: ['General secondary certificate (Mathematics section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
      ar: ['الثانوية العامة (شعبة الرياضة) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
    },
  },
  {
    id: 'intelligent-systems',
    departmentId: 'intelligent-systems',
    icon: 'BrainCircuit',
    color: '#123B5D',
    degree: { en: 'B.Sc. in Computer & Data Sciences — Intelligent Systems', ar: 'بكالوريوس علوم الحاسب والبيانات — النظم الذكية' },
    duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
    creditHours: '148',
    summary: {
      en: 'A program focused on artificial intelligence, machine learning, and intelligent automation for building the next generation of smart systems.',
      ar: 'برنامج يركز على الذكاء الاصطناعي وتعلم الآلة والأتمتة الذكية لبناء الجيل القادم من الأنظمة الذكية.',
    },
    levels: {
      en: [
        { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Data Science'] },
        { level: 'Level 2 — Core', courses: ['Database Systems', 'Numerical Methods', 'Operations Research', 'Probability & Statistics', 'Smart Systems'] },
        { level: 'Level 3 — Specialization', courses: ['Algorithm Design', 'Machine Learning Foundations', 'Data Visualization', 'Software Engineering', 'Mobile Programming'] },
      ],
      ar: [
        { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في علوم البيانات'] },
        { level: 'المستوى الثاني — الأساسي', courses: ['نظم قواعد البيانات', 'التحليل العددي', 'بحوث العمليات', 'الاحتمالات والإحصاء', 'النظم الذكية'] },
        { level: 'المستوى الثالث — التخصصي', courses: ['تصميم الخوارزميات', 'أساسيات تعلم الآلة', 'تصور البيانات', 'هندسة البرمجيات', 'برمجة تطبيقات الهاتف'] },
      ],
    },
    careerPaths: {
      en: ['Machine Learning Engineer', 'AI Research Assistant', 'Data Scientist', 'Automation Engineer'],
      ar: ['مهندس تعلم آلة', 'باحث مساعد في الذكاء الاصطناعي', 'عالم بيانات', 'مهندس أتمتة'],
    },
    admission: {
      en: ['General secondary certificate (Mathematics section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
      ar: ['الثانوية العامة (شعبة الرياضة) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
    },
  },
  {
    id: 'media-analytics',
    departmentId: 'media-analytics',
    icon: 'Video',
    color: '#D4A017',
    degree: { en: 'B.Sc. in Computer & Data Sciences — Media Analytics', ar: 'بكالوريوس علوم الحاسب والبيانات — تحليلات الوسائط' },
    duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
    creditHours: '142',
    summary: {
      en: 'A program that develops skills in analyzing and producing digital media content, combining computational methods with design.',
      ar: 'برنامج يطوّر مهارات تحليل وإنتاج محتوى الوسائط الرقمية، ويجمع بين الأساليب الحاسوبية والتصميم.',
    },
    levels: {
      en: [
        { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Data Science'] },
        { level: 'Level 2 — Core', courses: ['Database Systems', 'Numerical Methods', 'Probability & Statistics', 'Digital Media Fundamentals'] },
        { level: 'Level 3 — Specialization', courses: ['Algorithm Design', 'Computer Audio', 'Image Processing', 'Web Design', 'Mobile Programming', 'Software Engineering'] },
      ],
      ar: [
        { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في علوم البيانات'] },
        { level: 'المستوى الثاني — الأساسي', courses: ['نظم قواعد البيانات', 'التحليل العددي', 'الاحتمالات والإحصاء', 'أساسيات الوسائط الرقمية'] },
        { level: 'المستوى الثالث — التخصصي', courses: ['تصميم الخوارزميات', 'الصوت الحاسوبي', 'معالجة الصور', 'تصميم الويب', 'برمجة تطبيقات الهاتف', 'هندسة البرمجيات'] },
      ],
    },
    careerPaths: {
      en: ['Media Data Analyst', 'UX/UI Developer', 'Digital Content Strategist', 'Multimedia Engineer'],
      ar: ['محلل بيانات وسائط', 'مطور واجهات مستخدم', 'استراتيجي محتوى رقمي', 'مهندس وسائط متعددة'],
    },
    admission: {
      en: ['General secondary certificate (Mathematics section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
      ar: ['الثانوية العامة (شعبة الرياضة) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
    },
  },
  {
    id: 'healthcare-informatics',
    departmentId: 'healthcare-informatics',
    icon: 'HeartPulse',
    color: '#1F7A8C',
    degree: { en: 'B.Sc. in Computer & Data Sciences — Healthcare Informatics', ar: 'بكالوريوس علوم الحاسب والبيانات — معلوماتية الرعاية الصحية' },
    duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
    creditHours: '146',
    summary: {
      en: 'A program applying data science and computing to healthcare challenges, from health information systems to computational drug discovery.',
      ar: 'برنامج يطبّق علوم البيانات والحوسبة على تحديات الرعاية الصحية، من نظم المعلومات الصحية إلى الاكتشاف الدوائي الحاسوبي.',
    },
    levels: {
      en: [
        { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Data Science'] },
        { level: 'Level 3 — Specialization', courses: ['Algorithm Design', 'Health Information Systems', 'Computer-Assisted Drug Discovery', 'Neuroscience and Robotics', 'Mobile Programming', 'Software Engineering'] },
      ],
      ar: [
        { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في علوم البيانات'] },
        { level: 'المستوى الثالث — التخصصي', courses: ['تصميم الخوارزميات', 'نظم المعلومات الصحية', 'الاكتشاف الدوائي بمساعدة الحاسوب', 'علم الأعصاب والروبوتات', 'برمجة تطبيقات الهاتف', 'هندسة البرمجيات'] },
      ],
    },
    careerPaths: {
      en: ['Health Informatics Specialist', 'Clinical Data Analyst', 'Bioinformatics Assistant', 'Digital Health Consultant'],
      ar: ['أخصائي معلوماتية صحية', 'محلل بيانات إكلينيكية', 'مساعد معلوماتية حيوية', 'استشاري صحة رقمية'],
    },
    admission: {
      en: ['General secondary certificate (Mathematics or Science section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
      ar: ['الثانوية العامة (شعبة الرياضة أو العلوم) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
    },
  },
  {
    id: 'cybersecurity',
    departmentId: 'cybersecurity',
    icon: 'ShieldCheck',
    color: '#123B5D',
    degree: { en: 'B.Sc. in Computer & Data Sciences — Cybersecurity', ar: 'بكالوريوس علوم الحاسب والبيانات — الأمن السيبراني' },
    duration: { en: '4 Years (8 Levels)', ar: '4 سنوات (8 مستويات)' },
    creditHours: '144',
    summary: {
      en: 'A program dedicated to protecting digital systems and data, covering cryptography, network security, and secure system design.',
      ar: 'برنامج مخصص لحماية الأنظمة الرقمية والبيانات، ويغطي التشفير وأمن الشبكات وتصميم الأنظمة الآمنة.',
    },
    levels: {
      en: [
        { level: 'Level 1 — Foundation', courses: ['Introduction to Computer Science', 'Programming I', 'Calculus', 'Linear Algebra', 'Introduction to Political Science'] },
        { level: 'Level 2 — Core', courses: ['Database Systems', 'Numerical Methods', 'Probability & Statistics', 'Number Theory', 'Cybersecurity Fundamentals'] },
      ],
      ar: [
        { level: 'المستوى الأول — التأسيسي', courses: ['مقدمة في علوم الحاسب', 'البرمجة 1', 'التفاضل والتكامل', 'الجبر الخطي', 'مقدمة في العلوم السياسية'] },
        { level: 'المستوى الثاني — الأساسي', courses: ['نظم قواعد البيانات', 'التحليل العددي', 'الاحتمالات والإحصاء', 'نظرية الأعداد', 'أساسيات الأمن السيبراني'] },
      ],
    },
    careerPaths: {
      en: ['Security Analyst', 'Penetration Tester', 'Network Security Engineer', 'Security Consultant'],
      ar: ['محلل أمن معلومات', 'مختبر اختراق', 'مهندس أمن شبكات', 'استشاري أمني'],
    },
    admission: {
      en: ['General secondary certificate (Mathematics section) or equivalent', 'Coordination office minimum score for the faculty', 'English proficiency assessment during the first year'],
      ar: ['الثانوية العامة (شعبة الرياضة) أو ما يعادلها', 'الحد الأدنى لمكتب التنسيق الخاص بالكلية', 'تقييم مستوى اللغة الإنجليزية خلال السنة الأولى'],
    },
  },
];

export const getProgramById = (id) => programs.find((p) => p.id === id);