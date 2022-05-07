import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name, category, description, belt, img, price, quantity, supplierName} = product;
    return (
        <div className='product d-flex justify-content-center flex-column m-3 shadow'>
            <img className='img-fluid' src={img} alt={name}/>
            <h5>{name}</h5>
            <p className='p-3'>{description}</p>
            <h5>Price: ${price}</h5>
            <h5>Quantity: {quantity}</h5>
            <button className='btn btn-dark update-btn'>Update</button>
        </div>
    );
}

export default Product;