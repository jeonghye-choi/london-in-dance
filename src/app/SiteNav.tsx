import { Link } from 'wouter';

export default function SiteNav() {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-col items-end gap-2 text-sm md:gap-3 md:font-light md:leading-6"
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
  );
}
