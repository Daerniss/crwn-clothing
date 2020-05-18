import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import classnames from 'classnames';

import './MenuItem.scss';

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => {
  return (
    <Link
      className={classnames('menu-item', {
        [size]: size,
      })}
      // onClick={() => history.push(`${match.url}${linkUrl}`)}
      to={linkUrl}
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
    </Link>
  );
}

export default withRouter(MenuItem);
