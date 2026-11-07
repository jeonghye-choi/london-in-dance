import { Route, Switch } from 'wouter';
import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

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
      <Router />
      {pageLoaded && <Analytics />}
    </ErrorBoundary>
  );
}
