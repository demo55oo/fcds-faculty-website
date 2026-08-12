// Departments data — modeled after the real academic departments of the
// Faculty of Computer and Data Science (FCDS), Alexandria University.
// Content is bilingual mock data relevant to the faculty's actual 6 tracks.

export const departments = [
  {
        id: 'data-science',
        icon: 'Database',
        color: '#1F7A8C',
        established: 2021,
        name: { en: 'Data Science', ar: 'علوم البيانات' },
        tagline: {
            en: 'Extracting knowledge and value from complex data',
            ar: 'استخلاص المعرفة والقيمة من البيانات المعقدة',
        },
        description: {
            en: 'The Data Science department builds a strong foundation in statistical modeling, data visualization, and experimental design. Students learn to explore, analyze, and communicate insights from complex datasets, preparing them for research and analytical roles across all industries.',
            ar: 'يبني قسم علوم البيانات أساسًا قويًا في النمذجة الإحصائية وتصور البيانات وتصميم التجارب. يتعلم الطلاب استكشاف وتحليل البيانات المعقدة واستخلاص رؤى منها، مما يؤهلهم لأدوار بحثية وتحليلية في مختلف الصناعات.',
        },
        focusAreas: {
            en: ['Data Visualization', 'Statistical Modeling', 'Data Science Methodologies', 'Experimental Design'],
            ar: ['تصور البيانات', 'النمذجة الإحصائية', 'منهجيات علوم البيانات', 'تصميم التجارب'],
        },
        coreCourses: {
            en: ['Data Science Methodologies', 'Advanced Calculus', 'Data Visualization', 'Design and Analysis of Experiments', 'Stochastic Processes', 'Algorithm Design'],
            ar: ['منهجيات علوم البيانات', 'التفاضل والتكامل المتقدم', 'تصور البيانات', 'تصميم وتحليل التجارب', 'العمليات العشوائية', 'تصميم الخوارزميات'],
        },
        stats: { students: '190+', faculty: '13', courses: '25' },
    },

  {
    id: 'business-analytics',
    icon: 'TrendingUp',
    color: '#1F7A8C',
    established: 2021,
    name: { en: 'Business Analytics', ar: 'تحليلات الأعمال' },
    tagline: {
      en: 'Turning business data into strategic decisions',
      ar: 'تحويل بيانات الأعمال إلى قرارات استراتيجية',
    },
    description: {
      en: 'The Business Analytics department prepares students to collect, model, and interpret business data in order to support strategic decision-making. Students learn to combine analytical thinking with real business processes, from accounting information systems to data warehousing and quantitative analysis.',
      ar: 'يُعِدّ قسم تحليلات الأعمال الطلاب لجمع بيانات الأعمال ونمذجتها وتفسيرها لدعم اتخاذ القرارات الاستراتيجية. يتعلم الطلاب الجمع بين التفكير التحليلي وعمليات الأعمال الحقيقية، بدءًا من نظم المعلومات المحاسبية وحتى مستودعات البيانات والتحليل الكمي.',
    },
    focusAreas: {
      en: ['Business Process Analysis', 'Data Warehousing', 'Quantitative Analysis', 'Financial Information Systems'],
      ar: ['تحليل عمليات الأعمال', 'مستودعات البيانات', 'التحليل الكمي', 'نظم المعلومات المالية'],
    },
    coreCourses: {
      en: ['Introduction to Business', 'Accounting as an Information System', 'Database Systems', 'Business Process Management', 'Data Warehousing', 'Software Engineering'],
      ar: ['مقدمة في إدارة الأعمال', 'المحاسبة كنظام معلومات', 'نظم قواعد البيانات', 'إدارة عمليات الأعمال', 'مستودعات البيانات', 'هندسة البرمجيات'],
    },
    stats: { students: '180+', faculty: '12', courses: '24' },
  },


  {
    id: 'intelligent-systems',
    icon: 'BrainCircuit',
    color: '#123B5D',
    established: 2021,
    name: { en: 'Intelligent Systems', ar: 'النظم الذكية' },
    tagline: {
      en: 'Building the intelligent technologies of tomorrow',
      ar: 'بناء التقنيات الذكية لمستقبل أفضل',
    },
    description: {
      en: 'The Intelligent Systems department focuses on artificial intelligence, machine learning, and smart automation. Graduates are equipped to design intelligent algorithms that improve efficiency across industries, from smart systems and operations research to advanced data-driven modeling.',
      ar: 'يركز قسم النظم الذكية على الذكاء الاصطناعي وتعلم الآلة والأتمتة الذكية. يتم تأهيل الخريجين لتصميم خوارزميات ذكية تُحسّن الكفاءة في مختلف الصناعات، بدءًا من النظم الذكية وبحوث العمليات وحتى النمذجة المتقدمة القائمة على البيانات.',
    },
    focusAreas: {
      en: ['Machine Learning', 'Smart Systems', 'Operations Research', 'Algorithm Design'],
      ar: ['تعلم الآلة', 'النظم الذكية', 'بحوث العمليات', 'تصميم الخوارزميات'],
    },
    coreCourses: {
      en: ['Smart Systems', 'Operations Research', 'Database Systems', 'Numerical Methods', 'Algorithm Design', 'Probability & Statistics'],
      ar: ['النظم الذكية', 'بحوث العمليات', 'نظم قواعد البيانات', 'التحليل العددي', 'تصميم الخوارزميات', 'الاحتمالات والإحصاء'],
    },
    stats: { students: '210+', faculty: '15', courses: '26' },
  },


  {
    id: 'media-analytics',
    icon: 'Video',
    color: '#D4A017',
    established: 2021,
    name: { en: 'Media Analytics', ar: 'تحليلات الوسائط' },
    tagline: {
      en: 'Extracting insight from images, audio, and digital media',
      ar: 'استخلاص المعرفة من الصور والصوت والوسائط الرقمية',
    },
    description: {
      en: 'The Media Analytics department trains students to analyze and process digital media — images, audio, and video — using computational tools. The program blends creativity with technical depth, covering computer audio, image processing, and modern web and mobile design.',
      ar: 'يؤهل قسم تحليلات الوسائط الطلاب لتحليل ومعالجة الوسائط الرقمية من صور وصوت وفيديو باستخدام الأدوات الحاسوبية. يجمع البرنامج بين الإبداع والعمق التقني، ويغطي معالجة الصوت الحاسوبي، ومعالجة الصور، وتصميم الويب والتطبيقات الحديثة.',
    },
    focusAreas: {
      en: ['Image Processing', 'Computer Audio', 'Web & Mobile Design', 'Digital Content Analysis'],
      ar: ['معالجة الصور', 'الصوت الحاسوبي', 'تصميم الويب والتطبيقات', 'تحليل المحتوى الرقمي'],
    },
    coreCourses: {
      en: ['Image Processing', 'Computer Audio', 'Web Design', 'Mobile Programming', 'Algorithm Design', 'Software Engineering'],
      ar: ['معالجة الصور', 'الصوت الحاسوبي', 'تصميم الويب', 'برمجة تطبيقات الهاتف', 'تصميم الخوارزميات', 'هندسة البرمجيات'],
    },
    stats: { students: '140+', faculty: '10', courses: '22' },
  },


  {
    id: 'healthcare-informatics',
    icon: 'HeartPulse',
    color: '#1F7A8C',
    established: 2021,
    name: { en: 'Healthcare Informatics & Data Analytics', ar: 'معلوماتية الرعاية الصحية وتحليل البيانات' },
    tagline: {
      en: 'Using data to advance healthcare outcomes',
      ar: 'توظيف البيانات لتطوير نتائج الرعاية الصحية',
    },
    description: {
      en: 'The Healthcare Informatics department prepares students to apply data science to medical and healthcare challenges. Coursework spans health information systems, computer-assisted drug discovery, and the intersection of neuroscience with robotics and intelligent systems.',
      ar: 'يُعِدّ قسم معلوماتية الرعاية الصحية الطلاب لتطبيق علوم البيانات على تحديات الرعاية الصحية والطبية. تشمل المقررات نظم المعلومات الصحية، والاكتشاف الدوائي بمساعدة الحاسوب، والتقاطع بين علم الأعصاب والروبوتات والنظم الذكية.',
    },
    focusAreas: {
      en: ['Health Information Systems', 'Computer-Assisted Drug Discovery', 'Neuroscience & Robotics', 'Medical Data Analysis'],
      ar: ['نظم المعلومات الصحية', 'الاكتشاف الدوائي بمساعدة الحاسوب', 'علم الأعصاب والروبوتات', 'تحليل البيانات الطبية'],
    },
    coreCourses: {
      en: ['Health Information Systems', 'Computer-Assisted Drug Discovery', 'Neuroscience and Robotics', 'Algorithm Design', 'Mobile Programming', 'Software Engineering'],
      ar: ['نظم المعلومات الصحية', 'الاكتشاف الدوائي بمساعدة الحاسوب', 'علم الأعصاب والروبوتات', 'تصميم الخوارزميات', 'برمجة تطبيقات الهاتف', 'هندسة البرمجيات'],
    },
    stats: { students: '120+', faculty: '9', courses: '20' },
  },


  {
    id: 'cybersecurity',
    icon: 'ShieldCheck',
    color: '#123B5D',
    established: 2021,
    name: { en: 'Cybersecurity', ar: 'الأمن السيبراني' },
    tagline: {
      en: 'Protecting data and systems in a digital world',
      ar: 'حماية البيانات والأنظمة في عالم رقمي',
    },
    description: {
      en: 'The Cybersecurity department equips students with the skills to defend data and information systems against evolving digital threats. The curriculum covers number theory, applied cryptography, network security, and the foundations of secure system design.',
      ar: 'يزوّد قسم الأمن السيبراني الطلاب بالمهارات اللازمة لحماية البيانات ونظم المعلومات من التهديدات الرقمية المتطورة. تغطي المقررات نظرية الأعداد، وعلم التشفير التطبيقي، وأمن الشبكات، وأساسيات تصميم الأنظمة الآمنة.',
    },
    focusAreas: {
      en: ['Network Security', 'Applied Cryptography', 'Number Theory', 'Secure System Design'],
      ar: ['أمن الشبكات', 'التشفير التطبيقي', 'نظرية الأعداد', 'تصميم الأنظمة الآمنة'],
    },
    coreCourses: {
      en: ['Cybersecurity Fundamentals', 'Number Theory', 'Database Systems', 'Numerical Methods', 'Probability & Statistics', 'Network Security'],
      ar: ['أساسيات الأمن السيبراني', 'نظرية الأعداد', 'نظم قواعد البيانات', 'التحليل العددي', 'الاحتمالات والإحصاء', 'أمن الشبكات'],
    },
    stats: { students: '160+', faculty: '11', courses: '23' },
  },
];

export const getDepartmentById = (id) => departments.find((d) => d.id === id);