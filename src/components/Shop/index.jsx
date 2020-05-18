import React, { useState } from 'react';

import SHOP_DATA from '../../constants/shopData';

import CollectionPreview from 'components/shared/CollectionPreview';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);

  return(
    <div className="shop">
      {collections.map(({ id, ...props}) => (
        <CollectionPreview key={id} {...props} />
      ))}
    </div>
  );
}

export default Shop;
