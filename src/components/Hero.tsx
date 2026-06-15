import { INSTAGRAM_URL } from '@/constants';
import { performances } from '@/data/performances';

export default function Hero() {
  return (
    <section className="pt-20 pb-10 md:pt-24 pb-4 md:pb-6">
      <div className="container">
        <div className="max-w-4xl mb-3 md:mb-4">
          <h2
            className="text-2xl md:text-3xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            See What Moves You.
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 md:gap-8">
          <div className="space-y-2">
            <p className="text-sm md:text-base text-gray-800">
              All ballet and contemporary performances in London, in one place.
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              <span className="font-semibold">{performances.length}</span>
              performances listed
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 underline hover:opacity-70 transition-opacity duration-150"
              >
                Suggest a performance →
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
