import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import MainView from './views/MainView';
import GameMainView from './games/GameMainView';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/games/:name' component={GameMainView} />
          <Route path='/'>
            <MainView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
