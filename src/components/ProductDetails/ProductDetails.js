import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/product/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[]);
    return (
        <div className='row my-5 g-0 d-flex align-items-center justify-content-center'>
            <div className='col-md-6'>
                <img src={product.img} alt='product' className='img-fluid shadow productDetails-img'/>
            </div>
            <div className='col-md-6'>
                <div className='p-5 me-3 '>
                    <h3>{product.name}</h3>
                    <h5>Price: ${product.price}</h5>
                    <h6>Category: {product.category}</h6>
                    <h6>Quantity: {product.quantity}</h6>
                    <h6>Belt Type: {product.belt}</h6>
                    <h6>Supplier: {product.supplierName}</h6>
                    <p>{product.description}</p>
                    <button className='btn btn-dark'>Add Quantity</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;