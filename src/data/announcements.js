export const announcements = [
  {
    id: 'exam-schedule-spring',
    category: { en: 'Exams', ar: 'امتحانات' },
    date: '2026-05-01',
    priority: 'high',
    title: {
      en: 'Spring midterm examination schedules published',
      ar: 'نشر جداول امتحانات منتصف الفصل الدراسي الربيعي',
    },
    text: {
      en: 'Midterm schedules for all undergraduate programs are now available on the student services page. Please verify your level and program carefully.',
      ar: 'أصبحت جداول امتحانات منتصف الفصل لجميع برامج البكالوريوس متاحة عبر صفحة خدمات الطلاب. يرجى التحقق من المستوى والبرنامج بعناية.',
    },
  },
  {
    id: 'university-email',
    category: { en: 'IT', ar: 'تقنية' },
    date: '2026-04-18',
    priority: 'high',
    title: {
      en: 'New university email requests open this week',
      ar: 'فتح باب طلبات إنشاء البريد الجامعي هذا الأسبوع',
    },
    text: {
      en: 'Students who still need an official Alexandria University email can submit a request through Student Affairs before Thursday.',
      ar: 'يمكن للطلاب الذين لم يحصلوا بعد على بريد جامعة الإسكندرية الرسمي تقديم الطلب عبر رعاية الطلاب قبل يوم الخميس.',
    },
  },
  {
    id: 'course-withdrawal',
    category: { en: 'Academic', ar: 'أكاديمي' },
    date: '2026-04-05',
    priority: 'normal',
    title: {
      en: 'Course withdrawal deadline reminder',
      ar: 'تذكير بموعد الانسحاب من المقررات',
    },
    text: {
      en: 'The official deadline for course withdrawal requests is approaching. Incomplete forms will not be accepted after the announced date.',
      ar: 'يقترب الموعد الرسمي لطلبات الانسحاب من المقررات. لن تُقبل النماذج غير المكتملة بعد التاريخ المعلن.',
    },
  },
  {
    id: 'lab-maintenance',
    category: { en: 'Facilities', ar: 'مرافق' },
    date: '2026-03-22',
    priority: 'normal',
    title: {
      en: 'Programming labs closed for weekend maintenance',
      ar: 'إغلاق معامل البرمجة للصيانة في عطلة نهاية الأسبوع',
    },
    text: {
      en: 'Labs A and B will be unavailable this Friday and Saturday for network upgrades. Online materials remain accessible.',
      ar: 'لن تكون معامل أ و ب متاحة يومي الجمعة والسبت بسبب ترقية الشبكة. تظل المواد الإلكترونية متاحة.',
    },
  },
  {
    id: 'tuition-installments',
    category: { en: 'Finance', ar: 'مصروفات' },
    date: '2026-03-10',
    priority: 'high',
    title: {
      en: 'Tuition installment request window open',
      ar: 'فتح باب طلبات تقسيط المصروفات',
    },
    text: {
      en: 'Eligible students may apply for tuition installment plans through Student Affairs. Supporting documents are required.',
      ar: 'يمكن للطلاب المستحقين التقدم لخطط تقسيط المصروفات عبر رعاية الطلاب مع إرفاق المستندات المطلوبة.',
    },
  },
];

export const getAnnouncementById = (id) => announcements.find((item) => item.id === id);
