import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if(loading){
        return <Loading/>
    }
    if(user){
        navigate('/');
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);

        signInWithEmailAndPassword(email,password);
        
        if(error){
            setErrorMsg(error.message);
        }
    }
    return (
        <div className='row g-0'>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Login user</h1>
                <form className='mx-auto my-3' onSubmit={handleLogin}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder='Enter Your Mail Address' required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" name='password' placeholder='Enter Your Password' required/>
                    </div>

                    <button type="submit" className="btn btn-dark">Login</button>
                    <Link to="/resetPassword" className='btn btn-warning ms-2'>Reset</Link>
                </form>
                <p>Or, sign in using google account.</p>
                <SocialLogin/>
                <div className='d-flex justify-content-center mt-2'>
                    <p>New user?</p><Link to="/register" className='text-danger text-decoration-none ms-2'>Register Here</Link>
                </div>
                { errorMsg? <p className='alert alert-danger'>{errorMsg}</p> : ""}
            </div>
        </div>
    );
};

export default Login;