import React from 'react';
import { Blurhash } from 'react-blurhash';
import './styles.scss';

export default function LazyImage({ image, className, style }) {
  const ratio = image.height / image.width * 100;

  return (
    <figure
      className={`lazy-image ${className}`}
      style={{ ...style, ...{ paddingTop: `${ratio}%`, backgroundColor: image.color } }}
    >
      <Blurhash className="lazy-image__blur" hash={image.blur_hash}/>
      <img src={`${image.urls.raw}&auto=format&fit=crop&q=60&w=800`}
           className="lazy-image__picture"
           alt={image.alt_description}/>
    </figure>
  );
}
