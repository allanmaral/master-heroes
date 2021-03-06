import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Game from './pages/Game';
import Results from './pages/Results';

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/game" component={Game} />
        <Route path="/results" component={Results} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
