import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Products.scss';

const productsData = 'https://fakestoreapi.com/products';

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios(productsData);
    const data = await response.data;

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className='products'>
      <div className='container'>
        <h2>Products</h2>
        <div className='box'>
          {products.map((product) => (
            <article className='product' key={product.id}>
              <figure>
                <img src={product.image} alt={product.title} />
              </figure>
              <div>
                <span>{product.title}</span>
                <span>{product.category}</span>
                <Link to={`/products/${product.id}`}>More Info</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
