import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import routes from 'constants/routes';

import Header from 'components/shared/Header';
import Home from 'components/Home';
import Shop from 'components/Shop';
import Auth from 'components/Auth';

import './App.scss';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshop) => {
          setCurrentUser({
            id: snapshop.id,
            ...snapshop.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {isLoading
        ? <span>Loading...</span>
        : (
          <>
            <Header currentUser={currentUser} />
            <Switch>
              <Route exact path={routes.home.route} component={Home} />
              <Route exact path={routes.shop.route} component={Shop} />
              <Route exact path={routes.auth.route} component={Auth} />
            </Switch>
          </>
        )}
    </div>
  );
}

export default App;
