import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Game from './pages/Game';
import LeaderBoard from './pages/Leaderboard';
import Results from './pages/Results';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
        <Route path="/leaderboard" component={LeaderBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
