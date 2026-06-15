import { Route, Switch } from 'wouter';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return <Router />;
}
