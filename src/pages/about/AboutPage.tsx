import type { ReactNode } from 'react';
import EditorialPageLayout from '@/components/EditorialPageLayout';
import { INSTAGRAM_URL, LINKEDIN_URL } from '@/constants';

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
          <h3 className="text-lg font-semibold">
            An independently curated art journal.
          </h3>
          <p>
            The Story Behind is an independent journal of art, culture, and the
            stories behind them.
          </p>
          <p>
            Based in London, it brings together performances worth discovering
            and personal reflections on art experienced firsthand.
          </p>
          <p>
            Beyond what we see on stage or in a gallery, there's so much more to
            explore — the people, ideas, and creative processes behind the work,
            and the thoughts and feelings it leaves with us.
          </p>
          <section className="space-y-3 pt-6">
            <h3 className="text-lg font-semibold">About the editor</h3>
            <p>
              I’m Jeonghye Choi, a front-end developer based in London with a
              love of dance. I started The Story Behind as a place to write
              about the work I see and the questions I leave with.
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p>
              For creative collaborations, exhibition or performance
              invitations, or to discuss supporting the journal, I’d love to
              hear from you.
            </p>
            <p>I’m also open to front-end development opportunities.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm underline-offset-4">
              <li>
                <a href={INSTAGRAM_URL} className="underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href={LINKEDIN_URL} className="underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:rojenna.lev@gmail.com" className="underline">
                  rojenna.lev@gmail.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </EditorialPageLayout>
  );
}
