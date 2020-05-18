import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from 'constants/routes';

import './App.scss';

import Header from 'components/shared/Header';
import Home from 'components/Home';
import Shop from 'components/Shop';
import Auth from 'components/Auth';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={routes.home.route} component={Home} />
        <Route exact path={routes.shop.route} component={Shop} />
        <Route exact path={routes.auth.route} component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
