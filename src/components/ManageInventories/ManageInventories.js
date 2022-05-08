import React, { useState, useEffect } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ManageInventories.css'
import { useNavigate } from "react-router-dom";

const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fathomless-dawn-99199.herokuapp.com/products",{
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const details=(id)=>{
    navigate(`/product/${id}`)
  }

  const productDelete = (id) =>{

        const proceed = window.confirm("Are you sure?");
        if(proceed){
            const url = `https://fathomless-dawn-99199.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                const remaning = products.filter(product=>id!==product._id);
                setProducts(remaning);
            })
        }
  }

  return (
    <div>
      <h1 className="mt-5 mb-3">Manage inventory</h1>
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

export default ManageInventories;
