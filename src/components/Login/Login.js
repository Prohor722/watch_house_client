import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
    return (
        <div className='row g-0'>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Login user</h1>
                <form className='mx-auto my-3'>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Your Mail Address' required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
                    </div>

                    <button type="submit" className="btn btn-dark">Login</button>
                </form>
                <p>Or, sign in using google account.</p>
                <SocialLogin/>
                <div className='d-flex justify-content-center mt-2'>
                    <p>New user?</p><Link to="/register" className='register-link text-danger text-decoration-none ms-2'>Register Here</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;