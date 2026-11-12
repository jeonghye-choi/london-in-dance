import { Route, Switch } from 'wouter';
import HomePage from '@/pages/home/HomePage';
import NotFound from '@/pages/NotFound';
import WhatsOnPage from '@/pages/whats-on/WhatsOnPage';
import StoriesPage from '@/pages/stories/StoriesPage';
import AboutPage from '@/pages/about/AboutPage';
import StoryDetailPage from '@/pages/story-detail/StoryDetailPage';

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/whats-on" component={WhatsOnPage} />
      <Route path="/stories" component={StoriesPage} />
      <Route path="/stories/:slug">
        {({ slug }) => <StoryDetailPage slug={slug} />}
      </Route>
      <Route path="/about" component={AboutPage} />
      <Route component={NotFound} />
    </Switch>
  );
}
