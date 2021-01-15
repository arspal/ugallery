import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { URL } from 'const';
import './App.scss';

import { AppHeader } from 'components';
import { ImageGallery, ImageDetails } from 'pages';

export default function App() {
  return (
    <Router>
      <div className="ugallery">
        <AppHeader/>
        <main className="ugallery__content">
          <Switch>
            <Route exact path={URL.PHOTOS}><ImageGallery/></Route>
            <Route path={URL.PHOTO_DETAILS}><ImageDetails/></Route>
            <Redirect exact from={URL.ROOT} to={URL.PHOTOS}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
