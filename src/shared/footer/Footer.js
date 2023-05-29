import React from 'react';

import Logo from '../../assets/images/logo.png';
import Visa from '../../assets/icons/visa.svg';
import Mir from '../../assets/icons/mir.svg';
import { FaCcMastercard } from "react-icons/fa";

import './Footer.css';
function Footer(props) {
    return (
        <div className='footer-container'>
            <div className="footer-wrapper">
                <img className='footer-logo' src={Logo} alt="logo" />
                <p className='footer-item'>Политика конфиденциальности</p>
                <div className="footer-cards-wrapper">
                    <img src={Visa} alt="visa" />
                    <img src={Mir} alt="mir" />
                    <FaCcMastercard className="footer-card-master"/>
                </div>
                <p className='footer-item'>&copy; Copyright 2018, Example Corporation. All rights reserved.</p>
            </div>

        </div>
    );
}

export default Footer;