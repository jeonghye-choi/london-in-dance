import type { ReactNode } from 'react';

type EditorialPageLayoutProps = {
  title: string;
  navigation: ReactNode;
  children: ReactNode;
};

export default function EditorialPageLayout({
  title,
  navigation,
  children,
}: EditorialPageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-[90rem] px-5 pb-16 pt-6 md:px-[clamp(1.25rem,5.56vw,5rem)] md:pt-[clamp(1.5rem,9vw,8rem)]">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <h1 className="flex flex-wrap gap-x-3 text-xl font-semibold leading-none tracking-[0.08em] sm:gap-x-5 sm:text-2xl lg:gap-x-16 lg:text-[2rem]">
          {title.split(' ').map((word, index) => (
            <span key={index}>{word} </span>
          ))}
        </h1>
        {navigation}
      </header>
      <div className="mt-16 lg:mt-32">{children}</div>
    </main>
  );
}
