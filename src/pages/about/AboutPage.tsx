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
            The Story Behind is an independent journal about art, culture, and
            the stories behind them.
          </p>
          <p>
            Based in London, it brings together performances worth discovering
            and{' '}
            <span className="font-semibold text-forest underline decoration-forest/40 decoration-1 underline-offset-4">
              personal thoughts on the art I experience.
            </span>
          </p>
          <p>
            There's more to art than what we see on stage or in a gallery.
            Behind every work are people, ideas, and creative processes worth
            exploring.
          </p>
          <p>
            The Story Behind is also a space to{' '}
            <span className="font-semibold text-forest underline decoration-forest/40 decoration-1 underline-offset-4">
              share artists' work, tell their stories, and help more people
              discover what they create.
            </span>
          </p>
          <section className="space-y-3 pt-6">
            <h3 className="text-lg font-semibold">About the editor</h3>
            <p>
              I'm Jeonghye Choi, a front-end developer based in London with a
              love of dance and the performing arts.
            </p>
            <p>
              I started The Story Behind to share the performances and
              exhibitions I experience, the stories I discover, and the thoughts
              they leave me with.
            </p>
            <p>
              I'm also interested in bringing art and technology together,
              exploring new ways for people to experience and connect with art.
            </p>
          </section>

          <section className="space-y-3 pt-6">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p>
              Are you an artist working on a performance, exhibition, or
              creative project? I'd love to hear about it.
            </p>
            <p>
              I'm open to artist features, creative collaborations, and digital
              programmes that help bring your work to more people.
            </p>
            <p>
              For performance or exhibition invitations, collaboration ideas, or
              enquiries about supporting the journal, feel free to get in touch.
            </p>
            <p>I'm also open to front-end development opportunities.</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-forest underline-offset-4">
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
                  Email
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </EditorialPageLayout>
  );
}
