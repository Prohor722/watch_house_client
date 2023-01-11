import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../../images/banner.png";
import Product from "../Product/Product";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.css";
import Review from "../Review/Review";
import Loading from "../Shared/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [refresh , setRefresh] = useState(false);
  const numberOfProducts = 6;
  const numberOfReviews = 3;

  useEffect(() => {
    fetch(
      `https://watch-house-server.onrender.com/products?size=${numberOfProducts}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));

    fetch(
      `https://watch-house-server.onrender.com/reviews?size=${numberOfReviews}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [refresh]);

  console.log('products: ',products);
  console.log('reviews: ',reviews);

  
  if( !products.length || !reviews.length ){ return <Loading/>}

  return (
    <div>
      {/* Banner Section  */}
      <div className="row g-0">
        <div className="col-md-6 m-auto">
          <h1 className="banner-text">Watch House</h1>
          <h4 className="text-secondary">Find your style</h4>
        </div>
        <div className="col-md-6 g-0">
          <img className="img-fluid banner-img" src={Banner} alt="" />
        </div>
      </div>

      {/* Inventory Section  */}
      <div className="inventory-section my-5">
        <div className="inventory-title mb-5">
          <div className="line m-auto"></div>
          <h1 className="m-auto">Our Inventory</h1>
          <div className="line my-auto"></div>
        </div>

        <div className="row row-cols-lg-4 row-cols-md-3 g-0 d-flex justify-content-center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <div className="mt-3">
          <Link to="/manageInventories" className="link">
            See All
          </Link>
          <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </div>
      </div>

      {/* Customer Review  */}
      <div className="review-section mt-5">
        <div className="inventory-title mb-3">
          <div className="line m-auto"></div>
          <h1 className="m-auto">Customer Review</h1>
          <div className="line my-auto"></div>
        </div>

        <div className="row row-cols-lg-4 row-cols-md-3 g-0 d-flex justify-content-center mt-2 mb-5">
          {reviews.map((review) => (
            <Review key={review._id} userReview={review}></Review>
          ))}
        </div>
        <div className="mt-2">
          <Link to="/review" className="link">
            See All
          </Link>
          <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </div>
      </div>

      <div className="services mt-5">
        <h1 className="my-3">Our Services</h1>
            <div className="row row-cols-lg-4 row-cols-md-3 g-0 d-flex justify-content-center">
                <div className="p-3 m-3 d-flex flex-column justify-content-center align-items-center shadow">
                    <h3 className="mt-2 mb-3">Return & Refund</h3>
                    <p>We receive return return within 30days and refund takes 7days(any kind of damage will not apply).</p>
                </div>
                <div className="p-5 m-3 d-flex flex-column justify-content-center align-items-center shadow">
                    <h3 className="mt-2 mb-3">Support</h3>
                    <p>We provide support free withing the warranty period. Non warranty products have 6months service warranty.</p>
                </div>
                <div className="p-5 m-3 d-flex flex-column justify-content-center align-items-center shadow">
                    <h3 className="mt-2 mb-3">Payment</h3>
                    <p>We receive online banking, card and other payment services are available.</p>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Home;
