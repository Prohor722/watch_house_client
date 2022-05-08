import { faInfo, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Myitems = () => {
    const [user, loading, error] = useAuthState(auth);
    const [ products ,setProducts ] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/products/?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[user])    

    if(loading){
        return <Loading/>;
    }
    if(error){
        console.log(error.message);
    }

    const details=(id)=>{
        navigate(`/product/${id}`)
      }
    
    const productDelete = (id) =>{
          console.log("product :"+id);
      }

    return (
        <div>
      <h1 className="mt-5 mb-3">My inventory</h1>
      <div className="d-flex me-5 pe-5">
        <button className="btn btn-dark ms-auto" onClick={()=>navigate('/addProduct')}>Add <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          
            { products.map((product) => (
                <tr key={product._id}>

                    <td><img className="img-fluid item-img" src={product.img}
                    alt="product"/></td>
                    
                    <td>{product.name}</td>
                    
                    <td>${product.price}</td>

                    <td>{product.quantity}</td>

                    <td>
                        <button onClick={()=>details(product._id)} className="btn btn-secondary me-2 px-3"><FontAwesomeIcon icon={faInfo}/></button>
                        <button onClick={()=>productDelete(product._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrash}/></button>
                    </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    );
};

export default Myitems;