import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const RecProduct = ({ product: { image, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`} className='product-link'>
        <div className="product-card">
          <img 
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default RecProduct;