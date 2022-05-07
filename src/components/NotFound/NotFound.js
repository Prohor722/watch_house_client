import React from 'react';
import NotFoundImage from '../../images/error404.gif'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img src={NotFoundImage} className="img-fluid notFound-img" alt="Not Found"/>
        </div>
    );
};

export default NotFound;