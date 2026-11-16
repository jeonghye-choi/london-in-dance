import type { ReactNode } from 'react';
import { Link } from 'wouter';
import EditorialPageLayout from '@/components/EditorialPageLayout';
import AuguriesOfInnocence from './AuguriesOfInnocence';

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
      {slug === 'auguries-of-innocence' ? (
        <AuguriesOfInnocence />
      ) : (
        <h2 className="text-2xl font-semibold">{slug}</h2>
      )}
      <Link
        href="/stories"
        className="mt-12 inline-block text-sm underline underline-offset-4 sm:mt-16"
      >
        Back to Stories
      </Link>
    </EditorialPageLayout>
  );
}
