//adding new products:

import React, { useState } from "react";

function ProductForm({ onAddProduct, onCancel }) {
    const [newProduct, setNewProduct] = useState({
        name: '',
        description: '',
        price: '',
        stock: ''
    });

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setNewProduct(prev => ({
            ...prevState,
            [name]:value
        }));
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://localhost:5000/products',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(newProduct)
        })
        .then(response=>response.json())
        .then(data =>{
            console.log('Product added:',data);
            onAddProduct(data);
        })
        .catch(error =>console.error('Error adding product:',error));
    };

    return(
        <div className="form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={newProduct.name} onChange={handleChange} required/>
                </div>

                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={newProduct.description} onChange={handleChange} required/>
                </div>
                  <div>
                    <label>Price:</label>
                    <input type="text" name="price" value={newProduct.price} onChange={handleChange} required/>
                </div>
                 <div>
                    <label>Stock:</label>
                    <input type="text" name="stock" value={newProduct.stock} onChange={handleChange} required/>
                </div>

                <button type="submit">Add Product</button>
                 <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    )
}

export default ProductForm;