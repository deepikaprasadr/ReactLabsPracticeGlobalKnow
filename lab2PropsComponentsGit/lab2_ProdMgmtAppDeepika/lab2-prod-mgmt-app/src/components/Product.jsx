import React from 'react';


//<Product product onback>
function Product({product,onBack})
{
    return (
    <div>
        <h2>{product.name}</h2>
        <p><strong>Description: </strong>{product.description}</p>
         <p><strong>price: </strong>{product.price}</p>
         <p><strong>stock:</strong>{product.stock}</p>

          <button onClick={onBack}>Back to list</button>
    </div>
);
}

export default Product;