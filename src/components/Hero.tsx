import { INSTAGRAM_URL } from '@/constants';
import { performances } from '@/data/performances';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 border-b border-black">
      <div className="container">
        <div className="max-w-4xl mb-6 md:mb-8">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Some moments only happen once.
          </h2>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            Don't miss yours.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-8">
          <div className="space-y-2">
            <p className="text-sm md:text-base text-gray-800">
              Find ballet &amp; contemporary performances in London.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              <span className="font-semibold">{performances.length}</span>{' '}
              performances listed ·{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:opacity-70 transition-opacity duration-150"
              >
                Suggest a show →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
