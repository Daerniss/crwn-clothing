import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../constants/routes';

import './App.scss';

import Home from '../Home';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={routes.home.route} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
