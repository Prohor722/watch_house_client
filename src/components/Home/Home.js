import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../images/banner.png'
import Product from '../Product/Product';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Home.css'
import Review from '../Review/Review';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [reviews , setReviews] = useState([]);
    const numberOfProducts = 6;
    const numberOfReviews = 3;

    useEffect(()=>{
        fetch(`http://localhost:5000/products?size=${numberOfProducts}`)
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        fetch(`http://localhost:5000/products?size=${numberOfReviews}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    // const products = [
    //     {
    //         "name":"Louis Mornaud ST02",
    //         "category":"Sports Watch",
    //         "description":"Sporty looking watch for tracking or sporty look.",
    //         "belt":"Gray Cotton",
    //         "img":"https://i.ibb.co/KrXhPK3/louis-mornaud-2-ANGTzt4-VDY-unsplash.jpg",
    //         "price": 250,
    //         "quantity": 10,
    //         "supplierName":"Louis Mornaud America"
    //     },
    //     {
    //         "name":"Louis Mornaud CS03",
    //         "category":"Casual Watch",
    //         "description":"Casual Watch for regular life for teens, party.",
    //         "belt":"Orange Silicon",
    //         "img":"https://i.ibb.co/JqJK3QN/louis-mornaud-7-ZG3-Yj5-AML0-unsplash.jpg",
    //         "price": 150,
    //         "quantity": 5,
    //         "supplierName":"Louis Mornaud America"
    //     },
    //     {
    //         "name":"Louis Mornaud Classic-07",
    //         "category":"Semi Formal Watch",
    //         "description":"Semi formal, good for all programs. Gives a classic look to a man",
    //         "belt": "Black Lather", 
    //         "img":"https://i.ibb.co/j63Jnn3/louis-mornaud-Tk7m-Hx-JUA6-I-unsplash.jpg",
    //         "price": 320,
    //         "quantity": 12,
    //         "supplierName":"Louis Mornaud America"
    //     },
    //     {
    //         "name":"Oliur Ocla-202",
    //         "category":"Semi Formal",
    //         "description":"Semi formal, good for all programs, occasions.",
    //         "belt":"Black Lather",
    //         "img":"https://i.ibb.co/HV42d9k/oliur-u-Zl3-HF0o-Sik-unsplash.jpg",
    //         "price":180,
    //         "quantity": 17,
    //         "supplierName":"Oliur France"
    //     },
    //     {
    //         "name":"Oris M-024",
    //         "category":"Casual Watch",
    //         "description":"Perfect man wear for mature look, also a good choice in semi formal.",
    //         "belt":"Brown Lather",
    //         "img":"https://i.ibb.co/dBBrD9V/roy-p-Un85-W2-YXPKg-unsplash.jpg",
    //         "price":350,
    //         "quantity":25,
    //         "supplierName":"Oris Germany"
    //     },
    //     {
    //         "name":"JTOVA J-54",
    //         "category":"Leather Watch",
    //         "description":"Black belt formal watch for any formal occasion.",
    //         "belt":"Black Lather",
    //         "img":"https://i.ibb.co/8PLFrWV/joerg-fielenbach-QB0p3-Dnq37-E-unsplash.jpg",
    //         "price": 120,
    //         "quantity": 25,
    //         "supplierName":"Amazon Sells"
    //     }
    // ];

    // const reviews = [
    //     {
    //         "name": "Albert John",
    //         "rating": 4.5,
    //         "review" : "I am a regular client from watch house and more than satisfied. Even i will say you can trust blindly.",
    //         "img": "https://i.ibb.co/p4RmzVQ/luis-villasmil-hh3-Vi-D0r0-Rc-unsplash.jpg"
    //     },
    //     {
    //         "name": "Lily Las",
    //         "rating": 5,
    //         "review" : "I have more then 3years experience with this company and i can suggest to anyone without any doubts.",
    //         "img": "https://i.ibb.co/WDzsLdr/michael-dam-m-EZ3-Po-FGs-k-unsplash.jpg"
    //     },
    //     {
    //         "name": "Ron Lasly",
    //         "rating": 4.8,
    //         "review" : "I am using there service science 2007 and still loved to work with them.",
    //         "img": "https://i.ibb.co/xD2JZnF/midas-hofstra-a6-PMA5-JEm-WE-unsplash.jpg"
    //     }
    // ];
    
    return (
        <div>
            {/* Banner Section  */}
            <div className='row g-0'>
                <div className='col-md-6 m-auto'>
                    <h1 className='banner-text'>Watch House</h1>
                    <h4 className='text-secondary'>Find your style</h4>
                </div>
                <div className='col-md-6 g-0'>
                    <img className='img-fluid banner-img' src={Banner} alt="" srcset="" />
                </div>
            </div>


            {/* Inventory Section  */}
            <div className='inventory-section my-5'>
                <div className="inventory-title mb-5">
                    <div className='line m-auto'></div>
                    <h1 className='m-auto'>Our Inventory</h1>
                    <div className='line my-auto'></div>
                </div>

                <div className='row row-cols-lg-4 row-cols-md-3 g-0 d-flex justify-content-center'>
                    {products.map(product=>
                    <Product key={product._id} product={product}></Product>)
                    }
                </div>
                <div className='mt-3'>
                    <Link to='/manageInventories' className='link'>See All</Link>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-1"/>
                </div>
            </div>
            
            {/* Customer Review  */}
            <div className='review-section mt-5'>
                <div className="inventory-title mb-3">
                    <div className='line m-auto'></div>
                    <h1 className='m-auto'>Customer Review</h1>
                    <div className='line my-auto'></div>
                </div>

                <div className='row row-cols-md-4 g-0 d-flex justify-content-center mt-2 mb-5'>
                    {reviews.map(review=><Review key={review._id} userReview={review}></Review>)
                    }
                </div>
                <div className='mt-2'>
                    <Link to='/review' className='link'>See All</Link>
                    <FontAwesomeIcon icon={faArrowRight} className="ms-1"/>
                </div>
            </div>
        </div>
    );
};

export default Home;