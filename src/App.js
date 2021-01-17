import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import routes from 'routes';
import { URL } from 'const';

import './App.scss';

import { AppHeader } from 'components';

export default function App() {
  const errorMessage = useSelector(state => state.errors.message);

  return (
    <Router>
      <div className="ugallery">
        <AppHeader/>
        <main className="ugallery__content">
          {errorMessage && <p className="ugallery__error-msg">{errorMessage}</p>}
          {!errorMessage && (
            <Switch>
              {routes.map(({ path, id, exact, Component }) => (
                <Route key={id} path={path} exact={exact}>
                  <React.Suspense fallback={null}>
                    <Component/>
                  </React.Suspense>
                </Route>
              ))}
              <Redirect exact from={URL.ROOT} to={URL.PHOTOS}/>
            </Switch>
          )}
        </main>
      </div>
    </Router>
  );
}
