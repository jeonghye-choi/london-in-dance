import { useTranslation } from 'react-i18next';
import { Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onSuggestClick: () => void;
}

export default function Footer({ onSuggestClick }: FooterProps) {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-black bg-white">
      <div className="container py-8 md:py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-black">
          {/* Left: Suggest Show and Message */}
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600">
              {t('footer.spotted')}
            </p>
            <button
              onClick={onSuggestClick}
              className="text-xs md:text-sm font-medium underline hover:opacity-70 transition-opacity duration-150"
            >
              {t('footer.suggestShow')} →
            </button>
          </div>

          {/* Right: Social Links and INSIGHT Button */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-medium hover:opacity-70 transition-opacity duration-150"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-medium hover:opacity-70 transition-opacity duration-150"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
            <button className="text-xs md:text-sm font-medium border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-150">
              INSIGHT
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="space-y-2 text-xs md:text-sm text-gray-600">
          <p>{t('footer.credit')}</p>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
