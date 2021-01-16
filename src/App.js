import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { URL } from 'const';
import './App.scss';

import { AppHeader } from 'components';
import { ImageGallery, ImageDetails } from 'pages';

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
              <Route exact path={URL.PHOTOS}><ImageGallery/></Route>
              <Route path={URL.PHOTO_DETAILS}><ImageDetails/></Route>
              <Redirect exact from={URL.ROOT} to={URL.PHOTOS}/>
            </Switch>
          )}
        </main>
      </div>
    </Router>
  );
}
