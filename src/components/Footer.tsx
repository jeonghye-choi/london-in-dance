import { INSTAGRAM_URL, LINKEDIN_URL } from '@/constants';

export default function Footer() {
  return (
    <footer className="border-t border-black bg-white">
      <div className="container py-8">
        <div className="flex flex-col gap-2">
          <p className="text-xs text-gray-600">
            Missing a performance or spotted an error? DM me on Instagram
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium underline hover:opacity-70 transition-opacity duration-150"
          >
            Suggest a performance→
          </a>
          <div className="flex gap-4 pt-2">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium hover:opacity-70 transition-opacity duration-150"
            >
              LinkedIn
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium hover:opacity-70 transition-opacity duration-150"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
