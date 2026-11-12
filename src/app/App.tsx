import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Router from './router';
import SiteNav from './SiteNav';

export default function App() {
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
      <SiteNav />
      <Router />
      {pageLoaded && <Analytics />}
    </ErrorBoundary>
  );
}
