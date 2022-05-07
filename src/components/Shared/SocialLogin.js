import React from 'react';
import GoogleImage from '../../images/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div>
            <button className='social-btn py-2 px-5 rounded'>
                <img src={GoogleImage} alt="google logo"/>
            </button>
        </div>
    );
};

export default SocialLogin;