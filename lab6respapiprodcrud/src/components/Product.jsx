// src/components/Product.js
import React, { useState } from 'react';
// import axios from 'axios';

function Product({ product, onBack }) {
  const [productData, setProductData] = useState(product);

  const handleSave = () => {
    fetch(`http://localhost:5000/products/${productData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product updated:', data);
        onBack();
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/products/${productData.id}`, {
      method: 'DELETE'
    })
      .then(() => {
        console.log('Product deleted');
        onBack();
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div>
      <h2>{productData.name}</h2>
      <p><strong>Description:</strong> <input type="text" name="description" value={productData.description} onChange={handleChange} /></p>
      <p><strong>Price:</strong> <input type="text" name="price" value={productData.price} onChange={handleChange} /></p>
      <p><strong>Stock:</strong> <input type="number" name="stock" value={productData.stock} onChange={handleChange} /></p>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete Product</button>
      <button onClick={onBack}>Back to list</button>
    </div>
  );
}

export default Product;
