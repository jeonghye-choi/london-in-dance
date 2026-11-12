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
      {slug === 'fleurs-du-mal' ? (
        <article>
          <h2 className="text-2xl font-semibold sm:text-3xl">FLEURS du MAL</h2>
          <div className="mt-8 text-sm leading-relaxed text-muted lg:mt-16">
            <p>ABC Gallery, New Zealand</p>
            <time dateTime="2026-03-24">24 March 2026</time>
          </div>

          <div className="mt-8 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:items-end lg:gap-14">
            <figure>
              <img
                src="/images/story-fleurs-du-mal.png"
                alt=""
                className="aspect-[7/10] w-full object-cover"
              />
            </figure>

            <div className="max-w-[60ch] space-y-5 text-base leading-relaxed">
              <p>
                From the doorway, the room looked almost empty. It took a few
                minutes for the smaller details to come into view, and longer
                still to notice how much the light changed from one wall to the
                next.
              </p>
              <p>
                I found myself going back to the first work before leaving.
                Having seen the rest of the room, I stood a little farther away
                this time. A shape I had barely registered on the way in now
                seemed to hold the whole composition together.
              </p>
            </div>
          </div>
          <div className="mt-12 space-y-5 text-base leading-relaxed lg:mt-20">
            <p>
              On the first pass, I had been looking for the flowers. The title
              had given me something to look for, and I took it rather
              literally. I kept picking out shapes that resembled petals, then
              losing them as I moved closer. At arm’s length, what had looked
              like a single dark shape broke into several shades, one of them
              almost violet.
            </p>
            <p>
              There was a bench against the opposite wall. From there I could
              see the whole work and a little of the gallery around it. Someone
              stopped in front of the piece, leaned in to read the label, then
              stepped sideways to let another visitor through. For a moment I
              could see only its upper edge. When the view cleared, my eye went
              straight to a pale patch near the bottom that I hadn’t noticed
              before.
            </p>
            <p>
              I’d read the label on my way in and barely looked at it on my way
              out. By then I was more interested in how far back I needed to
              stand for the violet to disappear again. I tried it twice. The
              second time I stopped halfway across the room, where the colour
              was still there if I knew where to look.
            </p>
          </div>

          <div className="mt-12 space-y-8 border-t border-line/40 pt-8 sm:mt-16 sm:pt-10">
            <blockquote className="max-w-[24ch] text-2xl leading-tight sm:text-3xl">
              <p>
                “A shape I had barely registered on the way in now seemed to
                hold the whole composition together.”
              </p>
            </blockquote>

            <p className="text-base leading-relaxed">
              Outside, I kept thinking about that second look. It was the part
              of the visit I hadn’t planned, and the part I remembered most
              clearly on the way home.
            </p>
          </div>
        </article>
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
