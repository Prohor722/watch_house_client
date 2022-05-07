import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    return (
        <div>
            <div className='row g-0'>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Register New Account</h1>
                <form className='mx-auto mb-3'>
                    <div className="mb-3">
                        <input type="text" className="form-control"placeholder='Enter Your Name' required/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder='Enter Your Mail Address' required/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Enter Your Password' required/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Confirm Your Password' required/>
                    </div>

                    <button type="submit" className="btn btn-dark">Register</button>
                </form>
                <p>Or, sign up using google account.</p>
                <SocialLogin/>
                <div className='d-flex justify-content-center mt-2'>
                    <p>Already have an account?</p><Link to="/login" className=' register-link text-success text-decoration-none ms-2'>Login Here</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Register;