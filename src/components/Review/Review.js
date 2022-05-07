import React from 'react';
import './Review.css'

const Review = ({userReview}) => {
    const { name, img, review, rating} = userReview;

    return (
        <div className='user-review mx-3 p-5 mt-3'>
            <img src={img} className="rounded-circle" alt='user'></img>
            <div className='mt-3'>
                <h5>{name}</h5>
                <div>
                    <p>Rating: {rating}</p>
                </div>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Review;