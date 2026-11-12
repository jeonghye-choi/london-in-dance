import { Link } from 'wouter';

export default function SiteNav() {
  return (
    <header className="border-b border-black">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-4">
        <Link href="/" className="font-bold">
          The Story Behind
        </Link>

        <nav aria-label="Main navigation" className="flex flex-wrap gap-4">
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
      </div>
    </header>
  );
}
