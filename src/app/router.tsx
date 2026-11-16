import { Route, Switch } from 'wouter';
import HomePage from '@/pages/home/HomePage';
import NotFound from '@/pages/NotFound';
import WhatsOnPage from '@/pages/whats-on/WhatsOnPage';
import StoriesPage from '@/pages/stories/StoriesPage';
import AboutPage from '@/pages/about/AboutPage';
import StoryDetailPage from '@/pages/story-detail/StoryDetailPage';

import SiteNav from './SiteNav';

export default function Router() {
  return (
    <Switch>
      <Route path="/">
        <HomePage navigation={<SiteNav />} />
      </Route>
      <Route path="/whats-on">
        <WhatsOnPage navigation={<SiteNav />} />
      </Route>
      <Route path="/stories">
        <StoriesPage navigation={<SiteNav />} />
      </Route>
      <Route path="/stories/:slug">
        {({ slug }) => <StoryDetailPage slug={slug} navigation={<SiteNav />} />}
      </Route>
      <Route path="/about">
        <AboutPage navigation={<SiteNav />} />
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}
