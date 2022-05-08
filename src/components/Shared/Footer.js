import React from 'react';
import './Footer.css'
import Logo from '../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='footer bg-light p-5 mt-5'>
            <div className='d-flex align-items-center justify-content-around'>
                <div>
                    <img src={Logo} alt="logo" className='img-fluid footer-logo'/>
                    <h5>Watch House</h5>
                </div>
                <div className='ms-3'>
                    <div className='d-flex flex-md-row flex-column'>
                        <FontAwesomeIcon icon={faPhone} className="mt-1 me-2"></FontAwesomeIcon>
                        <p>24/7 HelpLine Support</p>
                    </div>
                    <div className='d-flex flex-md-row flex-column'>
                        <FontAwesomeIcon icon={faHandshakeSimple} className="mt-1 me-2"></FontAwesomeIcon>
                        <p>24/7 Customer Service</p>
                    </div>
                    <div className='d-flex flex-md-row flex-column'>
                        <FontAwesomeIcon icon={faTruckFast} className="mt-1 me-2"></FontAwesomeIcon>
                        <p>7days delivery or money-back garranty</p>
                    </div>
                </div>
            </div>
            <p className='mt-5'>This Website is Designed & Developed by Prohor Banik ©2025</p>
        </div>
    );
};

export default Footer;