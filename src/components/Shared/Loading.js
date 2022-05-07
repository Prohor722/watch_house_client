import React from 'react';
import LoadingImage from '../../images/loading.gif'
import './Loading.css'

const Loading = () => {
    return (
        <div className='d-flex align-items-center justify-content-center loading'>
            <img src={LoadingImage} alt="Loading.." 
            className='img-fluid loading-img'/>
        </div>
    );
};

export default Loading;