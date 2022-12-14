import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Loading from '../Shared/Loading';
import './CustomerReview.css'

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);
    
    useEffect(()=>{
        fetch('https://watchhouseserver-production.up.railway.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[]);

    if( !reviews.length ){ return <Loading/>}

    return (
        <div className='m-3 p-3'>
            <h1>Customer Review</h1>
            <hr className='w-25 mx-auto'/>
            <div className='row row-cols-md-4 g-0 d-flex justify-content-center p-5'>
                {reviews.map(review=><Review key={review._id} userReview={review}/>)}
            </div>
        </div>
    );
};

export default CustomerReview;