import type { ReactNode } from 'react';
import { Link } from 'wouter';
import EditorialPageLayout from '@/components/EditorialPageLayout';

type StoryDetailPageProps = {
  slug: string;
  navigation: ReactNode;
};

export default function StoryDetailPage({
  slug,
  navigation,
}: StoryDetailPageProps) {
  return (
    <EditorialPageLayout title="STORIES IN ART" navigation={navigation}>
      <Link href="/stories" className="underline">
        Back to Stories
      </Link>
      <h2 className="mt-4 text-3xl font-bold">{slug}</h2>
    </EditorialPageLayout>
  );
}
