import { newsImages } from '../assets';

// Bilingual mock news adapted from FCDS / Alexandria University campus updates.

export const news = [
  {
    id: 'qs-ranking-honour',
    category: { en: 'Achievement', ar: 'إنجاز' },
    date: '2026-05-14',
    image: newsImages.qs,
    title: {
      en: 'Alexandria University honors FCDS for QS ranking progress',
      ar: 'تكريم كلية الحاسبات وعلوم البيانات لتقدمها في تصنيف QS',
    },
    excerpt: {
      en: 'The University Council recognized the faculty for advanced positions in the QS World Rankings 2026 in Computing.',
      ar: 'قام مجلس جامعة الإسكندرية بتكريم الكلية لتحقيقها مراكز متقدمة في تصنيف QS العالمي لعام 2026 فى مجال الحاسبات.',
    },
    content: {
      en: 'Alexandria University celebrated the Faculty of Computers and Data Science for its progress in the QS World University Rankings by Subject 2026. The recognition highlights the faculty’s commitment to research quality, graduate readiness, and international visibility in computing and data science.',
      ar: 'احتفلت جامعة الإسكندرية بكلية الحاسبات وعلوم البيانات لتقدمها في تصنيف QS العالمي للتخصصات لعام 2026. يؤكد التكريم التزام الكلية بجودة البحث واستعداد الخريجين والحضور الدولي في مجالات الحوسبة وعلوم البيانات.',
    },
  },
  {
    id: 'theatre-festival',
    category: { en: 'Campus Life', ar: 'حياة جامعية' },
    date: '2026-05-14',
    image: newsImages.theatre,
    title: {
      en: 'Theatre troupe presents “My Children” at the university arts festival',
      ar: 'العرض المسرحي «أبنائي» لفريق مسرح الكلية في مهرجان الفنون',
    },
    excerpt: {
      en: 'The faculty theatre team participated in the university-wide performing arts festival with a new production.',
      ar: 'شارك فريق مسرح الكلية في مهرجان الفنون المسرحية على مستوى الجامعة بعرض جديد.',
    },
    content: {
      en: 'Students from the Faculty of Computers and Data Science presented the play “My Children” as part of Alexandria University’s performing arts festival. The production reflects the faculty’s support for creative student activities alongside academic excellence.',
      ar: 'قدم طلاب كلية الحاسبات وعلوم البيانات العرض المسرحي «أبنائي» ضمن مهرجان الفنون المسرحية بجامعة الإسكندرية، بما يعكس دعم الكلية للأنشطة الإبداعية إلى جانب التميز الأكاديمي.',
    },
  },
  {
    id: 'athletics-win',
    category: { en: 'Sports', ar: 'رياضة' },
    date: '2026-05-14',
    image: newsImages.athletics,
    title: {
      en: 'FCDS students win university athletics championships',
      ar: 'فوز طلاب الحاسبات وعلوم البيانات ببطولة ألعاب القوى',
    },
    excerpt: {
      en: 'Students claimed top places in the 100m sprint and other events organized by student families administration.',
      ar: 'حقق الطلاب مراكز متقدمة في سباق 100م عدو وفعاليات أخرى نظمتها إدارة الأسر الطلابية.',
    },
    content: {
      en: 'FCDS athletes delivered strong performances at the university athletics championship. Standout results included a first-place finish in the women’s 100m sprint and a winning performance in the men’s race, underscoring a vibrant campus sports culture.',
      ar: 'قدم رياضيو الكلية أداءً مميزاً في بطولة ألعاب القوى على مستوى الجامعة، وشملت النتائج المركز الأول في سباق 100م سيدات وفوزاً في سباق الرجال، بما يعكس حيوية النشاط الرياضي داخل الحرم.',
    },
  },
  {
    id: 'quran-competition',
    category: { en: 'Student Activity', ar: 'نشاط طلابي' },
    date: '2026-05-10',
    image: newsImages.art,
    title: {
      en: 'Students earn top ranks in Quran memorization contest',
      ar: 'حصول طلاب الكلية على مراكز متقدمة في مسابقة حفظ القرآن',
    },
    excerpt: {
      en: 'FCDS participants achieved advanced placements in the university Quran memorization and recitation competition.',
      ar: 'حقق مشاركو الكلية مراكز متقدمة في مسابقة حفظ وتسميع القرآن الكريم على مستوى الجامعة.',
    },
    content: {
      en: 'Several students from the Faculty of Computers and Data Science earned advanced placements in Alexandria University’s Quran memorization and recitation competition, reflecting the faculty’s encouragement of cultural and spiritual student engagement.',
      ar: 'حصل عدد من طلاب كلية الحاسبات وعلوم البيانات على مراكز متقدمة في مسابقة حفظ وتسميع القرآن الكريم بجامعة الإسكندرية، بما يعكس تشجيع الكلية على المشاركة الثقافية والروحية للطلاب.',
    },
  },
  {
    id: 'graduation-ceremony',
    category: { en: 'Ceremony', ar: 'حفل' },
    date: '2024-10-31',
    image: newsImages.graduation,
    title: {
      en: 'First official graduation ceremony for the inaugural cohorts',
      ar: 'حفل تخرج أول دفعتين بالكلية',
    },
    excerpt: {
      en: 'The faculty celebrated its first formal graduation for the classes of 2022/2023 and 2023/2024.',
      ar: 'احتفلت الكلية بحفل التخرج الرسمي الأول لدفعتي ٢٠٢٢/٢٠٢٣ و٢٠٢٣/٢٠٢٤.',
    },
    content: {
      en: 'FCDS held its first official graduation ceremony for the pioneering cohorts of 2022/2023 and 2023/2024. Faculty leaders, families, and graduates gathered to mark a milestone in the young faculty’s history.',
      ar: 'أقامت كلية الحاسبات وعلوم البيانات حفل تخرجها الرسمي الأول لدفعتي ٢٠٢٢/٢٠٢٣ و٢٠٢٣/٢٠٢٤، بحضور قيادات الكلية والأسر والخريجين احتفالاً بمحطة فارقة في تاريخ الكلية الفتية.',
    },
  },
  {
    id: 'electronic-payment',
    category: { en: 'Services', ar: 'خدمات' },
    date: '2024-10-30',
    image: newsImages.payment,
    title: {
      en: 'Electronic tuition collection system activated',
      ar: 'تفعيل منظومة التحصيل الإلكتروني',
    },
    excerpt: {
      en: 'Students can now complete fee payments through the university’s electronic collection services.',
      ar: 'يمكن للطلاب الآن سداد المصروفات عبر خدمات التحصيل الإلكتروني بالجامعة.',
    },
    content: {
      en: 'The Faculty of Computers and Data Science announced the activation of the electronic tuition collection system, simplifying payment workflows and aligning campus services with Alexandria University’s digital transformation goals.',
      ar: 'أعلنت كلية الحاسبات وعلوم البيانات تفعيل منظومة التحصيل الإلكتروني للمصروفات، بما يبسّط إجراءات السداد ويتوافق مع أهداف التحول الرقمي لجامعة الإسكندرية.',
    },
  },
];

export const getNewsById = (id) => news.find((item) => item.id === id);
