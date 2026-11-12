import { Link } from 'wouter';

export default function SiteNav() {
  return (
    <header className="flex justify-end px-5 pt-6 md:px-[clamp(1.25rem,5.56vw,5rem)] md:pt-[clamp(1.5rem,9vw,8rem)]">
      <nav
        aria-label="Main navigation"
        className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm md:flex-col md:items-end md:gap-3 md:text-base"
      >
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/whats-on" className="hover:underline">
          What's On
        </Link>
        <Link href="/stories" className="hover:underline">
          Stories
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </nav>
    </header>
  );
}
