import React,{useState} from 'react';
function Product({product,onBack})
{
const [productData,setProductData] =useState(product);

  const handleSave = () =>{

    fetch(`https://localhost:5000/products/${productData.id}`,
          {method:'PUT',
          headers: {'Content-Type':'application/json'},
          body:JSON.stringify(productData)})
    .then(response =>response.json())
    .then(data =>console.log('Product updated:',data);
         onBack();
  })
  .catch(error=>console.error('Error updating product:',error));
  };

const handleChange =(e) =>{

  const{name,value} = e.target;
  setPRoductData(prevState => ({...prevState,[name]:value}));
};


