import { Link } from 'wouter';

type StoryDetailPageProps = {
  slug: string;
};

export default function StoryDetailPage({ slug }: StoryDetailPageProps) {
  return (
    <main className="container py-12">
      <Link href="/stories" className="underline">
        Back to Stories
      </Link>
      <h1 className="mt-4 text-3xl font-bold">{slug}</h1>
    </main>
  );
}
