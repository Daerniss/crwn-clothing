import React from 'react';
import classnames from 'classnames';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div
      
      className={classnames('menu-item', {
        [size]: size,
      })}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="content">
        <h2 className="title">{title.toUpperCase()}</h2>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
