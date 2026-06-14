import { useTranslation } from 'react-i18next';
import { performances } from '@/data/performances';

interface HeroProps {
  onSuggestClick: () => void;
}

export default function Hero({ onSuggestClick }: HeroProps) {
  const { t } = useTranslation();

  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 border-b border-black">
      <div className="container">
        {/* Main Typography - Combined */}
        <div className="max-w-4xl mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'var(--font-family-display)' }}>
            {t('hero.line1')}
          </h2>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: 'var(--font-family-display)' }}>
            {t('hero.line2')}
          </h2>
        </div>

        {/* Subtitle and Stats */}
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-8">
          <div className="space-y-2">
            <p className="text-sm md:text-base text-gray-800">
              {t('hero.subtitle')}
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              <span className="font-semibold">{performances.length}</span> {t('hero.performances')} · 
              <button 
                onClick={onSuggestClick}
                className="ml-2 underline hover:opacity-70 transition-opacity duration-150"
              >
                {t('hero.suggestShow')} →
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
