export const events = [
  {
    id: 'icpc-training',
    date: '2026-09-12',
    month: { en: 'SEP', ar: 'سبتمبر' },
    day: '12',
    location: {
      en: 'FCDS Innovation Lab',
      ar: 'معمل الابتكار بالكلية',
    },
    title: {
      en: 'FCDS ICPC team intensive training day',
      ar: 'يوم تدريبي مكثف لفريق ICPC بالكلية',
    },
    excerpt: {
      en: 'Problem-solving workshops and mock contests for the competitive programming team.',
      ar: 'ورش حل مسائل ومسابقات تجريبية لفريق البرمجة التنافسية.',
    },
    content: {
      en: 'Join the FCDS ICPC team for a full training day covering algorithms, data structures, and timed contest practice. New members and experienced solvers are welcome.',
      ar: 'انضم إلى فريق ICPC بالكلية في يوم تدريبي كامل يغطي الخوارزميات وهياكل البيانات والتدريب على المسابقات المحددة بوقت. الباب مفتوح للأعضاء الجدد وذوي الخبرة.',
    },
  },
  {
    id: 'programming-contest',
    date: '2026-10-05',
    month: { en: 'OCT', ar: 'أكتوبر' },
    day: '05',
    location: {
      en: 'Main Computer Labs',
      ar: 'معامل الحاسب الرئيسية',
    },
    title: {
      en: 'Programming Contest 1 — Faculty round',
      ar: 'مسابقة البرمجة 1 — الجولة على مستوى الكلية',
    },
    excerpt: {
      en: 'An internal contest to select representatives for university and regional competitions.',
      ar: 'مسابقة داخلية لاختيار ممثلي الكلية في المسابقات الجامعية والإقليمية.',
    },
    content: {
      en: 'Programming Contest 1 brings together undergraduate teams for a timed challenge. Winners may join advanced coaching tracks and represent FCDS in broader contests.',
      ar: 'تجمع مسابقة البرمجة 1 فرق البكالوريوس في تحدٍ محدد بوقت. قد ينضم الفائزون إلى مسارات تدريب متقدمة ويمثلون الكلية في مسابقات أوسع.',
    },
  },
  {
    id: 'self-seminars-forum',
    date: '2026-11-18',
    month: { en: 'NOV', ar: 'نوفمبر' },
    day: '18',
    location: {
      en: 'Faculty Conference Hall',
      ar: 'قاعة مؤتمرات الكلية',
    },
    title: {
      en: 'Self-Led Seminars Forum',
      ar: 'ملتقى الندوات الذاتية',
    },
    excerpt: {
      en: 'Student-led talks celebrating research ideas, soft skills, and community initiatives.',
      ar: 'ندوات يقودها الطلاب للاحتفاء بالأفكار البحثية والمهارات الشخصية والمبادرات المجتمعية.',
    },
    content: {
      en: 'Following recent podium finishes at the university Self-Led Seminars competition, FCDS hosts a campus forum where students present projects and receive mentor feedback.',
      ar: 'بعد المراكز المتقدمة في مسابقة ملتقى الندوات الذاتية على مستوى الجامعة، تستضيف الكلية منتدى داخل الحرم يعرض فيه الطلاب مشروعاتهم ويتلقون ملاحظات المشرفين.',
    },
  },
  {
    id: 'career-day',
    date: '2026-12-02',
    month: { en: 'DEC', ar: 'ديسمبر' },
    day: '02',
    location: {
      en: 'Campus Courtyard',
      ar: 'ساحة الحرم الجامعي',
    },
    title: {
      en: 'FCDS Career & Internship Day',
      ar: 'يوم التوظيف والتدريب بالكلية',
    },
    excerpt: {
      en: 'Meet technology employers, explore internships, and get CV reviews from mentors.',
      ar: 'التقِ بشركات التكنولوجيا واستكشف فرص التدريب واحصل على مراجعة للسيرة الذاتية.',
    },
    content: {
      en: 'Career Day connects FCDS students with industry partners across data, software, cybersecurity, and digital media. Bring your CV and prepare a short introduction about your track.',
      ar: 'يربط يوم التوظيف طلاب الكلية بشركاء الصناعة في مجالات البيانات والبرمجيات والأمن السيبراني والوسائط الرقمية. أحضر سيرتك الذاتية وجهّز تعريفاً مختصراً بمسارك.',
    },
  },
];

export const getEventById = (id) => events.find((item) => item.id === id);
