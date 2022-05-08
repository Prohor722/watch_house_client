import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from '../Shared/SocialLogin';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState({});
    const [cpass, setCPass] = useState('');
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword,user, loading, error,] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: "true"});

    if(loading){
        return <Loading/>
    }
    if(user){
        navigate('/login');
    }

    const handleRegister = (e)=>{
        e.preventDefault();
        setErrorMsg({});
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        setCPass(e.target.cpass.value);

        const name = e.target.name.value;
        const allError = {};

        // Error Checking 
        if(!name || name.length<3){
            allError.name = "Please insert a valid name.";
        }
        if(!e.target.email.value){
            allError.email = "Please insert a email address.";
        }
        if(password.length<3){
            allError.password = "Please enter a proper password.";
        }
        if(password !== cpass){
            allError.password = "Your password did not match !!";
        }
        
        setErrorMsg(allError);
        
        if(errorMsg.name || errorMsg.email || errorMsg.password){
            console.log("inside");
            console.log("email:",email,", pass:",password,", cpass:", cpass);
            console.log(errorMsg);
            return;
        }
        createUserWithEmailAndPassword(email,password);

        if(error){
            const firebaseError = error.message;
            setErrorMsg({firebaseError});
        }
    }

    return (
        <div>
            <div className='row g-0'>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Register New Account</h1>
                <form className='mx-auto mb-3' onSubmit={handleRegister}>
                    <div className="mb-3">
                        <input type="text" name="name" className="form-control"placeholder='Enter Your Name' required/>
                        {errorMsg.name && <p className='text-danger'>{errorMsg.name}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="email" name="email" className="form-control" placeholder='Enter Your Mail Address' required/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                        {errorMsg.email && <p className='text-danger'>{errorMsg.email}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="password" name="password" className="form-control" placeholder='Enter Your Password' required/>
                        {errorMsg.password && <p className='text-danger'>{errorMsg.password}</p>}
                    </div>
                    <div className="mb-3">
                        <input type="password" name="cpass" className="form-control" placeholder='Confirm Your Password' required/>
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