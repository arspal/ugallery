import React from 'react';
import classnames from 'classnames';

import './styles.scss';

export default function Loader({ className }) {
  return (
    <div className={classnames(['loader', className])}>
      <div className="loader__item"/>
      <div className="loader__item"/>
    </div>
  );
}
