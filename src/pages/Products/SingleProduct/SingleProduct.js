import { Link, useParams } from 'react-router-dom';
import './SingleProduct.scss';

const products = 'https://fakestoreapi.com/products';

const SingleProduct = () => {
  const { productId } = useParams();
  return (
    <div className='container'>
      <div className='single-product'>
        <h2>{productId}</h2>
        <Link to='/products'>Bact to products</Link>
      </div>
    </div>
  );
};

export default SingleProduct;
