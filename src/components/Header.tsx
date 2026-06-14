import { useTranslation } from 'react-i18next';

interface HeaderProps {
  onLanguageChange: (lang: 'en' | 'ko') => void;
  currentLanguage: 'en' | 'ko';
}

export default function Header({ onLanguageChange, currentLanguage }: HeaderProps) {
  const { t } = useTranslation();
  const lastUpdated = new Date().toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="container flex items-center justify-between py-3 md:py-4">
        {/* Site Title */}
        <h1 className="text-xs md:text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'var(--font-family-display)' }}>
          {t('header.title')}
        </h1>

        {/* Last Updated */}
        <p className="text-xs text-gray-600">
          {t('header.lastUpdated')} {lastUpdated}
        </p>
      </div>
    </header>
  );
}
