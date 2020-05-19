import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from 'firebase/firebase.utils';

import './App.scss';

import routes from 'constants/routes';

import Header from 'components/shared/Header';
import Home from 'components/Home';
import Shop from 'components/Shop';
import Auth from 'components/Auth';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubcribeFromAuth = null;
    unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubcribeFromAuth();
    }
  }, []);
  console.log(currentUser);
  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path={routes.home.route} component={Home} />
        <Route exact path={routes.shop.route} component={Shop} />
        <Route exact path={routes.auth.route} component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
