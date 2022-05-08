import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleReset = async(e) =>{
        e.preventDefault();
        setEmail(e.target.email.value);

        await sendPasswordResetEmail(email);
    }
    if(sending){
        alert('message sending');
    }
    if(error){
        console.log(error.message);
    }

    return (
            <div className='row g-0'>
            <div className='col-md-4  mx-auto'>
                <h1 className='my-5'>Reset Your Password</h1>
                <form className='mx-auto my-3' onSubmit={handleReset}>
                    <div className="mb-3">
                        <input type="email" className="form-control" name="email" placeholder='Enter Your Mail Address' required/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <button type="submit" className="btn btn-warning">Reset</button>
                </form>
                <div className='d-flex justify-content-center mt-2'>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;