import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'wouter';
import EditorialPageLayout from '@/components/EditorialPageLayout';

const galleryCards = [
  {
    title: 'FLEURS du MAL',
    slug: 'fleurs-du-mal',
    image: '/images/story-fleurs-du-mal.png',
  },
  {
    title: 'After the Curtain',
  },
  {
    title: 'A Room for Looking',
  },
  {
    title: 'Between Acts',
  },
  {
    title: 'The Shape of Silence',
  },
  {
    title: 'In Rehearsal',
  },
  {
    title: 'An Evening at the Gallery',
  },
  {
    title: 'Notes on Movement',
  },
  {
    title: 'The Space Between',
  },
  {
    title: 'After the Exhibition',
  },
];

const hoverPalettes = [
  '[@media(hover:hover)]:bg-[#A76C56] [@media(hover:hover)]:text-[#171210]',
  '[@media(hover:hover)]:bg-[#CDD2BD] [@media(hover:hover)]:text-[#252C22]',
  '[@media(hover:hover)]:bg-[#3A4C5B] [@media(hover:hover)]:text-[#F5EFE6]',
  '[@media(hover:hover)]:bg-[#DBBF91] [@media(hover:hover)]:text-[#36281C]',
  '[@media(hover:hover)]:bg-[#694A56] [@media(hover:hover)]:text-[#F7EDE9]',
];

for (let index = hoverPalettes.length - 1; index > 0; index--) {
  const other = Math.floor(Math.random() * (index + 1));
  [hoverPalettes[index], hoverPalettes[other]] = [
    hoverPalettes[other],
    hoverPalettes[index],
  ];
}

const dummyImages = Array.from(
  { length: 7 },
  (_, index) => `/images/dummy${index + 1}.png`
);

for (let index = dummyImages.length - 1; index > 0; index--) {
  const other = Math.floor(Math.random() * (index + 1));
  [dummyImages[index], dummyImages[other]] = [
    dummyImages[other],
    dummyImages[index],
  ];
}

function gridArea(slot: number, columns: number) {
  return `${Math.floor((slot - 1) / columns) + 1} / ${((slot - 1) % columns) + 1}`;
}

function previewCards(titles: string[]) {
  return titles.map(title => ({
    title,
    slug: undefined,
    image: undefined,
  }));
}

const monthlyGalleries = [
  {
    month: '2026-03',
    title: 'MARCH, 2026',
    cards: galleryCards,
    mobile: [1, 3, 5, 6, 7, 8, 11, 12, 13, 15],
    desktop: [1, 2, 6, 7, 8, 10, 11, 12, 14, 15],
    mobileMarkers: [2, 9, 14],
    desktopMarkers: [3, 9, 13],
  },
  {
    month: '2026-02',
    title: 'FEBRUARY, 2026',
    mobile: [2, 3, 4, 6, 8, 9, 10, 11],
    desktop: [2, 4, 5, 6, 7, 9, 12, 14],
    mobileMarkers: [5, 7],
    desktopMarkers: [3, 8, 13],
    cards: previewCards([
      'A Study in Light',
      'Still in Motion',
      'The Quiet Stage',
      'Looking Closer',
      'An Unfinished Gesture',
      'After the Applause',
      'A Place to Pause',
      'In the Wings',
    ]),
  },
  {
    month: '2026-01',
    title: 'JANUARY, 2026',
    mobile: [1, 2, 5, 6, 7, 9, 11],
    desktop: [1, 3, 4, 7, 9, 10, 13],
    mobileMarkers: [3, 8, 10],
    desktopMarkers: [2, 8, 12],
    cards: previewCards([
      'A New Season',
      'Soft Edges',
      'The Empty Room',
      'At the Threshold',
      'Ways of Seeing',
      'Small Observations',
      'In Good Company',
    ]),
  },
];

type StoriesPageProps = {
  navigation: ReactNode;
};

export default function StoriesPage({ navigation }: StoriesPageProps) {
  return (
    <EditorialPageLayout title="STORIES IN ART" navigation={navigation}>
      {monthlyGalleries.map(
        (
          {
            month,
            title,
            cards,
            mobile,
            desktop,
            mobileMarkers,
            desktopMarkers,
          },
          monthIndex
        ) => {
          const precedingCards = monthlyGalleries
            .slice(0, monthIndex)
            .reduce((total, gallery) => total + gallery.cards.length, 0);
          const markers = [
            ...mobileMarkers.map(slot => ({
              area: gridArea(slot, 3),
              count: mobile.filter(cardSlot => cardSlot < slot).length,
              visibility: 'lg:hidden',
            })),
            ...desktopMarkers.map(slot => ({
              area: gridArea(slot, 5),
              count: desktop.filter(cardSlot => cardSlot < slot).length,
              visibility: 'hidden lg:block',
            })),
          ];

          return (
            <section
              key={month}
              aria-labelledby={`stories-${month}`}
              className="not-first:mt-12 lg:not-first:mt-24"
            >
              <h2
                id={`stories-${month}`}
                className="mb-4 text-xs font-medium tracking-wide text-muted"
              >
                <time dateTime={month}>{title}</time>
              </h2>

              <ul className="grid grid-cols-3 gap-x-1.5 gap-y-3 sm:gap-x-2 sm:gap-y-4 lg:grid-cols-5 lg:gap-x-4">
                {cards.map(({ title, slug, image }, index) => (
                  <li
                    key={title}
                    className="group relative min-w-0 [grid-area:var(--mobile-area)] lg:[grid-area:var(--desktop-area)]"
                    style={
                      {
                        '--mobile-area': gridArea(mobile[index], 3),
                        '--desktop-area': gridArea(desktop[index], 5),
                      } as CSSProperties
                    }
                  >
                    <img
                      src={
                        image ??
                        dummyImages[
                          (index + monthIndex * 2) % dummyImages.length
                        ]
                      }
                      alt=""
                      loading="lazy"
                      className="aspect-[4/5] w-full bg-ink/15 object-cover"
                    />
                    {slug && (
                      <Link
                        href={`/stories/${slug}`}
                        className="absolute inset-0"
                        aria-label={title}
                      />
                    )}
                    <h3
                      className={`pointer-events-none absolute inset-x-0 bottom-0 bg-paper px-1.5 py-1.5 text-xs leading-tight font-semibold break-words text-ink sm:px-3 sm:py-2 sm:text-sm [@media(hover:hover)]:inset-0 [@media(hover:hover)]:p-3 [@media(hover:hover)]:text-base [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:transition-opacity lg:[@media(hover:hover)]:text-xl ${hoverPalettes[index % hoverPalettes.length]}`}
                    >
                      {title}
                    </h3>
                  </li>
                ))}
                {markers.map(({ area, count, visibility }) => (
                  <li
                    key={`${visibility}-${area}`}
                    aria-hidden="true"
                    style={{ gridArea: area }}
                    className={`self-start px-1 py-0.5 text-[10px] tabular-nums text-muted ${visibility}`}
                  >
                    ({String(precedingCards + count).padStart(2, '0')})
                  </li>
                ))}
              </ul>
            </section>
          );
        }
      )}
    </EditorialPageLayout>
  );
}
