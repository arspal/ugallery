import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { URL } from 'const';
import classNames from 'classnames';

export default function AppHeader() {
  const isDetailsPage = !!useRouteMatch(URL.PHOTO_DETAILS);

  return (
    <header className="ugallery__header">
      <Link to={URL.PHOTOS} className="ugallery__logo">
        <svg className={classNames(
          ['ugallery__logo-icon', isDetailsPage && 'ugallery__logo-icon--back'])}
             width="32" height="32" viewBox="0 0 32 32">
          <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"/>
        </svg>
        <h1 className="ugallery__logo-title">Unsplash <span
          className="text-normal">Test Gallery</span>
        </h1></Link>
    </header>
  );
}
