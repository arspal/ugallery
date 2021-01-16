import React from 'react';
import classnames from 'classnames';
import { Blurhash } from 'react-blurhash';
import './styles.scss';

export default function LazyImage({ image, className, style, width = 800, quality = 60 }) {
  const ratio = image.height / image.width * 100;

  return (
    <figure
      className={classnames(['lazy-image', className])}
      style={{ ...style, ...{ paddingTop: `${ratio}%`, backgroundColor: image.color } }}
    >
      {image.blur_hash && <Blurhash className="lazy-image__blur" hash={image.blur_hash}/>}
      <img
        className="lazy-image__picture"
        sizes="(max-width: 767px) 100vw, (max-width: 432px) 400px, (max-height: 675px) 400px, (min-aspect-ratio: 4000/5000) calc((calc(100vh - 175px)) * 0.8), calc(100vw - 32px)"
        srcSet={`${image.urls.raw}&auto=format&fit=crop&w=400&q=${quality} 400w, ${image.urls.raw}&auto=format&fit=crop&w=700&q=${quality} 700w, ${image.urls.raw}&auto=format&fit=crop&w=800&q=${quality} 800w, ${image.urls.raw}&auto=format&fit=crop&w=1000&q=${quality} 1000w, ${image.urls.raw}&auto=format&fit=crop&w=1300&q=${quality} 1300w, ${image.urls.raw}&auto=format&fit=crop&w=1400&q=${quality} 1400w, ${image.urls.raw}&auto=format&fit=crop&w=1600&q=${quality} 1600w, ${image.urls.raw}&auto=format&fit=crop&w=1900&q=${quality} 1900w, ${image.urls.raw}&auto=format&fit=crop&w=2000&q=${quality} 2000w, ${image.urls.raw}&auto=format&fit=crop&w=2200&q=${quality} 2200w, ${image.urls.raw}&auto=format&fit=crop&w=2500&q=${quality} 2500w, ${image.urls.raw}&auto=format&fit=crop&w=2600&q=${quality} 2600w, ${image.urls.raw}&auto=format&fit=crop&w=2800&q=${quality} 2800w, ${image.urls.raw}&auto=format&fit=crop&w=3100&q=${quality} 3100w, ${image.urls.raw}&auto=format&fit=crop&w=3200&q=${quality} 3200w, ${image.urls.raw}&auto=format&fit=crop&w=3400&q=${quality} 3400w, ${image.urls.raw}&auto=format&fit=crop&w=3700&q=${quality} 3700w, ${image.urls.raw}&auto=format&fit=crop&w=3800&q=${quality} 3800w, ${image.urls.raw}&auto=format&fit=crop&w=4000&q=${quality} 4000w`}
        src={`${image.urls.raw}&auto=format&fit=crop&q=${quality}&w=${width}`}
        alt={image.alt_description}/>
    </figure>
  );
}
