import { LAST_UPDATED } from '@/constants';

export default function Header() {
  const formatted = new Date(LAST_UPDATED).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="container">
        <div className="flex items-center justify-between py-2 md:py-3">
          <h1
            className="text-xs md:text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-family-display)' }}
          >
            London in Dance
          </h1>
          <p className="text-xs text-gray-600">Last updated {formatted}</p>
        </div>
      </div>
    </header>
  );
}
