import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const AddProduct = () => {
    const addProduct = (e) =>{
        e.preventDefault();

    }
    return (
        <div>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Add Product</h1>
                <form className='mx-auto my-3' onSubmit={addProduct}>
                    <div className="mb-3">
                        <input type="text" className="form-control" name="name" placeholder='Enter Name or Brand of the Product' required/>
                    </div>
                    <div className="mb-3">
                        <textarea type="text" className="form-control" name='category' placeholder='Give a short description' required/>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" name='price' placeholder='Price of the Product' required/>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" name='quantity' placeholder='Quantity of the product' required/>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" name='supplier' placeholder='Name of the supplier' required/>
                    </div>

                    <button type="submit" className="btn btn-dark">Add Product <FontAwesomeIcon icon={faPlusCircle}/></button>
                </form>
            </div>
        </div>
    );
};
// supplier
export default AddProduct;