import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import ProductList from './ProductList';

const Dashboard1 = () => {
  
  const [allProducts, setAllProducts] = useState([]);


  let fetchAllProducts = async () => {
    let res = await axios.get('https://fakestoreapi.com/products');
    setAllProducts(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);


  let deleteProduct = (productId) => {
    console.log(productId);
  }

  return (
    <div>
      <h1>Product Home</h1>
      <div>
        {
          allProducts.map((elem) => {
            return <ProductList deleteProduct={deleteProduct} key={elem.id} product={elem} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard1