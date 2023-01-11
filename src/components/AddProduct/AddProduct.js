import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [user, loading, error] = useAuthState(auth);
  const notify = () => toast("Product Added!");

  if (loading) {
    return <Loading />;
  }
  if (error) {
    console.log(error.message);
  }

  const addProduct = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const belt = e.target.belt.value;
    const img = e.target.img.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplier = e.target.supplier.value;
    const email = user.email;
    console.log(product);

    const newProduct ={
      name,
      category,
      belt,
      img,
      price,
      description,
      quantity,
      supplierName: supplier,
      email,
    };
    setProduct(newProduct);
    
      const url = "https://watch-house-server.onrender.com/product";
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            notify();
          }
        });
  };
  return (
    <div>
      <div className="col-md-4  mx-auto">
        <ToastContainer/>
        <h1 className="mt-5 mb-3">Add Product</h1>
        <form className="mx-auto my-3 row" onSubmit={addProduct}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name or Brand of the Product"
              required
            />
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="category"
                placeholder="Give a category"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="belt"
                placeholder="What type of belt"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="supplier"
                placeholder="Name of the supplier"
                required
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                name="img"
                placeholder="Give an image link here"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Price of the Product"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                name="quantity"
                placeholder="Quantity of the product"
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <textarea
              type="text"
              className="form-control"
              name="description"
              placeholder="Give a short description"
              required
            />
          </div>

          <button type="submit" className="btn btn-dark">
            Add Product <FontAwesomeIcon icon={faPlusCircle} />
          </button>
        </form>
      </div>
    </div>
  );
};
// supplier
export default AddProduct;
