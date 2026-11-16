import type { CSSProperties, ReactNode } from 'react';
import { Link } from 'wouter';
import EditorialPageLayout from '@/components/EditorialPageLayout';

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

function gridArea(slot: number, columns: number) {
  return `${Math.floor((slot - 1) / columns) + 1} / ${((slot - 1) % columns) + 1}`;
}

type GalleryCard = {
  title: string;
  slug?: string;
  image?: string;
};

const yearlyGalleries: { year: string; cards: GalleryCard[] }[] = [
  {
    year: '2026',
    cards: [
      {
        title: 'TELLUS',
        image: '/images/story-tellus.webp',
      },
      {
        title: 'Auguries of Innocence',
        slug: 'auguries-of-innocence',
        image: '/images/story-auguries-of-innocence.webp',
      },
      {
        title: 'Swan Lake',
        image: '/images/story-swan-lake-georgia.webp',
      },
      {
        title: 'DREAMS',
        image: '/images/story-dreams.webp',
      },
      {
        title: 'Peter Darrell’s Swan Lake Act II',
        image: '/images/story-swan-lake-images-ballet.webp',
      },
      {
        title: 'Kinky Boots the Musical',
        image: '/images/story-kinky-boots.webp',
      },
    ],
  },
];

type StoriesPageProps = {
  navigation: ReactNode;
};

export default function StoriesPage({ navigation }: StoriesPageProps) {
  return (
    <EditorialPageLayout title="STORIES IN ART" navigation={navigation}>
      {yearlyGalleries.map(({ year, cards }, yearIndex) => {
        const mobile = cards.map((_, index) => {
          const row = Math.floor(index / 2);
          const column = index % 2;
          const emptyColumn = (row + 1) % 3;
          return row * 3 + column + 1 + Number(column >= emptyColumn);
        });
        const desktop = cards.map(
          (_, index) => index + 1 + Math.floor(index / 3)
        );
        const mobileMarkers = Array.from(
          { length: Math.floor(cards.length / 2) },
          (_, row) => row * 3 + ((row + 1) % 3) + 1
        ).filter(slot => slot < mobile[mobile.length - 1]);
        const desktopMarkers = [4, 8].filter(
          slot => slot < desktop[desktop.length - 1]
        );
        const precedingCards = yearlyGalleries
          .slice(0, yearIndex)
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
            key={year}
            aria-labelledby={`stories-${year}`}
            className="not-first:mt-12 lg:not-first:mt-24"
          >
            <h2
              id={`stories-${year}`}
              className="mb-4 text-xs font-medium tracking-wide text-muted"
            >
              <time dateTime={year}>{year}</time>
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
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      className="aspect-[4/5] w-full bg-ink/15 object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="aspect-[4/5] bg-ink/15"
                    />
                  )}
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
      })}
    </EditorialPageLayout>
  );
}
