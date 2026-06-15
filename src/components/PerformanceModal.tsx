import { DEFAULT_IMAGE } from '@/constants';
import { formatDateRange } from '@/lib/formatDate';
import { Performance } from '@/types/performance';
import { X } from 'lucide-react';

interface PerformanceModalProps {
  performance: Performance | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PerformanceModal({
  performance,
  isOpen,
  onClose,
}: PerformanceModalProps) {
  if (!isOpen || !performance) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/50"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.25s ease-out' }}
      />

      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
        style={{ animation: 'fadeIn 0.25s ease-out' }}
      >
        <div
          className="bg-white border border-black max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
          style={{ animation: 'scaleIn 0.25s ease-out' }}
        >
          <div className="sticky top-0 flex justify-end p-4 border-b border-black bg-white">
            <button
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity duration-150"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img
                src={performance.imageUrl ?? DEFAULT_IMAGE}
                alt={performance.title}
                className="w-full h-full object-cover"
                onError={e => {
                  e.currentTarget.src = DEFAULT_IMAGE;
                }}
              />
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-semibold leading-snug mb-2"
                style={{ fontFamily: 'var(--font-family-display)' }}
              >
                {performance.title}
              </h2>
              <span className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium">
                {performance.genre}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 border-t border-b border-black py-6">
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">
                  Venue
                </p>
                <p className="text-base">{performance.venue}</p>
              </div>
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">
                  Date
                </p>
                <p className="text-base">
                  {formatDateRange(
                    performance.startDate,
                    performance.endDate ?? performance.startDate
                  )}
                </p>
              </div>
              {performance.time && (
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">
                    Time
                  </p>
                  <p className="text-base">{performance.time}</p>
                </div>
              )}
              {performance.isFree !== undefined && (
                <div>
                  <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-1">
                    Price
                  </p>
                  <p className="text-base">
                    {performance.isFree ? 'Free' : 'Paid'}
                  </p>
                </div>
              )}
            </div>

            {performance.description && (
              <div>
                <p className="text-xs md:text-sm uppercase tracking-wide text-gray-700 font-medium mb-3">
                  Description
                </p>
                <p className="text-lg leading-relaxed">
                  {performance.description}
                </p>
              </div>
            )}
            <a
              href={performance.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center font-medium text-sm uppercase tracking-wide px-6 py-3 border border-black bg-white text-black hover:bg-black hover:text-white transition-all duration-200 active:scale-95"
              style={{ fontFamily: 'var(--font-family-body)' }}
            >
              Book Tickets
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
