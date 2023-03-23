import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function ProductItemSmall({ product }) {
  return (
    <>
      <div>
        <div>Released: {product.createdAt}</div>
        <Typography variant="h5" component="h3">
          <Link to={`/products/${product.id}`}>{product.title}</Link>
        </Typography>
        <img alt={product.title} height="50" width="50" src={product.imageUrl[0]} />
        <p>{product.description}</p>
        <div>
        <p>Price: {product.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductItemSmall;
