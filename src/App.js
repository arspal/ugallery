import React from 'react';
import './App.scss';

import images from './test-data.json';
import {ImageGallery, ImageDetails} from 'pages';

export default function App() {
  return (
    <div className="ugallery">
      <header className="ugallery__header">
        <div className="ugallery__logo">
          <svg className="ugallery__logo-icon" width="32" height="32" viewBox="0 0 32 32">
            <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"/>
          </svg>
          <h1 className="ugallery__logo-title">Unsplash <span
            className="text-normal">Test Gallery</span>
          </h1></div>
      </header>
      <main className="ugallery_content">
        <ImageGallery images={images} />
        {/*<ImageDetails />*/}
      </main>
    </div>
  );
}
