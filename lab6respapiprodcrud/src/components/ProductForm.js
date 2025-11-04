import React,{useState} from 'react';

function ProductForm({onAddProduct,onCancel}){
    const [newProduct,serNewProduct] =useState({name:'',
        description:'',
        price:'',
        stock:''
    });

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNewProduct(prevState => ({...prevState,[name]:value}));
    };

    const handleSubmit =(e) ={
        e.preventDefault();
        fetch('http://localhost:5000/products',{method:'POST',headers:
            {'Content-Type':'application/json'

            },
            body:JSON.stringify(newProduct)
        }).then(response=>response.json())
        .then(data=>{console.log('Product added:',data);
            onAddProduct(data);')})
            .catch(error=>console.error('Error adding product:',error));
    };
}