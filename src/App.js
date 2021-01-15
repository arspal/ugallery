import React from 'react';
import './App.scss';

import images from './test-data.json';

export default function App() {
  return (
    <div className="ugallery">
      <header className="ugallery__header"><h1>Unsplash Gallery</h1></header>
      <main className="ugallery_content">
        <ul>
          {images.map(() => <li>test-test</li>)}
        </ul>
        Photos
      </main>
    </div>
  );
}
