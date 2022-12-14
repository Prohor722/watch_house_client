import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import './ProductDetails.css'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [qunt, setQuant] = useState(0);

    useEffect(()=>{
        fetch(`https://watchhouseserver-production.up.railway.app/product/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data);
        })
    },[qunt]);

    if( !product._id ){ return <Loading/>}

    const quantityUpdate = (e) =>{
        e.preventDefault();

        const addedQuantity = parseInt(e.target.quantity.value);
        if(addedQuantity<1 || !addedQuantity){
            return;
        }
        const quantity = parseInt(product.quantity)+addedQuantity;

        const url =`https://watchhouseserver-production.up.railway.app/product/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
        .then(res=>res.json())
        .then(data=>{
            const newProductData = product;
            newProductData.quantity = quantity;
            setProduct(newProductData);
            setQuant(quantity);
        })
        
    }

    const deliveredProduct = (e) =>{
        const quantity = parseInt(product.quantity)-1;
        if(quantity<1){
            return;
        }
        
        const url =`https://watchhouseserver-production.up.railway.app/product/${id}`;
        fetch(url,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({ quantity })
        })
        .then(res=>res.json())
        .then(data=>{
            const newProductData = product;
            newProductData.quantity = quantity;
            setProduct(newProductData);
            setQuant(quantity);
        })
        
    }

    
    return (
        <div className='row my-5 pb-5 g-0 d-flex align-items-center justify-content-center'>
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

                    <div className='d-flex justify-content-center'>
                            <form onSubmit={quantityUpdate} className="d-flex justify-content-center align-tems-center m-2">
                            <input type="number" name="quantity" className="quantity-input"/>
                            <button className='btn btn-dark'>Add Quantity</button>
                            </form>
                        <button onClick={deliveredProduct} className='btn btn-secondary ms-3 my-2'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;