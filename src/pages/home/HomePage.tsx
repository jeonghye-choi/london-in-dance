import type { ReactNode } from 'react';

type HomePageProps = {
  navigation: ReactNode;
};

export default function HomePage({ navigation }: HomePageProps) {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-[90rem] flex-col px-5 pb-5 pt-5 max-lg:[@media(max-height:42.5rem)]:pt-3 max-lg:[@media(max-height:42.5rem)]:pb-3 lg:block lg:min-h-0 lg:pb-8 md:px-[clamp(1.25rem,5.56vw,5rem)] md:pt-[clamp(1.5rem,9vw,8rem)]">
      <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
        <p className="text-sm md:text-base">Art is more than what we see.</p>
        {navigation}
      </header>

      <div className="mt-4 grid flex-1 grid-cols-2 grid-rows-[auto_clamp(8rem,34svh,20rem)_auto_minmax(0,1fr)_auto] gap-x-2 gap-y-3 max-lg:[@media(max-height:42.5rem)]:mt-2 max-lg:[@media(max-height:42.5rem)]:gap-y-2 max-lg:[@media(max-height:42.5rem)]:grid-rows-[minmax(7rem,1fr)_auto_auto] lg:mt-8 lg:grid-cols-12 lg:grid-rows-none lg:gap-x-6">
        <h1 className="relative z-10 col-span-full text-[clamp(2rem,8vw,4rem)] font-extrabold leading-none max-lg:[@media(max-height:42.5rem)]:col-start-1 max-lg:[@media(max-height:42.5rem)]:row-start-1 max-lg:[@media(max-height:42.5rem)]:self-start lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:text-[clamp(3rem,5.56vw,5rem)] lg:tracking-[0.35em]">
          THE
          <br />
          STORY
          <br />
          BEHIND
        </h1>

        <figure className="relative col-span-full max-lg:[@media(max-height:42.5rem)]:col-start-1 max-lg:[@media(max-height:42.5rem)]:row-start-1 max-lg:[@media(max-height:42.5rem)]:ml-14 max-lg:[@media(max-height:42.5rem)]:mt-5 lg:col-span-9 lg:col-start-4 lg:row-start-1 lg:mt-10">
          <img
            src="/images/home-cover.webp"
            alt="ballet performance cover image"
            className="absolute inset-0 h-full w-full object-cover object-top lg:static lg:object-center lg:aspect-[17/10] lg:h-auto"
          />
        </figure>

        <p className="col-span-full row-start-3 max-lg:[@media(max-height:42.5rem)]:row-start-2 max-w-[36ch] self-end font-light text-xs leading-4 lg:text-sm lg:leading-5 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:self-end">
          Beyond the stage, beyond the frame. A collection of performances,
          exhibitions and creative expressions, exploring the stories that exist
          behind them.
        </p>

        <div className="contents text-xs leading-4 text-muted lg:col-span-8 lg:leading-5 lg:col-start-5 lg:row-start-2 lg:grid lg:grid-cols-2 lg:gap-x-6">
          <span className="row-start-5 max-lg:[@media(max-height:42.5rem)]:row-start-3 self-end lg:row-start-auto lg:text-center">Jeonghye Choi</span>
          <span className="row-start-5 max-lg:[@media(max-height:42.5rem)]:row-start-3 self-end text-right lg:row-start-auto">London, UK</span>
        </div>
      </div>
    </main>
  );
}
