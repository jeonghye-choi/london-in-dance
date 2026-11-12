import type { ReactNode } from 'react';
import EditorialPageLayout from '@/components/EditorialPageLayout';

type AboutPageProps = {
  navigation: ReactNode;
};

export default function AboutPage({ navigation }: AboutPageProps) {
  return (
    <EditorialPageLayout title="ABOUT" navigation={navigation}>
      <section className="grid gap-8 lg:grid-cols-12 lg:gap-x-6">
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl lg:col-span-5">
          Beyond the stage,
          <br />
          beyond the frame.
        </h2>

        <div className="max-w-[55ch] space-y-5 text-base leading-relaxed lg:col-span-5 lg:col-start-7">
          <p>
            The Story Behind is an independent journal about performances,
            exhibitions and the people who make them.
          </p>
          <p>
            Curated by Jeonghye Choi in London, it brings together things to see
            and stories to read before or after you go.
          </p>
          <p className="pt-3 text-xs text-muted">Jeonghye Choi</p>
        </div>
      </section>
    </EditorialPageLayout>
  );
}
