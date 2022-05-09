import React, { useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleImage from '../../images/google.png'
import Loading from './Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [errorMsg, setErrorMsg] = useState({});
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(loading){
        <Loading/>
    }
    if(error){
        <div className=''>

        </div>
    }
    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div>
            <button className='social-btn py-2 px-5 rounded' onClick={()=>signInWithGoogle()}>
                <img src={GoogleImage} alt="google logo"/>
            </button>
        </div>
    );
};

export default SocialLogin;