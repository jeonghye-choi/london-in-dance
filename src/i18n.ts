import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Header
      'header.title': 'London in Dance',
      'header.lastUpdated': 'Last updated',
      'header.language': 'EN | KO',

      // Hero Section
      'hero.line1': 'Some moments only happen once.',
      'hero.line2': "Don't miss yours.",
      'hero.subtitle': 'Find ballet & contemporary performances in London.',
      'hero.performances': 'performances listed',
      'hero.lastUpdated': 'Last updated',
      'hero.suggestShow': 'Suggest a show',

      // Filter Bar
      'filter.genre': 'Genre',
      'filter.all': 'All',
      'filter.ballet': 'Ballet',
      'filter.contemporary': 'Contemporary',
      'filter.date': 'Date',
      'filter.thisWeek': 'This Week',
      'filter.thisMonth': 'This Month',

      // Performance Card
      'card.bookTickets': 'Book Tickets',

      // Modal
      'modal.close': 'Close',
      'modal.description': 'Description',
      'modal.time': 'Time',
      'modal.venue': 'Venue',
      'modal.dateRange': 'Date Range',
      'modal.genre': 'Genre',
      'modal.price': 'Price',
      'modal.free': 'Free',
      'modal.paid': 'Paid',

      // Footer
      'footer.spotted': 'Spotted a missing performance or an error? DM us on Instagram.',
      'footer.suggestShow': 'Suggest a show',
      'footer.credit': 'by Jeonghye Choi · jenchoi.dev',
      'footer.copyright': '© London in Dance 2026',
    },
  },
  ko: {
    translation: {
      // Header
      'header.title': 'London in Dance',
      'header.lastUpdated': '마지막 업데이트',
      'header.language': 'EN | KO',

      // Hero Section
      'hero.line1': '어떤 순간은 단 한 번만 찾아온다.',
      'hero.line2': '놓치지 마세요.',
      'hero.subtitle': '런던의 발레와 현대무용 공연을 찾아보세요.',
      'hero.performances': '개의 공연이 등록되어 있습니다',
      'hero.lastUpdated': '마지막 업데이트',
      'hero.suggestShow': '공연 제안하기',

      // Filter Bar
      'filter.genre': '장르',
      'filter.all': '전체',
      'filter.ballet': '발레',
      'filter.contemporary': '현대무용',
      'filter.date': '날짜',
      'filter.thisWeek': '이번 주',
      'filter.thisMonth': '이번 달',

      // Performance Card
      'card.bookTickets': '티켓 예약',

      // Modal
      'modal.close': '닫기',
      'modal.description': '설명',
      'modal.time': '시간',
      'modal.venue': '장소',
      'modal.dateRange': '공연 기간',
      'modal.genre': '장르',
      'modal.price': '가격',
      'modal.free': '무료',
      'modal.paid': '유료',

      // Footer
      'footer.spotted': '놓친 공연이나 오류를 발견했나요? 인스타그램에서 DM을 보내주세요.',
      'footer.suggestShow': '공연 제안하기',
      'footer.credit': 'by Jeonghye Choi · jenchoi.dev',
      'footer.copyright': '© London in Dance 2026',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
