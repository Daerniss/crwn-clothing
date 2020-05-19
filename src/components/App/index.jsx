import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth, createUserProfileDocument } from 'firebase/firebase.utils';

import routes from 'constants/routes';

import Header from 'components/shared/Header';
import Home from 'components/Home';
import Shop from 'components/Shop';
import Auth from 'components/Auth';

import { setCurrentUser } from 'redux/user/user.actions';

import './App.scss';

function App({ currentUser, setCurrentUserF }) {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshop) => {
          setCurrentUserF({
            id: snapshop.id,
            ...snapshop.data(),
          });
        });
      }

      setCurrentUserF(userAuth);
    });
  }, []);

  return (
    <div>
      <>
        <Header />
        <Switch>
          <Route exact path={routes.home.route} component={Home} />
          <Route exact path={routes.shop.route} component={Shop} />
          <Route
            exact
            path={routes.auth.route}
            render={() => (currentUser
              ? (<Redirect to="/" />)
              : (<Auth />))}
          />
        </Switch>
      </>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUserF: (user) => dispatch(setCurrentUser(user)),
});

App.propTypes = {
  setCurrentUserF: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
