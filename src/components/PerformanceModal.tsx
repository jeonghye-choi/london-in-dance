import { Performance } from '@/data/performances';
import { formatDateRange } from '@/lib/formatDate';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

interface PerformanceModalProps {
  event: Performance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PerformanceModal({ event, isOpen, onClose }: PerformanceModalProps) {
  const { t } = useTranslation();

  if (!isOpen || !event) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.25s ease-out',
        }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{
          animation: 'fadeIn 0.25s ease-out',
        }}
      >
        <div
          className="bg-white border border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          style={{
            animation: 'scaleIn 0.25s ease-out',
          }}
        >
          {/* Close Button */}
          <div className="sticky top-0 flex justify-end p-4 border-b border-black bg-white">
            <button
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity duration-150"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Image */}
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450"%3E%3Crect fill="%23f0f0f0" width="800" height="450"/%3E%3Ctext x="50%25" y="50%25" font-size="32" fill="%23999" text-anchor="middle" dominant-baseline="middle"%3ENo Image%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>

            {/* Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-2" style={{ fontFamily: 'var(--font-family-display)' }}>{event.title}</h2>
              <span className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium">{event.genre}</span>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-6 border-t border-b border-black py-6">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">{t('modal.venue')}</p>
                <p className="text-base">{event.venue}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">{t('modal.dateRange')}</p>
                <p className="text-base">{formatDateRange(event.startDate, event.endDate ?? event.startDate)}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">{t('modal.time')}</p>
                <p className="text-base">{event.time}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">{t('modal.price')}</p>
                <p className="text-base">
                  {event.isFree ? t('modal.free') : t('modal.paid')}
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-3">{t('modal.description')}</p>
              <p className="text-lg leading-relaxed">{event.description}</p>
            </div>

            {/* Book Tickets Button */}
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-medium text-sm uppercase tracking-wide px-6 py-3 border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 active:scale-95"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              {t('card.bookTickets')}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  );
}
