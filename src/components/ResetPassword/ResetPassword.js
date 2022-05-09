import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const sendingMail = () => toast("Reset is Sending...",{autoClose: 2000});
  const sendingError = () => toast("Please try again...", {type: toast.TYPE.ERROR, autoClose: 2000});

  const handleReset = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);

    sendPasswordResetEmail(email);
  };
  if (sending) {
    console.log(sending);
    sendingMail();
  }
  if (error) {
    console.log(error.message);
    sendingError();
  }

  return (
    <div className="row g-0">
      <div className="col-md-4  mx-auto">
        <ToastContainer />
        <h1 className="my-5">Reset Your Password</h1>
        <form className="mx-auto my-3" onSubmit={handleReset}>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter Your Mail Address"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <button type="submit" className="btn btn-warning">
            Reset
          </button>
        </form>
        <div className="d-flex justify-content-center mt-2"></div>
      </div>
    </div>
  );
};

export default ResetPassword;
