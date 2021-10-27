import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Search from './pages/search';
import Favorites from './pages/favorites';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
