import fcdsLogo from './logos/fcds-logo.jpg';
import alexuLogo from './logos/alexu-logo.png';
import deanPhoto from './images/dean-magda.jpg';
import campusFootball from './campus/football.jpg';
import campusIcpc from './campus/icpc.jpg';
import campusProgramming from './campus/programming-contest.jpg';
import campusStudentUnion from './campus/student-union.jpg';
import newsTheatre from './images/news-theatre.jpg';
import newsArt from './images/news-art.jpg';
import newsQs from './images/news-qs.jpg';
import newsAthletics from './images/news-athletics.jpg';
import newsGraduation from './images/news-graduation.jpg';
import newsPayment from './images/news-payment.jpg';
import stockStudents from './stock/students-study.jpg';
import stockCoding from './stock/coding-lab.jpg';
import stockData from './stock/data-science.jpg';

export const logos = {
  fcds: fcdsLogo,
  alexu: alexuLogo,
};

export const images = {
  dean: deanPhoto,
};

export const newsImages = {
  theatre: newsTheatre,
  art: newsArt,
  qs: newsQs,
  athletics: newsAthletics,
  graduation: newsGraduation,
  payment: newsPayment,
};

export const stock = {
  students: stockStudents,
  coding: stockCoding,
  data: stockData,
};

export const heroSlides = [
  { src: campusFootball, alt: { en: 'Campus life at FCDS', ar: 'الحياة الجامعية في الكلية' } },
  { src: campusIcpc, alt: { en: 'Competitive programming culture', ar: 'ثقافة البرمجة التنافسية' } },
  { src: campusProgramming, alt: { en: 'Student competitions', ar: 'مسابقات الطلاب' } },
  { src: campusStudentUnion, alt: { en: 'Student community', ar: 'مجتمع الطلاب' } },
];

export const highlightCards = [
  {
    id: 'collaborative',
    image: stockStudents,
    title: {
      en: 'Collaborative learning',
      ar: 'تعلم تعاوني',
    },
    text: {
      en: 'Project-based courses that build teamwork, communication, and real problem-solving habits.',
      ar: 'مقررات قائمة على المشروعات تبني روح الفريق والتواصل وحل المشكلات الواقعية.',
    },
  },
  {
    id: 'labs',
    image: stockCoding,
    title: {
      en: 'Modern computing labs',
      ar: 'معامل حوسبة حديثة',
    },
    text: {
      en: 'Hands-on practice in programming, systems, and applied digital skills across every track.',
      ar: 'تدريب عملي في البرمجة والأنظمة والمهارات الرقمية التطبيقية عبر كل المسارات.',
    },
  },
  {
    id: 'data',
    image: stockData,
    title: {
      en: 'Data-driven futures',
      ar: 'مستقبل قائم على البيانات',
    },
    text: {
      en: 'Programs designed around analytics, intelligence, security, media, and healthcare informatics.',
      ar: 'برامج مصممة حول التحليلات والذكاء والأمن والوسائط ومعلوماتية الرعاية الصحية.',
    },
  },
];
