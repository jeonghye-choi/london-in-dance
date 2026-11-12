import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import ErrorBoundary from '@/components/ErrorBoundary';
import Router from './router';
import SiteNav from './SiteNav';

export default function App() {
  const [isHome] = useRoute('/');
  const [isStories] = useRoute('/stories');
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setPageLoaded(true);

    if (document.readyState === 'complete') {
      onLoad();
      return;
    }

    window.addEventListener('load', onLoad, { once: true });
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <ErrorBoundary>
      {!isHome && !isStories && (
        <header className="flex justify-end px-5 pt-6 md:px-[clamp(1.25rem,5.56vw,5rem)] md:pt-[clamp(1.5rem,9vw,8rem)]">
          <SiteNav />
        </header>
      )}
      <Router />
      {pageLoaded && <Analytics />}
    </ErrorBoundary>
  );
}
