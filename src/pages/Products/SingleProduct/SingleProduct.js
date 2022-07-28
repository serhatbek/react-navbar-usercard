import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './SingleProduct.scss';

const productsData = 'https://fakestoreapi.com/products';

const SingleProduct = () => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios(productsData);
    const data = await response.data;

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const product = products.find(
    (product) => parseInt(productId) === product.id
  );
  // const { image, title, desc, category, price } = product;

  return (
    <div className='container'>
      <div className='single-product'>
        {product ? (
          <article className='product'>
            <figure>
              <img src={product.image} alt={product.title} />
            </figure>
            <div>
              <span>{product.title}</span>
              <span>{product.description}</span>
              <span>Category: {product.category}</span>
              <span>Price: {product.price}</span>
              <span>Rate: {product.rating.rate}</span>
            </div>
          </article>
        ) : (
          'sorry, but no product'
        )}

        <Link to='/products'>Bact to products</Link>
      </div>
    </div>
  );
};

export default SingleProduct;
