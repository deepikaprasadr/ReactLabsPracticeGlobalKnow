// src/components/ProductList.js
import React, { useEffect, useState } from 'react';

function ProductList({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => onSelectProduct(product)}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
