import { INSTAGRAM_URL, LINKEDIN_URL } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8 pb-8 border-b border-black">
          <div className="space-y-3">
            <p className="text-xs md:text-sm text-gray-600">
              Spotted a missing performance or an error? DM us on Instagram.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium underline hover:opacity-70 transition-opacity duration-150"
            >
              Suggest a show →
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:opacity-70 transition-opacity duration-150"
            >
              LinkedIn
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-medium hover:opacity-70 transition-opacity duration-150"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="space-y-2 text-xs md:text-sm text-gray-600">
          <p>by Jeonghye Choi · jenchoi.dev</p>
          <p>© London in Dance 2026</p>
        </div>
      </div>
    </footer>
  );
}
