import React from 'react';
import classnames from 'classnames';

import './styles.scss';

export default function SkeletBar({ width, height, className }) {
  return <div className={classnames(['skelet-bar', className])}
              style={{ width: `${width}px`, height: `${height}px` }}/>;
};
