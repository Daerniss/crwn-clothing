import React from 'react';

import './CollectionPreview.scss';

import CollectionItem from 'components/shared/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return(
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .slice(0, 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
        ))}
      </div>
    </div>
  )
};

export default CollectionPreview;