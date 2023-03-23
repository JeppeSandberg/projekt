import { useEffect, useState } from 'react';
import { getAll } from '../models/PostModel';
import ProductItemSmall from './ProductItemSmall';

function ProductList({ pathname }) {
  console.log(pathname);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll(pathname).then((products) => setProducts(products));
  }, [pathname]);

  return (
    <ul>
      {products &&
        products.map((product) => {
          return (
            <li key={`productId_${product.id}`}>
              <ProductItemSmall product={product} />
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
